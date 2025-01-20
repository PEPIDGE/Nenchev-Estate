import Link from "next/link";
const Footer = () => {
  return (
    <footer className="main-footer">
      {/* Footer Top Section */}
      <div className="footer-top bg-color-2">
        <div className="auto-container">
          <div className="row clearfix">
            {/* About Section */}
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget about-widget">
                <div className="widget-title">
                  <h3>About</h3>
                </div>
                <div className="text">
                  <p>
                    Welcome to Nenchev estate, your one-stop destination for
                    finding your dream property. We provide reliable listings,
                    expert insights, and professional real estate services
                    tailored to your needs.
                  </p>
                  <p>
                    Explore properties, learn about the market, and connect
                    with our team to make your real estate journey seamless.
                  </p>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget ml-70">
                <div className="widget-title">
                  <h3>Services</h3>
                </div>
                <div className="widget-content">
                  <ul className="links-list class">
                    <li>
                      <Link href="/about">
                        About Us</Link>
                    </li>
                    <li>
                      <Link href="/services">
                        Our Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/property-grid">
                        Our Properties
                      </Link>
                    </li>
                    <li>
                      <Link href="/agents-grid">
                        Our Agents
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        Our Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Top News Section */}
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget post-widget">
                <div className="widget-title">
                  <h3>Top News</h3>
                </div>
                <div className="post-inner">
                  <div className="post">
                    <figure className="post-thumb">
                      <Link href="/blog-details">
                        
                          <img
                            src="/assets/images/resource/footer-post-1.jpg"
                            alt="Post Thumbnail"
                          />
                        
                      </Link>
                    </figure>
                    <h5>
                      <Link href="/blog-details">
                        5 Tips for First-Time Homebuyers
                      </Link>
                    </h5>
                    <p>Dec 10, 2024</p>
                  </div>
                  <div className="post">
                    <figure className="post-thumb">
                      <Link href="/blog-details">
                        
                          <img
                            src="/assets/images/resource/footer-post-2.jpg"
                            alt="Post Thumbnail"
                          />
                        
                      </Link>
                    </figure>
                    <h5>
                      <Link href="/blog-details">
                        Understanding the Real Estate Market
                      </Link>
                    </h5>
                    <p>Dec 8, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contacts Section */}
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget contact-widget">
                <div className="widget-title">
                  <h3>Contacts</h3>
                </div>
                <div className="widget-content">
                  <ul className="info-list clearfix">
                    <li>
                      <i className="fas fa-map-marker-alt"></i> High School of
                      Mathematics Dr. Petar Beron
                    </li>
                    <li>
                      <i className="fas fa-microphone"></i>
                      <Link href="tel:+359884686895">
                        +359 884 6868 95
                      </Link>
                    </li>
                    <li>
                      <i className="fas fa-envelope"></i>
                      <Link href="mailto:contact@mp-vision.com">
                        contact@mp-vision.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-box clearfix">
            <figure className="footer-logo">
              <Link href="/">
                
                  <img src="/assets/images/footer-logo.png" alt="Realshed Logo" />
                
              </Link>
            </figure>
            <div className="copyright pull-left">
              <p>
                <Link href="/">
                  MP Vision
                </Link>{" "}
                &copy; 2025 All Rights Reserved
              </p>
            </div>
            <ul className="footer-nav pull-right clearfix">
              <li>
                <Link href="/faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
