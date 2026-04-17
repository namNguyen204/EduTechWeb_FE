import React, { JSX, useState } from "react";
import { subjectsService } from "../services";
import { uploadsService } from "../services";
import "../styles/pages/TeacherCoursePage.scss";

export function SubjectCreatePage(): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    subfolder: "subjects",
  });
  const [iconFile, setIconFile] = useState<File | null>(null);
  const [iconPreview, setIconPreview] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIconFile(file);
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setIconPreview(reader.result as string);
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
      if (!formData.name.trim()) {
        setError("Subject name is required");
        return;
      }

      if (!iconFile) {
        setError("Icon file is required");
        return;
      }

      // Step 1: Upload icon file
      const uploadedFile = await uploadsService.uploadFile(
        iconFile,
        formData.subfolder,
      );

      // Step 2: Create subject with uploaded file data
      await subjectsService.create({
        name: formData.name,
        iconUrl: {
          publicId: uploadedFile.publicId,
          url: uploadedFile.url,
        },
      });

      setSuccess(true);
      setFormData({ name: "", subfolder: "subjects" });
      setIconFile(null);
      setIconPreview("");

      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = "/teacher/subjects";
      }, 2000);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to create subject";
      setError(message);
      console.error("Create subject error:", err);
    } finally {
      setIsLoading(false);
    }
  };

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
          <a href="/teacher/subjects" className="active">
            Subjects & Courses
          </a>
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
            <a href="/teacher/subjects" className="back-btn">
              ← Back to Subjects
            </a>
          </div>
          <div className="lp-topbar-center">
            <h1>Create New Subject</h1>
          </div>
          <div className="lp-actions">
            <span>🔔</span>
          </div>
        </header>

        <section className="course-main">
          <div className="course-breadcrumb">
            Subjects &gt; Create Subject
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
                  <p>✅ Subject created successfully! Redirecting...</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="create-form">
                <div className="form-group">
                  <label htmlFor="name">Subject Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter subject name"
                    disabled={isLoading}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subfolder">Upload Subfolder *</label>
                  <input
                    type="text"
                    id="subfolder"
                    name="subfolder"
                    value={formData.subfolder}
                    onChange={handleInputChange}
                    placeholder="e.g., subjects, subjects/math, custom-folder"
                    disabled={isLoading}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="icon">Subject Icon *</label>
                  <div className="file-upload-wrapper">
                    {iconPreview && (
                      <div className="preview">
                        <img src={iconPreview} alt="Preview" />
                      </div>
                    )}
                    <input
                      type="file"
                      id="icon"
                      accept="image/*"
                      onChange={handleFileChange}
                      disabled={isLoading}
                      className="file-input"
                    />
                    <label htmlFor="icon" className="file-label">
                      {iconFile ? `✓ ${iconFile.name}` : "Choose Icon"}
                    </label>
                  </div>
                </div>

                <div className="form-actions">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn btn-primary"
                  >
                    {isLoading ? "Creating..." : "Create Subject"}
                  </button>
                  <a href="/teacher/subjects" className="btn btn-secondary">
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

export default SubjectCreatePage;
