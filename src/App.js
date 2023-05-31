import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/Wordcard.css";
import NotFound from "./components/NotFound";
import "./components/Header.css";
import Table from "./components/Wordlist";
import "./components/Wordlist.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cards from "./components/Cards";
import logo from "./img/logo.jpeg";
import Homepage from "./components/Homepage";
import { observer, inject } from "mobx-react";
//import WordsApi from "./components/WordsApi.jsx";

function App({ wordStore }) {
  /*const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);*/

  useEffect(() => {
    // wordStore.loadData();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="App-nav">
            <ul>
              <li>
                <Link to="/">
                  <img src={logo} alt="logo"></img>
                </Link>
              </li>
              <li>
                <Link to="/wordlist">Wordlist</Link>
              </li>
              <li>
                <Link to="/wordcard">Wordcard</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Homepage />}></Route>
            <Route exact path="/wordlist" element={<Table />}></Route>
            <Route exact path="/wordcard" element={<Cards />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <div className="wordsTable"></div>
      </div>
    </Router>
  );
}

export default inject(["wordStore"])(observer(App));
