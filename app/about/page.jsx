export const metadata = {
  title: "Giới thiệu | Trần Minh Hiếu",
  description: "Thông tin học vấn, kỹ năng và định hướng nghề nghiệp của Trần Minh Hiếu"
};

export default function AboutPage() {
  return (
    <main className="page">
      <section className="hero hero-it">
        <div className="container">
          <h1>Giới thiệu</h1>
          <p>Hồ sơ cá nhân và định hướng phát triển trong lĩnh vực Công nghệ thông tin</p>
        </div>
      </section>

      <section className="container section-block">
        <div className="grid grid-2">
          <article className="card">
            <h3>Giới thiệu bản thân</h3>
            <p>
              Tôi là Trần Minh Hiếu, sinh viên năm 4 tại Trường Đại học Đà Lạt,
              chuyên ngành Công nghệ Thông tin, phân hệ Kỹ thuật phần mềm.
            </p>
            <p>
              Mục tiêu của tôi là trở thành kỹ sư phần mềm có tư duy hệ thống,
              xây dựng các sản phẩm có giá trị sử dụng thực tế và dễ mở rộng.
            </p>
          </article>

          <article className="card">
            <h3>Thông tin học vấn</h3>
            <ul className="profile-list">
              <li><strong>Trường:</strong> Đại học Đà Lạt</li>
              <li><strong>Ngành:</strong> Công nghệ Thông tin</li>
              <li><strong>Phân hệ:</strong> Kỹ thuật phần mềm</li>
              <li><strong>Năm học hiện tại:</strong> Năm 4</li>
            </ul>
          </article>
        </div>

        <div className="grid grid-2" style={{ marginTop: 28 }}>
          <article className="card">
            <h3>Kỹ năng nổi bật</h3>
            <ul className="profile-list">
              <li>Phát triển website với WordPress, PHP, MySQL</li>
              <li>Xây dựng giao diện responsive bằng HTML, CSS, JavaScript</li>
              <li>Thiết kế cấu trúc dữ liệu và xử lý nghiệp vụ cơ bản</li>
              <li>Sử dụng Git để quản lý phiên bản và cộng tác nhóm</li>
            </ul>
          </article>

          <article className="card">
            <h3>Định hướng nghề nghiệp</h3>
            <p>
              Tôi định hướng theo mảng Web Development và Software Engineering,
              ưu tiên các dự án có tính ứng dụng thực tế trong giáo dục và kinh doanh.
            </p>
            <p>
              Tôi luôn duy trì tinh thần học hỏi công nghệ mới, nâng cao kỹ năng triển khai
              và cải thiện trải nghiệm người dùng trong từng sản phẩm.
            </p>
          </article>
        </div>

        <div className="card timeline-card" style={{ marginTop: 28 }}>
          <h3>Timeline học tập và kinh nghiệm dự án</h3>
          <div className="timeline-list">
            <div className="timeline-item"><span className="timeline-year">2022</span><div className="timeline-content"><h4>Bắt đầu ngành Công nghệ Thông tin</h4><p>Tập trung nền tảng lập trình, cấu trúc dữ liệu và tư duy giải quyết vấn đề.</p></div></div>
            <div className="timeline-item"><span className="timeline-year">2023</span><div className="timeline-content"><h4>Phát triển kỹ năng web</h4><p>Thực hành HTML, CSS, JavaScript, PHP và MySQL qua các bài tập hệ thống.</p></div></div>
            <div className="timeline-item"><span className="timeline-year">2024</span><div className="timeline-content"><h4>Dự án Xây dựng Bán Khóa Học Online</h4><p>Tham gia phân tích yêu cầu, xây dựng chức năng và tối ưu trải nghiệm người dùng.</p></div></div>
            <div className="timeline-item"><span className="timeline-year">2025</span><div className="timeline-content"><h4>App Xây dựng đề thi năm 2025</h4><p>Thiết kế chức năng quản lý đề thi, ngân hàng câu hỏi và luồng thao tác giáo viên.</p></div></div>
            <div className="timeline-item"><span className="timeline-year">Hiện tại</span><div className="timeline-content"><h4>Sinh viên năm 4</h4><p>Hoàn thiện portfolio, chuẩn bị thực tập và nâng cao năng lực phát triển sản phẩm phần mềm.</p></div></div>
          </div>
        </div>
      </section>
    </main>
  );
}
