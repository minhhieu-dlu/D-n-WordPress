import { getProjects } from "../../lib/wp";

export const metadata = {
  title: "Dự án | Trần Minh Hiếu",
  description: "Danh sách dự án từ WordPress API của Trần Minh Hiếu"
};

export default async function ProjectsPage() {
  const projects = await getProjects(12);

  return (
    <main className="page container">
      <section className="hero">
        <h1>Dự án</h1>
        <p>Các dự án được đồng bộ từ WordPress qua REST API.</p>
      </section>

      <section className="grid grid-3">
        {projects.length === 0 && <article className="card">Chưa có dữ liệu dự án.</article>}
        {projects.map((p) => (
          <article key={p.id} className="card">
            <h3 dangerouslySetInnerHTML={{ __html: p.title?.rendered || "Dự án" }} />
            <p dangerouslySetInnerHTML={{ __html: p.excerpt?.rendered || "" }} />
            <span className="tag">ID: {p.id}</span>
          </article>
        ))}
      </section>
    </main>
  );
}
