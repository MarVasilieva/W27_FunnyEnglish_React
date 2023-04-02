import "./Wordcard.css";
import "./styles.scss";
import React, { useState } from "react";

function Wordcard(props) {
  const [isShowButton, setButton] = useState(true);

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
          <button className="btn" onClick={() => setButton(!isShowButton)}>
            Проверить
          </button>
        ) : (
          <h3 onClick={() => setButton(!isShowButton)}>
            <h3> {props.translation}</h3> <img src={props.url}></img>
          </h3>
        )}
      </div>
    </div>
  );
}

export default Wordcard;
