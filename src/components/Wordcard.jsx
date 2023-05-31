import "./Wordcard.css";
import "./styles.scss";
import React, { useState, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite"; // Or "mobx-react".
import { WordStore } from "../store/WordStore";
const WordStore1 = new WordStore();
export const Wordcard = observer(({ wordStore } = { wordStore: WordStore }) => {
  const [isShowButton, setButton] = useState(true);

  useEffect(() => {
    debugger;
    WordStore1.fetchWords(); // Вызов метода fetchWords из MobX-хранилища при монтировании компонента
  });

  useEffect(() => {
    setButton(true);
  });

  const handleButtonClick = () => {
    setButton(!isShowButton);
    if (isShowButton) {
      wordStore.setCount(wordStore.count + 1);
    }
  };

  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  return (
    <div className="word">
      {/* <div className="wordTitle">
        <h1>{words[0]?.english}</h1>{" "}
      </div>
      <div className="wordTranscription">
        <h3>{words[0]?.transcription}</h3>{" "}
      </div>
      <div className="wordButton">
        {isShowButton ? (
          <button className="btn" onClick={handleButtonClick} ref={buttonRef}>
            Проверить
          </button>
        ) : (
          <h3 onClick={handleButtonClick}>{words[0]?.russian}</h3>
        )}
      </div> */}
    </div>
  );
});
