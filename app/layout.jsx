import "./globals.css";
import NavBar from "../components/NavBar";

export const metadata = {
  title: "Portfolio Trần Minh Hiếu",
  description: "Portfolio IT của Trần Minh Hiếu - Sinh viên năm 4 Đại học Đà Lạt"
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <NavBar />
        {children}
        <footer className="footer">
          <div className="container">© {new Date().getFullYear()} Trần Minh Hiếu</div>
        </footer>
      </body>
    </html>
  );
}
