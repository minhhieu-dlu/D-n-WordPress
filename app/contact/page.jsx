export const metadata = {
  title: "Liên hệ | Trần Minh Hiếu",
  description: "Kết nối với Trần Minh Hiếu qua email, GitHub và LinkedIn"
};

export default function ContactPage() {
  return (
    <main className="page container">
      <section className="hero">
        <h1>Liên hệ</h1>
        <p>Trao đổi dự án, cơ hội thực tập và hợp tác kỹ thuật.</p>
      </section>

      <section className="card">
        <p><strong>Email:</strong> <a href="mailto:hieu5102004@gmail.com">hieu5102004@gmail.com</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/minhhieu-dlu" target="_blank" rel="noreferrer">github.com/minhhieu-dlu</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/minhhieu-dlu" target="_blank" rel="noreferrer">linkedin.com/in/minhhieu-dlu</a></p>
      </section>
    </main>
  );
}
