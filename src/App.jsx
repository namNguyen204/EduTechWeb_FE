import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import ArenaPage from "./pages/ArenaPage";
import CoursePage from "./pages/CoursePage";
import OnboardingPage from "./pages/OnboardingPage";
import ParentPortalPage from "./pages/ParentPortalPage";
import MessagesPage from "./pages/MessagesPage";
import ExamResultsPage from "./pages/ExamResultsPage";
import LearningPathPage from "./pages/LearningPathPage";
import StudentProfilePage from "./pages/StudentProfilePage";
import TeacherLearningPathPage from "./pages/TeacherLearningPathPage";
import TeacherCoursePage from "./pages/TeacherCoursePage";
import TeacherOnboardingPage from "./pages/TeacherOnboardingPage";
import TeacherArenaPage from "./pages/TeacherArenaPage";
import TeacherLeaderboardPage from "./pages/TeacherLeaderboardPage";
import TeacherMessagesPage from "./pages/TeacherMessagesPage";
import TeacherExamResultsPage from "./pages/TeacherExamResultsPage";
import TeacherProfilePage from "./pages/TeacherProfilePage";
import ContentManagerPage from "./pages/ContentManagerPage";
import AdminAnalyticsPage from "./pages/AdminAnalyticsPage";

function App() {
  const normalizedPath =
    window.location.pathname.toLowerCase().replace(/\/+$/, "") || "/";

  const studentRoutes = {
    "/dashboard": LearningPathPage,
    "/learning-path": LearningPathPage,
    "/course": CoursePage,
    "/onboarding": OnboardingPage,
    "/arena": ArenaPage,
    "/leaderboard": LeaderboardPage,
    "/messages": MessagesPage,
    "/exams": ExamResultsPage,
    "/exam-results": ExamResultsPage,
    "/student": LearningPathPage,
    "/student/home": LearningPathPage,
    "/student/learning-path": LearningPathPage,
    "/student/course": CoursePage,
    "/student/onboarding": OnboardingPage,
    "/student/arena": ArenaPage,
    "/student/leaderboard": LeaderboardPage,
    "/student/messages": MessagesPage,
    "/student/exams": ExamResultsPage,
    "/student/profile": StudentProfilePage,
    "/profile": StudentProfilePage,
  };

  const teacherRoutes = {
    "/teacher": TeacherLearningPathPage,
    "/teacher/home": TeacherLearningPathPage,
    "/teacher/learning-path": TeacherLearningPathPage,
    "/teacher/course": TeacherCoursePage,
    "/teacher/onboarding": TeacherOnboardingPage,
    "/teacher/arena": TeacherArenaPage,
    "/teacher/leaderboard": TeacherLeaderboardPage,
    "/teacher/messages": TeacherMessagesPage,
    "/teacher/exams": TeacherExamResultsPage,
    "/teacher/profile": TeacherProfilePage,
  };

  const nonStudentRoutes = {
    "/login": AuthPage,
    "/auth": AuthPage,
    "/signup": AuthPage,
    "/parent": ParentPortalPage,
    "/content-manager": ContentManagerPage,
    "/admin-analytics": AdminAnalyticsPage,
  };

  const matchedStudentPage = studentRoutes[normalizedPath];
  if (matchedStudentPage) {
    const StudentPage = matchedStudentPage;
    return <StudentPage />;
  }

  const matchedTeacherPage = teacherRoutes[normalizedPath];
  if (matchedTeacherPage) {
    const TeacherPage = matchedTeacherPage;
    return <TeacherPage />;
  }

  const matchedNonStudentPage = nonStudentRoutes[normalizedPath];
  if (matchedNonStudentPage) {
    const NonStudentPage = matchedNonStudentPage;
    return <NonStudentPage />;
  }

  return <HomePage />;
}

export default App;
