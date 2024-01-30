import { useState } from "react";
import star from "../assets/images/icon-star.svg";
import close from "../assets/images/icon-minus.svg";
import open from "../assets/images/icon-plus.svg";
import faqs from "../constants/index";
const FaqContent = () => {
  const toggleButton = (index) => {
    const newButtons = [...activate];
    newButtons[index] = !newButtons[index];
    setActivate(newButtons);
    totalActivate();
  };
  const totalActivate = () => {
    activate.map((total) => {
      total ? setPadding(padding + 1) : setPadding(padding);
    });
  };
  const [activate, setActivate] = useState([true, false, false, false]);
  const [padding, setPadding] = useState(0);
  console.log(activate);
  return (
    <>
      <div className="box__">
        <img src={star} alt="star-faq" />
        <h1 className="title">FAQs</h1>
      </div>
      <ul className="list-faq">
        {faqs.map((faq, index) => (
          <li className={padding > 1 ? "padding-title" : ""} key={index}>
            <div className="content-title">
              <p>{faq.title}</p>
              {
                <img
                  src={activate[index] ? close : open}
                  alt="icon-close"
                  onClick={() => toggleButton(index)}
                />
              }
            </div>
            {activate[index] ? (
              <p className="content-desc">{faq.content}</p>
            ) : (
              <></>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FaqContent;
