export const metadata = {
  title: "Liên hệ | Trần Minh Hiếu",
  description: "Kết nối với Trần Minh Hiếu qua email, GitHub và LinkedIn"
};

export default function ContactPage() {
  return (
    <main className="page">
      <section className="hero hero-it">
        <div className="container">
          <h1>Liên hệ</h1>
          <p>Kết nối để trao đổi dự án, cơ hội thực tập và hợp tác chuyên môn</p>
        </div>
      </section>

      <section className="container section-block">
        <div className="grid grid-2">
          <article className="card">
            <h3>Thông tin liên hệ</h3>
            <ul className="profile-list">
              <li><strong>Họ tên:</strong> Trần Minh Hiếu</li>
              <li><strong>Email:</strong> <a href="mailto:hieu5102004@gmail.com">hieu5102004@gmail.com</a></li>
              <li><strong>Điện thoại:</strong> <a href="tel:0384521704">0384521704</a></li>
              <li><strong>GitHub:</strong> <a href="https://github.com/minhhieu-dlu" target="_blank" rel="noreferrer">github.com/minhhieu-dlu</a></li>
              <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/minhhieu-dlu" target="_blank" rel="noreferrer">linkedin.com/in/minhhieu-dlu</a></li>
            </ul>
          </article>

          <article className="card">
            <h3>Để lại thông tin nhanh</h3>
            <form className="contact-form">
              <div className="form-group">
                <label>Họ và tên</label>
                <input type="text" placeholder="Nhập họ và tên" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Nhập email" />
              </div>
              <div className="form-group">
                <label>Nội dung trao đổi</label>
                <textarea rows="5" placeholder="Mô tả yêu cầu của bạn" />
              </div>
              <button type="button" className="btn btn-primary">Gửi thông tin</button>
            </form>
          </article>
        </div>
      </section>
    </main>
  );
}
