export interface IconUrl {
  publicId: string;
  url: string;
}

export interface Subject {
  id: string;
  name: string;
  slug: string;
  iconUrl: IconUrl;
  isDeleted: boolean;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface SubjectsListData {
  items: Subject[];
  total: number;
  page: number;
  limit: number;
  pages: number;
}

export interface SubjectsListResponse {
  success: boolean;
  data: SubjectsListData;
  statusCode: number;
}

export interface SubjectDetailResponse {
  success: boolean;
  data: Subject;
  message: string;
  statusCode: number;
}

// ============================================
// Courses Types
// ============================================

export interface CourseThumbnail {
  publicId: string;
  url: string;
}

export interface Course {
  id: string;
  subjectId: string;
  title: string;
  description: string;
  gradeLevel: string;
  thumbnail: CourseThumbnail;
  status: "draft" | "published" | "archived";
  type: "free" | "premium";
  approveNote: string | null;
  isDeleted: boolean;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CoursesListData {
  items: Course[];
  total: number;
  page: number;
  limit: number;
  pages: number;
}

export interface CoursesListResponse {
  success: boolean;
  data: CoursesListData;
  statusCode: number;
}

export interface CourseDetailResponse {
  success: boolean;
  data: Course;
  message: string;
  statusCode: number;
}

// ============================================
// Chapters Types
// ============================================

export interface Chapter {
  id: string;
  courseId: string;
  title: string;
  description: string;
  orderIndex: number;
  isPublished: boolean;
  isDeleted: boolean;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ChaptersListData {
  data: Chapter[];
  hasNextPage: boolean;
  message: string;
  statusCode: number;
}

export interface ChaptersListResponse {
  success: boolean;
  data: ChaptersListData;
  statusCode: number;
}

export interface ChapterUpdateRequest {
  courseId: string;
  title: string;
  description: string;
  orderIndex: number;
  isPublished: boolean;
}

export interface ChapterUpdateResponse {
  success: boolean;
  data: Chapter;
  message: string;
  statusCode: number;
}

export interface CreateChapterRequest {
  courseId: string;
  title: string;
  description: string;
  orderIndex: number;
}

export interface CreateChapterResponse {
  success: boolean;
  data: Chapter;
  message: string;
  statusCode: number;
}

export interface UpdateCourseRequest {
  title: string;
  description: string;
  thumbnailUrl?: {
    publicId: string;
    url: string;
  };
}

export interface UpdateCourseResponse {
  success: boolean;
  data: Course;
  message: string;
  statusCode: number;
}