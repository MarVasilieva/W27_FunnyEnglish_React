import React, { useState, useContext, useEffect } from "react";
import "./Wordcard.css";
import "./styles.scss";
import "../App.css";
import { Wordcard } from "./Wordcard";
import "./Wordlist";
import { observer, inject } from "mobx-react";

export const Cards = observer(({ store = { words: [{}, {}, {}] } }) => {
  const [i, setIndex] = useState(0);
  const [isPrev, setIsPrev] = useState(false);
  const [count, setCount] = useState(0);

  const words = store.words; // Получение массива words из wordStore
  console.log(store);
  useEffect(() => {
    debugger;
    const Word = store.words[0];
    const Word2 = store.words[1];
    const Word3 = store.words[2];
    console.log(store.words);
  });

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

  return (
    <div className="wordsCards">
      {store && store.words.length > 2 && (
        <div>
          <div>
            <button className="btn" onClick={handlePrev}>
              Предыдущая
            </button>
          </div>
          <Wordcard
            english={store.words[i].english}
            transcription={store.words[i].transcription}
            russian={store.words[i].russian}
            // url={Word.url}
            isPrev={isPrev}
            setCount={setCount}
            count={count}
          />
          <Wordcard
            english={store.words[i + 1].english}
            transcription={store.words[i + 1].transcription}
            russian={store.words[i + 1].russian}
            // url={Word2.url}
            isPrev={isPrev}
            setCount={setCount}
            count={count}
          />
          <Wordcard
            english={store.words[i + 2].english}
            transcription={store.words[i + 2].transcription}
            russian={store.words[i + 2].russian}
            // url={Word3.url}
            isPrev={isPrev}
            setCount={setCount}
            count={count}
          />
          <div>
            <button className="btn" onClick={handleNext}>
              Следующая
            </button>
          </div>
        </div>
      )}
      {i + 1}/{words.length}
      <div className="counter">Выучено слов: {count}</div>
    </div>
  );
});
