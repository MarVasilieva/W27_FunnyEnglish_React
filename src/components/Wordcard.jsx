import "./Wordcard.css";
import "./styles.scss";
import React, { useState, useEffect, useRef } from "react";

function Wordcard(props) {
  const [isShowButton, setButton] = useState(true);

  useEffect(() => setButton(true), [props.translation]);

  const handleButtonClick = () => {
    setButton(!isShowButton);
    if (isShowButton) {
      props.setCount(props.count + 1);
    }
  };

  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  return (
    <div className="word">
      <div className="wordTitle">
        <h1>{props.title}</h1>
      </div>
      <div className="wordTranscription">
        <h3>{props.transcription}</h3>
      </div>
      <div className="wordButton">
        {isShowButton ? (
          <button className="btn" onClick={handleButtonClick} ref={buttonRef}>
            Проверить
          </button>
        ) : (
          <h3 onClick={handleButtonClick}>
            <h3>{props.translation}</h3> <img src={props.url} alt="" />
          </h3>
        )}
      </div>
    </div>
  );
}

export default Wordcard;
