import PropTypes from "prop-types";
import Open from "../assets/Faq/Open.svg"
import Close from "../assets/Faq/Close.svg"
import './styles/FaqItem.css';

function FAQItem({ faq, index, toggleFAQ, activeIndex }) {
  return (
    <div className="faq-item">
      <div
        className={`faq-question ${activeIndex === index ? 'active' : ''} poppins-medium`}
        onClick={() => toggleFAQ(index)}>
        {faq.question}
        <span>{activeIndex === index ?
          <img src={Close} alt="Close"/> :
          <img src={Open} alt="Open"/>
        }
        </span>
      </div>
      {activeIndex === index && <div className="faq-answer poppins-medium primary-gray">{faq.answer}</div>}
    </div>
  );
}

FAQItem.propTypes = {
  faq: PropTypes.object,
  index: PropTypes.number,
  toggleFAQ: PropTypes.func,
  activeIndex: PropTypes.number,
};

export default FAQItem;