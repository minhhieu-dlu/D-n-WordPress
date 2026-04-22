export const metadata = {
  title: "Giới thiệu | Trần Minh Hiếu",
  description: "Thông tin học vấn, kỹ năng và định hướng nghề nghiệp của Trần Minh Hiếu"
};

export default function AboutPage() {
  return (
    <main className="page container">
      <section className="hero">
        <h1>Giới thiệu</h1>
        <p>Trần Minh Hiếu - Sinh viên năm 4, Đại học Đà Lạt, Công nghệ Thông tin, Kỹ thuật phần mềm.</p>
      </section>

      <section className="card">
        <h3>Timeline học tập</h3>
        <p>2022: Bắt đầu ngành CNTT tại Đại học Đà Lạt.</p>
        <p>2024: Phát triển dự án Xây dựng Bán Khóa Học Online.</p>
        <p>2025: Xây dựng app tạo đề thi.</p>
      </section>
    </main>
  );
}
