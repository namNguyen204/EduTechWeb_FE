import { apiClient } from "../core/http";

export interface UploadResponse {
  success: boolean;
  data: {
    publicId: string;
    url: string;
    folder: string;
    width: number;
    height: number;
    format: string;
    bytes: number;
  };
  message: string;
  statusCode: number;
}

const UPLOADS_ENDPOINTS = {
  upload: "/uploads",
} as const;

export const uploadsService = {
  async uploadFile(
    file: File,
    subfolder: string,
  ): Promise<UploadResponse["data"]> {
    const formData = new FormData();
    formData.append("file", file);

    const response = await apiClient.post<UploadResponse>(
      `${UPLOADS_ENDPOINTS.upload}?subfolder=${subfolder}`,
      formData,
    );

    return response.data;
  },
};
