import type { PropsWithChildren } from "react";

interface PageContainerProps extends PropsWithChildren {
  title: string;
  subtitle: string;
}

export function PageContainer({ title, subtitle, children }: PageContainerProps) {
  return (
    <main className="page-container">
      <section className="page-container__surface">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="page-container__content">{children}</div>
      </section>
    </main>
  );
}
