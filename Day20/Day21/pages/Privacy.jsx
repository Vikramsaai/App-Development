// SecurityPrivacyPage.js
import React from "react";
import { Navbar , Footer } from "../components";

const SecurityPrivacyPage = () => {
  return (
    <>
        <Navbar />
    <div className="container my-5">
      <h2>Security & Privacy</h2>
      <p>
        Your security and privacy are important to us. We are committed to
        protecting your personal information and providing a secure shopping
        experience.
      </p>
      <h3>Security Measures</h3>
      <ul>
        <li>
          <strong>Secure Socket Layer (SSL) Encryption:</strong> We use SSL
          encryption to protect your personal information during transmission.
        </li>
        <li>
          <strong>Secure Payment Processing:</strong> We partner with trusted
          payment processors to ensure secure transactions.
        </li>
        <li>
          <strong>Regular Security Audits:</strong> Our website undergoes
          regular security audits to identify and address vulnerabilities.
        </li>
        <li>
          <strong>Password Protection:</strong> Your account password is
          securely stored using industry-standard hashing techniques.
        </li>
        <li>
          <strong>Two-Factor Authentication (2FA):</strong> Enable 2FA for an
          extra layer of account security.
        </li>
      </ul>

      <h3>Privacy Policy</h3>
      <p>
        We respect your privacy and do not share your personal information with
        third parties without your consent. 
      </p>

      <h3>Data Collection</h3>
      <p>
        We collect data to enhance your shopping experience, such as order
        history, preferences, and product recommendations. We never sell or
        share your personal data.
      </p>

      <h3>Cookies</h3>
      <p>
        We use cookies to improve website functionality and track user behavior.
        You can manage cookie preferences in your browser settings.
      </p>

      <p>
        This page provides an overview of our commitment to security and
        privacy. If you have any questions or concerns, please{" "}
        <a href="/contact">contact us</a>.
      </p>
    </div>
    <Footer />
    </>
  );
};

export default SecurityPrivacyPage;
