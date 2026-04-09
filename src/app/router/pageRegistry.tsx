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
import TeacherArenaPage from "../../pages/TeacherArenaPage.tsx";
import TeacherCoursePage from "../../pages/TeacherCoursePage.tsx";
import TeacherExamResultsPage from "../../pages/TeacherExamResultsPage.tsx";
import TeacherLeaderboardPage from "../../pages/TeacherLeaderboardPage.tsx";
import TeacherLearningPathPage from "../../pages/TeacherLearningPathPage.tsx";
import TeacherMessagesPage from "../../pages/TeacherMessagesPage.tsx";
import TeacherOnboardingPage from "../../pages/TeacherOnboardingPage.tsx";
import TeacherProfilePage from "../../pages/TeacherProfilePage.tsx";

export interface RouteEntry {
  kind: "public" | "workspace";
  component: ComponentType;
}

const publicRoute = (component: ComponentType): RouteEntry => ({ kind: "public", component });
const workspaceRoute = (component: ComponentType): RouteEntry => ({ kind: "workspace", component });

export const pageRegistry: Record<string, RouteEntry> = {
  "/": publicRoute(HomePage),

  "/login": publicRoute(AuthPage),
  "/auth": publicRoute(AuthPage),
  "/signup": publicRoute(AuthPage),

  "/dashboard": workspaceRoute(DashboardPage),
  "/learning-path": workspaceRoute(LearningPathPage),
  "/course": workspaceRoute(CoursePage),
  "/onboarding": workspaceRoute(OnboardingPage),
  "/arena": workspaceRoute(ArenaPage),
  "/leaderboard": workspaceRoute(LeaderboardPage),
  "/messages": workspaceRoute(MessagesPage),
  "/exams": workspaceRoute(ExamResultsPage),
  "/exam-results": workspaceRoute(ExamResultsPage),
  "/profile": workspaceRoute(StudentProfilePage),

  "/student": workspaceRoute(LearningPathPage),
  "/student/home": workspaceRoute(LearningPathPage),
  "/student/learning-path": workspaceRoute(LearningPathPage),
  "/student/course": workspaceRoute(CoursePage),
  "/student/onboarding": workspaceRoute(OnboardingPage),
  "/student/arena": workspaceRoute(ArenaPage),
  "/student/leaderboard": workspaceRoute(LeaderboardPage),
  "/student/messages": workspaceRoute(MessagesPage),
  "/student/exams": workspaceRoute(ExamResultsPage),
  "/student/profile": workspaceRoute(StudentProfilePage),

  "/teacher": workspaceRoute(TeacherLearningPathPage),
  "/teacher/home": workspaceRoute(TeacherLearningPathPage),
  "/teacher/learning-path": workspaceRoute(TeacherLearningPathPage),
  "/teacher/course": workspaceRoute(TeacherCoursePage),
  "/teacher/onboarding": workspaceRoute(TeacherOnboardingPage),
  "/teacher/arena": workspaceRoute(TeacherArenaPage),
  "/teacher/leaderboard": workspaceRoute(TeacherLeaderboardPage),
  "/teacher/messages": workspaceRoute(TeacherMessagesPage),
  "/teacher/exams": workspaceRoute(TeacherExamResultsPage),
  "/teacher/profile": workspaceRoute(TeacherProfilePage),

  "/parent": workspaceRoute(ParentPortalPage),
  "/content-manager": workspaceRoute(ContentManagerPage),
  "/admin-analytics": workspaceRoute(AdminAnalyticsPage),
};
