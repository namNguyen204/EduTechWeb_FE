import type { JSX } from "react";

import React from "react";
import { authService } from "../services/auth.service";
import { setUserSession, setAccessToken } from "../core/http";
import type { LoginRequest } from "../types/request";
import "../styles/pages/AuthPage.scss";

function AuthPage(): JSX.Element {
  const urlParams = new URLSearchParams(window.location.search);
  const tabParam = urlParams.get("tab");
  const [activeTab, setActiveTab] = React.useState(
    tabParam === "signup" ? "signup" : "login",
  );
  const [role, setRole] = React.useState("student");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const loginPayload: LoginRequest = {
        email,
        password,
      };

      const response = await authService.login(loginPayload);

      // Save access token
      setAccessToken(response.accessToken);

      // Prepare user session with email as fullName fallback
      const userSession = {
        userId: response.user.id,
        email: response.user.email,
        role: response.user.role,
        fullName: response.user.fullName || response.user.email,
        avatarUrl: response.user.avatarUrl,
      };

      // Save user session
      setUserSession(userSession);

      // Redirect based on role
      const redirectPath =
        response.user.role === "TEACHER" ? "/teacher/home" : "/student/home";
      window.location.href = redirectPath;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Login failed. Please try again.";
      setError(errorMessage);
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // TODO: Implement signup logic when API is ready
    setError("Sign up functionality coming soon");
  };

  return (
    <div className="auth-page">
      <section className="auth-left">
        <div className="auth-brand">
          <span className="logo-mark" />
          <span>BachKhoaViet</span>
        </div>

        <div className="auth-copy">
          <h1>Empowering K-12 with AI-driven learning.</h1>
          <p>
            Join thousands of students unlocking their full potential through
            personalized educational paths designed by artificial intelligence.
          </p>
        </div>

        <div className="auth-students">
          <div className="auth-avatars">
            <span />
            <span />
            <span />
          </div>
          <p>Over 50,000 students learning today</p>
        </div>
      </section>

      <section className="auth-right">
        <div className="auth-card">
          <h2>
            {activeTab === "login"
              ? "Welcome back, Scholar!"
              : "Join BachKhoaViet!"}
          </h2>
          <p className="auth-subtitle">
            {activeTab === "login"
              ? "Access your personalized AI-powered educational dashboard."
              : "Create your account and start your learning journey today."}
          </p>

          {activeTab === "login" && (
            <div className="auth-role-selector">
              <button
                type="button"
                className={`auth-role-option ${role === "student" ? "active" : ""}`}
                onClick={() => setRole("student")}
              >
                👨‍🎓 Student
              </button>
              <button
                type="button"
                className={`auth-role-option ${role === "teacher" ? "active" : ""}`}
                onClick={() => setRole("teacher")}
              >
                👨‍🏫 Teacher
              </button>
            </div>
          )}

          <div className="auth-tabs">
            <button
              className={activeTab === "login" ? "active" : ""}
              onClick={() => {
                setActiveTab("login");
                setError("");
              }}
            >
              Login
            </button>
            <button
              className={activeTab === "signup" ? "active" : ""}
              onClick={() => {
                setActiveTab("signup");
                setError("");
              }}
            >
              Sign Up
            </button>
          </div>

          {error && <div className="auth-error">{error}</div>}

          <button className="social-btn">
            <span>G</span>
            Continue with Google
          </button>
          <button className="social-btn">
            <span>f</span>
            Continue with Facebook
          </button>

          <div className="auth-divider">
            <span />
            <p>or continue with email</p>
            <span />
          </div>

          <form onSubmit={activeTab === "login" ? handleLogin : handleSignup}>
            {activeTab === "signup" && (
              <>
                <label>Full Name</label>
                <div className="field">
                  <i>👤</i>
                  <input
                    type="text"
                    placeholder="Nguyen Van A"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
              </>
            )}

            <label>Email Address</label>
            <div className="field">
              <i>✉</i>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="field-head">
              <label>Password</label>
              {activeTab === "login" && <a href="#">Forgot password?</a>}
            </div>
            <div className="field">
              <i>🔒</i>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i>◉</i>
            </div>

            {activeTab === "signup" && (
              <>
                <label>Confirm Password</label>
                <div className="field">
                  <i>🔒</i>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <i>◉</i>
                </div>
              </>
            )}

            <button
              type="submit"
              className="auth-submit"
              disabled={isLoading}
              style={{ opacity: isLoading ? 0.6 : 1, cursor: isLoading ? "not-allowed" : "pointer" }}
            >
              {isLoading ? (
                activeTab === "login" ? "Logging in..." : "Creating Account..."
              ) : activeTab === "login" ? (
                "Log In →"
              ) : (
                "Create Account →"
              )}
            </button>
          </form>

          <p className="auth-signup">
            {activeTab === "login" ? (
              <>
                Don't have an account?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("signup");
                    setError("");
                  }}
                >
                  Create an account
                </a>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("login");
                    setError("");
                  }}
                >
                  Log in
                </a>
              </>
            )}
          </p>

          <div className="auth-links">
            <a href="#">Terms of Service</a>
            <span>•</span>
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Support</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AuthPage;
