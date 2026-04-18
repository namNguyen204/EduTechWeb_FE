import { apiClient } from "../core/http";
import type {
  Course,
  CoursesListResponse,
  CourseDetailResponse,
  ChaptersListResponse,
  ChapterUpdateResponse,
  ChapterUpdateRequest,
} from "../types/response";

interface CoursesFilterParams {
  status?: "draft" | "published" | "archived";
  subjectId?: string;
}

interface CoursesListParams {
  page?: number;
  limit?: number;
  filters?: CoursesFilterParams;
  sort?: Array<{ orderBy: string; order: "asc" | "desc" }>;
}

interface ChaptersListParams {
  page?: number;
  limit?: number;
  filters?: { courseId?: string; isPublished?: boolean };
  sort?: Array<{ orderBy: string; order: "asc" | "desc" }>;
}

export interface CreateCourseRequest {
  subjectId: string;
  title: string;
  description: string;
  gradeLevel: string;
  thumbnailPublicId: string;
  thumbnailUrl: string;
  type?: "free" | "premium";
  status?: "draft" | "published" | "archived";
}

export interface CreateCourseResponse {
  success: boolean;
  data: Course;
  message: string;
  statusCode: number;
}

const COURSES_ENDPOINTS = {
  myCourses: "/courses/my-courses",
  list: "/courses",
  detail: (id: string) => `/courses/${id}`,
  chapters: "/chapters",
  updateChapter: (id: string) => `/chapters/${id}`,
  create: "/courses",
} as const;

export const coursesService = {
  // ==================== Courses ====================
  async getMyCourses(params: CoursesListParams = {}) {
    const { page = 1, limit = 10, filters = {}, sort = [] } = params;

    const queryParams: Record<string, any> = {
      page,
      limit,
    };

    if (Object.keys(filters).length > 0) {
      queryParams.filters = JSON.stringify(filters);
    }

    if (sort.length > 0) {
      queryParams.sort = JSON.stringify(sort);
    }

    const response = await apiClient.get<CoursesListResponse>(
      COURSES_ENDPOINTS.myCourses,
      { params: queryParams },
    );

    return response.data;
  },

  async getCourseById(id: string): Promise<Course> {
    const response = await apiClient.get<CourseDetailResponse>(
      COURSES_ENDPOINTS.detail(id),
    );

    return response.data;
  },

  async searchCourses(keyword: string, limit: number = 10) {
    return this.getMyCourses({
      page: 1,
      limit,
      filters: { status: "published" },
    });
  },

  async create(data: CreateCourseRequest): Promise<Course> {
    const response = await apiClient.post<CreateCourseResponse>(
      COURSES_ENDPOINTS.create,
      {
        subjectId: data.subjectId,
        title: data.title,
        description: data.description,
        gradeLevel: data.gradeLevel,
        thumbnail: {
          publicId: data.thumbnailPublicId,
          url: data.thumbnailUrl,
        },
        type: data.type || "free",
        status: data.status || "draft",
      },
    );

    return response.data;
  },

  // ==================== Chapters ====================
  async getChapters(params: ChaptersListParams = {}) {
    const { page = 1, limit = 10, filters = {} } = params;

    const queryParams: Record<string, any> = {
      page,
      limit,
    };

    if (filters.courseId) {
      queryParams.filters = JSON.stringify({
        courseId: filters.courseId,
      });
    }

    const response = await apiClient.get<ChaptersListResponse>(
      COURSES_ENDPOINTS.chapters,
      { params: queryParams },
    );

    return response.data;
  },

  async getChaptersByCourse(courseId: string) {
    return this.getChapters({
      filters: { courseId },
    });
  },

  async updateChapter(
    id: string,
    data: ChapterUpdateRequest,
  ): Promise<void> {
    await apiClient.put(COURSES_ENDPOINTS.updateChapter(id), data);
  },

  async publishChapter(id: string, courseId: string) {
    return this.updateChapter(id, {
      courseId,
      title: "",
      description: "",
      orderIndex: 0,
      isPublished: true,
    });
  },

  async unpublishChapter(id: string, courseId: string) {
    return this.updateChapter(id, {
      courseId,
      title: "",
      description: "",
      orderIndex: 0,
      isPublished: false,
    });
  },
};
