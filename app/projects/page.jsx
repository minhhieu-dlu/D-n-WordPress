import { getProjects } from "../../lib/wp";

export const metadata = {
  title: "Dự án | Trần Minh Hiếu",
  description: "Danh sách dự án từ WordPress API của Trần Minh Hiếu"
};

export default async function ProjectsPage() {
  const projects = await getProjects(12);

  return (
    <main className="page">
      <section className="hero hero-it">
        <div className="container">
          <h1>Dự án</h1>
          <p>Những dự án tiêu biểu trong quá trình học tập và thực hành phát triển phần mềm</p>
        </div>
      </section>

      <section className="container section-block">
        <div className="grid grid-2">
          <article className="card">
            <h3>Xây dựng Bán Khóa Học Online</h3>
            <p>
              Dự án phát triển nền tảng bán khóa học trực tuyến với các chức năng
              quản lý khóa học, giỏ hàng, thanh toán và theo dõi tiến độ học.
            </p>
            <ul className="profile-list">
              <li><strong>Vai trò:</strong> Thiết kế và phát triển chức năng chính</li>
              <li><strong>Công nghệ:</strong> PHP, MySQL, HTML, CSS, JavaScript</li>
              <li><strong>Điểm nhấn:</strong> Tối ưu trải nghiệm người dùng và luồng đăng ký học</li>
            </ul>
          </article>

          <article className="card">
            <h3>App Xây dựng đề thi năm 2025</h3>
            <p>
              Ứng dụng hỗ trợ tạo và quản lý đề thi theo cấu trúc môn học,
              giúp giảng viên tiết kiệm thời gian xây dựng ngân hàng câu hỏi.
            </p>
            <ul className="profile-list">
              <li><strong>Vai trò:</strong> Phân tích yêu cầu và xây dựng chức năng cốt lõi</li>
              <li><strong>Công nghệ:</strong> JavaScript, cơ sở dữ liệu, giao diện web</li>
              <li><strong>Điểm nhấn:</strong> Quản lý câu hỏi linh hoạt theo mức độ và chủ đề</li>
            </ul>
          </article>
        </div>

        <div style={{ marginTop: 32 }} className="section-title">
          <h2>Dự án từ WordPress</h2>
          <p>Nội dung động đồng bộ từ REST API của WordPress</p>
        </div>

        <div className="grid grid-3">
          {projects.length === 0 && <article className="card">Chưa có dữ liệu dự án.</article>}
          {projects.map((p) => (
            <article key={p.id} className="card">
              <h3 dangerouslySetInnerHTML={{ __html: p.title?.rendered || "Dự án" }} />
              <p dangerouslySetInnerHTML={{ __html: p.excerpt?.rendered || "" }} />
              <span className="tag">ID: {p.id}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
