const STORAGE_KEY = "appLanguage";

const EN_VI_PAIRS = [
  ["Home", "Trang chủ"],
  ["Courses", "Khóa học"],
  ["Features", "Tính năng"],
  ["Pricing", "Bảng giá"],

  ["Learning Path", "Lộ trình học tập"],
  ["AI Scanner", "AI Quét Bài"],
  ["Mock Exams", "Đề thi thử"],
  ["Gamification", "Trò chơi hóa"],
  ["Analytics", "Phân tích"],
  ["Messages", "Tin nhắn"],
  ["Profile & Settings", "Thông tin cá nhân & Cài đặt"],
  ["⚙ Profile & Settings", "⚙ Thông tin cá nhân & Cài đặt"],
  ["Grade 12 - Natural Sciences", "Lớp 12 - Tự nhiên"],
  ["Update account details...", "Cập nhật thông tin tài khoản..."],
  [
    "Update profile details and settings...",
    "Cập nhật thông tin cá nhân và cài đặt...",
  ],
  ["Search lessons, formulas...", "Tìm kiếm bài học, công thức..."],
  [
    "Search matches, skills, or new challenges...",
    "Tìm trận đấu, kỹ năng hoặc thử thách mới...",
  ],
  [
    "Search teachers, class groups, or messages...",
    "Tìm giáo viên, nhóm lớp hoặc tin nhắn...",
  ],
  [
    "Search mock exams, subjects, or recent results...",
    "Tìm đề thi thử, môn học hoặc kết quả gần đây...",
  ],
  [
    "Search students, classes, or ranking statistics...",
    "Tìm học sinh, lớp học hoặc thống kê xếp hạng...",
  ],
  [
    "Paste problems, upload images, or type questions for AI scan...",
    "Dán đề bài, tải ảnh hoặc nhập câu hỏi để AI quét...",
  ],
  ["Good morning, Nam! 👋", "Chào buổi sáng, Nam! 👋"],
  [
    "Today, we will continue your Grade 12 calculus path.",
    "Hôm nay chúng ta sẽ tiếp tục lộ trình Giải tích lớp 12 nhé.",
  ],
  ["▶ Continue previous lesson", "▶ Tiếp tục bài học trước"],
  ["Level: Grade 12", "Cấp độ: Grade 12"],
  ["Knowledge Map", "Lộ trình kiến thức"],
  [
    "Systematic AI-powered knowledge mapping",
    "Hệ thống hóa kiến thức thông minh bằng AI",
  ],
  ["Derivatives - Integrals", "Nguyên hàm - Tích phân"],
  ["Currently learning: Lesson 3.2", "Đang học: Bài 3.2"],
  ["LEARNING STREAK", "HỌC TẬP LIÊN TỤC"],
  ["12 Days", "12 Ngày"],
  ["EXPERIENCE POINTS", "ĐIỂM KINH NGHIỆM"],
  ["CLASS RANK", "XẾP HẠNG LỚP"],
  ["COMPLETED", "ĐÃ HOÀN THÀNH"],
  ["42 Lessons", "42 Bài"],
  ["Overall progress", "Tiến độ tổng quát"],
  [
    "You have completed 18/24 Grade 12 Math modules",
    "Bạn đã hoàn thành 18/24 chương trình Toán 12",
  ],
  ["Today's goals", "Mục tiêu hôm nay"],
  ["Watch lesson video 3.1", "Xem video bài giảng 3.1"],
  ["Complete Chapter 2 quiz", "Làm bài tập trắc nghiệm chương 2"],
  ["Practice integration 3.2", "Thực hành giải tích phân 3.2"],
  ["Review logarithm formulas", "Ôn tập công thức Logarit"],
  ["+ Add goal", "+ Thêm mục tiêu"],
  [
    "Struggling with a problem? Ask me right away!",
    "Bạn đang gặp khó khăn với bài toán nào? Hãy hỏi mình ngay nhé!",
  ],
  [
    '"Solve log(x) + log(x-1) = 1"',
    '"Giải phương trình log(x) + log(x-1) = 1"',
  ],
  ['"Find the integral of sin²(2x)"', '"Tính nguyên hàm của sin²(2x)"'],
  ["Ask AI anything...", "Hỏi AI bất cứ điều gì..."],

  ["Student profile avatar", "Ảnh đại diện học sinh"],
  [
    "Edit student profile and personalize account experience.",
    "Chỉnh sửa hồ sơ học sinh và tùy chỉnh trải nghiệm tài khoản.",
  ],
  ["Full name", "Họ và tên"],
  ["Phone number", "Số điện thoại"],
  ["Grade", "Lớp"],
  ["10 - Basic", "10 - Cơ bản"],
  ["11 - Advanced", "11 - Nâng cao"],
  ["12 - Natural Sciences", "12 - Tự nhiên"],
  ["Address", "Địa chỉ"],
  ["District 1, Ho Chi Minh City", "Quận 1, TP. Hồ Chí Minh"],
  ["Cancel", "Hủy"],
  ["Save changes", "Lưu thay đổi"],
  ["Account settings", "Cài đặt tài khoản"],
  ["Receive teacher notifications", "Nhận thông báo từ giáo viên"],
  ["Allow parents to track progress", "Cho phép phụ huynh theo dõi tiến độ"],
  ["Enable daily study reminders", "Bật nhắc lịch học mỗi ngày"],
  ["Theme", "Giao diện"],
  ["Light", "Sáng"],
  ["System default", "Tự động theo hệ thống"],
  ["High contrast", "Tương phản cao"],
  ["Language", "Ngôn ngữ"],
  ["English", "Tiếng Anh"],
  ["Vietnamese", "Tiếng Việt"],
  ["Change profile photo", "Đổi ảnh đại diện"],
  ["Grade 12 student - Natural Sciences", "Học sinh lớp 12 - Tự nhiên"],
  ["Contact teacher", "Liên hệ giáo viên"],

  ["Active students", "Học sinh đang học"],
  ["Completed lessons", "Bài học hoàn thành"],
  ["AI questions answered", "Câu hỏi AI giải đáp"],
  ["Instant scan and solutions", "Quét và giải đáp tức thì"],
  ["Smart AI Scanner", "AI Scanner thông minh"],
  ["Multi-modal learning", "Học tập đa phương thức"],
  ["AI Interactive Video", "Video tương tác AI"],
  [
    "Simply capture a photo of your textbook exercise and AI will analyze it with clear step-by-step explanations, helping students truly understand concepts instead of memorizing answers.",
    "Chỉ cần chụp ảnh bài tập trong sách giáo khoa, AI sẽ phân tích và đưa ra lời giải thích chi tiết từng bước, giúp học sinh nắm vững bản chất kiến thức thay vì chỉ học thuộc đáp án.",
  ],
  [
    "AI-enhanced video lessons generate quick in-video quizzes and key concept summaries, adapting learning pace to each student's absorption level.",
    "Video bài giảng tích hợp AI tạo các bài kiểm tra nhanh ngay trong video và tóm tắt khái niệm trọng tâm, điều chỉnh nhịp học theo khả năng tiếp thu của từng học sinh.",
  ],
  ["⚡ NEXT-GEN LEARNING PLATFORM", "⚡ NỀN TẢNG HỌC TẬP THẾ HỆ MỚI"],
  ["Igniting Knowledge", "Khởi nguồn tri thức"],
  [
    "Delivering personalized AI learning assistants and advanced interactive tools for K-12 students.",
    "Cung cấp cho học sinh K-12 trợ lý học tập AI cá nhân hóa và các công cụ tương tác thông minh hàng đầu.",
  ],
  ["Get Started", "Bắt đầu ngay"],
  ["Explore Courses", "Khám phá khóa học"],
  ["Trusted by 50,000+ students", "Hơn 50,000 học sinh đã tin dùng"],
  ["Grade 12 Math - Integration", "Toán học lớp 12 - Tích phân"],
  ["Transforming K-12 Learning", "Thay đổi phương thức học tập K-12"],
  [
    "Our AI-powered tools make learning more engaging, personalized, and effective for every student.",
    "Các công cụ hỗ trợ AI của chúng tôi làm cho việc học trở nên hấp dẫn, cá nhân hóa và hiệu quả hơn cho mỗi học sinh.",
  ],
  [
    "Ready to accelerate your learning with AI?",
    "Sẵn sàng để bứt phá kết quả học tập cùng AI?",
  ],
  [
    "Join thousands of students who are transforming the way they learn every day. Create your free account today.",
    "Tham gia cùng hàng ngàn học sinh đang thay đổi cách học tập mỗi ngày. Đăng ký tài khoản miễn phí ngay hôm nay.",
  ],
  ["Sign Up Now - Free", "Đăng ký ngay - Miễn phí"],
  ["Contact Support", "Liên hệ tư vấn"],
  [
    "A leading digital education platform in Vietnam, applying AI to teaching and learning for the next generation.",
    "Nền tảng giáo dục số hàng đầu Việt Nam, ứng dụng AI vào việc dạy và học cho thế hệ tương lai.",
  ],
  ["Products", "Sản phẩm"],
  ["Online Classes", "Lớp học trực tuyến"],
  ["Exam Bank", "Ngân hàng đề thi"],
  ["Company", "Công ty"],
  ["About Us", "Giới thiệu"],
  ["Careers", "Tuyển dụng"],
  ["Knowledge Blog", "Blog kiến thức"],
  ["Connect", "Kết nối"],

  ["ready to learn?", "sẵn sàng học tập?"],
  ["Log in", "Đăng nhập"],
  ["STEP 1/3", "BƯỚC 1/3"],
  ["33% Complete", "33% Hoàn tất"],
  [
    "Start your personalized learning journey",
    "Bắt đầu hành trình học tập cá nhân hóa của bạn",
  ],
  ["Welcome to BachKhoaViet!", "Chào mừng bạn đến với BachKhoaViet!"],
  [
    "Tell us more about you so we can personalize the most effective learning path.",
    "Hãy cho chúng tôi biết thêm về bạn để cá nhân hóa lộ trình học tập hiệu quả nhất.",
  ],
  ["Which grade are you currently in?", "Bạn đang học lớp mấy?"],
  ["Primary", "Cấp 1"],
  ["Primary School (Grades 1 - 5)", "Tiểu học (Lớp 1 - 5)"],
  ["Middle", "Cấp 2"],
  ["Middle School (Grades 6 - 9)", "THCS (Lớp 6 - 9)"],
  ["High", "Cấp 3"],
  ["High School (Grades 10 - 12)", "THPT (Lớp 10 - 12)"],
  ["What is your learning goal?", "Mục tiêu học tập của bạn là gì?"],
  ["Build Strong Foundations", "Lấy lại gốc"],
  [
    "Strengthen core knowledge and fill critical learning gaps.",
    "Củng cố kiến thức căn bản, lấp đầy các lỗ hổng kiến thức quan trọng.",
  ],
  ["Advanced Mastery", "Nâng cao"],
  [
    "Aim for top scores and excel in gifted student competitions.",
    "Chinh phục điểm 9, 10 và các kỳ thi Học sinh giỏi các cấp.",
  ],
  ["Exam Preparation", "Ôn thi"],
  [
    "Practice intensive mock exams for upcoming important tests.",
    "Luyện đề chuyên sâu cho kỳ thi cuối kỳ và chuyển cấp sắp tới.",
  ],
  ["← Back", "← Quay lại"],
  ["Continue →", "Tiếp tục →"],
  ["Find the integral of sin²(2x)", "Tính nguyên hàm của sin²(2x)"],
  ["Solve log(x) + log(x-1) = 1", "Giải phương trình log(x) + log(x-1) = 1"],

  ["Welcome back, Scholar!", "Chào mừng trở lại, học viên!"],
  ["Join BachKhoaViet!", "Tham gia BachKhoaViet!"],
  [
    "Access your personalized AI-powered educational dashboard.",
    "Truy cập bảng điều khiển học tập cá nhân hóa bằng AI của bạn.",
  ],
  [
    "Create your account and start your learning journey today.",
    "Tạo tài khoản và bắt đầu hành trình học tập ngay hôm nay.",
  ],
  ["Login", "Đăng nhập"],
  ["Sign Up", "Đăng ký"],
  ["Continue with Google", "Tiếp tục với Google"],
  ["Continue with Facebook", "Tiếp tục với Facebook"],
  ["or continue with email", "hoặc tiếp tục với email"],
  ["Email Address", "Địa chỉ email"],
  ["Password", "Mật khẩu"],
  ["Forgot password?", "Quên mật khẩu?"],
  ["Confirm Password", "Xác nhận mật khẩu"],
  ["Log In →", "Đăng nhập →"],
  ["Create Account →", "Tạo tài khoản →"],
  ["Don't have an account?", "Chưa có tài khoản?"],
  ["Create an account", "Tạo tài khoản"],
  ["Already have an account?", "Đã có tài khoản?"],
  ["Terms of Service", "Điều khoản dịch vụ"],
  ["Privacy Policy", "Chính sách bảo mật"],
  ["Support", "Hỗ trợ"],

  ["Parent Portal", "Cổng phụ huynh"],
  ["Dashboard", "Bảng điều khiển"],
  ["Detailed Reports", "Báo cáo chi tiết"],
  ["Course Map", "Sơ đồ khóa học"],
  ["Missions", "Nhiệm vụ"],
  ["Rewards", "Phần thưởng"],
  ["Settings", "Cài đặt"],
  ["Grade 8 - STEM", "Lớp 8 - STEM"],
  ["↔ Switch Child", "↔ Chuyển học sinh"],
  ["Search activities...", "Tìm hoạt động..."],
  ["Premium Parent", "Phụ huynh Premium"],
  ["Student Monitoring", "Theo dõi học sinh"],
  [
    "Real-time progress and mission tracking for Minh Hoang.",
    "Theo dõi tiến độ và nhiệm vụ của Minh Hoàng theo thời gian thực.",
  ],
  ["• Live Session Active", "• Phiên học trực tiếp đang hoạt động"],
  ["LEARNING TIME", "THỜI GIAN HỌC"],
  ["MISSIONS COMPLETED", "NHIỆM VỤ HOÀN THÀNH"],
  ["AVG. EXAM SCORE", "ĐIỂM THI TRUNG BÌNH"],
  ["Stay Connected via Zalo", "Kết nối qua Zalo"],
  [
    "Get real-time notifications about progress and exam results directly on your phone.",
    "Nhận thông báo theo thời gian thực về tiến độ và kết quả thi ngay trên điện thoại.",
  ],
  ["Connect to Zalo", "Kết nối Zalo"],
  ["Incentive & Rewards", "Khích lệ & Phần thưởng"],
  ["+ Add Incentive", "+ Thêm mục tiêu thưởng"],
  ["ACTIVE GOAL", "MỤC TIÊU ĐANG HOẠT ĐỘNG"],
  ["Weekend Movie Night", "Tối xem phim cuối tuần"],
  [
    "Condition: Complete all 5 Math missions this week.",
    "Điều kiện: Hoàn thành đủ 5 nhiệm vụ Toán trong tuần này.",
  ],
  ["PROGRESS", "TIẾN ĐỘ"],
  ["No other active incentives", "Không có mục tiêu thưởng nào khác"],
  [
    "Set a new goal to keep Minh motivated!",
    "Tạo mục tiêu mới để giữ động lực cho Minh!",
  ],
  ["Recent Activity", "Hoạt động gần đây"],
  ["Recent Exam Scores", "Điểm thi gần đây"],
  ["View All Exams", "Xem tất cả bài thi"],
  ["1 HOUR AGO", "1 GIỜ TRƯỚC"],
  ["3 HOURS AGO", "3 GIỜ TRƯỚC"],
  ["YESTERDAY", "HÔM QUA"],
  ["Completed: Algebra Quiz 2", "Đã hoàn thành: Quiz Đại số 2"],
  ["Mission Progress: Geometry", "Tiến độ nhiệm vụ: Hình học"],
  ["New Mission Started", "Nhiệm vụ mới bắt đầu"],
  ["3/5 lessons viewed", "Đã xem 3/5 bài"],
  ["Score: 9.0/10.0", "Điểm: 9.0/10.0"],
  ["English: Creative Writing", "Tiếng Anh: Viết sáng tạo"],
  ["Circular Functions", "Hàm lượng giác"],

  ["Content Manager", "Quản lý nội dung"],
  ["Classroom", "Lớp học"],
  ["Search lessons...", "Tìm bài học..."],
  ["Content Library", "Thư viện nội dung"],
  ["Manage Subject Folders", "Quản lý thư mục môn học"],
  ["All Content", "Tất cả nội dung"],
  ["Mathematics", "Toán học"],
  ["Science", "Khoa học"],
  ["English", "Tiếng Anh"],
  ["History", "Lịch sử"],
  ["📁 New Folder", "📁 Thư mục mới"],
  [
    "Home › Mathematics › Grade 10 - Algebra",
    "Trang chủ › Toán học › Lớp 10 - Đại số",
  ],
  ["Content Management", "Quản lý nội dung"],
  [
    "Create AI-powered lessons, quizzes, and digital flashcards.",
    "Tạo bài học, bài kiểm tra và thẻ ghi nhớ số bằng AI.",
  ],
  ["✦ AI Generate", "✦ AI tạo nội dung"],
  ["＋ Create Content", "＋ Tạo nội dung"],
  ["All Items", "Tất cả mục"],
  ["Video Lessons", "Bài giảng video"],
  ["Quizzes", "Bài kiểm tra"],
  ["Flashcards", "Thẻ ghi nhớ"],
  ["Drag and drop video files here", "Kéo và thả tệp video vào đây"],
  [
    "Or click to browse from your computer. Max file size 500MB.",
    "Hoặc bấm để chọn từ máy tính. Dung lượng tối đa 500MB.",
  ],
  ["CONTENT", "NỘI DUNG"],
  ["TYPE", "LOẠI"],
  ["STATUS", "TRẠNG THÁI"],
  ["DATE", "NGÀY"],
  ["ACTIONS", "THAO TÁC"],
  ["Video", "Video"],
  ["Quiz", "Bài kiểm tra"],
  ["Published", "Đã xuất bản"],
  ["Draft", "Bản nháp"],
  ["Processing", "Đang xử lý"],
  ["Showing 1 to 3 of 12 items", "Hiển thị 1 đến 3 trong tổng số 12 mục"],
  [
    "Algebra Basics: Quadratic Equations",
    "Đại số cơ bản: Phương trình bậc hai",
  ],
  ["12:45 • High School Math", "12:45 • Toán THPT"],
  ["Mid-term Quiz: Functions", "Quiz giữa kỳ: Hàm số"],
  ["20 Questions • 30 Minutes", "20 câu hỏi • 30 phút"],
  ["Polynomial Vocabulary Flashcards", "Flashcards từ vựng: Đa thức"],
  ["45 Cards", "45 thẻ"],
  ["Oct 12, 2023", "12/10/2023"],
  ["Oct 14, 2023", "14/10/2023"],
  ["Oct 15, 2023", "15/10/2023"],

  ["ADMIN DASHBOARD", "BẢNG ĐIỀU KHIỂN QUẢN TRỊ"],
  ["Dashboard Overview", "Tổng quan bảng điều khiển"],
  ["Content Management", "Quản lý nội dung"],
  ["Student Analytics", "Phân tích học sinh"],
  ["Question Bank", "Ngân hàng câu hỏi"],
  ["Classroom Management", "Quản lý lớp học"],
  ["Logout", "Đăng xuất"],
  ["Senior Educator", "Giáo viên cấp cao"],
  [
    "Monitoring performance metrics across 12 active grade modules",
    "Theo dõi chỉ số hiệu suất trên 12 mô-đun lớp đang hoạt động",
  ],
  ["⇩ Export Report", "⇩ Xuất báo cáo"],
  ["＋ New Module", "＋ Mô-đun mới"],
  ["Average Score", "Điểm trung bình"],
  ["Pending Grading", "Chờ chấm điểm"],
  ["↗12% from last month", "↗12% so với tháng trước"],
  ["↘2% vs school target", "↘2% so với mục tiêu trường"],
  ["↗5% efficiency increased", "↗5% hiệu suất tăng"],
  ["Progress Trends", "Xu hướng tiến độ"],
  [
    "Weekly performance per subject category",
    "Hiệu suất theo tuần cho từng nhóm môn",
  ],
  ["Last 30 Days", "30 ngày gần nhất"],
  ["WEEK 1", "TUẦN 1"],
  ["WEEK 2", "TUẦN 2"],
  ["WEEK 3", "TUẦN 3"],
  ["WEEK 4", "TUẦN 4"],
  ["WEEK 5", "TUẦN 5"],
  ["WEEK 6", "TUẦN 6"],
  ["WEEK 7", "TUẦN 7"],
  ["WEEK 8", "TUẦN 8"],
  ["WEEK 9", "TUẦN 9"],
  ["WEEK 10", "TUẦN 10"],
  ["✦ AI Insights", "✦ Phân tích AI"],
  ["PERFORMANCE ALERT", "CẢNH BÁO HIỆU SUẤT"],
  [
    "Class 10-A shows a 15% drop in Geometry engagement.",
    "Lớp 10-A giảm 15% mức độ tương tác môn Hình học.",
  ],
  ["Review Class Data", "Xem dữ liệu lớp"],
  ["MILESTONE REACHED", "ĐẠT CỘT MỐC"],
  [
    "92 students completed the 'Advanced Calculus' module early.",
    "92 học sinh hoàn thành sớm mô-đun 'Giải tích nâng cao'.",
  ],
  ["PENDING REVIEW", "CHỜ DUYỆT"],
  ["Grade 12 • 24 submissions", "Lớp 12 • 24 bài nộp"],
  ["Grade 11 • 12 submissions", "Lớp 11 • 12 bài nộp"],

  ["Student Analytics", "Phân tích học sinh"],
  ["K-12 Educational Insights", "Thông tin chuyên sâu giáo dục K-12"],
  ["Overview", "Tổng quan"],
  ["Performance", "Hiệu suất"],
  ["Behavior", "Hành vi"],
  ["Predictive AI", "AI dự đoán"],
  ["Improvement Plan", "Kế hoạch cải thiện"],
  ["Search students...", "Tìm học sinh..."],
  ["Students", "Học sinh"],
  ["Curriculum", "Chương trình học"],
  ["Home / Students / Nguyen Van A", "Trang chủ / Học sinh / Nguyen Van A"],
  ["Nguyen Van A - Detailed Analytics", "Nguyen Van A - Phân tích chi tiết"],
  [
    "Grade 10 | Student ID: BK78921 | Status: Active",
    "Lớp 10 | Mã học sinh: BK78921 | Trạng thái: Đang hoạt động",
  ],
  ["Export Report", "Xuất báo cáo"],
  ["Improvement Path", "Lộ trình cải thiện"],
  ["Academic Performance", "Kết quả học tập"],
  ["Behavioral Data", "Dữ liệu hành vi"],
  ["Exam Predictions", "Dự đoán kỳ thi"],
  ["Learning Resources", "Tài nguyên học tập"],
  ["AVG. STUDY DURATION", "THỜI LƯỢNG HỌC TB"],
  ["QUIZ ACCURACY", "ĐỘ CHÍNH XÁC QUIZ"],
  ["CONCEPT MASTERY", "MỨC ĐỘ NẮM VỮNG"],
  ["ENGAGEMENT SCORE", "ĐIỂM TƯƠNG TÁC"],
  ["Study Frequency (Weekly Heatmap)", "Tần suất học (Heatmap theo tuần)"],
  [
    "“Peak learning hours observed between 8 PM - 10 PM. Student is 15% more productive during late-night sessions.”",
    "“Khung giờ học hiệu quả nhất từ 20:00 - 22:00. Học sinh tăng 15% năng suất trong phiên học tối muộn.”",
  ],
  ["Predicted Final Grade", "Điểm tổng kết dự đoán"],
  ["AI PREDICTION", "DỰ ĐOÁN AI"],
  ["Confidence Interval: ± 0.3 pts", "Khoảng tin cậy: ± 0.3 điểm"],
  [
    'On track for "Excellent" Distinction',
    'Đang đi đúng hướng đạt mức "Xuất sắc"',
  ],
  [
    "Weakness Analysis: Most Failed Topics",
    "Phân tích điểm yếu: Chủ đề sai nhiều nhất",
  ],
  ["Personalized Improvement", "Cải thiện cá nhân hóa"],
  [
    "Based on recent performance, the AI has generated a custom path to boost predicted score by ±0.5 points.",
    "Dựa trên hiệu suất gần đây, AI đã tạo lộ trình riêng để tăng điểm dự đoán khoảng ±0.5.",
  ],
  [
    "Review Newton’s 2nd Law (Module 4.2)",
    "Ôn định luật II Newton (Mô-đun 4.2)",
  ],
  ["Complete 5 vector practice quizzes", "Hoàn thành 5 bài luyện tập vector"],
  ["Launch Path Now", "Bắt đầu lộ trình ngay"],
  ["Advanced Calculus", "Giải tích nâng cao"],

  ["AI Educational Platform", "Nền tảng giáo dục AI"],
  ["PRO MEMBER", "THÀNH VIÊN PRO"],
  [
    "Get unlimited AI scans and detailed solutions.",
    "Nhận lượt quét AI không giới hạn và lời giải chi tiết.",
  ],
  ["Upgrade Now", "Nâng cấp ngay"],

  ["ROUND 4 OF 10", "VÒNG 4 / 10"],
  ["MIN", "PHÚT"],
  ["SEC", "GIÂY"],
  ["You (Lv. 15)", "Bạn (Lv. 15)"],
  ["CURRENT ACCURACY", "ĐỘ CHÍNH XÁC HIỆN TẠI"],
  ["Avg. Speed: 1.2s/q", "Tốc độ TB: 1.2s/câu"],
  ["STREAK X5", "CHUỖI THẮNG X5"],
  ["PERFECT BONUS", "THƯỞNG HOÀN HẢO"],
  ["Rank: #1,240", "Hạng: #1,240"],
  ["Rank: #890", "Hạng: #890"],
  ["Avg. Speed: 1.5s/q", "Tốc độ TB: 1.5s/câu"],
  ["SHIELD ACTIVE", "KHIÊN ĐANG BẬT"],
  ["Hard", "Khó"],
  ["QUESTION 4", "CÂU HỎI 4"],
  ["Solve for x:", "Giải x:"],
  ["💡 HINT", "💡 GỢI Ý"],
  ["⚡ 2X PTS", "⚡ NHÂN 2 ĐIỂM"],
  ["❄ FREEZE", "❄ ĐÓNG BĂNG"],
  ["🏆 Weekly Battle", "🏆 Đấu trường tuần"],
  ["Season 12: Galactic Warriors", "Mùa 12: Chiến binh thiên hà"],
  ["You", "Bạn"],
  ["Full Rankings", "Xem toàn bộ xếp hạng"],
  ["Quang Minh is catching up!", "Quang Minh đang bám đuổi!"],
  ["He just answered Question 4 correctly.", "Bạn ấy vừa trả lời đúng Câu 4."],
  ["JOIN WAITLIST", "THAM GIA DANH SÁCH CHỜ"],

  [
    "AI Scanner > Mathematics > Geometry > 1.1 Introduction to Shapes",
    "AI Scanner > Toán học > Hình học > 1.1 Giới thiệu về hình khối",
  ],
  ["🧩 INTERACTIVE QUIZ", "🧩 BÀI QUIZ TƯƠNG TÁC"],
  [
    "What is the main property of a triangle?",
    "Tính chất chính của tam giác là gì?",
  ],
  ["It has exactly four sides.", "Nó có đúng bốn cạnh."],
  ["The sum of its interior angles is 180°.", "Tổng ba góc trong bằng 180°."],
  ["It must have a right angle.", "Nó bắt buộc phải có một góc vuông."],
  ["Submit Answer ➤", "Nộp đáp án ➤"],
  ["AI Tutor Support", "Hỗ trợ Gia sư AI"],
  ["● Online & Ready to help", "● Đang online & sẵn sàng hỗ trợ"],
  ["Full Chat History", "Xem toàn bộ lịch sử chat"],
  [
    "Hi there! I noticed you're currently answering a question about triangle properties. Need a quick hint about the interior angles theorem?",
    "Xin chào! Mình thấy bạn đang làm câu hỏi về tính chất tam giác. Bạn có muốn gợi ý nhanh về định lý tổng góc trong không?",
  ],
  [
    "Yes please, can you summarize why it's always 180 degrees?",
    "Có, bạn tóm tắt giúp mình vì sao luôn là 180 độ được không?",
  ],
  ["Summarize this section", "Tóm tắt phần này"],
  ["Give me an example", "Cho mình một ví dụ"],
  ["I don't understand the theorem", "Mình chưa hiểu định lý này"],
  ["Ask your AI tutor a question...", "Đặt câu hỏi cho gia sư AI..."],
  ["Course Progress", "Tiến độ khóa học"],
  ["🏁 Next quiz milestone at 07:15", "🏁 Mốc quiz tiếp theo ở phút 07:15"],
  ["Lesson Content", "Nội dung bài học"],
  ["Current Lecture • 12:23", "Bài đang học • 12:23"],
  ["Video • 15:45", "Video • 15:45"],
  ["Quiz • 10 Questions", "Quiz • 10 câu hỏi"],
  ["Study Resources", "Tài nguyên học"],
  ["🧾 Geometry Cheat Sheet", "🧾 Tờ ghi nhớ Hình học"],
  ["🗂 Flashcards: Shapes", "🗂 Flashcards: Hình khối"],
  ["PREMIUM PERK", "ĐẶC QUYỀN PREMIUM"],
  ["Practice with AI Coach", "Luyện tập cùng AI Coach"],
  [
    "Get personalized feedback on your geometry drawings in real-time.",
    "Nhận phản hồi cá nhân hóa theo thời gian thực cho bài vẽ hình học của bạn.",
  ],

  ["Chats", "Đoạn chat"],
  ["Search teachers or groups...", "Tìm giáo viên hoặc nhóm..."],
  ["CLASS GROUPS", "NHÓM LỚP"],
  ["Mrs. Lan: Meeting tomorrow at...", "Cô Lan: Cuộc họp ngày mai lúc..."],
  ["New materials uploaded.", "Tài liệu mới đã được tải lên."],
  ["TEACHERS", "GIÁO VIÊN"],
  ["The progress report is ready.", "Báo cáo tiến độ đã sẵn sàng."],
  [
    "Minh did excellent in the debate.",
    "Minh đã làm rất tốt trong buổi tranh biện.",
  ],
  ["Yesterday", "Hôm qua"],
  ["Hieu Minh's Dad", "Bố của Hiếu Minh"],
  ["Parent", "Phụ huynh"],
  ["• 24 Members online", "• 24 thành viên online"],
  ["📅 Schedule Meeting", "📅 Lên lịch họp"],
  ["YESTERDAY", "HÔM QUA"],
  [
    "Hello parents! I've just published the mid-term Math progress reports for all students. You can view them below.",
    "Xin chào phụ huynh! Tôi vừa đăng báo cáo tiến độ Toán giữa kỳ của tất cả học sinh. Mọi người có thể xem bên dưới.",
  ],
  ["📊 Academic Progress Report", "📊 Báo cáo tiến độ học tập"],
  ["STUDENT", "HỌC SINH"],
  ["OVERALL GRADE", "ĐIỂM TỔNG QUÁT"],
  ["⬇ Download Full Report", "⬇ Tải báo cáo đầy đủ"],
  ["TODAY", "HÔM NAY"],
  [
    "Thank you Mr. Nguyen! The progress is impressive. I would like to schedule a 5-minute sync regarding the upcoming Algebra competition.",
    "Cảm ơn thầy Nguyễn! Tiến độ rất ấn tượng. Tôi muốn đặt lịch trao đổi nhanh 5 phút về cuộc thi Đại số sắp tới.",
  ],
  ["Meeting Request Sent", "Đã gửi yêu cầu họp"],
  [
    "Parent-Teacher Sync: Algebra Comp",
    "Trao đổi phụ huynh - giáo viên: Cuộc thi Đại số",
  ],
  ["Wait for confirmation", "Chờ xác nhận"],
  ["DATE", "NGÀY"],
  ["TIME", "GIỜ"],
  [
    "Mr. Nguyen, is the meeting tomorrow still at 4 PM in the school hall?",
    "Thầy Nguyễn ơi, buổi họp ngày mai vẫn lúc 4 giờ ở hội trường trường đúng không ạ?",
  ],
  ["📎 Attach File", "📎 Đính kèm tệp"],
  ["📊 Share Performance", "📊 Chia sẻ kết quả"],
  ["🎥 Video Call", "🎥 Gọi video"],
  [
    "Type a message or use AI to summarize...",
    "Nhập tin nhắn hoặc dùng AI để tóm tắt...",
  ],
  ["AI INSIGHT", "GỢI Ý AI"],
  [
    'Hieu has shown a 15% improvement in Math logic since last month. Focus on "Circular Functions" for the next quiz.',
    'Hiếu đã cải thiện 15% tư duy Toán so với tháng trước. Nên tập trung vào "Hàm lượng giác" cho bài quiz tiếp theo.',
  ],
  ["RECENT PERFORMANCE", "KẾT QUẢ GẦN ĐÂY"],
  ["Attendance", "Chuyên cần"],
  ["Assignment Rate", "Tỷ lệ bài tập"],
  ["UPCOMING", "SẮP TỚI"],
  ["Lab Report Due", "Đến hạn báo cáo thí nghiệm"],
  ["Tomorrow, 11:59 PM", "Ngày mai, 11:59 PM"],
  ["History Quiz", "Quiz Lịch sử"],
  ["Friday, Oct 27", "Thứ Sáu, 27/10"],
  ["View Full Profile", "Xem hồ sơ đầy đủ"],

  ["MATHEMATICS GRADE 12", "TOÁN HỌC LỚP 12"],
  ["Mock Exam: Calculus & Trigonometry", "Đề thi thử: Giải tích & Lượng giác"],
  [
    "Completed on Oct 24, 2023 - 50 Questions",
    "Hoàn thành ngày 24/10/2023 - 50 câu hỏi",
  ],
  ["⬇ Download Report", "⬇ Tải báo cáo"],
  ["Retake Exam", "Làm lại bài thi"],
  ["Final Score", "Điểm cuối"],
  ["↗ +1.2% from last mock", "↗ +1.2% so với lần thi thử trước"],
  ["Time Taken", "Thời gian làm bài"],
  ["• -5:00 vs avg", "• -5:00 so với trung bình"],
  ["Class Percentile", "Phần trăm thứ hạng lớp"],
  ["★ Rank #12 of 450", "★ Hạng #12 trên 450"],
  ["Review Wrong Answers (3)", "Xem lại câu sai (3)"],
  ["Question 14 - Trigonometry", "Câu 14 - Lượng giác"],
  ["Time spent: 1:45", "Thời gian: 1:45"],
  [
    "Simplify the expression: sin²x / (1 - cos x)",
    "Rút gọn biểu thức: sin²x / (1 - cos x)",
  ],
  ["✖ Your Answer: sin x + cos x", "✖ Đáp án của bạn: sin x + cos x"],
  ["✔ Correct Answer: 1 + cos x", "✔ Đáp án đúng: 1 + cos x"],
  ["💡 AI Feedback", "💡 Nhận xét AI"],
  [
    "You likely forgot the Pythagorean identity: sin²x = 1 - cos²x. Substituting this gives (1 - cos²x) / (1 - cos x). Since 1 - cos²x is a difference of squares, it becomes (1 - cos x)(1 + cos x).",
    "Bạn có thể đã quên hằng đẳng thức lượng giác: sin²x = 1 - cos²x. Thay vào ta được (1 - cos²x) / (1 - cos x). Vì 1 - cos²x là hiệu hai bình phương nên thành (1 - cos x)(1 + cos x).",
  ],
  [
    "Question 27   Calculate the derivative of f(x) = ln(x² + 1)",
    "Câu 27   Tính đạo hàm của f(x) = ln(x² + 1)",
  ],
  ["Personalized Recommendations", "Gợi ý cá nhân hóa"],
  ["Mastering Trigonometric Identities", "Làm chủ hằng đẳng thức lượng giác"],
  ["Video Lesson • 15 mins", "Bài video • 15 phút"],
  ["Start Lesson →", "Bắt đầu bài học →"],
  ["Calculus Booster: Practice Quiz", "Tăng tốc Giải tích: Quiz luyện tập"],
  ["Practice Set • 10 questions", "Bộ luyện tập • 10 câu"],
  ["Practice Now →", "Luyện ngay →"],
  ["🏆 Top 5 Leaderboard", "🏆 Top 5 bảng xếp hạng"],
  ["See All", "Xem tất cả"],
  ["Exam: Advanced Calculus", "Bài thi: Giải tích nâng cao"],
  ["Minh Anh (You)", "Minh Anh (Bạn)"],
  [
    "You need 0.6 points more to reach Top 10!",
    "Bạn cần thêm 0.6 điểm để vào Top 10!",
  ],
  ["Challenge a Peer", "Thách đấu bạn học"],
  ["AI Tutor is Ready", "AI Tutor đã sẵn sàng"],
  [
    "I've analyzed your mistakes. Let's work on your Trigonometry weak points together.",
    "Mình đã phân tích lỗi của bạn. Hãy cùng cải thiện phần yếu về Lượng giác nhé.",
  ],
  ["Open Chat Mentor", "Mở chat với trợ giảng"],

  ["🏆 OFFICIAL RESULTS", "🏆 KẾT QUẢ CHÍNH THỨC"],
  ["Math Mock Exam #4", "Đề thi thử Toán #4"],
  [
    "12,450 Participants • Average Score: 78.5% • Avg. Time: 42:15",
    "12,450 thí sinh • Điểm trung bình: 78.5% • Thời gian TB: 42:15",
  ],
  ["Export Results", "Xuất kết quả"],
  ["Review My Exam", "Xem lại bài thi của tôi"],
  ["2ND", "HẠNG 2"],
  ["1ST PLACE", "HẠNG 1"],
  ["3RD", "HẠNG 3"],
  ["Time: 38:12", "Thời gian: 38:12"],
  ["Time: 34:05", "Thời gian: 34:05"],
  ["Time: 40:55", "Thời gian: 40:55"],
  ["YOUR PERSONAL STANDING", "THỨ HẠNG CÁ NHÂN CỦA BẠN"],
  ["Rank #42 • Score: 92/100", "Hạng #42 • Điểm: 92/100"],
  ["PERCENTILE", "PHẦN TRĂM THỨ HẠNG"],
  ["View Analytics", "Xem phân tích"],
  ["National", "Toàn quốc"],
  ["Class", "Lớp"],
  ["RANK", "HẠNG"],
  ["STUDENT", "HỌC SINH"],
  ["SCORE", "ĐIỂM"],
  ["TIME", "THỜI GIAN"],
  ["TREND", "XU HƯỚNG"],
  [
    "Showing 1-10 of 12,450 test-takers",
    "Hiển thị 1-10 trong tổng số 12,450 thí sinh",
  ],
  ["Ready to beat your score?", "Sẵn sàng vượt điểm hiện tại?"],
  [
    "Challenge yourself with another mock exam and climb the leaderboard. Your progress is tracked by our AI to help you improve faster.",
    "Thử sức với một đề thi thử khác và leo hạng. Tiến độ của bạn được AI theo dõi để giúp cải thiện nhanh hơn.",
  ],
  ["Explore Topics", "Khám phá chủ đề"],
  ["Start Next Exam", "Bắt đầu bài thi tiếp theo"],
];

const normalizeText = (value) => value.replace(/\s+/g, " ").trim();

const enToViMap = new Map();
const viToEnMap = new Map();
const enToViNormalizedMap = new Map();
const viToEnNormalizedMap = new Map();

EN_VI_PAIRS.forEach(([en, vi]) => {
  enToViMap.set(en, vi);
  viToEnMap.set(vi, en);
  enToViNormalizedMap.set(normalizeText(en), vi);
  viToEnNormalizedMap.set(normalizeText(vi), en);
});

const getMap = (lang) => (lang === "vi" ? enToViMap : viToEnMap);
const getNormalizedMap = (lang) =>
  lang === "vi" ? enToViNormalizedMap : viToEnNormalizedMap;

export const getAppLanguage = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "vi" || saved === "en") return saved;
  localStorage.setItem(STORAGE_KEY, "en");
  return "en";
};

export const setAppLanguage = (lang) => {
  const nextLang = lang === "vi" ? "vi" : "en";
  localStorage.setItem(STORAGE_KEY, nextLang);
  window.dispatchEvent(
    new CustomEvent("app-language-change", { detail: nextLang }),
  );
};

const translateRaw = (text, lang) => {
  const map = getMap(lang);
  const normalizedMap = getNormalizedMap(lang);

  const direct = map.get(text);
  if (direct) return direct;

  const normalized = normalizeText(text);
  return normalizedMap.get(normalized) ?? text;
};

const translateWithTrimPreserved = (text, lang) => {
  const leading = text.match(/^\s*/)?.[0] ?? "";
  const trailing = text.match(/\s*$/)?.[0] ?? "";
  const trimmed = text.trim();
  if (!trimmed) return text;
  const translated = translateRaw(trimmed, lang);
  return translated === trimmed ? text : `${leading}${translated}${trailing}`;
};

let isApplyingLanguage = false;

export const applyAppLanguage = (lang = getAppLanguage()) => {
  if (isApplyingLanguage) return;
  isApplyingLanguage = true;

  try {
    document.documentElement.lang = lang;

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const parentTag = node.parentElement?.tagName;
          if (!parentTag) return NodeFilter.FILTER_REJECT;
          if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(parentTag)) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        },
      },
    );

    const textNodes = [];
    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
    }

    textNodes.forEach((node) => {
      node.nodeValue = translateWithTrimPreserved(node.nodeValue || "", lang);
    });

    const attrTargets = document.querySelectorAll(
      "input[placeholder], textarea[placeholder], img[alt], option, [title]",
    );

    attrTargets.forEach((el) => {
      if (el.hasAttribute("placeholder")) {
        const value = el.getAttribute("placeholder") || "";
        el.setAttribute("placeholder", translateRaw(value, lang));
      }
      if (el.hasAttribute("alt")) {
        const value = el.getAttribute("alt") || "";
        el.setAttribute("alt", translateRaw(value, lang));
      }
      if (el.hasAttribute("title")) {
        const value = el.getAttribute("title") || "";
        el.setAttribute("title", translateRaw(value, lang));
      }
      if (el.tagName === "OPTION") {
        el.textContent = translateWithTrimPreserved(el.textContent || "", lang);
      }
    });
  } finally {
    isApplyingLanguage = false;
  }
};

export const initAppLanguage = () => {
  const root = document.getElementById("root");
  if (!root) return;

  const apply = () => applyAppLanguage(getAppLanguage());

  apply();
  window.addEventListener("app-language-change", apply);

  let scheduled = false;
  const observer = new MutationObserver(() => {
    if (scheduled || isApplyingLanguage) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      apply();
    });
  });

  observer.observe(root, {
    childList: true,
    subtree: true,
    characterData: true,
  });
};
