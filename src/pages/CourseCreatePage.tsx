import React, { useState, useEffect } from "react";
import { coursesService } from "../services";
import { uploadsService } from "../services";
import { gradeLevelsService } from "../services/grade-levels.service";
import { subjectsService } from "../services";
import type { Subject } from "../types/response";
import type { GradeLevel } from "../services/grade-levels.service";
import "../styles/pages/TeacherCoursePage.scss";

export function CourseCreatePage(): JSX.Element {
  const [formData, setFormData] = useState({
    subjectId: "",
    title: "",
    description: "",
    gradeLevel: "",
    type: "free" as "free" | "premium",
    status: "draft" as "draft" | "published" | "archived",
    subfolder: "courses",
  });

  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [gradeLevels, setGradeLevels] = useState<GradeLevel[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  // Load subjects and grade levels on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoadingData(true);
        // Load subjects
        const subjectsResponse = await subjectsService.getList({
          page: 1,
          limit: 100,
        });
        setSubjects(subjectsResponse.data.items);

        // Load grade levels
        const gradeLevelsData = await gradeLevelsService.getAll();
        setGradeLevels(gradeLevelsData);
      } catch (err) {
        console.error("Failed to load data:", err);
      } finally {
        setIsLoadingData(false);
      }
    };

    loadData();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailFile(file);
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError(null);

      // Validate form
      if (!formData.subjectId.trim()) {
        setError("Subject is required");
        return;
      }

      if (!formData.title.trim()) {
        setError("Course title is required");
        return;
      }

      if (!formData.description.trim()) {
        setError("Course description is required");
        return;
      }

      if (!formData.gradeLevel.trim()) {
        setError("Grade level is required");
        return;
      }

      if (!thumbnailFile) {
        setError("Thumbnail image is required");
        return;
      }

      // Step 1: Upload thumbnail file
      const uploadedThumbnail = await uploadsService.uploadFile(
        thumbnailFile,
        formData.subfolder,
      );

      // Step 2: Create course with uploaded file data
      await coursesService.create({
        subjectId: formData.subjectId,
        title: formData.title,
        description: formData.description,
        gradeLevel: formData.gradeLevel,
        thumbnailPublicId: uploadedThumbnail.publicId,
        thumbnailUrl: uploadedThumbnail.url,
        type: formData.type,
        status: formData.status,
      });

      setSuccess(true);
      setFormData({
        subjectId: "",
        title: "",
        description: "",
        gradeLevel: "",
        type: "free",
        status: "draft",
        subfolder: "courses",
      });
      setThumbnailFile(null);
      setThumbnailPreview("");

      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = "/teacher/courses";
      }, 2000);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to create course";
      setError(message);
      console.error("Create course error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoadingData) {
    return (
      <div className="lp-page scanner-page">
        <div className="sidebar-overlay"></div>
        <aside className="lp-sidebar">
          <a href="/teacher/home" className="lp-brand">
            <span className="logo-mark" />
            <div>
              <strong>BachKhoaViet</strong>
              <small>AI Educational Platform</small>
            </div>
          </a>
        </aside>

        <main className="lp-main">
          <section className="course-main">
            <div className="loading-container">
              <p>Loading...</p>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="lp-page scanner-page">
      <div className="sidebar-overlay"></div>
      <aside className="lp-sidebar">
        <a href="/teacher/home" className="lp-brand">
          <span className="logo-mark" />
          <div>
            <strong>BachKhoaViet</strong>
            <small>AI Educational Platform</small>
          </div>
        </a>

        <nav className="lp-nav">
          <a href="/teacher/home">My Classes</a>
          <a href="/teacher/subjects">Subjects & Courses</a>
          <a href="/teacher/exams">Quizzes & Tests</a>
          <a href="/teacher/arena">Class Performance</a>
          <a href="/teacher/leaderboard">Analytics Dashboard</a>
          <a href="/teacher/messages">Student Messages</a>
        </nav>

        <a href="/teacher/profile" className="lp-profile-shortcut">
          ⚙ Profile & Settings
        </a>
      </aside>

      <main className="lp-main">
        <header className="lp-topbar">
          <div className="lp-topbar-left">
            <a href="/teacher/courses" className="back-btn">
              ← Back to Courses
            </a>
          </div>
          <div className="lp-topbar-center">
            <h1>Create New Course</h1>
          </div>
          <div className="lp-actions">
            <span>🔔</span>
          </div>
        </header>

        <section className="course-main">
          <div className="course-breadcrumb">
            Courses &gt; Create Course
          </div>

          <div className="subjects-container">
            <div className="form-card">
              {error && (
                <div className="alert alert-danger">
                  <p>❌ {error}</p>
                </div>
              )}

              {success && (
                <div className="alert alert-success">
                  <p>✅ Course created successfully! Redirecting...</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="create-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="subjectId">Subject *</label>
                    <select
                      id="subjectId"
                      name="subjectId"
                      value={formData.subjectId}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className="form-control"
                    >
                      <option value="">Select Subject</option>
                      {subjects.map((subject) => (
                        <option key={subject.id} value={subject.id}>
                          {subject.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="gradeLevel">Grade Level *</label>
                    <select
                      id="gradeLevel"
                      name="gradeLevel"
                      value={formData.gradeLevel}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className="form-control"
                    >
                      <option value="">Select Grade Level</option>
                      {gradeLevels.map((level) => (
                        <option key={level.id} value={level.name}>
                          {level.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="title">Course Title *</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter course title"
                    disabled={isLoading}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Course Description *</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter course description"
                    disabled={isLoading}
                    className="form-control"
                    rows={5}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="type">Course Type</label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className="form-control"
                    >
                      <option value="free">Free</option>
                      <option value="premium">Premium</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className="form-control"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                      <option value="archived">Archived</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subfolder">Upload Subfolder *</label>
                    <input
                      type="text"
                      id="subfolder"
                      name="subfolder"
                      value={formData.subfolder}
                      onChange={handleInputChange}
                      placeholder="e.g., courses, courses/math, custom-folder"
                      disabled={isLoading}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="thumbnail">Course Thumbnail *</label>
                  <div className="file-upload-wrapper">
                    {thumbnailPreview && (
                      <div className="preview">
                        <img src={thumbnailPreview} alt="Preview" />
                      </div>
                    )}
                    <input
                      type="file"
                      id="thumbnail"
                      accept="image/*"
                      onChange={handleFileChange}
                      disabled={isLoading}
                      className="file-input"
                    />
                    <label htmlFor="thumbnail" className="file-label">
                      {thumbnailFile
                        ? `✓ ${thumbnailFile.name}`
                        : "Choose Thumbnail"}
                    </label>
                  </div>
                </div>

                <div className="form-actions">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn btn-primary"
                  >
                    {isLoading ? "Creating..." : "Create Course"}
                  </button>
                  <a href="/teacher/courses" className="btn btn-secondary">
                    Cancel
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CourseCreatePage;
