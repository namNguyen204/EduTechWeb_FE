import type { PropsWithChildren } from "react";

interface PageContainerProps extends PropsWithChildren {
  title: string;
  subtitle: string;
}

export function PageContainer({ title, subtitle, children }: PageContainerProps) {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">{subtitle}</p>
        <div className="mt-8">{children}</div>
      </section>
    </main>
  );
}
