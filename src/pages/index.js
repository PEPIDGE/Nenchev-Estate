import Layout from '../components/Layout'
import Link from 'next/link'
import '../styles/css/global.css'; 

export default function Home() {
  return (
    <Layout>
      {/* Banner Section */}
      <section className="banner-style-two centred">
        <div className="banner-carousel owl-theme owl-carousel owl-nav-none">
          <div className="slide-item">
            <div className="image-layer" style={{backgroundImage: "url(/assets/images/banner/banner-2.jpg)"}}></div>
            <div className="auto-container">
              <div className="content-box">
                <h2>Search Properties for Sale and To Rent</h2>
                <p>Amet consectetur adipisicing elit sed do eiusmod.</p>
              </div> 
            </div>
          </div>
          {/* Add more slide items here */}
        </div>
      </section>

      {/* Search Field Section */}
      <section className="search-field-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="search-field">
              <div className="tabs-box">
                <div className="tab-btn-box">
                  <ul className="tab-btns tab-buttons centred clearfix">
                    <li className="tab-btn active-btn" data-tab="#tab-1">BUY</li>
                    <li className="tab-btn" data-tab="#tab-2">RENT</li>
                  </ul>
                </div>
                <div className="tabs-content info-group">
                  <div className="tab active-tab" id="tab-1">
                    <div className="inner-box">
                      <div className="top-search">
                        <form action="index.html" method="post" className="search-form">
                          {/* Form fields go here */}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="feature-style-two sec-pad">
        <div className="auto-container">
          <div className="sec-title">
            <h5>Features</h5>
            <h2>Featured Property</h2>
          </div>
          <div className="three-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
            {/* Feature blocks go here */}
          </div>
          <div className="more-btn centred"><Link href="/property-list" className="theme-btn btn-one">View All Listing</Link></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section alternate-2 centred" style={{backgroundImage: "url(/assets/images/background/cta-1.jpg)"}}>
        <div className="auto-container">
          <div className="inner-box clearfix">
            <div className="text">
              <h2>Looking to Buy a New Property or <br />Sell an Existing One?</h2>
            </div>
            <div className="btn-box">
              <Link href="/property-details" className="theme-btn btn-three">Rent Properties</Link>
              <Link href="/" className="theme-btn btn-one">Buy Properties</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

