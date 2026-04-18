import type { UserRole } from "../types/page";

export interface NavLink {
  label: string;
  href: string;
}

const studentLinks: NavLink[] = [
  { label: "Learning Path", href: "/student/learning-path" },
  { label: "Course", href: "/student/course" },
  { label: "Onboarding", href: "/student/onboarding" },
  { label: "Arena", href: "/student/arena" },
  { label: "Leaderboard", href: "/student/leaderboard" },
  { label: "Messages", href: "/student/messages" },
  { label: "Exam Results", href: "/student/exams" },
  { label: "Profile", href: "/student/profile" },
];

const teacherLinks: NavLink[] = [
  { label: "Learning Path", href: "/teacher/learning-path" },
  { label: "Course", href: "/teacher/subjects" },
  { label: "Onboarding", href: "/teacher/onboarding" },
  { label: "Arena", href: "/teacher/arena" },
  { label: "Leaderboard", href: "/teacher/leaderboard" },
  { label: "Messages", href: "/teacher/messages" },
  { label: "Exam Results", href: "/teacher/exams" },
  { label: "Profile", href: "/teacher/profile" },
];

const parentLinks: NavLink[] = [
  { label: "Parent Portal", href: "/parent" },
  { label: "Messages", href: "/student/messages" },
  { label: "Exam Results", href: "/student/exams" },
];

const adminLinks: NavLink[] = [
  { label: "Content Manager", href: "/content-manager" },
  { label: "Admin Analytics", href: "/admin-analytics" },
  { label: "Messages", href: "/teacher/messages" },
];

export function getRoleNavigation(role: UserRole): NavLink[] {
  if (role === "student") return studentLinks;
  if (role === "teacher") return teacherLinks;
  if (role === "parent") return parentLinks;
  if (role === "admin") return adminLinks;
  return [{ label: "Trang chủ", href: "/" }];
}
