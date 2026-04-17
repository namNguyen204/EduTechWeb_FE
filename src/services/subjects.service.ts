import { apiClient } from "../core/http";
import type {
  Subject,
  SubjectsListResponse,
  SubjectDetailResponse,
} from "../types/response";

interface SubjectsFilterParams {
  name?: string;
  isDeleted?: boolean;
  orderBy?: string;
  order?: "asc" | "desc";
}

interface SubjectsListParams {
  page?: number;
  limit?: number;
  filters?: SubjectsFilterParams;
  sort?: Array<{ orderBy: string; order: "asc" | "desc" }>;
}

export interface CreateSubjectRequest {
  name: string;
  iconUrl: {
    publicId: string;
    url: string;
  };
}

export interface CreateSubjectResponse {
  success: boolean;
  data: Subject;
  message: string;
  statusCode: number;
}

const SUBJECTS_ENDPOINTS = {
  list: "/subjects",
  detail: (id: string) => `/subjects/${id}`,
  create: "/subjects",
} as const;

export const subjectsService = {
  async getList(params: SubjectsListParams = {}) {
    const { page = 1, limit = 10, filters = {}, sort = [] } = params;

    const queryParams: Record<string, any> = {
      page,
      limit,
    };

    // Handle filters
    if (Object.keys(filters).length > 0) {
      queryParams.filters = JSON.stringify(filters);
    }

    // Handle sort
    if (sort.length > 0) {
      queryParams.sort = JSON.stringify(sort);
    }

    const response = await apiClient.get<SubjectsListResponse>(
      SUBJECTS_ENDPOINTS.list,
      { params: queryParams },
    );

    return response.data;
  },

  async getById(id: string): Promise<Subject> {
    const response = await apiClient.get<SubjectDetailResponse>(
      SUBJECTS_ENDPOINTS.detail(id),
    );

    return response.data;
  },

  async search(keyword: string, limit: number = 10) {
    return this.getList({
      page: 1,
      limit,
      filters: { name: keyword },
    });
  },

  async create(data: CreateSubjectRequest): Promise<Subject> {
    const response = await apiClient.post<CreateSubjectResponse>(
      SUBJECTS_ENDPOINTS.create,
      data,
    );

    return response.data;
  },
};
