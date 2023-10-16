// TermsAndConditions.js
import { Navbar , Footer } from "../components";
import React from "react";

const TermsAndConditions = () => {
  return (
    <>
    <Navbar />
    <div className="container my-5">
      <h2>Terms and Conditions</h2>
      <p>
        These terms and conditions govern your use of our grocery application and services. By using our application, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms and conditions, please do not use our application.
      </p>

      <h4>1. Use of Our Application</h4>
      <p>
        The content of the application's pages is for your general information and use only. It is subject to change without notice.
      </p>

      <h4>2. Privacy Policy</h4>
      <p>
        Your use of our application is also governed by our Privacy Policy. Please review our Privacy Policy to understand our data collection and usage practices.
      </p>

      <h4>3. User Accounts</h4>
      <p>
        - When you create an account with our application, you are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
        - You must not share your login credentials with others.
      </p>

      <h4>4. Ordering and Payment</h4>
      <p>
        - You agree to provide accurate, current, and complete purchase and account information for all purchases made via our application.
        - We reserve the right to refuse or cancel your order at any time for certain reasons including but not limited to product availability, errors in the description or price of the product, or other reasons.
      </p>

      <h4>5. Intellectual Property</h4>
      <p>
        - This application contains material that is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics.
        - Reproduction is prohibited without prior written consent.
      </p>

      <h4>6. Limitation of Liability</h4>
      <p>
        - In no case shall our company, its directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers, or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages.
      </p>

      <h4>7. Governing Law</h4>
      <p>
        These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction.
      </p>

      <h4>8. Contact Us</h4>
      <p>
        If you have any questions about our terms and conditions, please contact us.
      </p>

      <p>Email us at: your-email@example.com</p>
    </div>
    <Footer />
    </>
  );
};

export default TermsAndConditions;
