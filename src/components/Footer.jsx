import { Link } from 'react-router-dom';

/**
 * KOMPONEN REUSABLE: Footer (src/components/Footer.jsx)
 * - Menggunakan tag semantic <footer> (Pertemuan 1 Slide 9)
 */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <div className="brand-logo footer-brand">
            <div className="brand-text">
              <span className="brand-title">DapurKanda</span>
              <span className="brand-badge">Coder Institute HMIF FT-UH</span>
            </div>
          </div>
          <p className="footer-desc">
            Website Percontohan (Reference Project) &amp; Portal Panduan Modul
            Project Akhir Divisi Website.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigasi Aplikasi</h4>
          <ul className="footer-links">
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/resep">Eksplor Resep</Link></li>
            <li><Link to="/resep/52803">Contoh Detail Resep</Link></li>
            <li><Link to="/favorit">Koleksi Favorit</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Sumber Data &amp; Dokumen</h4>
          <ul className="footer-links">
            <li>
              Public API:{' '}
              <a
                href="https://www.themealdb.com/api.php"
                target="_blank"
                rel="noreferrer"
              >
                TheMealDB REST API ↗
              </a>
            </li>
            <li>
              <Link to="/panduan">Buka Modul &amp; Kriteria Penilaian →</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          &copy; 2026 Coder Institute HMIF FT-UH (Universitas Hasanuddin). Dibuat
          dengan React (Vite), React Router, dan Vanilla CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
