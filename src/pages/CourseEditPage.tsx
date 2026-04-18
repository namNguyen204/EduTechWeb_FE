import React, { useState, useEffect, JSX } from "react";
import { coursesService } from "../services";
import { uploadsService } from "../services";
import type { Course } from "../types/response";
import "../styles/pages/TeacherCoursePage.scss";

export function CourseEditPage(): JSX.Element {
  // Extract courseId from pathname
  const courseId = window.location.pathname.split("/")[3];

  const [course, setCourse] = useState<Course | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Load course details
  useEffect(() => {
    const loadCourse = async () => {
      if (!courseId) {
        setError("Course ID not found");
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const data = await coursesService.getCourseById(courseId);
        setCourse(data);
        setFormData({
          title: data.title,
          description: data.description,
        });
        // Set thumbnail preview from course
        if (data.thumbnail && typeof data.thumbnail === "object" && "url" in data.thumbnail) {
          setThumbnailPreview(data.thumbnail.url);
        }
        setError(null);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Failed to load course";
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    loadCourse();
  }, [courseId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      setIsSaving(true);
      setError(null);

      // Validate form
      if (!formData.title.trim()) {
        setError("Course title is required");
        return;
      }

      if (formData.title.trim().length < 10) {
        setError("Course title must be at least 10 characters");
        return;
      }

      if (!formData.description.trim()) {
        setError("Course description is required");
        return;
      }

      let updateData: any = {
        title: formData.title,
        description: formData.description,
      };

      // If user selected a new thumbnail, upload it
      if (thumbnailFile) {
        const uploadedThumbnail = await uploadsService.uploadFile(
          thumbnailFile,
          "courses",
        );
        updateData.thumbnailUrl = {
          publicId: uploadedThumbnail.publicId,
          url: uploadedThumbnail.url,
        };
      }

      // Update course
      await coursesService.update(courseId, updateData);

      setSuccess(true);

      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = `/teacher/courses/${courseId}`;
      }, 2000);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to update course";
      setError(message);
      console.error("Update course error:", err);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
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
            <a href={`/teacher/courses/${courseId}`} className="back-btn">
              ← Back to Course
            </a>
          </div>
          <div className="lp-topbar-center">
            <h1>Edit Course</h1>
          </div>
          <div className="lp-actions">
            <span>🔔</span>
          </div>
        </header>

        <section className="course-main">
          <div className="course-breadcrumb">
            Courses &gt; Edit Course
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
                  <p>✅ Course updated successfully! Redirecting...</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="create-form">
                <div className="form-group">
                  <label htmlFor="title">Course Title *</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter course title"
                    disabled={isSaving}
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
                    disabled={isSaving}
                    className="form-control"
                    rows={5}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="thumbnail">Course Thumbnail (Optional)</label>
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
                      disabled={isSaving}
                      className="file-input"
                    />
                    <label htmlFor="thumbnail" className="file-label">
                      {thumbnailFile
                        ? `✓ ${thumbnailFile.name}`
                        : "Change Thumbnail"}
                    </label>
                  </div>
                </div>

                <div className="form-actions">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="btn btn-primary"
                  >
                    {isSaving ? "Saving..." : "Save Changes"}
                  </button>
                  <a href={`/teacher/courses/${courseId}`} className="btn btn-secondary">
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

export default CourseEditPage;
