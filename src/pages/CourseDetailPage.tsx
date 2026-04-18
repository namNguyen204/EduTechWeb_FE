import { useEffect, useState, type JSX } from "react";
import type { Course, Chapter } from "../types/response";
import { coursesService } from "../services";
import { ChaptersList } from "../components/teacher/ChaptersList";
import { PageContainer } from "../shared/ui/PageContainer";

interface EditingChapter extends Chapter {
  __isNew?: boolean;
}

export function CourseDetailPage(): JSX.Element {
  // Extract courseId from pathname
  const courseId = window.location.pathname.split("/")[3];

  const [course, setCourse] = useState<Course | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingChapters, setIsLoadingChapters] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingChapter, setEditingChapter] = useState<EditingChapter | null>(
    null,
  );
  const [showChapterForm, setShowChapterForm] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

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

  // Load chapters
  useEffect(() => {
    const loadChapters = async () => {
      if (!courseId) return;

      try {
        setIsLoadingChapters(true);
        const response = await coursesService.getChaptersByCourse(courseId);
        setChapters(response.data);
      } catch (err) {
        console.error("Failed to load chapters:", err);
      } finally {
        setIsLoadingChapters(false);
      }
    };

    loadChapters();
  }, [courseId]);

  const handleCreateChapter = () => {
    const newChapter: EditingChapter = {
      id: "",
      courseId: courseId || "",
      title: "",
      description: "",
      orderIndex: chapters.length,
      isPublished: false,
      isDeleted: false,
      deletedAt: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __isNew: true,
    };
    setEditingChapter(newChapter);
    setShowChapterForm(true);
    setFormError(null);
  };

  const handleEditChapter = (chapter: Chapter) => {
    setEditingChapter(chapter);
    setShowChapterForm(true);
    setFormError(null);
  };

  const handleSaveChapter = async () => {
    if (!editingChapter) return;

    try {
      setFormError(null);

      if (!editingChapter.title.trim()) {
        setFormError("Chapter title is required");
        return;
      }

      if (editingChapter.title.trim().length < 5) {
        setFormError("Chapter title must be at least 5 characters");
        return;
      }

      if (!editingChapter.description.trim()) {
        setFormError("Chapter description is required");
        return;
      }

      if (editingChapter.__isNew) {
        // Create new chapter via API
        await coursesService.createChapter({
          courseId: editingChapter.courseId,
          title: editingChapter.title,
          description: editingChapter.description,
          orderIndex: editingChapter.orderIndex,
        });

        // Reload chapters from API
        const response = await coursesService.getChaptersByCourse(editingChapter.courseId);
        setChapters(response.data);
      } else {
        // Update existing chapter
        await coursesService.updateChapter(editingChapter.id, {
          courseId: editingChapter.courseId,
          title: editingChapter.title,
          description: editingChapter.description,
          orderIndex: editingChapter.orderIndex,
          isPublished: editingChapter.isPublished,
        });

        setChapters(
          chapters.map((ch) =>
            ch.id === editingChapter.id
              ? editingChapter
              : ch,
          ),
        );
      }

      setShowChapterForm(false);
      setEditingChapter(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to save chapter";
      setFormError(message);
    }
  };

  const handlePublishChapter = async (id: string) => {
    try {
      if (!courseId) return;
      await coursesService.publishChapter(id, courseId);
      setChapters(
        chapters.map((ch) =>
          ch.id === id ? { ...ch, isPublished: true } : ch,
        ),
      );
    } catch (err) {
      console.error("Failed to publish chapter:", err);
    }
  };

  const handleUnpublishChapter = async (id: string) => {
    try {
      if (!courseId) return;
      await coursesService.unpublishChapter(id, courseId);
      setChapters(
        chapters.map((ch) =>
          ch.id === id ? { ...ch, isPublished: false } : ch,
        ),
      );
    } catch (err) {
      console.error("Failed to unpublish chapter:", err);
    }
  };

  const handleDeleteChapter = async (id: string) => {
    if (confirm("Are you sure you want to delete this chapter?")) {
      try {
        // TODO: Implement delete chapter API call
        setChapters(chapters.filter((ch) => ch.id !== id));
      } catch (err) {
        console.error("Failed to delete chapter:", err);
      }
    }
  };

  if (isLoading) {
    return (
      <PageContainer title="Course Details" subtitle="Loading...">
        <div className="course-detail-loading">
          <p>Loading course...</p>
        </div>
      </PageContainer>
    );
  }

  if (error || !course) {
    return (
      <PageContainer title="Course Details" subtitle="Error">
        <div className="course-detail-error">
          <h3>Error</h3>
          <p>{error || "Course not found"}</p>
          <button className="btn btn-primary" onClick={() => window.history.back()}>
            ← Go Back
          </button>
        </div>
      </PageContainer>
    );
  }

  const publishedChaptersCount = chapters.filter(
    (ch) => ch.isPublished,
  ).length;

  return (
    <PageContainer title={course.title} subtitle="Course Management">
      <div className="course-detail">
        {/* Course Header */}
        <section className="course-header">
          <div className="course-header-content">
            {course.thumbnail && typeof course.thumbnail === "string" && (
              <img
                src={course.thumbnail}
                alt={course.title}
                className="course-thumbnail"
              />
            )}
            <div className="course-info-header">
              <h1>{course.title}</h1>
              <p className="course-description">{course.description}</p>
              <div className="course-meta-badges">
                <span className={`badge badge-${getStatusColor(course.status)}`}>
                  {course.status}
                </span>
                <span
                  className={`badge badge-${course.type === "premium" ? "primary" : "secondary"}`}
                >
                  {course.type}
                </span>
                <span className="badge badge-info">{course.gradeLevel}</span>
              </div>
            </div>
          </div>

          <div className="course-header-actions">
            <button 
              className="btn btn-primary" 
              onClick={() => {
                if (course?.subjectId) {
                  window.location.href = `/teacher/courses?subjectId=${course.subjectId}`;
                } else {
                  window.history.back();
                }
              }}
            >
              ← Back
            </button>
            <button className="btn btn-secondary">✏️ Edit Course</button>
            <button className="btn btn-danger">🗑️ Delete Course</button>
          </div>
        </section>

        {/* Course Statistics */}
        <section className="course-statistics">
          <div className="stat-card">
            <h4>Total Chapters</h4>
            <p className="stat-value">{chapters.length}</p>
          </div>
          <div className="stat-card">
            <h4>Published</h4>
            <p className="stat-value">{publishedChaptersCount}</p>
          </div>
          <div className="stat-card">
            <h4>Drafts</h4>
            <p className="stat-value">{chapters.length - publishedChaptersCount}</p>
          </div>
          <div className="stat-card">
            <h4>Course Status</h4>
            <p className="stat-value">{course.status.toUpperCase()}</p>
          </div>
        </section>

        {/* Chapters Section */}
        <section className="chapters-section">
          <div className="section-header">
            <h2>📚 Chapters ({chapters.length})</h2>
            <button
              className="btn btn-success"
              onClick={handleCreateChapter}
            >
              ➕ Add Chapter
            </button>
          </div>

          <ChaptersList
            chapters={chapters}
            isLoading={isLoadingChapters}
            onEditChapter={handleEditChapter}
            onPublishChapter={handlePublishChapter}
            onUnpublishChapter={handleUnpublishChapter}
            onDeleteChapter={handleDeleteChapter}
          />
        </section>

        {/* Chapter Form Modal */}
        {showChapterForm && editingChapter && (
          <div className="modal-overlay" onClick={() => setShowChapterForm(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>
                  {editingChapter.__isNew ? "Create New Chapter" : "Edit Chapter"}
                </h3>
                <button
                  className="btn-close"
                  onClick={() => setShowChapterForm(false)}
                >
                  ✕
                </button>
              </div>

              {formError && (
                <div className="alert alert-danger">{formError}</div>
              )}

              <div className="modal-body">
                <form className="chapter-form">
                  <div className="form-group">
                    <label htmlFor="title">Chapter Title *</label>
                    <input
                      id="title"
                      type="text"
                      className="form-control"
                      value={editingChapter.title}
                      onChange={(e) =>
                        setEditingChapter({
                          ...editingChapter,
                          title: e.target.value,
                        })
                      }
                      placeholder="Enter chapter title"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      className="form-control"
                      rows={4}
                      value={editingChapter.description}
                      onChange={(e) =>
                        setEditingChapter({
                          ...editingChapter,
                          description: e.target.value,
                        })
                      }
                      placeholder="Enter chapter description"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="orderIndex">Order Index</label>
                    <input
                      id="orderIndex"
                      type="number"
                      className="form-control"
                      value={editingChapter.orderIndex}
                      onChange={(e) =>
                        setEditingChapter({
                          ...editingChapter,
                          orderIndex: parseInt(e.target.value, 10),
                        })
                      }
                      min="0"
                    />
                  </div>

                </form>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowChapterForm(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleSaveChapter}
                >
                  Save Chapter
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageContainer>
  );
}

function getStatusColor(status: string): string {
  const statusMap: Record<string, string> = {
    published: "success",
    draft: "warning",
    archived: "danger",
  };
  return statusMap[status] || "secondary";
}
