import React, { useState } from "react";
import "./Wordcard.css";
import "./styles.scss";
import "../App.css";
import Wordcard from "./Wordcard";
import "./Wordlist";
import words from "./words.json";

const Cards = () => {
  const [index, setIndex] = useState(0);
  const [isPrev, setIsPrev] = useState(false);
  const [count, setCount] = useState(0);

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

  const Word = getWord(index);
  const Word2 = getWord(index + 1 >= words.length ? 0 : index + 1);
  const Word3 = getWord(index + 2 >= words.length ? 1 : index + 2);

  return (
    <div className="wordsCards">
      <div>
        <button className="btn" onClick={handlePrev}>
          Предыдущая
        </button>
      </div>
      <Wordcard
        title={Word.title}
        transcription={Word.transcription}
        translation={Word.translation}
        url={Word.url}
        isPrev={isPrev}
        setCount={setCount}
        count={count}
      />
      <Wordcard
        title={Word2.title}
        transcription={Word2.transcription}
        translation={Word2.translation}
        url={Word2.url}
        isPrev={isPrev}
        setCount={setCount}
        count={count}
      />
      <Wordcard
        title={Word3.title}
        transcription={Word3.transcription}
        translation={Word3.translation}
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
      <div>
        {index + 1}/{words.length}
      </div>
      <div className="counter">Выучено слов: {count}</div>
    </div>
  );
};

export default Cards;
