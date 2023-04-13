import React from "react";
import "./App.css";
import "./components/Wordcard.css";
import Wordcard from "./components/Wordcard";
import Wordlist from "./components/Wordlist";
import Table from "./components/Wordlist";
import "./components/Wordlist.css";
import words from "./components/words.json";

class App extends React.Component {
  state = {
    words: words,
    Index: 0,
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      Index:
        prevState.Index === 0
          ? prevState.words.length - 1
          : prevState.Index - 1,
      isPrev: true,
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      Index:
        prevState.Index === prevState.words.length - 1
          ? 0
          : prevState.Index + 1,
      isPrev: false,
    }));
  };

  render() {
    const Word2 =
      this.state.Index + 1 >= this.state.words.length
        ? this.state.words[0]
        : this.state.words[this.state.Index + 1];
    const Word3 =
      this.state.Index + 2 >= this.state.words.length
        ? this.state.words[1]
        : this.state.words[this.state.Index + 2];
    const Word = this.state.words[this.state.Index];
    return (
      <div className="App">
        <div className="wordsCards">
          <div>
            {" "}
            <button className="btn" onClick={this.handlePrev}>
              Предыдущая
            </button>
          </div>
          <Wordcard
            title={Word.title}
            transcription={Word.transcription}
            translation={Word.translation}
            url={Word.url}
            isPrev={this.state.isPrev}
          ></Wordcard>
          <Wordcard
            title={Word2.title}
            transcription={Word2.transcription}
            translation={Word2.translation}
            url={Word2.url}
            isPrev={this.state.isPrev}
          ></Wordcard>
          <Wordcard
            title={Word3.title}
            transcription={Word3.transcription}
            translation={Word3.translation}
            url={Word3.url}
            isPrev={this.state.isPrev}
          ></Wordcard>
          <div>
            <button className="btn" onClick={this.handleNext}>
              Следующая
            </button>
          </div>
        </div>
        {this.state.Index + 1}/{words.length}
        <div className="wordsTable">
          <Table />
        </div>
      </div>
    );
  }
}
export default App;
