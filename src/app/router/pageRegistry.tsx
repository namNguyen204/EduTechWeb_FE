import type { ComponentType } from "react";
import AdminAnalyticsPage from "../../pages/AdminAnalyticsPage.tsx";
import ArenaPage from "../../pages/ArenaPage.tsx";
import AuthPage from "../../pages/AuthPage.tsx";
import ContentManagerPage from "../../pages/ContentManagerPage.tsx";
import CoursePage from "../../pages/CoursePage.tsx";
import DashboardPage from "../../pages/DashboardPage.tsx";
import ExamResultsPage from "../../pages/ExamResultsPage.tsx";
import HomePage from "../../pages/HomePage.tsx";
import LeaderboardPage from "../../pages/LeaderboardPage.tsx";
import LearningPathPage from "../../pages/LearningPathPage.tsx";
import MessagesPage from "../../pages/MessagesPage.tsx";
import OnboardingPage from "../../pages/OnboardingPage.tsx";
import ParentPortalPage from "../../pages/ParentPortalPage.tsx";
import StudentProfilePage from "../../pages/StudentProfilePage.tsx";
import SubjectDetailPage from "../../pages/SubjectDetailPage.tsx";
import SubjectCreatePage from "../../pages/SubjectCreatePage.tsx";
import CourseCreatePage from "../../pages/CourseCreatePage.tsx";
import { CourseDetailPage } from "../../pages/CourseDetailPage.tsx";
import TeacherArenaPage from "../../pages/TeacherArenaPage.tsx";
import TeacherSubjectPage from "../../pages/TeacherSubjectPage.tsx";
import TeacherCoursesPage from "../../pages/TeacherCoursesPage.tsx";
import TeacherExamResultsPage from "../../pages/TeacherExamResultsPage.tsx";
import TeacherLeaderboardPage from "../../pages/TeacherLeaderboardPage.tsx";
import TeacherLearningPathPage from "../../pages/TeacherLearningPathPage.tsx";
import TeacherMessagesPage from "../../pages/TeacherMessagesPage.tsx";
import TeacherOnboardingPage from "../../pages/TeacherOnboardingPage.tsx";
import TeacherProfilePage from "../../pages/TeacherProfilePage.tsx";
import { withProtectedRoute } from "./ProtectedRoute";
import { getUserRole } from "../../core/http";

export interface RouteEntry {
  kind: "public" | "workspace";
  component: ComponentType;
}

const publicRoute = (component: ComponentType): RouteEntry => ({ kind: "public", component });
const workspaceRoute = (component: ComponentType): RouteEntry => ({ kind: "workspace", component });

// Protected components for different roles
const ProtectedStudentLearningPath = withProtectedRoute(LearningPathPage, {
  allowedRoles: ["STUDENT"],
});
const ProtectedStudentCourse = withProtectedRoute(CoursePage, {
  allowedRoles: ["STUDENT"],
});
const ProtectedStudentOnboarding = withProtectedRoute(OnboardingPage, {
  allowedRoles: ["STUDENT"],
});
const ProtectedStudentArena = withProtectedRoute(ArenaPage, {
  allowedRoles: ["STUDENT"],
});
const ProtectedStudentLeaderboard = withProtectedRoute(LeaderboardPage, {
  allowedRoles: ["STUDENT"],
});
const ProtectedStudentMessages = withProtectedRoute(MessagesPage, {
  allowedRoles: ["STUDENT"],
});
const ProtectedStudentExams = withProtectedRoute(ExamResultsPage, {
  allowedRoles: ["STUDENT"],
});
const ProtectedStudentProfile = withProtectedRoute(StudentProfilePage, {
  allowedRoles: ["STUDENT"],
});
const ProtectedStudentDashboard = withProtectedRoute(DashboardPage, {
  allowedRoles: ["STUDENT"],
});

// Protected components for teacher
const ProtectedTeacherLearningPath = withProtectedRoute(TeacherLearningPathPage, {
  allowedRoles: ["TEACHER"],
});
const ProtectedTeacherSubjects = withProtectedRoute(TeacherSubjectPage, {
  allowedRoles: ["TEACHER"],
});
const ProtectedTeacherOnboarding = withProtectedRoute(TeacherOnboardingPage, {
  allowedRoles: ["TEACHER"],
});
const ProtectedTeacherArena = withProtectedRoute(TeacherArenaPage, {
  allowedRoles: ["TEACHER"],
});
const ProtectedTeacherLeaderboard = withProtectedRoute(TeacherLeaderboardPage, {
  allowedRoles: ["TEACHER"],
});
const ProtectedTeacherMessages = withProtectedRoute(TeacherMessagesPage, {
  allowedRoles: ["TEACHER"],
});
const ProtectedTeacherExams = withProtectedRoute(TeacherExamResultsPage, {
  allowedRoles: ["TEACHER"],
});
const ProtectedTeacherProfile = withProtectedRoute(TeacherProfilePage, {
  allowedRoles: ["TEACHER"],
});

// Protected subject detail page
const ProtectedSubjectDetail = withProtectedRoute(SubjectDetailPage, {
  allowedRoles: ["TEACHER"],
});

// Protected subject create page
const ProtectedSubjectCreate = withProtectedRoute(SubjectCreatePage, {
  allowedRoles: ["TEACHER"],
});

// Protected course pages
const ProtectedCoursesList = withProtectedRoute(TeacherCoursesPage, {
  allowedRoles: ["TEACHER"],
});
const ProtectedCourseDetail = withProtectedRoute(CourseDetailPage, {
  allowedRoles: ["TEACHER"],
});

// Protected course create page
const ProtectedCourseCreate = withProtectedRoute(CourseCreatePage, {
  allowedRoles: ["TEACHER"],
});

// Protected components for parent
const ProtectedParentPortal = withProtectedRoute(ParentPortalPage, {
  allowedRoles: ["PARENT"],
});

// Protected components for admin
const ProtectedAdminAnalytics = withProtectedRoute(AdminAnalyticsPage, {
  allowedRoles: ["ADMIN"],
});
const ProtectedContentManager = withProtectedRoute(ContentManagerPage, {
  allowedRoles: ["ADMIN"],
});

export const pageRegistry: Record<string, RouteEntry> = {
  "/": publicRoute(HomePage),

  "/login": publicRoute(AuthPage),
  "/auth": publicRoute(AuthPage),
  "/signup": publicRoute(AuthPage),

  // Generic routes (for backward compatibility, with role-based redirects)
  "/dashboard": workspaceRoute(
    withProtectedRoute(DashboardPage, {
      allowedRoles: ["STUDENT", "TEACHER", "PARENT", "ADMIN"],
    }),
  ),
  "/learning-path": workspaceRoute(
    withProtectedRoute(LearningPathPage, {
      allowedRoles: ["STUDENT", "TEACHER"],
    }),
  ),
  "/course": workspaceRoute(
    withProtectedRoute(CoursePage, {
      allowedRoles: ["STUDENT", "TEACHER"],
    }),
  ),
  "/onboarding": workspaceRoute(
    withProtectedRoute(OnboardingPage, {
      allowedRoles: ["STUDENT", "TEACHER"],
    }),
  ),
  "/arena": workspaceRoute(
    withProtectedRoute(ArenaPage, {
      allowedRoles: ["STUDENT", "TEACHER"],
    }),
  ),
  "/leaderboard": workspaceRoute(
    withProtectedRoute(LeaderboardPage, {
      allowedRoles: ["STUDENT", "TEACHER"],
    }),
  ),
  "/messages": workspaceRoute(
    withProtectedRoute(MessagesPage, {
      allowedRoles: ["STUDENT", "TEACHER"],
    }),
  ),
  "/exams": workspaceRoute(
    withProtectedRoute(ExamResultsPage, {
      allowedRoles: ["STUDENT", "TEACHER"],
    }),
  ),
  "/exam-results": workspaceRoute(
    withProtectedRoute(ExamResultsPage, {
      allowedRoles: ["STUDENT", "TEACHER"],
    }),
  ),
  "/profile": workspaceRoute(
    withProtectedRoute(StudentProfilePage, {
      allowedRoles: ["STUDENT", "TEACHER"],
    }),
  ),

  // Student routes (all protected)
  "/student": workspaceRoute(ProtectedStudentLearningPath),
  "/student/home": workspaceRoute(ProtectedStudentLearningPath),
  "/student/learning-path": workspaceRoute(ProtectedStudentLearningPath),
  "/student/course": workspaceRoute(ProtectedStudentCourse),
  "/student/onboarding": workspaceRoute(ProtectedStudentOnboarding),
  "/student/arena": workspaceRoute(ProtectedStudentArena),
  "/student/leaderboard": workspaceRoute(ProtectedStudentLeaderboard),
  "/student/messages": workspaceRoute(ProtectedStudentMessages),
  "/student/exams": workspaceRoute(ProtectedStudentExams),
  "/student/profile": workspaceRoute(ProtectedStudentProfile),

  // Teacher routes (all protected)
  "/teacher": workspaceRoute(ProtectedTeacherLearningPath),
  "/teacher/home": workspaceRoute(ProtectedTeacherLearningPath),
  "/teacher/learning-path": workspaceRoute(ProtectedTeacherLearningPath),
  "/teacher/subjects": workspaceRoute(ProtectedTeacherSubjects),
  "/teacher/subjects/create": workspaceRoute(ProtectedSubjectCreate),
  "/teacher/courses": workspaceRoute(ProtectedCoursesList),
  "/teacher/courses/create": workspaceRoute(ProtectedCourseCreate),
  "/teacher/courses/:courseId": workspaceRoute(ProtectedCourseDetail),
  "/teacher/courses/:courseId/edit": workspaceRoute(ProtectedCourseDetail),
  "/teacher/onboarding": workspaceRoute(ProtectedTeacherOnboarding),
  "/teacher/arena": workspaceRoute(ProtectedTeacherArena),
  "/teacher/leaderboard": workspaceRoute(ProtectedTeacherLeaderboard),
  "/teacher/messages": workspaceRoute(ProtectedTeacherMessages),
  "/teacher/exams": workspaceRoute(ProtectedTeacherExams),
  "/teacher/profile": workspaceRoute(ProtectedTeacherProfile),

  // Parent routes (protected)
  "/parent": workspaceRoute(ProtectedParentPortal),

  // Admin routes (protected)
  "/content-manager": workspaceRoute(ProtectedContentManager),
  "/admin-analytics": workspaceRoute(ProtectedAdminAnalytics),
};
