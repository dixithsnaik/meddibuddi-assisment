import React, { useState } from "react";
import "./FreqentlyAskedQuestions.css";
function FreqentlyAskedQuestions({ data }) {
  console.log(data);

  let questions = [
    {
      question: "What is E-Commerce?",
      answer:
        "E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. These business transactions occur either as business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business.",
    },
    {
      question: "What are the types of E-Commerce?",
      answer:
        "There are six basic types of e-commerce — Business-to-Business (B2B), Business-to-Consumer (B2C), Consumer-to-Consumer (C2C), Consumer-to-Business (C2B), Business-to-Administration (B2A) and Consumer-to-Administration (C2A).",
    },
  ];

  questions = data.props;

  const [state, setState] = useState([0]);

  return (
    <div className="FAQ-main">
      <h1 className="FAQ-main-h1">Frequently Asked Questions</h1>

      {questions.map((question, index) => {
        const isOpen = state.includes(index);
        return (
          <div key={index}>
            <div className="FAQ-question-div">
              <div className="FAQ-question-div-h1">
                <h3 className="FAQ-question">{question.question}</h3>
                <img
                  src={
                    isOpen
                      ? "/assets/icons/drop-down-close.svg"
                      : "/assets/icons/drop-down-open.svg"
                  }
                  alt={isOpen ? "Collapse" : "Expand"}
                  className="FAQ-icon"
                  onClick={() => {
                    if (isOpen) {
                      setState(state.filter((i) => i !== index));
                    } else {
                      setState([...state, index]);
                    }
                  }}
                />
              </div>
              {isOpen && (
                <div className="FAQ-answer">
                  {question.answer && (
                    <p className="FAQ-answer-point">{question.answer}</p>
                  )}
                  <ul className="FAQ-answer-point-ul">
                    {question.points.map((point, idx) => (
                      <li className="FAQ-answer-point-li">
                        <p className="FAQ-answer-point" key={idx}>
                          {point.pnt}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <hr className="break"></hr>
          </div>
        );
      })}
    </div>
  );
}

export default FreqentlyAskedQuestions;
