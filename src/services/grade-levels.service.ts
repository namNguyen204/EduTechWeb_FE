import { apiClient } from "../core/http";

export interface GradeLevel {
  id: string;
  name: string;
  value: number;
  createdAt: string;
  updatedAt: string;
}

export interface GradeLevelsResponse {
  success: boolean;
  data: GradeLevel[];
  statusCode: number;
}

const GRADE_LEVELS_ENDPOINTS = {
  list: "/grade-levels",
} as const;

export const gradeLevelsService = {
  async getAll(): Promise<GradeLevel[]> {
    const response = await apiClient.get<GradeLevelsResponse>(
      GRADE_LEVELS_ENDPOINTS.list,
    );

    return response.data;
  },
};
