export { authService } from "./auth.service";
export { studentService } from "./student.service";
export { teacherService } from "./teacher.service";
export type { LoginRequest as LoginPayload } from "../types/request";
export type { LoginResponse as AuthResponse } from "../types/response";
export type {
  LearningPathLesson,
  StudentDashboardSummary,
  StudentLeaderboardRow,
} from "./student.service";
export type {
  TeacherAnalyticsSummary,
  TeacherClassSummary,
} from "./teacher.service";
export type { ApiListResponse, ApiSuccessResponse, PaginationQuery } from "../types/core/formatResponse";
