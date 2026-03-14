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

  const matchedNonStudentPage = nonStudentRoutes[normalizedPath];
  if (matchedNonStudentPage) {
    const NonStudentPage = matchedNonStudentPage;
    return <NonStudentPage />;
  }

  return <HomePage />;
}

export default App;
