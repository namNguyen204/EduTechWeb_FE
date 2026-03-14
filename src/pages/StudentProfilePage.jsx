import { useEffect, useRef, useState } from "react";
import { getAppLanguage, setAppLanguage } from "../utils/language";

function StudentProfilePage() {
  const [avatarPreview, setAvatarPreview] = useState("");
  const [language, setLanguage] = useState(getAppLanguage());
  const fileInputRef = useRef(null);

  const openAvatarPicker = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setAvatarPreview(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const syncLanguage = (event) => {
      setLanguage(event.detail || getAppLanguage());
    };

    window.addEventListener("app-language-change", syncLanguage);
    return () =>
      window.removeEventListener("app-language-change", syncLanguage);
  }, []);

  const handleLanguageChange = (event) => {
    const nextLanguage = event.target.value;
    setLanguage(nextLanguage);
    setAppLanguage(nextLanguage);
  };

  return (
    <div className="lp-page profile-page">
      <div className="sidebar-overlay"></div>
      <aside className="lp-sidebar">
        <a href="/student/home" className="lp-brand">
          <span className="logo-mark" />
          <div>
            <strong>BachKhoaViet</strong>
            <small>AI Educational Platform</small>
          </div>
        </a>

        <nav className="lp-nav">
          <a href="/student/home">Learning Path</a>
          <a href="/student/course">AI Scanner</a>
          <a href="/student/exams">Mock Exams</a>
          <a href="/student/arena">Gamification</a>
          <a href="/student/leaderboard">Analytics</a>
          <a href="/student/messages">Messages</a>
        </nav>

        <a href="/student/profile" className="lp-profile-shortcut active">
          ⚙ Profile & Settings
        </a>

        <article className="lp-upgrade">
          <p>PRO MEMBER</p>
          <h4>Get unlimited AI scans and detailed solutions.</h4>
          <button>Upgrade Now</button>
        </article>
      </aside>

      <main className="lp-main">
        <header className="lp-topbar">
          <div className="lp-topbar-left">
            <button
              className="sidebar-toggle"
              onClick={() => window.toggleSidebar()}
            >
              ☰
            </button>
          </div>
          <div className="lp-topbar-center">
            <div className="lp-search">
              Update profile details and settings...
            </div>
          </div>
          <div className="lp-actions">
            <a href="/student/course" className="scanner">
              🧠 AI Scanner
            </a>
            <span>🔔</span>
            <a href="/student/profile" className="lp-user">
              <div>
                <strong>Nam Nguyen</strong>
                <small>Grade 12 - Natural Sciences</small>
              </div>
              <div className="avatar profile-avatar-top">
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    alt="Student profile avatar"
                    className="avatar-image"
                  />
                ) : (
                  "🧑"
                )}
              </div>
            </a>
          </div>
        </header>

        <section className="profile-wrap">
          <article className="profile-card">
            <div className="profile-card-head">
              <h2>Profile & Settings</h2>
              <p>Edit student profile and personalize account experience.</p>
            </div>

            <form className="profile-form" action="#" method="post">
              <label>
                Full name
                <input type="text" defaultValue="Nam Nguyen" />
              </label>

              <label>
                Email
                <input type="email" defaultValue="nam.nguyen@example.com" />
              </label>

              <label>
                Phone number
                <input type="tel" defaultValue="0901 234 567" />
              </label>

              <label>
                Grade
                <select defaultValue="12 - Natural Sciences">
                  <option>10 - Basic</option>
                  <option>11 - Advanced</option>
                  <option>12 - Natural Sciences</option>
                </select>
              </label>

              <label>
                Address
                <textarea
                  rows="4"
                  defaultValue="District 1, Ho Chi Minh City"
                />
              </label>

              <div className="profile-actions">
                <button type="button" className="btn btn-muted">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>

            <section className="profile-settings">
              <h3>Account settings</h3>
              <div className="profile-settings-grid">
                <label className="profile-setting-item">
                  <span>Receive teacher notifications</span>
                  <input type="checkbox" defaultChecked />
                </label>

                <label className="profile-setting-item">
                  <span>Allow parents to track progress</span>
                  <input type="checkbox" defaultChecked />
                </label>

                <label className="profile-setting-item">
                  <span>Enable daily study reminders</span>
                  <input type="checkbox" defaultChecked />
                </label>

                <label>
                  Theme
                  <select defaultValue="Light">
                    <option>Light</option>
                    <option>System default</option>
                    <option>High contrast</option>
                  </select>
                </label>

                <label>
                  Language
                  <select value={language} onChange={handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="vi">Vietnamese</option>
                  </select>
                </label>
              </div>
            </section>
          </article>

          <aside className="profile-side-card">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="profile-avatar-input"
              onChange={handleAvatarChange}
            />
            <div className="avatar big profile-avatar-big">
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="Student profile avatar"
                  className="avatar-image"
                />
              ) : (
                "🧑"
              )}
            </div>
            <button
              type="button"
              className="btn btn-muted profile-avatar-button"
              onClick={openAvatarPicker}
            >
              Change profile photo
            </button>
            <h3>Nam Nguyen</h3>
            <p>Grade 12 student - Natural Sciences</p>
            <a href="/student/messages" className="btn btn-muted">
              Contact teacher
            </a>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default StudentProfilePage;
