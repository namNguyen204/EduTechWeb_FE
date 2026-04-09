import { PageContainer } from "../../shared/ui/PageContainer";

export function AuthPage() {
  return (
    <PageContainer
      title="Sign in / Sign up"
      subtitle="Mẫu giao diện auth đã migrate sang TypeScript và TailwindCSS, sẵn sàng tích hợp API xác thực."
    >
      <form className="grid gap-4 md:max-w-md">
        <label className="grid gap-1 text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            placeholder="you@example.com"
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-slate-300 transition focus:ring-2"
          />
        </label>

        <label className="grid gap-1 text-sm font-medium text-slate-700">
          Password
          <input
            type="password"
            placeholder="••••••••"
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-slate-300 transition focus:ring-2"
          />
        </label>

        <button
          type="button"
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Đăng nhập
        </button>
      </form>
    </PageContainer>
  );
}
