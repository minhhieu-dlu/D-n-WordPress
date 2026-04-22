import Link from "next/link";

export default function NavBar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand">Trần Minh Hiếu | Portfolio IT</Link>
        <nav className="menu">
          <Link href="/">Trang chủ</Link>
          <Link href="/about">Giới thiệu</Link>
          <Link href="/projects">Dự án</Link>
          <Link href="/contact">Liên hệ</Link>
        </nav>
      </div>
    </header>
  );
}
