import type { JSX } from "react";
import type { Chapter } from "../../types/response";

interface ChaptersListProps {
  chapters: Chapter[];
  isLoading: boolean;
  onEditChapter?: (chapter: Chapter) => void;
  onPublishChapter?: (id: string) => void;
  onUnpublishChapter?: (id: string) => void;
  onDeleteChapter?: (id: string) => void;
}

export function ChaptersList({
  chapters,
  isLoading,
  onEditChapter,
  onPublishChapter,
  onUnpublishChapter,
  onDeleteChapter,
}: ChaptersListProps): JSX.Element {
  if (isLoading) {
    return (
      <div className="chapters-list-loading">
        <p>Loading chapters...</p>
      </div>
    );
  }

  if (chapters.length === 0) {
    return (
      <div className="chapters-list-empty">
        <p>No chapters found</p>
      </div>
    );
  }

  // Sort by orderIndex
  const sortedChapters = [...chapters].sort(
    (a, b) => a.orderIndex - b.orderIndex,
  );

  return (
    <div className="chapters-list">
      {sortedChapters.map((chapter) => (
        <article key={chapter.id} className="chapter-item">
          <div className="chapter-header">
            <div className="chapter-info">
              <h4>{chapter.orderIndex + 1}. {chapter.title}</h4>
              <p>{chapter.description}</p>
            </div>
            <div className="chapter-status">
              {chapter.isPublished ? (
                <span className="badge badge-success">Published ✓</span>
              ) : (
                <span className="badge badge-warning">Draft</span>
              )}
            </div>
          </div>

          <div className="chapter-meta">
            <small>Created: {new Date(chapter.createdAt).toLocaleDateString("vi-VN")}</small>
            <small>Updated: {new Date(chapter.updatedAt).toLocaleDateString("vi-VN")}</small>
          </div>

          <div className="chapter-actions">
            {onEditChapter && (
              <button
                className="btn btn-sm btn-primary"
                onClick={() => onEditChapter(chapter)}
              >
                ✏️ Edit
              </button>
            )}
            {!chapter.isPublished && onPublishChapter && (
              <button
                className="btn btn-sm btn-success"
                onClick={() => onPublishChapter(chapter.id)}
              >
                📢 Publish
              </button>
            )}
            {chapter.isPublished && onUnpublishChapter && (
              <button
                className="btn btn-sm btn-warning"
                onClick={() => onUnpublishChapter(chapter.id)}
              >
                🔒 Unpublish
              </button>
            )}
            {onDeleteChapter && (
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDeleteChapter(chapter.id)}
              >
                🗑️ Delete
              </button>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
