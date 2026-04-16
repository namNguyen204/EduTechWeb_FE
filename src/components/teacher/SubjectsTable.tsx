import type { JSX } from "react";
import type { Subject } from "../../types/response";

interface SubjectsTableProps {
  subjects: Subject[];
  isLoading: boolean;
  onSelectSubject: (subject: Subject) => void;
  onDeleteSubject?: (id: string) => void;
}

export function SubjectsTable({
  subjects,
  isLoading,
  onSelectSubject,
  onDeleteSubject,
}: SubjectsTableProps): JSX.Element {
  if (isLoading) {
    return (
      <div className="subjects-table-loading">
        <p>Loading subjects...</p>
      </div>
    );
  }

  if (subjects.length === 0) {
    return (
      <div className="subjects-table-empty">
        <p>No subjects found</p>
      </div>
    );
  }

  return (
    <table className="subjects-table">
      <thead>
        <tr>
          <th>Icon</th>
          <th>Name</th>
          <th>Slug</th>
          <th>Created</th>
          <th>Updated</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {subjects.map((subject) => (
          <tr key={subject.id}>
            <td className="subjects-table__icon">
              {subject.iconUrl ? (
                <img
                  src={subject.iconUrl.url}
                  alt={subject.name}
                  title={subject.name}
                />
              ) : (
                <span className="icon-placeholder">📚</span>
              )}
            </td>
            <td className="subjects-table__name">{subject.name}</td>
            <td className="subjects-table__slug">{subject.slug}</td>
            <td className="subjects-table__date">
              {new Date(subject.createdAt).toLocaleDateString("vi-VN")}
            </td>
            <td className="subjects-table__date">
              {new Date(subject.updatedAt).toLocaleDateString("vi-VN")}
            </td>
            <td className="subjects-table__actions">
              <button
                className="btn btn-sm btn-primary"
                onClick={() => onSelectSubject(subject)}
              >
                View
              </button>
              {onDeleteSubject && (
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDeleteSubject(subject.id)}
                >
                  Delete
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
