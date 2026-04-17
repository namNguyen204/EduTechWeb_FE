import type { JSX } from "react";
import React from "react";
import { subjectsService } from "../services";
import { SubjectsTable } from "../components/teacher/SubjectsTable";
import type { Subject } from "../types/response";
import "../styles/pages/TeacherCoursePage.scss";

function TeacherSubjectPage(): JSX.Element {
  const [subjects, setSubjects] = React.useState<Subject[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [searchKeyword, setSearchKeyword] = React.useState("");
  const [selectedSubject, setSelectedSubject] = React.useState<Subject | null>(
    null,
  );

  // Fetch subjects
  React.useEffect(() => {
    const fetchSubjects = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const params = {
          page,
          limit: 10,
          ...(searchKeyword && { filters: { name: searchKeyword } }),
        };

        const response = await subjectsService.getList(params);
        setSubjects(response.items);
        setTotalPages(response.pages);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to fetch subjects";
        setError(errorMessage);
        console.error("Fetch subjects error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubjects();
  }, [page, searchKeyword]);

  const handleSelectSubject = (subject: Subject) => {
    setSelectedSubject(subject);
  };

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
    setPage(1);
  };

  const handleViewCourses = (subjectId: string) => {
    window.location.href = `/teacher/courses?subjectId=${subjectId}`;
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

        <article className="lp-upgrade">
          <p>PRO MEMBER</p>
          <h4>Get unlimited AI scans and detailed solutions.</h4>
          <button>Upgrade Now</button>
        </article>
      </aside>

      <main className="lp-main">
        <header className="lp-topbar">
          <div className="lp-topbar-left">
            <button
              className="sidebar-toggle"
              onClick={() => window.toggleSidebar?.()}
            >
              ☰
            </button>
          </div>
          <div className="lp-topbar-center">
            <div className="lp-search">
              <input
                type="text"
                placeholder="Search subjects..."
                value={searchKeyword}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="lp-actions">
            <a href="/teacher/subjects/create" className="scanner active" style={{ textDecoration: "none", cursor: "pointer" }}>
              ➕ Add Subject
            </a>
            <span>🔔</span>
            <a href="/teacher/profile" className="lp-user">
              <div>
                <strong>Nam Nguyen</strong>
                <small>Mathematics Teacher</small>
              </div>
              <div className="avatar">🧑</div>
            </a>
          </div>
        </header>

        <section className="course-main">
          <div className="course-breadcrumb">
            Subjects &gt; Available Courses &gt; Manage Materials
          </div>

          {error && (
            <div className="error-message">
              <p>❌ {error}</p>
            </div>
          )}

          <div className="subjects-container">
            <div className="subjects-header">
              <h2>📚 Available Subjects</h2>
              <div className="subjects-stats">
                <span>Total: {subjects.length}</span>
                <span>Page: {page} of {totalPages}</span>
              </div>
            </div>

            <SubjectsTable
              subjects={subjects}
              isLoading={isLoading}
              onSelectSubject={handleSelectSubject}
            />

            {totalPages > 1 && (
              <div className="pagination">
                <button
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  ← Previous
                </button>
                <span>
                  Page {page} of {totalPages}
                </span>
                <button
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                >
                  Next →
                </button>
              </div>
            )}
          </div>

          {selectedSubject && (
            <div className="subject-detail-card">
              <div className="detail-header">
                <h3>{selectedSubject.name}</h3>
                <button
                  className="close-btn"
                  onClick={() => setSelectedSubject(null)}
                >
                  ✕
                </button>
              </div>
              <div className="detail-content">
                {selectedSubject.iconUrl && (
                  <img
                    src={selectedSubject.iconUrl.url}
                    alt={selectedSubject.name}
                  />
                )}
                <div className="detail-info">
                  <p>
                    <strong>ID:</strong> {selectedSubject.id}
                  </p>
                  <p>
                    <strong>Slug:</strong> {selectedSubject.slug}
                  </p>
                  <p>
                    <strong>Created:</strong>{" "}
                    {new Date(selectedSubject.createdAt).toLocaleString(
                      "vi-VN",
                    )}
                  </p>
                  <p>
                    <strong>Updated:</strong>{" "}
                    {new Date(selectedSubject.updatedAt).toLocaleString(
                      "vi-VN",
                    )}
                  </p>
                </div>
                <div className="detail-actions">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleViewCourses(selectedSubject.id)}
                  >
                    📖 View Courses
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default TeacherSubjectPage;
