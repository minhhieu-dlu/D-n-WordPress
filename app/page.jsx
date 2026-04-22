import Link from "next/link";
import { getLatestPosts, getProjects } from "../lib/wp";

export const metadata = {
  title: "Trang chủ | Portfolio Trần Minh Hiếu",
  description: "Sinh viên năm 4 Đại học Đà Lạt, chuyên ngành CNTT - Kỹ thuật phần mềm"
};

export default async function HomePage() {
  const [posts, projects] = await Promise.all([getLatestPosts(3), getProjects(3)]);

  return (
    <main className="page">
      <section className="hero">
        <div className="container">
          <h1>Xin chào, mình là Trần Minh Hiếu</h1>
          <p>
            Sinh viên năm 4, Đại học Đà Lạt, chuyên ngành Công nghệ Thông tin,
            phân hệ Kỹ thuật phần mềm. Đây là phiên bản Headless để deploy trên Vercel.
          </p>
        </div>
      </section>

      <section className="container">
        <h2>Dự án nổi bật</h2>
        <div className="grid grid-3">
          {projects.length === 0 && <article className="card">Chưa có dữ liệu dự án từ WordPress API.</article>}
          {projects.map((p) => (
            <article key={p.id} className="card">
              <h3 dangerouslySetInnerHTML={{ __html: p.title?.rendered || "Dự án" }} />
              <p dangerouslySetInnerHTML={{ __html: p.excerpt?.rendered || "" }} />
            </article>
          ))}
        </div>
      </section>

      <section className="container" style={{ marginTop: 28 }}>
        <h2>Bài viết mới</h2>
        <div className="grid grid-3">
          {posts.map((post) => (
            <article key={post.id} className="card">
              <h3 dangerouslySetInnerHTML={{ __html: post.title?.rendered || "Bài viết" }} />
              <p dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered || "" }} />
            </article>
          ))}
        </div>
      </section>

      <section className="container" style={{ marginTop: 28 }}>
        <Link href="/projects" className="tag">Xem tất cả dự án</Link>
        <Link href="/contact" className="tag">Liên hệ hợp tác</Link>
      </section>
    </main>
  );
}
