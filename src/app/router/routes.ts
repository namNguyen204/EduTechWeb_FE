import type { RouteMeta } from "../../shared/types/page";

const homeRoute: RouteMeta = {
  kind: "home",
  key: "home",
  title: "BachKhoaViet",
  subtitle: "Nền tảng học tập AI cho học sinh, giáo viên và phụ huynh.",
  role: "public",
  ctaLabel: "Bắt đầu",
  ctaHref: "/login",
};

const authRoute: RouteMeta = {
  kind: "auth",
  key: "auth",
  title: "Đăng nhập hệ thống",
  subtitle: "Truy cập vào dashboard theo đúng vai trò của bạn.",
  role: "public",
  ctaLabel: "Vào trang học sinh",
  ctaHref: "/student",
};

const parentPortalRoute: RouteMeta = {
  kind: "workspace",
  key: "parent-portal",
  title: "Parent Portal",
  subtitle: "Theo dõi tiến độ học tập, báo cáo và hoạt động theo thời gian thực.",
  role: "parent",
  ctaLabel: "Xem báo cáo mới nhất",
  ctaHref: "/parent",
};

const studentLearningPathRoute: RouteMeta = {
  kind: "workspace",
  key: "student-learning-path",
  title: "Learning Path",
  subtitle: "Lộ trình học tập cá nhân hóa, bám sát năng lực và mục tiêu.",
  role: "student",
  ctaLabel: "Tiếp tục bài học",
  ctaHref: "/student/learning-path",
};

const studentCourseRoute: RouteMeta = {
  kind: "workspace",
  key: "student-course",
  title: "Course",
  subtitle: "Nội dung khóa học theo chương, có gợi ý AI và bài luyện tập.",
  role: "student",
  ctaLabel: "Mở bài học hôm nay",
  ctaHref: "/student/course",
};

const studentOnboardingRoute: RouteMeta = {
  kind: "workspace",
  key: "student-onboarding",
  title: "Onboarding",
  subtitle: "Thiết lập hồ sơ ban đầu để cá nhân hóa trải nghiệm học.",
  role: "student",
  ctaLabel: "Hoàn tất onboarding",
  ctaHref: "/student/onboarding",
};

const studentArenaRoute: RouteMeta = {
  kind: "workspace",
  key: "student-arena",
  title: "Arena",
  subtitle: "Đấu trường học thuật với thử thách theo chủ đề và kỹ năng.",
  role: "student",
  ctaLabel: "Bắt đầu thử thách",
  ctaHref: "/student/arena",
};

const studentLeaderboardRoute: RouteMeta = {
  kind: "workspace",
  key: "student-leaderboard",
  title: "Leaderboard",
  subtitle: "Xếp hạng thành tích theo lớp, trường và khu vực.",
  role: "student",
  ctaLabel: "Xem thứ hạng của tôi",
  ctaHref: "/student/leaderboard",
};

const studentMessagesRoute: RouteMeta = {
  kind: "workspace",
  key: "student-messages",
  title: "Messages",
  subtitle: "Tin nhắn học tập giữa học sinh và giáo viên theo từng môn.",
  role: "student",
  ctaLabel: "Mở hội thoại",
  ctaHref: "/student/messages",
};

const studentExamResultsRoute: RouteMeta = {
  kind: "workspace",
  key: "student-exam-results",
  title: "Exam Results",
  subtitle: "Kết quả bài kiểm tra và phân tích điểm mạnh/yếu theo kỹ năng.",
  role: "student",
  ctaLabel: "Xem chi tiết điểm",
  ctaHref: "/student/exams",
};

const studentProfileRoute: RouteMeta = {
  kind: "workspace",
  key: "student-profile",
  title: "Student Profile",
  subtitle: "Thông tin cá nhân, cài đặt học tập và quyền riêng tư tài khoản.",
  role: "student",
  ctaLabel: "Cập nhật hồ sơ",
  ctaHref: "/student/profile",
};

const teacherLearningPathRoute: RouteMeta = {
  kind: "workspace",
  key: "teacher-learning-path",
  title: "Teacher Learning Path",
  subtitle: "Theo dõi lộ trình lớp học và điều chỉnh mục tiêu theo năng lực.",
  role: "teacher",
  ctaLabel: "Kiểm tra tiến độ lớp",
  ctaHref: "/teacher/learning-path",
};

const teacherCourseRoute: RouteMeta = {
  kind: "workspace",
  key: "teacher-course",
  title: "Teacher Course",
  subtitle: "Quản trị nội dung bài giảng, tài nguyên và bài tập.",
  role: "teacher",
  ctaLabel: "Mở quản lý khóa học",
  ctaHref: "/teacher/course",
};

const teacherOnboardingRoute: RouteMeta = {
  kind: "workspace",
  key: "teacher-onboarding",
  title: "Teacher Onboarding",
  subtitle: "Thiết lập lớp học, môn phụ trách và quy trình đánh giá.",
  role: "teacher",
  ctaLabel: "Hoàn tất cấu hình lớp",
  ctaHref: "/teacher/onboarding",
};

const teacherArenaRoute: RouteMeta = {
  kind: "workspace",
  key: "teacher-arena",
  title: "Teacher Arena",
  subtitle: "Tổ chức thử thách kiến thức và theo dõi tương tác học sinh.",
  role: "teacher",
  ctaLabel: "Tạo thử thách mới",
  ctaHref: "/teacher/arena",
};

const teacherLeaderboardRoute: RouteMeta = {
  kind: "workspace",
  key: "teacher-leaderboard",
  title: "Teacher Leaderboard",
  subtitle: "Phân tích bảng xếp hạng theo lớp và tiêu chí năng lực.",
  role: "teacher",
  ctaLabel: "Xem top học sinh",
  ctaHref: "/teacher/leaderboard",
};

const teacherMessagesRoute: RouteMeta = {
  kind: "workspace",
  key: "teacher-messages",
  title: "Teacher Messages",
  subtitle: "Kênh trao đổi giữa giáo viên, học sinh và phụ huynh.",
  role: "teacher",
  ctaLabel: "Mở tin nhắn lớp",
  ctaHref: "/teacher/messages",
};

const teacherExamResultsRoute: RouteMeta = {
  kind: "workspace",
  key: "teacher-exam-results",
  title: "Teacher Exam Results",
  subtitle: "Theo dõi điểm số, phân tích kỹ năng và đề xuất can thiệp học tập.",
  role: "teacher",
  ctaLabel: "Xem phân tích lớp",
  ctaHref: "/teacher/exams",
};

const teacherProfileRoute: RouteMeta = {
  kind: "workspace",
  key: "teacher-profile",
  title: "Teacher Profile",
  subtitle: "Quản lý hồ sơ giáo viên và tùy chỉnh môi trường làm việc.",
  role: "teacher",
  ctaLabel: "Cập nhật hồ sơ",
  ctaHref: "/teacher/profile",
};

const contentManagerRoute: RouteMeta = {
  kind: "workspace",
  key: "content-manager",
  title: "Content Manager",
  subtitle: "Quản lý vòng đời nội dung học tập theo chuẩn biên tập.",
  role: "admin",
  ctaLabel: "Tạo học liệu mới",
  ctaHref: "/content-manager",
};

const adminAnalyticsRoute: RouteMeta = {
  kind: "workspace",
  key: "admin-analytics",
  title: "Admin Analytics",
  subtitle: "Quan sát hệ thống tổng thể với chỉ số vận hành và học tập.",
  role: "admin",
  ctaLabel: "Mở dashboard điều hành",
  ctaHref: "/admin-analytics",
};

export const routeTable: Record<string, RouteMeta> = {
  "/": homeRoute,
  "/login": authRoute,
  "/auth": authRoute,
  "/signup": authRoute,

  "/dashboard": studentLearningPathRoute,
  "/learning-path": studentLearningPathRoute,
  "/course": studentCourseRoute,
  "/onboarding": studentOnboardingRoute,
  "/arena": studentArenaRoute,
  "/leaderboard": studentLeaderboardRoute,
  "/messages": studentMessagesRoute,
  "/exams": studentExamResultsRoute,
  "/exam-results": studentExamResultsRoute,
  "/profile": studentProfileRoute,

  "/student": studentLearningPathRoute,
  "/student/home": studentLearningPathRoute,
  "/student/learning-path": studentLearningPathRoute,
  "/student/course": studentCourseRoute,
  "/student/onboarding": studentOnboardingRoute,
  "/student/arena": studentArenaRoute,
  "/student/leaderboard": studentLeaderboardRoute,
  "/student/messages": studentMessagesRoute,
  "/student/exams": studentExamResultsRoute,
  "/student/profile": studentProfileRoute,

  "/teacher": teacherLearningPathRoute,
  "/teacher/home": teacherLearningPathRoute,
  "/teacher/learning-path": teacherLearningPathRoute,
  "/teacher/course": teacherCourseRoute,
  "/teacher/onboarding": teacherOnboardingRoute,
  "/teacher/arena": teacherArenaRoute,
  "/teacher/leaderboard": teacherLeaderboardRoute,
  "/teacher/messages": teacherMessagesRoute,
  "/teacher/exams": teacherExamResultsRoute,
  "/teacher/profile": teacherProfileRoute,

  "/parent": parentPortalRoute,
  "/content-manager": contentManagerRoute,
  "/admin-analytics": adminAnalyticsRoute,
};
