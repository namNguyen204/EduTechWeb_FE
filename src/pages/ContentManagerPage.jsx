const items = [
  {
    title: "Algebra Basics: Quadratic Equations",
    sub: "12:45 • High School Math",
    type: "Video",
    status: "Published",
    date: "Oct 12, 2023",
  },
  {
    title: "Mid-term Quiz: Functions",
    sub: "20 Questions • 30 Minutes",
    type: "Quiz",
    status: "Draft",
    date: "Oct 14, 2023",
  },
  {
    title: "Polynomial Vocabulary Flashcards",
    sub: "45 Cards",
    type: "Flashcards",
    status: "Processing",
    date: "Oct 15, 2023",
  },
];

function ContentManagerPage() {
  return (
    <div className="cm-page">
      <header className="cm-topbar">
        <div className="cm-brand">
          <span className="logo-mark" />
          <strong>BachKhoaViet</strong>
        </div>

        <nav className="cm-nav">
          <a href="/content-manager" className="active">
            Content Manager
          </a>
          <a href="#">Analytics</a>
          <a href="#">Classroom</a>
        </nav>

        <div className="cm-top-actions">
          <div className="cm-search">Search lessons...</div>
          <span>🔔</span>
          <span className="avatar">🧑</span>
        </div>
      </header>

      <div className="cm-layout">
        <aside className="cm-sidebar">
          <h3>Content Library</h3>
          <p>Manage Subject Folders</p>

          <nav>
            <a href="#" className="active">
              All Content
            </a>
            <a href="#">Mathematics</a>
            <a href="#">Science</a>
            <a href="#">English</a>
            <a href="#">History</a>
          </nav>

          <button>📁 New Folder</button>
        </aside>

        <main className="cm-main">
          <div className="cm-breadcrumb">
            Home › Mathematics › Grade 10 - Algebra
          </div>

          <section className="cm-header-row">
            <div>
              <h1>Content Management</h1>
              <p>Create AI-powered lessons, quizzes, and digital flashcards.</p>
            </div>

            <div className="cm-header-actions">
              <button className="ghost">✦ AI Generate</button>
              <button className="primary">＋ Create Content</button>
            </div>
          </section>

          <section className="cm-tabs">
            <a href="#" className="active">
              All Items
            </a>
            <a href="#">Video Lessons</a>
            <a href="#">Quizzes</a>
            <a href="#">Flashcards</a>
          </section>

          <section className="dropzone">
            <div className="upload-icon">📄</div>
            <h3>Drag and drop video files here</h3>
            <p>Or click to browse from your computer. Max file size 500MB.</p>
          </section>

          <section className="cm-table-card">
            <table>
              <thead>
                <tr>
                  <th />
                  <th>CONTENT</th>
                  <th>TYPE</th>
                  <th>STATUS</th>
                  <th>DATE</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.title}>
                    <td>○</td>
                    <td>
                      <strong>{item.title}</strong>
                      <small>{item.sub}</small>
                    </td>
                    <td>{item.type}</td>
                    <td>
                      <span className={`status ${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </td>
                    <td>{item.date}</td>
                    <td>⋮</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="cm-table-footer">
              <p>Showing 1 to 3 of 12 items</p>
              <div>
                <button>‹</button>
                <button className="active">1</button>
                <button>2</button>
                <button>›</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default ContentManagerPage;
