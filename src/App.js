import "./App.css";
import "./components/Wordcard.css";
import Wordcard from "./components/Wordcard";
import Wordlist from "./components/Wordlist";
import Table from "./components/Wordlist";
import "./components/Wordlist.css";

const words = [
  {
    title: "Duck",
    transcription: "[dʌk]",
    translation: "УТКА",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt7KTf5Oi4xSHjP4a7V7jxsYQE7BGmp2aMknansJ3hSRJqN3v3iqmR2V9NHm650gWaCu4&usqp=CAU",
  },
  {
    title: "Dog",
    transcription: "[dɔːɡ] ",
    translation: "СОБАКА",
    url: "https://w7.pngwing.com/pngs/82/666/png-transparent-puppy-dog-drawing-puppy-mammal-animals-cat-like-mammal.png",
  },
  {
    title: "Chicken",
    transcription: "['tʃɪkɪn]",
    translation: "КУРИЦА",
    url: "https://w7.pngwing.com/pngs/42/544/png-transparent-chicken-chicken-animals-chicken-meat-chicken.png",
  },
  {
    title: "Horse",
    transcription: "[hɔ:s]",
    translation: "ЛОШАДЬ",
    url: "https://avatars.mds.yandex.net/i?id=1e0382573a33fa7f26a5c110a7902d4c658180c8-8496879-images-thumbs&n=13",
  },
  {
    title: "Parrot",
    transcription: "['pærət]",
    translation: "ПОПУГАЙ",
    url: "https://avatars.mds.yandex.net/i?id=88625dd82660791c00bb6ad9dda987ab7f62f9ad-9228658-images-thumbs&n=13",
  },
  {
    title: "Pig",
    transcription: "[pɪɡ]",
    translation: "СВИНЬЯ",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7PFizYvtYZFdIAf_QRNTQu0DtALx5T4ylZg-TNpC0DjksZ2P9vxbMBUl5rzfXfF7u0M&usqp=CAU",
  },
];
function App(props) {
  return (
    <div className="App">
      <div className="wordsCards">
        {words.map((word) => (
          <Wordcard
            title={word.title}
            transcription={word.transcription}
            translation={word.translation}
            url={word.url}
          ></Wordcard>
        ))}
      </div>
      <div className="wordsTable">
        <Table />
      </div>
    </div>
  );
}

export default App;
