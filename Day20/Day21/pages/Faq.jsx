import React from "react";
import { Navbar , Footer } from "../components";

const faqData = [
  {
    question: "1. How do I place an order?",
    answer:
      "To place an order, follow these steps:\n1. Log in to your account or sign up if you are a new user.\n2. Browse the products and add items to your cart.\n3. Go to your cart, review your order, and proceed to checkout.\n4. Enter your delivery address and payment details.\n5. Confirm your order. You will receive an order confirmation via email.",
  },
  {
    question: "2. What payment methods do you accept?",
    answer:
      "We accept various payment methods, including credit cards, debit cards, and online payment gateways. You can choose your preferred payment method during the checkout process.",
  },
  {
    question: "3. How can I track my order?",
    answer:
      "Once your order is dispatched, you will receive a tracking link via email. You can click on the link to track the status and delivery time of your order.",
  },
  {
    question: "4. What is your return and refund policy?",
    answer:
      "We have a hassle-free return and refund policy. If you are not satisfied with your order, contact our customer support within 7 days of delivery, and we will assist you with the return and refund process.",
  },
  {
    question: "5. How can I contact customer support?",
    answer:
      "If you have any questions or need assistance, you can reach our customer support team by emailing support@example.com or calling our helpline at +1-123-456-7890.",
  },
  {
    question: "6. What is the minimum order amount for delivery?",
    answer:
      "The minimum order amount for delivery may vary based on your location. Please check the minimum order requirement when placing an order in your area.",
  },
  {
    question: "7. Can I change my delivery address after placing an order?",
    answer:
      "Yes, you can change your delivery address before your order is dispatched. Please contact our customer support to request a change in your delivery address.",
  },
  {
    question: "8. Are there any delivery charges?",
    answer:
      "Delivery charges may apply based on your location and the total order amount. Please review the delivery charges when placing your order.",
  },
  {
    question: "9. How long does it take for an order to be delivered?",
    answer:
      "The delivery time may vary based on your location and the availability of products. We aim to deliver your order as quickly as possible and will provide estimated delivery times during the checkout process.",
  },
  {
    question: "10. Can I cancel my order?",
    answer:
      "You can cancel your order before it is dispatched. To cancel an order, please log in to your account, go to your order history, and select the order you wish to cancel.",
  },
  {
    question: "11. Do you offer discounts or promotions?",
    answer:
      "Yes, we offer discounts and promotions on various products. Keep an eye on our website and promotional emails for the latest deals and offers.",
  },
  {
    question: "12. Is my payment information secure?",
    answer:
      "We take the security of your payment information seriously. We use secure payment gateways and encryption to protect your data during transactions.",
  }
  
];

const FAQ = () => {
  return (
    <>
      <Navbar />
    <div>
      <div className="container my-3 py-3">
        <h1 className="text-center">Frequently Asked Questions</h1>
        <hr />
        <div className="row">
          <div className="col-md-8 offset-md-2">
            {faqData.map((item, index) => (
              <div key={index} className="container my-5">
                <h5>{item.question}</h5>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default FAQ;
