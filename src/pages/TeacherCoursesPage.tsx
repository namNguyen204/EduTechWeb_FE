import { useEffect, useState, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import type { Course } from "../types/response";
import { coursesService } from "../services";
import { CoursesTable } from "../components/teacher/CoursesTable";
import { PageContainer } from "../shared/ui/PageContainer";
import "../styles/pages/TeacherCoursesPage.scss";

interface SearchFilters {
  status: string;
  gradeLevel: string;
  subjectId: string;
  sortBy: string;
}

export function TeacherCoursesPage(): JSX.Element {
  const navigate = useNavigate();
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
    subjectId: "",
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
    navigate(`/teacher/courses/${courseId}`);
  };

  const handleEditCourse = (courseId: string) => {
    navigate(`/teacher/courses/${courseId}/edit`);
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
    setFilters({
      status: "",
      gradeLevel: "",
      subjectId: "",
      sortBy: "createdAt:desc",
    });
    setSearchKeyword("");
    setCurrentPage(1);
  };

  return (
    <PageContainer title="My Courses" subtitle="Manage your courses and chapters">
      <div className="teacher-courses-container">
        <div className="teacher-courses">
          <div className="page-header">
            <div className="header-content">
              <h1>📚 My Courses</h1>
              <p className="header-info">Total: {totalCourses} courses</p>
            </div>
            <button className="btn btn-primary" onClick={() => navigate("/teacher/courses/create")}>
              ➕ Create Course
            </button>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          {/* Search Bar */}
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
            <button className="btn btn-ghost" onClick={resetFilters}>
              ✕ Clear All
            </button>
          </div>

          {/* Filters */}
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
              <option value="Grade 4">Grade 4</option>
              <option value="Grade 5">Grade 5</option>
              <option value="Grade 6">Grade 6</option>
              <option value="Grade 7">Grade 7</option>
              <option value="Grade 8">Grade 8</option>
              <option value="Grade 9">Grade 9</option>
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
          {!isLoading && totalPages > 1 && (
            <div className="pagination">
              <button
                className="btn"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                ← Previous
              </button>
              <span className="pagination-info">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="btn"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next →
              </button>
            </div>
          )}
        </div>

        {/* Detail Panel */}
        {selectedCourse && (
          <div className="course-detail-panel">
            <div className="detail-header">
              <h3>{selectedCourse.title}</h3>
              <button 
                className="btn-close" 
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
                  className="detail-thumbnail"
                />
              )}
              
              <div className="detail-info">
                <div className="info-item">
                  <label>ID:</label>
                  <span className="info-value">{selectedCourse.id}</span>
                </div>
                
                <div className="info-item">
                  <label>Subject:</label>
                  <span className="info-value">{selectedCourse.subjectId || "N/A"}</span>
                </div>
                
                <div className="info-item">
                  <label>Grade Level:</label>
                  <span className="info-value">{selectedCourse.gradeLevel || "N/A"}</span>
                </div>
                
                <div className="info-item">
                  <label>Type:</label>
                  <span className={`badge badge-${selectedCourse.type === "premium" ? "primary" : "secondary"}`}>
                    {selectedCourse.type || "N/A"}
                  </span>
                </div>
                
                <div className="info-item">
                  <label>Status:</label>
                  <span className={`badge badge-${getStatusBadgeClass(selectedCourse.status)}`}>
                    {selectedCourse.status || "N/A"}
                  </span>
                </div>
                
                <div className="info-item">
                  <label>Created:</label>
                  <span className="info-value">
                    {selectedCourse.createdAt 
                      ? new Date(selectedCourse.createdAt).toLocaleString() 
                      : "N/A"}
                  </span>
                </div>
                
                <div className="info-item">
                  <label>Updated:</label>
                  <span className="info-value">
                    {selectedCourse.updatedAt 
                      ? new Date(selectedCourse.updatedAt).toLocaleString() 
                      : "N/A"}
                  </span>
                </div>

                {selectedCourse.description && (
                  <div className="info-item">
                    <label>Description:</label>
                    <p className="info-description">{selectedCourse.description}</p>
                  </div>
                )}
              </div>

              <div className="detail-actions">
                <button 
                  className="btn btn-primary btn-block"
                  onClick={() => handleViewCourse(selectedCourse.id)}
                >
                  👁️ View Details
                </button>
                <button 
                  className="btn btn-secondary btn-block"
                  onClick={() => {
                    handleEditCourse(selectedCourse.id);
                    setSelectedCourse(null);
                  }}
                >
                  ✏️ Edit Course
                </button>
                <button 
                  className="btn btn-danger btn-block"
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
      </div>
    </PageContainer>
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
