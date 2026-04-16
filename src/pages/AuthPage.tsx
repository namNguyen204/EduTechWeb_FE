import type { JSX } from "react";

import React from "react";
import "../styles/pages/AuthPage.scss";

function AuthPage(): JSX.Element {
  const urlParams = new URLSearchParams(window.location.search);
  const tabParam = urlParams.get("tab");
  const [activeTab, setActiveTab] = React.useState(
    tabParam === "signup" ? "signup" : "login",
  );
  const [role, setRole] = React.useState("student");

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

          <div className="auth-tabs">
            <button
              className={activeTab === "login" ? "active" : ""}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={activeTab === "signup" ? "active" : ""}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
          </div>

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

          {activeTab === "signup" && (
            <>
              <label>Full Name</label>
              <div className="field">
                <i>👤</i>
                <input type="text" placeholder="Nguyen Van A" />
              </div>
            </>
          )}

          <label>Email Address</label>
          <div className="field">
            <i>✉</i>
            <input type="email" placeholder="name@example.com" />
          </div>

          <div className="field-head">
            <label>Password</label>
            {activeTab === "login" && <a href="#">Forgot password?</a>}
          </div>
          <div className="field">
            <i>🔒</i>
            <input type="password" placeholder="••••••••" />
            <i>◉</i>
          </div>

          {activeTab === "signup" && (
            <>
              <label>Confirm Password</label>
              <div className="field">
                <i>🔒</i>
                <input type="password" placeholder="••••••••" />
                <i>◉</i>
              </div>
            </>
          )}

          <a
            className="auth-submit"
            href={
              activeTab === "login"
                ? role === "teacher"
                  ? "/teacher/home"
                  : "/student/home"
                : role === "teacher"
                  ? "/teacher/onboarding"
                  : "/student/onboarding"
            }
          >
            {activeTab === "login" ? "Log In →" : "Create Account →"}
          </a>

          <p className="auth-signup">
            {activeTab === "login" ? (
              <>
                Don't have an account?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("signup");
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
