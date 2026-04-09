import { PageContainer } from "../../shared/ui/PageContainer";

const roleCards = [
  {
    title: "Student Workspace",
    description: "Lộ trình học tập, bài tập, bảng xếp hạng và kết quả thi.",
    href: "/student",
    cta: "Vào trang học sinh",
  },
  {
    title: "Teacher Workspace",
    description: "Quản lý lớp học, nội dung môn học và phân tích hiệu suất.",
    href: "/teacher",
    cta: "Vào trang giáo viên",
  },
  {
    title: "Parent Portal",
    description: "Giám sát tiến độ học tập và nhận thông báo từ giáo viên.",
    href: "/parent",
    cta: "Vào cổng phụ huynh",
  },
];

export function HomeLandingPage() {
  return (
    <PageContainer
      title="EduTech platform"
      subtitle=""
    >
      <div className="grid gap-4 md:grid-cols-3">
        {roleCards.map((card) => (
          <article key={card.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-900">{card.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{card.description}</p>
            <a
              href={card.href}
              className="mt-4 inline-flex rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              {card.cta}
            </a>
          </article>
        ))}
      </div>
    </PageContainer>
  );
}
