import { useEffect, useState, type JSX } from "react";
import type { Course } from "../types/response";
import { coursesService } from "../services";
import { CoursesTable } from "../components/teacher/CoursesTable";
import "../styles/pages/TeacherCoursePage.scss";

interface SearchFilters {
  status: string;
  gradeLevel: string;
  subjectId: string;
  sortBy: string;
}

export function TeacherCoursesPage(): JSX.Element {
  // Parse query params from URL
  const getQueryParam = (key: string): string => {
    const params = new URLSearchParams(window.location.search);
    return params.get(key) || "";
  };

  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCourses, setTotalCourses] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [filters, setFilters] = useState<SearchFilters>({
    status: "",
    gradeLevel: "",
    subjectId: getQueryParam("subjectId"),
    sortBy: "createdAt:desc",
  });

  const pageSize = 10;

  // Load courses
  useEffect(() => {
    const loadCourses = async () => {
      try {
        setIsLoading(true);
        const filterObj = {
          status: filters.status ? (filters.status as "draft" | "published" | "archived") : undefined,
          subjectId: filters.subjectId || undefined,
        };

        // Parse sort string into sort array
        const [orderBy, order] = filters.sortBy.split(":");
        const sortArray = [{
          orderBy,
          order: (order as "asc" | "desc") || "desc",
        }];

        const params = {
          page: currentPage,
          limit: pageSize,
          filters: filterObj as any,
          sort: sortArray,
        };

        const response = await coursesService.getMyCourses(params);
        setCourses(response.items);
        setTotalPages(response.pages);
        setTotalCourses(response.total);
        setError(null);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Failed to load courses";
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    loadCourses();
  }, [currentPage, filters]);

  // Search courses
  const handleSearch = async () => {
    if (!searchKeyword.trim()) {
      setCurrentPage(1);
      return;
    }

    try {
      setIsLoading(true);
      const response = await coursesService.searchCourses(searchKeyword, pageSize);
      setCourses(response.items);
      setTotalPages(response.pages);
      setTotalCourses(response.total);
      setCurrentPage(1);
      setError(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Search failed";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewCourse = (courseId: string) => {
    const course = courses.find((c) => c.id === courseId);
    setSelectedCourse(course || null);
    // window.location.href = `/teacher/courses/${courseId}`;
  };

  const handleViewDetails = (courseId: string) => {
    window.location.href = `/teacher/courses/${courseId}`;
  }
  const handleEditCourse = (courseId: string) => {
    window.location.href = `/teacher/courses/${courseId}/edit`;
  };

  const handleDeleteCourse = async (courseId: string) => {
    if (confirm("Are you sure you want to delete this course? This action cannot be undone.")) {
      try {
        // TODO: Implement delete course API endpoint
        console.log("Delete course:", courseId);
        setCourses(courses.filter((c) => c.id !== courseId));
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };

  const handleFilterChange = (
    key: keyof SearchFilters,
    value: string,
  ) => {
    setFilters({ ...filters, [key]: value });
    setCurrentPage(1);
  };

  const resetFilters = () => {
    const currentSubjectId = filters.subjectId; // Preserve subjectId
    setFilters({
      status: "",
      gradeLevel: "",
      subjectId: currentSubjectId, // Keep subjectId
      sortBy: "createdAt:desc",
    });
    setSearchKeyword("");
    setCurrentPage(1);
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
          <a href="/teacher/subjects">Subjects & Courses</a>
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
                placeholder="Search courses..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
            </div>
          </div>
          <div className="lp-actions">
            <button className="scanner active" onClick={() => window.location.href = "/teacher/courses/create"}>
              ➕ Create Course
            </button>
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
             {filters.subjectId && (
              <a href="/teacher/subjects" className="back-btn" style={{ marginRight: "1rem" }}>
                ← Back to Subjects
              </a>
            )}
            <div className="subjects-header">
              <h2>📚 Available Courses</h2>
              <div className="subjects-stats">
                <span>Total: {totalCourses}</span>
                <span>Page: {currentPage} of {totalPages}</span>
              </div>
            </div>

            {/* Search & Filters */}
            <div className="search-bar">
              <input
                type="text"
                className="search-input"
                placeholder="Search courses by title..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
              />
              <button className="btn btn-secondary" onClick={handleSearch}>
                🔍 Search
              </button>
              <button className="btn btn-secondary" onClick={resetFilters}>
                ✕ Clear All
              </button>
            </div>

            <div className="filters-bar">
              <select
                className="form-control"
                value={filters.status}
                onChange={(e) => handleFilterChange("status", e.target.value)}
              >
                <option value="">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>

              <select
                className="form-control"
                value={filters.gradeLevel}
                onChange={(e) => handleFilterChange("gradeLevel", e.target.value)}
              >
                <option value="">All Grade Levels</option>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
                <option value="Grade 3">Grade 3</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12</option>
              </select>

              <select
                className="form-control"
                value={filters.sortBy}
                onChange={(e) => handleFilterChange("sortBy", e.target.value)}
              >
                <option value="createdAt:desc">Newest First</option>
                <option value="createdAt:asc">Oldest First</option>
                <option value="title:asc">Title A-Z</option>
                <option value="title:desc">Title Z-A</option>
              </select>
            </div>

            {/* Courses Table */}
            <CoursesTable
              courses={courses}
              isLoading={isLoading}
              onSelectCourse={handleViewCourse}
              onEditCourse={handleEditCourse}
              onDeleteCourse={handleDeleteCourse}
            />

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  ← Previous
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next →
                </button>
              </div>
            )}
          </div>

          {/* Course Detail Card */}
          {selectedCourse && (
            <div className="subject-detail-card">
              <div className="detail-header">
                <h3>{selectedCourse.title}</h3>
                <button
                  className="close-btn"
                  onClick={() => setSelectedCourse(null)}
                >
                  ✕
                </button>
              </div>
              <div className="detail-content">
                {selectedCourse.thumbnail && typeof selectedCourse.thumbnail === "string" && (
                  <img
                    src={selectedCourse.thumbnail}
                    alt={selectedCourse.title}
                  />
                )}
                <div className="detail-info">
                  <p>
                    <strong>ID:</strong> {selectedCourse.id}
                  </p>
                  <p>
                    <strong>Grade Level:</strong> {selectedCourse.gradeLevel || "N/A"}
                  </p>
                  <p>
                    <strong>Type:</strong>{" "}
                    <span className={`badge badge-${selectedCourse.type === "premium" ? "primary" : "secondary"}`}>
                      {selectedCourse.type}
                    </span>
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span className={`badge badge-${getStatusBadgeClass(selectedCourse.status)}`}>
                      {selectedCourse.status}
                    </span>
                  </p>
                  <p>
                    <strong>Created:</strong>{" "}
                    {new Date(selectedCourse.createdAt).toLocaleString("vi-VN")}
                  </p>
                </div>
                <div className="detail-actions">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleViewDetails(selectedCourse.id)}
                  >
                    👁️ View Details
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      handleEditCourse(selectedCourse.id);
                      setSelectedCourse(null);
                    }}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDeleteCourse(selectedCourse.id);
                      setSelectedCourse(null);
                    }}
                  >
                    🗑️ Delete
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

const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case "published":
      return "success";
    case "draft":
      return "warning";
    case "archived":
      return "danger";
    default:
      return "secondary";
  }
};

export default TeacherCoursesPage;
