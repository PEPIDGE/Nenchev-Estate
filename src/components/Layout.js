import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Nenchev - Real estate</title>
        <meta
          name="description"
          content="Nenchev Real Estate - Your trusted partner in finding your dream home"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="boxed_wrapper">
        {/* Preloader */}
        <div className="loader-wrap">
          <div className="preloader">
            <div className="preloader-close">
              <i className="far fa-times"></i>
            </div>
            <div id="handle-preloader" className="handle-preloader">
              <div className="animation-preloader">
                <div className="spinner"></div>
                <div className="txt-loading">
                  <span data-text-preloader="r" className="letters-loading">
                    r
                  </span>
                  <span data-text-preloader="e" className="letters-loading">
                    e
                  </span>
                  <span data-text-preloader="a" className="letters-loading">
                    a
                  </span>
                  <span data-text-preloader="l" className="letters-loading">
                    l
                  </span>
                  <span data-text-preloader="s" className="letters-loading">
                    s
                  </span>
                  <span data-text-preloader="h" className="letters-loading">
                    h
                  </span>
                  <span data-text-preloader="e" className="letters-loading">
                    e
                  </span>
                  <span data-text-preloader="d" className="letters-loading">
                    d
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <Header />

        {/* Main content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />

        {/* Scroll to top button */}
        <button className="scroll-top scroll-to-target" data-target="html">
          <span className="fal fa-angle-up"></span>
        </button>
      </div>
    </>
  );
}
