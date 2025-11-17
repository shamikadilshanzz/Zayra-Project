import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Zayra</h3>
            <p className={styles.description}>
              Your trusted online shopping destination for quality products at unbeatable prices.
            </p>
           

            <div className={styles.socialMedia}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <FaTwitter size={18} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <FaLinkedinIn size={18} />
              </a>
            </div>

          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Customer Service</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.footerLink}>Contact Us</a></li>
              <li><a href="#" className={styles.footerLink}>FAQ</a></li>
              <li><a href="#" className={styles.footerLink}>Shipping Info</a></li>
              <li><a href="#" className={styles.footerLink}>Returns & Exchanges</a></li>
              <li><a href="#" className={styles.footerLink}>Size Guide</a></li>
              <li><a href="#" className={styles.footerLink}>Track Your Order</a></li>
            </ul>
            
            <h4 className={styles.subTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.footerLink}>About Us</a></li>
              <li><a href="#" className={styles.footerLink}>Careers</a></li>
              <li><a href="#" className={styles.footerLink}>Blog</a></li>
              <li><a href="#" className={styles.footerLink}>Gift Cards</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Stay Updated</h3>
            <p className={styles.newsletterText}>
              Subscribe to get special offers, free giveaways, and exclusive deals.
            </p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.emailInput}
                required
              />
              <button type="submit" className={styles.subscribeBtn}>
                Subscribe
              </button>
            </form>
            
            <h4 className={styles.subTitle}>Legal</h4>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.footerLink}>Privacy Policy</a></li>
              <li><a href="#" className={styles.footerLink}>Terms of Service</a></li>
              <li><a href="#" className={styles.footerLink}>Cookie Policy</a></li>
              <li><a href="#" className={styles.footerLink}>Accessibility</a></li>
            </ul>
            
            <div className={styles.paymentMethods}>
              <span className={styles.paymentTitle}>We Accept:</span>
              <div className={styles.paymentIcons}>
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-mastercard"></i>
                <i className="fab fa-cc-amex"></i>
                <i className="fab fa-cc-paypal"></i>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              &copy; 2024 Zayra. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <a href="#" className={styles.bottomLink}>Sitemap</a>
              <a href="#" className={styles.bottomLink}>Support</a>
              <a href="#" className={styles.bottomLink}>Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;