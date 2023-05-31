import React, { useState, useContext } from "react";
import "./Wordcard.css";
import "./styles.scss";
import "../App.css";
import { Wordcard } from "./Wordcard";
import "./Wordlist";
import { observer, inject } from "mobx-react";

const Cards = ({ wordStore }) => {
  console.log(wordStore);
  const [index, setIndex] = useState(0);
  const [isPrev, setIsPrev] = useState(false);
  const [count, setCount] = useState(0);

  const { words } = wordStore; // Получение массива words из wordStore

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? words.length - 1 : prevIndex - 1
    );
    setIsPrev(true);
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === words.length - 1 ? 0 : prevIndex + 1
    );
    setIsPrev(false);
  };

  const getWord = (currentIndex) => {
    return words[currentIndex];
  };

  const Word = {};
  const Word2 = {};
  const Word3 = {};

  return (
    <div className="wordsCards">
      <div>
        <button className="btn" onClick={handlePrev}>
          Предыдущая
        </button>
      </div>
      <Wordcard
        english={Word.english}
        transcription={Word.transcription}
        russian={Word.russian}
        url={Word.url}
        isPrev={isPrev}
        setCount={setCount}
        count={count}
      />
      <Wordcard
        english={Word2.english}
        transcription={Word2.transcription}
        russian={Word2.russian}
        url={Word2.url}
        isPrev={isPrev}
        setCount={setCount}
        count={count}
      />
      <Wordcard
        english={Word3.english}
        transcription={Word3.transcription}
        russian={Word3.russian}
        url={Word3.url}
        isPrev={isPrev}
        setCount={setCount}
        count={count}
      />
      <div>
        <button className="btn" onClick={handleNext}>
          Следующая
        </button>
      </div>
      {index + 1}/{words.length}
      <div className="counter">Выучено слов: {count}</div>
    </div>
  );
};

export default inject(["wordStore"])(observer(Cards));
