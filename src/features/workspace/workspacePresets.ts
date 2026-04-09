export interface WorkspacePreset {
  badge: string;
  kpiLabel: string;
  kpiValue: string;
  highlights: string[];
  panelTitle: string;
  panelDescription: string;
}

const presets: Record<string, WorkspacePreset> = {
  learning: {
    badge: "Learning Flow",
    kpiLabel: "Progress",
    kpiValue: "78%",
    highlights: ["42 lessons hoàn thành", "Streak 12 ngày", "3 nhiệm vụ hôm nay"],
    panelTitle: "Knowledge Map",
    panelDescription: "Theo dõi lộ trình kiến thức và gợi ý bài tiếp theo theo năng lực hiện tại.",
  },
  course: {
    badge: "Course Studio",
    kpiLabel: "Lessons",
    kpiValue: "24 modules",
    highlights: ["Video + quiz AI", "5 lesson cần review", "2 nội dung mới"],
    panelTitle: "Nội dung khóa học",
    panelDescription: "Quản trị chương học, bài tập và tài nguyên lớp học theo chuẩn thống nhất.",
  },
  onboarding: {
    badge: "Onboarding",
    kpiLabel: "Setup",
    kpiValue: "Step 2/3",
    highlights: ["Chọn cấp độ", "Thiết lập mục tiêu", "Gợi ý lộ trình"],
    panelTitle: "Cá nhân hóa ban đầu",
    panelDescription: "Thu thập thông tin nền để hệ thống AI đề xuất roadmap phù hợp.",
  },
  arena: {
    badge: "Arena Match",
    kpiLabel: "Win Rate",
    kpiValue: "84%",
    highlights: ["3 trận đang chờ", "Top 5 tuần này", "+120 XP hôm nay"],
    panelTitle: "Đấu trường học thuật",
    panelDescription: "Thi đấu theo thời gian thực và theo dõi chỉ số kỹ năng sau mỗi lượt chơi.",
  },
  leaderboard: {
    badge: "Leaderboard",
    kpiLabel: "Rank",
    kpiValue: "#12",
    highlights: ["+4 bậc tuần này", "Top lớp 12A1", "Điểm trung bình 8.6"],
    panelTitle: "Bảng xếp hạng",
    panelDescription: "So sánh tiến độ và thành tích học tập theo lớp, trường và khu vực.",
  },
  messages: {
    badge: "Communication Hub",
    kpiLabel: "Unread",
    kpiValue: "16",
    highlights: ["4 tin từ giáo viên", "2 thông báo phụ huynh", "10 thread lớp học"],
    panelTitle: "Tin nhắn học tập",
    panelDescription: "Trao đổi theo ngữ cảnh môn học, nhiệm vụ và kết quả đánh giá.",
  },
  exams: {
    badge: "Exam Insights",
    kpiLabel: "Average",
    kpiValue: "8.2",
    highlights: ["12 bài đã chấm", "3 kỹ năng cần cải thiện", "2 đề luyện gợi ý"],
    panelTitle: "Phân tích kết quả thi",
    panelDescription: "Tổng hợp điểm mạnh/yếu và khuyến nghị học tập dựa trên dữ liệu.",
  },
  profile: {
    badge: "Profile Settings",
    kpiLabel: "Profile",
    kpiValue: "92%",
    highlights: ["Thông tin cá nhân", "Quyền riêng tư", "Tùy chọn nhắc học"],
    panelTitle: "Hồ sơ & cài đặt",
    panelDescription: "Quản lý tài khoản, thông báo và trải nghiệm cá nhân hóa hệ thống.",
  },
  parent: {
    badge: "Parent Portal",
    kpiLabel: "Monitoring",
    kpiValue: "Live",
    highlights: ["Theo dõi thời gian thực", "Nhiệm vụ trong ngày", "Báo cáo điểm số"],
    panelTitle: "Giám sát học tập",
    panelDescription: "Cung cấp bức tranh học tập rõ ràng để phụ huynh đồng hành cùng con.",
  },
  content: {
    badge: "Content Ops",
    kpiLabel: "Draft",
    kpiValue: "18",
    highlights: ["Chuẩn hóa học liệu", "Quản trị quy trình duyệt", "Theo dõi chất lượng"],
    panelTitle: "Quản lý nội dung",
    panelDescription: "Pipeline biên tập nội dung học tập từ nháp đến phát hành.",
  },
  analytics: {
    badge: "Admin Analytics",
    kpiLabel: "Engagement",
    kpiValue: "+22%",
    highlights: ["50K học sinh active", "1.2K lớp học", "99.9% uptime"],
    panelTitle: "Điều hành hệ thống",
    panelDescription: "Theo dõi chỉ số vận hành, tăng trưởng và hiệu quả học tập toàn nền tảng.",
  },
};

export function resolveWorkspacePreset(routeKey: string): WorkspacePreset {
  if (routeKey.includes("learning-path")) return presets.learning;
  if (routeKey.includes("course")) return presets.course;
  if (routeKey.includes("onboarding")) return presets.onboarding;
  if (routeKey.includes("arena")) return presets.arena;
  if (routeKey.includes("leaderboard")) return presets.leaderboard;
  if (routeKey.includes("messages")) return presets.messages;
  if (routeKey.includes("exam")) return presets.exams;
  if (routeKey.includes("profile")) return presets.profile;
  if (routeKey.includes("parent")) return presets.parent;
  if (routeKey.includes("content")) return presets.content;
  if (routeKey.includes("analytics")) return presets.analytics;

  return presets.learning;
}
