export interface LoginUser {
  id: string;
  email: string;
  role: "STUDENT" | "TEACHER" | "PARENT" | "ADMIN";
  avatarUrl?: string;
  fullName?: string;
}

export interface LoginResponseData {
  accessToken: string;
  refreshToken: string;
  sessionId: string;
  user: LoginUser;
}

export interface LoginResponse {
  success: boolean;
  data: LoginResponseData;
  message: string;
  statusCode: number;
}
