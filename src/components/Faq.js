import React from "react";
import faq from "../assets/images/DC-FAQ-COVER.png";
import Accordion from "./Accordion";
import fb from "../assets/images/fb.png";
import ig from "../assets/images/ig.png";
import blog from "../assets/images/blog2.png";
import cod from "../assets/images/cod.PNG";
import flags from "../assets/images/flags.PNG";
import exchange from "../assets/images/exchange.png";

class Faq extends React.Component {
  render() {
    return (
      <div>
        <div className="faq-sec">
          <div className="faq-header" />
          <div className="faq-container">
            <div className="faq-width">
              <div className="faq-text-header">
                <h2>
                  Maybe we've already answer your question, here's our FAQ
                </h2>
              </div>
              <div className="faq-text-subs">
                <h3>General</h3>
              </div>
              <div className="col-md-12 faq-flex">
                <div className="col-md-6 ">
                  <div className="accordion">
                    <Accordion
                      title="Where are the Decathlon stores in Philippines?"
                      info="As of now, the only store we have is located at 2F, Bridgeway Exit, Festival Mall Alabang, Muntinlupa, City."
                    />
                    <Accordion
                      title="What will be your store hours?"
                      info="Our store is open from 9am to 10pm, daily."
                    />
                    <Accordion
                      title="Is there a way to test your products for size before we purchase them?"
                      info="No, unfortunately we cannot! However, you can always check our size guides for your reference or visit our store if you are not sure about your measurements and sizes."
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="accordion">
                    <Accordion
                      title="What are the methods of payment?"
                      info="We accept Debit Cards, Over the Counter (e.g. 7-11, Bank Deposits, GCash, Dragon Pay) and Cash on Delivery."
                    />
                    <Accordion
                      title="Do you offer printing for apparel or customised kits?"
                      info="Yes, we do offer printing but only in-store."
                    />
                  </div>
                </div>
              </div>
              <div className="faq-text-subs">
                <h3>Delivery</h3>
              </div>
              <div className="col-md-12 faq-flex">
                <div className="col-md-6 ">
                  <div className="accordion">
                    <Accordion
                      title="How do I track my order? "
                      info="To track your order, simply visit this website (https://www.ninjavan.co/en-ph/), click 'Track My Order' then enter the tracking number that was sent to you via Email and/or SMS. If you did not receive any information about your tracking number, please contact our customer happiness team so we can assist you."
                    />
                    <Accordion
                      title="The order delivery was attempted at a time when I was not at the delivery address. What happens next? "
                      info="If for any reason that you are not available to receive the order, please call Ninja Van to reschedule the delivery. If you still fail to receive your order after three consecutive reschedules, the courier will return your parcel to the store for you to pick up."
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="accordion">
                    <Accordion
                      title="Can I change my delivery address after an order has been confirmed?"
                      info="That will depend on the status of your order, please call us immediately. "
                    />
                    <Accordion
                      title="My order got lost and confirmed by the courier, what will I do?"
                      info="Satisfied or Satisfied -  If ever we didn't contact you regarding the lost parcel, please call or email immediately."
                    />
                  </div>
                </div>
              </div>
              <div className="faq-text-subs">
                <h3>Product Availability</h3>
              </div>
              <div className="col-md-12 faq-flex">
                <div className="col-md-6 ">
                  <div className="accordion">
                    <Accordion
                      title="I would like to buy a Decathlon product that you don’t currently have stocks, can I exchange it with other products?"
                      info="Please refer to our Exchange and Refund policy for more information."
                    />
                  </div>
                </div>
              </div>
              <div className="faq-text-subs">
                <h3>Loyalty Cards and Gift Cards</h3>
              </div>
              <div className="col-md-12 faq-flex">
                <div className="col-md-6 ">
                  <div className="accordion">
                    <Accordion
                      title="Will my existing Loyalty card or Membership number work on Decathlon.ph?"
                      info="Of course, you can either use it in-store and online purchase. For any more questions, don't hesitate to contact our customer happiness team - contact.philippines@decathlon.com. For urgent matters, you can call us at 02 123 4567. "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-ex"/>
        <footer className="ffaq">
          <div className="footer-main faq-footer">
            <div className="row">
              <div className="col-md-4 footer-info">
                <h4>Customer Service</h4>
                <ul>
                  <li>
                    <a href="http://www.decathlon.ph/c/81-contact-our-team">Contact Us</a>
                  </li>
                  <li>
                    <a href="https://www.decathlon.ph/c/1-delivery">Delivery</a>
                  </li>
                  <li>
                    <a href="https://www.decathlon.ph/c/39-questions">FAQ</a>
                  </li>
                  <li>
                    <a href="https://www.decathlon.ph/c/65-return-and-exchange">
                      Return and Exchange
                    </a>
                  </li>
                  <li>
                    <a href="https://www.decathlon.ph/content/size_guide/sizeguide_en.html">
                      Sizes Guide
                    </a>
                  </li>
                  <li>
                    <a href="https://www.decathlon.ph/c/68-payment-method">
                      Payment Method
                    </a>
                  </li>
                  <li>
                    <a href="https://www.decathlon.ph/c/73-click-and-collect">
                      Click and Collect
                    </a>
                  </li>
                  <li>
                    <a href="https://www.decathlon.ph/c/84-workshop">Workshop</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 social-links">
                <h4>Discover Decathlon</h4>
                <ul>
                  <li>
                    <a href="http://corporate.decathlon.com/en/who-are-we/about-us/">About Us</a>
                  </li>
                  <li>
                    <a href="https://www.decathlon.ph/c/63-careers-phils">Careers</a>
                  </li>
                  <li>
                    <a href="https://www.decathlon.ph/c/3-terms-and-conditions-of-use">
                      Terms and Condtions
                    </a>
                  </li>
                  <li>
                    <a href="https://www.decathlon.ph/c/45-privacy-policy">
                      Our Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 footer-subscribe">
                <h4>Payment Options</h4>
                <img src={cod} alt="cod" className="faq-cod responsive"/>
                <h4>Find us on</h4>
                <div className="faq-socialmedia">
                 <ul>
                  <li>
                    <a href="https://www.facebook.com/DecathlonPH"><img src={fb}/></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/decathlon.ph/"><img src={ig}/></a>
                  </li>
                  <li>
                    <a href="https://www.juandecathlon.com">
                     <img src={blog} className="responsive"/>
                    </a>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-footer-bottom">
              <img src={flags}/>
          </div>
        </footer>
      </div>
    );
  }
}

export default Faq;
