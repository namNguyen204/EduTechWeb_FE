export interface LoginStudentProfile {
  id: string;
  userId: string;
  fullName: string;
  gender: string;
  dateOfBirth: string;
  schoolName: string;
  gradeLevel: string;
  diamondBalance: number;
  xpTotal: number;
  currentStreak: number;
  createdAt: string;
  updatedAt: string;
}

export interface LoginTeacherProfile {
  id: string;
  userId: string;
  fullName: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginParentProfile {
  id: string;
  userId: string;
  fullName: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginUser {
  id: string;
  email: string;
  role: "STUDENT" | "TEACHER" | "PARENT" | "ADMIN";
  avatarUrl?: string;
  isActive: boolean;
  emailVerificationStatus: string;
  createdAt: string;
  updatedAt: string;
  studentProfile?: LoginStudentProfile | null;
  teacherProfile?: LoginTeacherProfile | null;
  parentProfile?: LoginParentProfile | null;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: LoginUser;
  sessionId: string;
  message: string;
}
