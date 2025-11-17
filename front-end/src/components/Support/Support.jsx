import React, { useState } from 'react';
import { Search, MessageCircle, Phone, Mail, FileText, Clock, CheckCircle, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import styles from './Support.module.css';

const SupportPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "How do I track my order?",
      answer: "You can track your order by logging into your account and visiting the 'Orders' section. You'll receive a tracking number via email once your order ships. You can also use our order lookup tool if you don't have an account."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Products must be in their original condition and packaging. Digital products and personalized items are non-returnable. Return shipping is free for defective items, otherwise a small fee applies."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days. International shipping varies by location, typically 7-14 business days. Free shipping is available on orders over $50."
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "Orders can be modified or cancelled within 1 hour of placement. After this window, orders enter processing and cannot be changed. Contact our support team immediately if you need to make changes."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by destination. Some restrictions may apply to certain products. Import duties and taxes may be applicable depending on your country's regulations."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <CheckCircle size={16} />
            24/7 Support Available
          </div>
          <h1 className={styles.heroTitle}>How can we help you?</h1>
          <p className={styles.heroSubtitle}>
            Find answers to your questions or get in touch with our support team
          </p>
          <div className={styles.searchBox}>
            <Search className={styles.searchIcon} size={20} />
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search for help articles, orders, or products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Quick Actions</h2>
          <div className={styles.quickActions}>
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>
                <FileText size={24} />
              </div>
              <h3 className={styles.actionTitle}>Track Your Order</h3>
              <p className={styles.actionDescription}>
                Get real-time updates on your order status and estimated delivery time
              </p>
            </div>
            
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>
                <Clock size={24} />
              </div>
              <h3 className={styles.actionTitle}>Return & Refund</h3>
              <p className={styles.actionDescription}>
                Start a return request or check the status of your existing return
              </p>
            </div>
            
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>
                <MessageCircle size={24} />
              </div>
              <h3 className={styles.actionTitle}>Live Chat</h3>
              <p className={styles.actionDescription}>
                Connect with our support team instantly for immediate assistance
              </p>
            </div>
            
            {/* <div className={styles.actionCard}>
              <div className={styles.actionIcon}>
                <ExternalLink size={24} />
              </div>
              <h3 className={styles.actionTitle}>Product Manuals</h3>
              <p className={styles.actionDescription}>
                Download user guides, setup instructions, and technical documentation
              </p>
            </div> */}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={styles.faqButton}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === index && (
                  <div className={styles.faqAnswer}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <MessageCircle size={32} />
              </div>
              <h3 className={styles.contactTitle}>Live Chat</h3>
              <p className={styles.contactDescription}>
                Get instant help from our support team
              </p>
              <button className={styles.contactAction}>
                Start Chat
              </button>
            </div>
            
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <Mail size={32} />
              </div>
              <h3 className={styles.contactTitle}>Email Support</h3>
              <p className={styles.contactDescription}>
                We'll respond within 24 hours
              </p>
              <button className={styles.contactAction}>
                Send Email
              </button>
            </div>
            
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <Phone size={32} />
              </div>
              <h3 className={styles.contactTitle}>Phone Support</h3>
              <p className={styles.contactDescription}>
                Mon-Fri 9AM-6PM EST
              </p>
              <button className={styles.contactAction}>
                Call Now
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SupportPage;