import "./Wordcard.css";
import "./styles.scss";
import React, { useState, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite"; // Or "mobx-react".
import { WordStore } from "../store/WordStore";

export const Wordcard = (props) => {
  const [isShowButton, setButton] = useState(true);

  useEffect(() => {
    // Вызов метода fetchWords из MobX-хранилища при монтировании компонента
  });

  useEffect(() => {
    setButton(true);
  });

  const handleButtonClick = () => {
    setButton(!isShowButton);
    if (isShowButton) {
      // setCount(count + 1);
    }
  };

  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  return (
    <div className="word">
      <div className="wordTitle">
        <h1>{props.english}</h1>{" "}
      </div>
      <div className="wordTranscription">
        <h3>{props.transcription}</h3>{" "}
      </div>
      <div className="wordButton">
        {isShowButton ? (
          <button className="btn" onClick={handleButtonClick} ref={buttonRef}>
            Проверить
          </button>
        ) : (
          <h3 onClick={handleButtonClick}>{props.russian}</h3>
        )}
      </div>
    </div>
  );
};
