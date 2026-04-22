import Link from "next/link";
import { getLatestPosts, getProjects } from "../lib/wp";

export const metadata = {
  title: "Trần Minh Hiếu | Sinh viên Kỹ thuật phần mềm Trường Đại Học Đà Lạt",
  description:
    "Portfolio Trần Minh Hiếu, sinh viên năm 4 CNTT Trường Đại Học Đà Lạt, chuyên Kỹ thuật phần mềm, WordPress, PHP và phát triển website chuyên nghiệp.",
  keywords: [
    "Trần Minh Hiếu",
    "portfolio",
    "kỹ thuật phần mềm",
    "công nghệ thông tin",
    "Đại học Đà Lạt",
    "WordPress",
    "PHP",
    "web developer",
    "front-end",
    "back-end"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  }
};

export default async function HomePage() {
  let posts = [];
  let projects = [];

  try {
    [posts, projects] = await Promise.all([getLatestPosts(3), getProjects(3)]);
  } catch {
    posts = [];
    projects = [];
  }

  return (
    <main className="page">
      <section className="hero hero-it">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="hero-badge">Portfolio IT Chuyên Nghiệp</p>
            <h1>Trần Minh Hiếu<br />Sinh viên Kỹ thuật phần mềm</h1>
            <p>
              Sinh viên năm 4, Đại học Đà Lạt, chuyên ngành Công nghệ Thông tin,
              phân hệ Kỹ thuật phần mềm. Tôi tập trung phát triển website và ứng dụng
              theo hướng thực tế, dễ dùng và dễ mở rộng.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">Xem dự án</a>
              <a href="#contact" className="btn btn-ghost">Liên hệ hợp tác</a>
            </div>
          </div>
          <div className="hero-panel card">
            <div className="hero-panel-title">Điểm nổi bật</div>
            <div className="hero-stat">
              <strong>12+</strong>
              <span>Dự án học tập và thực hành</span>
            </div>
            <div className="hero-stat">
              <strong>8+</strong>
              <span>Công nghệ đã ứng dụng</span>
            </div>
            <div className="hero-stat">
              <strong>2+</strong>
              <span>Năm tập trung phát triển IT</span>
            </div>
          </div>
        </div>
      </section>

      <section className="light-bg stats-section">
        <div className="container grid grid-3">
          <article className="card stat-card">
            <h2>3+</h2>
            <h4>Mảng nổi bật</h4>
            <p>Website, ứng dụng học tập và giao diện responsive.</p>
          </article>
          <article className="card stat-card">
            <h2>10+</h2>
            <h4>Kỹ năng cốt lõi</h4>
            <p>WordPress, PHP, MySQL, JavaScript, HTML, CSS.</p>
          </article>
          <article className="card stat-card">
            <h2>24/7</h2>
            <h4>Sẵn sàng</h4>
            <p>Sẵn sàng học hỏi, hợp tác và phát triển sản phẩm mới.</p>
          </article>
        </div>
      </section>

      <section className="section-block about-preview" id="about">
        <div className="container">
          <div className="section-title">
            <h2>Giới thiệu</h2>
            <p>Định hướng trở thành kỹ sư phần mềm có tư duy hệ thống và sản phẩm</p>
          </div>

          <div className="grid grid-2 about-grid">
            <article className="card">
              <h3>Tư duy kỹ thuật gắn với bài toán thực tế</h3>
              <p>
                Tôi theo đuổi hướng phát triển phần mềm có cấu trúc rõ ràng, tối ưu cho
                việc bảo trì, nâng cấp và vận hành ổn định.
              </p>
              <p>
                Điểm mạnh của tôi là chuyển yêu cầu thành giải pháp kỹ thuật, kết hợp
                WordPress, PHP, JavaScript và quy trình làm việc bài bản.
              </p>
            </article>

            <div className="about-highlights">
              <article className="card">
                <h4>Xây dựng hệ thống</h4>
                <p>Thiết kế cấu trúc website rõ ràng, thuận tiện mở rộng theo nhu cầu.</p>
              </article>
              <article className="card">
                <h4>Tối ưu hiệu năng</h4>
                <p>Tối ưu tải trang, hình ảnh, nội dung và trải nghiệm người dùng.</p>
              </article>
              <article className="card">
                <h4>Làm việc nhóm</h4>
                <p>Chủ động trao đổi tiến độ, tiếp nhận phản hồi và cải thiện liên tục.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="light-bg section-block" id="skills">
        <div className="container">
          <div className="section-title">
            <h2>Kỹ năng kỹ thuật</h2>
            <p>Bộ kỹ năng dùng để xây dựng website chuyên nghiệp và ứng dụng thực tế</p>
          </div>

          <div className="grid grid-2 skills-grid">
            <div>
              <div className="skill-item"><div className="skill-name"><span>WordPress Theme Development</span><span>92%</span></div><div className="skill-bar"><div className="skill-progress" style={{ width: "92%" }} /></div></div>
              <div className="skill-item"><div className="skill-name"><span>PHP & MySQL</span><span>85%</span></div><div className="skill-bar"><div className="skill-progress" style={{ width: "85%" }} /></div></div>
              <div className="skill-item"><div className="skill-name"><span>HTML, CSS, Responsive UI</span><span>90%</span></div><div className="skill-bar"><div className="skill-progress" style={{ width: "90%" }} /></div></div>
            </div>
            <div>
              <div className="skill-item"><div className="skill-name"><span>JavaScript & jQuery</span><span>82%</span></div><div className="skill-bar"><div className="skill-progress" style={{ width: "82%" }} /></div></div>
              <div className="skill-item"><div className="skill-name"><span>Thiết kế UI/UX cho website</span><span>80%</span></div><div className="skill-bar"><div className="skill-progress" style={{ width: "80%" }} /></div></div>
              <div className="skill-item"><div className="skill-name"><span>Triển khai và bảo trì</span><span>78%</span></div><div className="skill-bar"><div className="skill-progress" style={{ width: "78%" }} /></div></div>
            </div>
          </div>

          <div className="tech-stack">
            {['WordPress','PHP','MySQL','JavaScript','HTML5','CSS3','Git','Figma'].map((item) => (
              <span key={item} className="stack-pill">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block" id="projects">
        <div className="container">
          <div className="section-title">
            <h2>Dự án nổi bật</h2>
            <p>Các dự án tiêu biểu tôi đã thực hiện trong quá trình học tập và thực hành</p>
          </div>

          <div className="grid grid-3 project-grid">
            {projects.length === 0 && <article className="card">Chưa có dữ liệu dự án từ WordPress API.</article>}
            {projects.map((project) => (
              <article key={project.id} className="card project-card">
                <div className="project-placeholder">Portfolio Project</div>
                <h3 dangerouslySetInnerHTML={{ __html: project.title?.rendered || "Dự án" }} />
                <p dangerouslySetInnerHTML={{ __html: project.excerpt?.rendered || "" }} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="light-bg section-block">
        <div className="container">
          <div className="section-title">
            <h2>Quy trình làm việc</h2>
            <p>Triển khai rõ ràng từ ý tưởng đến sản phẩm hoàn chỉnh</p>
          </div>

          <div className="grid grid-4 process-grid">
            <article className="card"><h4>01. Phân tích yêu cầu</h4><p>Xác định mục tiêu, người dùng mục tiêu và phạm vi chức năng.</p></article>
            <article className="card"><h4>02. Thiết kế giải pháp</h4><p>Xây dựng wireframe, kiến trúc dữ liệu và hướng triển khai.</p></article>
            <article className="card"><h4>03. Phát triển và kiểm thử</h4><p>Code chuẩn, tối ưu responsive, kiểm thử tính năng và hiệu năng.</p></article>
            <article className="card"><h4>04. Bàn giao và bảo trì</h4><p>Hướng dẫn sử dụng, backup dữ liệu và hỗ trợ vận hành.</p></article>
          </div>
        </div>
      </section>

      <section className="section-block" id="contact">
        <div className="container">
          <div className="cta-box card">
            <h2>Bạn cần một website chuyên nghiệp cho cá nhân hoặc doanh nghiệp?</h2>
            <p>Tôi sẵn sàng hợp tác để xây dựng sản phẩm có tính ứng dụng, rõ ràng và vận hành ổn định.</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">Gửi email ngay</Link>
              <a href="tel:0384521704" className="btn btn-ghost">Gọi trực tiếp</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
