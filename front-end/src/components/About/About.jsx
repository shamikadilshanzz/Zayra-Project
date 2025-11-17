import React from 'react';
import abo from './About.module.css';

const About = () => {
  return (
    <div className={abo.aboutPage}>
      <br></br>
      <section className={abo.hero}>
        <div className={abo.heroContent}>
          <h1 className={abo.heroTitle}>About Zayra</h1>
          <p className={abo.heroSubtitle}>
            Your trusted destination for cutting-edge technology and premium products
          </p>
        </div>
      </section>

      <div className={abo.container}>
        <section className={abo.section}>
          <div className={abo.sectionContent}>
            <div className={abo.textContent}>
              <h2 className={abo.sectionTitle}>Our Story</h2>
              <p className={abo.paragraph}>
                Founded with a vision to revolutionize online shopping, Zayra has been at the 
                forefront of delivering exceptional technology products to customers worldwide. 
                Since our inception, we've built a reputation for quality, innovation, and 
                unmatched customer service.
              </p>
              <p className={abo.paragraph}>
                What started as a small venture has grown into a trusted platform where 
                technology enthusiasts and everyday consumers alike find the latest gadgets, 
                premium accessories, and cutting-edge devices that enhance their digital lifestyle.
              </p>
            </div>
            <div className={abo.imageContent}>
              <img 
                src="/assets/Images/Products-Images/shop.jpg" 
                className={abo.placeholderImage} 
                alt="Zayra shop" 
              />
            </div>
          </div>
        </section>

        <section className={abo.section}>
          <div className={abo.missionVision}>
            <div className={abo.missionCard}>
              <div className={abo.cardIcon}></div>
              <h3 className={abo.cardTitle}>Our Mission</h3>
              <p className={abo.cardText}>
                To make cutting-edge technology accessible to everyone by providing 
                high-quality products at competitive prices, backed by exceptional 
                customer service and seamless shopping experiences.
              </p>
            </div>
            <div className={abo.visionCard}>
              <div className={abo.cardIcon}></div>
              <h3 className={abo.cardTitle}>Our Vision</h3>
              <p className={abo.cardText}>
                To become the world's most trusted technology retailer, known for 
                innovation, reliability, and creating meaningful connections between 
                people and the technology that empowers them.
              </p>
            </div>
          </div>
        </section>

        <section className={abo.section}>
          <h2 className={abo.sectionTitle}>Our Values</h2>
          <div className={abo.valuesGrid}>
            <div className={abo.valueItem}>
              <div className={abo.valueIcon}>✨</div>
              <h4 className={abo.valueTitle}>Quality First</h4>
              <p className={abo.valueText}>
                We carefully curate every product to ensure it meets our high standards 
                for quality and performance.
              </p>
            </div>
            <div className={abo.valueItem}>
              <div className={abo.valueIcon}>🤝</div>
              <h4 className={abo.valueTitle}>Customer Focus</h4>
              <p className={abo.valueText}>
                Your satisfaction is our priority. We go above and beyond to ensure 
                every customer has an exceptional experience.
              </p>
            </div>
            <div className={abo.valueItem}>
              <div className={abo.valueIcon}>💡</div>
              <h4 className={abo.valueTitle}>Innovation</h4>
              <p className={abo.valueText}>
                We stay ahead of technology trends to bring you the latest and most 
                innovative products in the market.
              </p>
            </div>
          </div>
        </section>

        <section className={abo.statsSection}>
          <div className={abo.statsGrid}>
            <div className={abo.statItem}>
              <div className={abo.statNumber}>500K+</div>
              <div className={abo.statLabel}>Happy Customers</div>
            </div>
            <div className={abo.statItem}>
              <div className={abo.statNumber}>10K+</div>
              <div className={abo.statLabel}>Products</div>
            </div>
            <div className={abo.statItem}>
              <div className={abo.statNumber}>50+</div>
              <div className={abo.statLabel}>Countries Served</div>
            </div>
            <div className={abo.statItem}>
              <div className={abo.statNumber}>99.8%</div>
              <div className={abo.statLabel}>Customer Satisfaction</div>
            </div>
          </div>
        </section>

        <section className={abo.section}>
          <h2 className={abo.sectionTitle}>Meet Our Leadership</h2>
          <div className={abo.teamGrid}>
            <div className={abo.teamMember}>
              <div className={abo.memberImage}>
                <span>CEO</span>
                <img 
                    src="/assets/Images/Products-Images/CEO.jpg" 
                    className={abo.memberImage} 
                    alt="Zayra shop" 
                />
                
              </div>
              <h4 className={abo.memberName}>Alex Johnson</h4>
              <p className={abo.memberRole}>Chief Executive Officer</p>
              <p className={abo.memberBio}>
                Visionary leader with 15+ years in technology retail, driving innovation 
                and customer-centric growth.
              </p>
            </div>
            <div className={abo.teamMember}>
              <div className={abo.memberImage}>
                <span>CTO</span>
                <img 
                    src="/assets/Images/Products-Images/CTO.jpg" 
                    className={abo.memberImage} 
                    alt="Zayra shop" 
                />
              </div>
              <h4 className={abo.memberName}>Sarah Chen</h4>
              <p className={abo.memberRole}>Chief Technology Officer</p>
              <p className={abo.memberBio}>
                Tech innovator focused on creating seamless digital experiences and 
                cutting-edge e-commerce solutions.
              </p>
            </div>
            <div className={abo.teamMember}>
              <div className={abo.memberImage}>
                <span>COO</span>
                <img 
                    src="/assets/Images/Products-Images/COO.jpg" 
                    className={abo.memberImage} 
                    alt="Zayra shop" 
                />
              </div>
              <h4 className={abo.memberName}>Michael Rodriguez</h4>
              <p className={abo.memberRole}>Chief Operations Officer</p>
              <p className={abo.memberBio}>
                Operations expert ensuring efficient supply chain management and 
                exceptional customer service delivery.
              </p>
            </div>
          </div>
        </section>

        <section className={abo.whyChooseUs}>
          <h2 className={abo.sectionTitle}>Why Choose Zayra?</h2>
          <div className={abo.featuresGrid}>
            <div className={abo.feature}>
              <div className={abo.featureIcon}>🛡️</div>
              <h4 className={abo.featureTitle}>Secure Shopping</h4>
              <p className={abo.featureText}>
                Shop with confidence using our secure payment systems and data protection.
              </p>
            </div>
            <div className={abo.feature}>
              <div className={abo.featureIcon}>🚚</div>
              <h4 className={abo.featureTitle}>Fast Delivery</h4>
              <p className={abo.featureText}>
                Quick and reliable shipping with tracking to get your products when you need them.
              </p>
            </div>
            <div className={abo.feature}>
              <div className={abo.featureIcon}>↩️</div>
              <h4 className={abo.featureTitle}>Easy Returns</h4>
              <p className={abo.featureText}>
                Hassle-free 30-day return policy with free return shipping on all orders.
              </p>
            </div>
          </div>
        </section>

        <section className={abo.ctaSection}>
          <div className={abo.ctaContent}>
            <h2 className={abo.ctaTitle}>Ready to Experience the Difference?</h2>
            <p className={abo.ctaText}>
              Join thousands of satisfied customers and discover why Zayra is the preferred 
              choice for technology enthusiasts worldwide.
            </p>
            <button className={abo.ctaButton}>Start Shopping Now</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
