import type { JSX } from "react";
import type { Course } from "../../types/response";

interface CoursesTableProps {
  courses: Course[];
  isLoading: boolean;
  onSelectCourse: (id: string) => void;
  onEditCourse?: (id: string) => void;
  onDeleteCourse?: (id: string) => void;
}

export function CoursesTable({
  courses,
  isLoading,
  onSelectCourse,
  onEditCourse,
  onDeleteCourse,
}: CoursesTableProps): JSX.Element {
  if (isLoading) {
    return (
      <div className="courses-table-loading">
        <p>Loading courses...</p>
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="courses-table-empty">
        <p>No courses found</p>
      </div>
    );
  }

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "published":
        return "badge-success";
      case "draft":
        return "badge-warning";
      case "archived":
        return "badge-danger";
      default:
        return "badge-secondary";
    }
  };

  const getTypeBadgeClass = (type: string) => {
    return type === "premium" ? "badge-primary" : "badge-secondary";
  };

  return (
    <table className="courses-table">
      <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Title</th>
          <th>Grade Level</th>
          <th>Type</th>
          <th>Status</th>
          <th>Created</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course.id}>
            <td className="courses-table__thumbnail">
              {course.thumbnail && typeof course.thumbnail === "string" ? (
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  title={course.title}
                />
              ) : (
                <span className="thumbnail-placeholder">🎓</span>
              )}
            </td>
            <td className="courses-table__title">
              <strong>{course.title}</strong>
              <small>{course.description?.substring(0, 50) || "No description"}...</small>
            </td>
            <td className="courses-table__grade">{course.gradeLevel}</td>
            <td className="courses-table__type">
              <span className={`badge ${getTypeBadgeClass(course.type)}`}>
                {course.type === "premium" ? "💎 Premium" : "Free"}
              </span>
            </td>
            <td className="courses-table__status">
              <span className={`badge ${getStatusBadgeClass(course.status)}`}>
                {course.status.toUpperCase()}
              </span>
            </td>
            <td className="courses-table__date">
              {new Date(course.createdAt).toLocaleDateString("vi-VN")}
            </td>
            <td className="courses-table__actions">
              <button
                className="btn btn-sm btn-primary"
                onClick={() => onSelectCourse(course.id)}
              >
                👁️ View
              </button>
              {onEditCourse && (
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => onEditCourse(course.id)}
                >
                  ✏️ Edit
                </button>
              )}
              {onDeleteCourse && (
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDeleteCourse(course.id)}
                >
                  🗑️ Delete
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
