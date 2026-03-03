import './App.css'

function App() {
  return (
    <div className="page-wrapper">
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <h1 className="site-title">Furkan Akkamiş</h1>
            <p className="site-subtitle">Web Geliştirici · Öğrenci</p>
          </div>

          <nav
            className="site-nav"
            aria-label="Ana navigasyon"
          >
            <ul className="nav-list">
              <li>
                <a href="#about">Hakkımda</a>
              </li>
              <li>
                <a href="#projects">Projeler</a>
              </li>
              <li>
                <a href="#contact">İletişim</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main
        id="main-content"
        className="site-main container"
      >
        <section
          id="about"
          aria-labelledby="about-heading"
          className="section"
        >
          <div className="section-header">
            <h2 id="about-heading">Hakkımda</h2>
          </div>
          <article className="about-content">
            <img
              src="https://via.placeholder.com/160x160.png?text=FA"
              alt="Furkan Akkamiş'in portre illüstrasyonu"
              className="profile-image"
            />
            <div>
              <p>
                Merhaba! Ben Furkan Akkamiş. Web Lab kapsamında modern web
                teknolojileriyle arayüz geliştiren bir bilgisayar mühendisliği
                öğrencisiyim. Semantik HTML, erişilebilirlik ve React ile
                kullanıcı dostu arayüzler üretmeyi hedefliyorum.
              </p>
              <p>
                Özellikle front-end geliştirme, bileşen tabanlı mimari ve iyi
                UX prensipleriyle ilgileniyorum. Aşağıda son üzerinde
                çalıştığım projeleri ve bana ulaşmak için kullanabileceğiniz
                iletişim formunu bulabilirsiniz.
              </p>
            </div>
          </article>
        </section>

        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="section"
        >
          <div className="section-header">
            <h2 id="projects-heading">Projeler</h2>
            <p className="section-description">
              Web Lab kapsamında ve kişisel olarak üzerinde çalıştığım bazı
              projeler.
            </p>
          </div>

          <div
            className="projects-grid"
            aria-label="Projeler listesi"
          >
            <article className="project-card">
              <h3>React Portföy Sayfası</h3>
              <p>
                Vite + React + TypeScript kullanarak geliştirdiğim bu sayfa,
                semantik HTML5 ve temel erişilebilirlik kurallarına uygun
                olarak tasarlandı.
              </p>
              <ul>
                <li>Semantik iskelet (header, nav, main, section, footer)</li>
                <li>Heading hiyerarşisine uygun başlık yapısı</li>
                <li>Form doğrulama öznitelikleri ve hata mesaj alanları</li>
              </ul>
            </article>

            <article className="project-card">
              <h3>Basit Todo Uygulaması</h3>
              <p>
                React Hooks kullanarak durum yönetimi pratiği yaptığım, görev
                ekleme ve filtreleme özelliklerine sahip bir todo uygulaması.
              </p>
              <ul>
                <li>useState ile durum yönetimi</li>
                <li>Klavyeyle erişilebilir buton ve input bileşenleri</li>
                <li>Basit ve okunabilir bileşen yapısı</li>
              </ul>
            </article>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="section section-contact"
        >
          <div className="section-header">
            <h2 id="contact-heading">İletişim</h2>
            <p className="section-description">
              Projelerim hakkında konuşmak veya iş birliği için formu
              doldurabilirsiniz.
            </p>
          </div>

          <form
            className="contact-form"
            aria-describedby="contact-form-description"
          >
            <p
              id="contact-form-description"
              className="sr-only"
            >
              Tüm alanlar zorunludur. Ad soyad en az 3 karakter, mesaj en az 10
              karakter olmalıdır.
            </p>

            <div className="form-field">
              <label htmlFor="name">Ad Soyad</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                minLength={3}
                autoComplete="name"
                aria-describedby="name-error"
              />
              <small
                id="name-error"
                className="error-message"
                role="alert"
                aria-live="polite"
              ></small>
            </div>

            <div className="form-field">
              <label htmlFor="email">E-posta</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                aria-describedby="email-error"
              />
              <small
                id="email-error"
                className="error-message"
                role="alert"
                aria-live="polite"
              ></small>
            </div>

            <div className="form-field">
              <label htmlFor="subject">Konu</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                minLength={3}
                aria-describedby="subject-error"
              />
              <small
                id="subject-error"
                className="error-message"
                role="alert"
                aria-live="polite"
              ></small>
            </div>

            <div className="form-field">
              <label htmlFor="message">Mesajınız</label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={4}
                aria-describedby="message-error"
              ></textarea>
              <small
                id="message-error"
                className="error-message"
                role="alert"
                aria-live="polite"
              ></small>
            </div>

            <button type="submit" className="submit-button">
              Mesajı Gönder
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Furkan Akkamiş. Tüm hakları saklıdır.</p>
          <ul
            className="footer-links"
            aria-label="Harici bağlantılar"
          >
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App
