import Link from 'next/link';

export default function Header() {
  return (
    <header className="main-header">
      {/* Header Top Section */}
      <div className="header-top">
        <div className="top-inner clearfix">
          <div className="left-column pull-left">
            <ul className="info clearfix">
              <li>
                <i className="fa-solid fa-location-dot"></i>High School of Mathematics Dr. Petar Beron
              </li>
              <li>
                <i className="fa-regular fa-clock"></i>Mon - Sat  9.00 - 18.00
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <Link href="tel:+359884686895">
                  +359 884 6868 95 {/* Using <a> to wrap the phone number */}
                </Link>
              </li>
            </ul>
          </div>
          <div className="right-column pull-right">
            <ul className="social-links clearfix">
              <li>
                <Link href="https://www.facebook.com/profile.php?id=100089376942456">
                  <i className="fab fa-facebook-f"></i>{/* Wrap the icon in <a> tag */}
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/__nenchev__/">
                  <i className="fab fa-instagram"></i> {/* Wrap the icon in <a> tag */}
                </Link>
              </li>
              <li>
                <Link href="https://www.tiktok.com/@influence_media_bg?lang=en">
                  <i className="fa-brands fa-tiktok"></i>{/* Wrap the icon in <a> tag */}
                </Link>
              </li>
            </ul>
            <div className="sign-box">
              <Link href="/signin">
                <i className="fas fa-user"></i> Sign In {/* Wrap the text in <a> */}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Header Lower Section */}
      <div className="header-lower">
        <div className="outer-box">
          <div className="main-box">
            <div className="logo-box">
              <figure className="logo">
                <Link href="/">
                  <img src="/assets/images/logo.png" alt="Nenchev Real Estate" /> {/* Wrap logo in <a> */}
                </Link>
              </figure>
            </div>
            <div className="menu-area clearfix">
              <nav className="main-menu navbar-expand-md navbar-light">
                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                  <ul className="navigation clearfix">
                    <li>
                      <Link href="/">
                        <span>Home</span>{/* Wrap the span in <a> */}
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <span>Services</span>{/* Wrap the span in <a> */}
                      </Link>
                    </li>
                    <li>
                      <Link href="/property-grid">
                        <span>Property</span> {/* Wrap the span in <a> */}
                      </Link>
                    </li>
                    <li>
                      <Link href="/agents-grid">
                        <span>Agents</span> {/* Wrap the span in <a> */}
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <span>Blog</span> {/* Wrap the span in <a> */}
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <span>About</span> {/* Wrap the span in <a> */}
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <span>Contact</span> {/* Wrap the span in <a> */}
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="btn-box">
              <Link href="/add-listing">
                <a className="theme-btn btn-one"><span>+</span>Add Listing</a> {/* Wrap the button link in <a> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
