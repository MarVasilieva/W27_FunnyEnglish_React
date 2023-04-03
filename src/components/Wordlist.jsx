import React, { useState } from "react";
import "./styles.scss";
import "./Wordlist.css";

const Table = () => {
  const [data, setData] = useState([
    { id: 1, word: "Dog", transcription: "[dɔːɡ]", translation: "СОБАКА" },
    { id: 2, word: "Duck", transcription: "[dʌk]", translation: "УТКА" },
    {
      id: 3,
      word: "Chicken",
      transcription: "['tʃɪkɪn]",
      translation: "КУРИЦА",
    },
    {
      id: 4,
      word: "Horse",
      transcription: "[hɔ:s]",
      translation: "ЛОШАДЬ",
    },
  ]);
  const [editingId, setEditingId] = useState(null);

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = (id, newWord, newTranscription, newTranslation) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          word: newWord,
          transcription: newTranscription,
          translation: newTranslation,
        };
      }
      return item;
    });
    setData(newData);
    setEditingId(null);
  };

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const handleAdd = () => {
    const newId = data.length + 1;
    const newData = [
      ...data,
      { id: newId, word: "", transcription: "", translation: "" },
    ];
    setData(newData);
    setEditingId(newId);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Слово</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th colSpan={2}>Редактировать</th>
        </tr>
      </thead>
      <tbody
        className="
      bodyTable"
      >
        {data.map((item) => (
          <tr key={item.id}>
            <td>
              {editingId === item.id ? (
                <input
                  type="text"
                  defaultValue={item.word}
                  onBlur={(e) =>
                    handleSave(
                      item.id,
                      e.target.value,
                      item.transcription,
                      item.translation
                    )
                  }
                />
              ) : (
                item.word
              )}
            </td>
            <td>
              {editingId === item.id ? (
                <input
                  type="text"
                  defaultValue={item.transcription}
                  onBlur={(e) =>
                    handleSave(
                      item.id,
                      item.word,
                      item.transcription,
                      e.target.value
                    )
                  }
                />
              ) : (
                item.transcription
              )}
            </td>
            <td>
              {editingId === item.id ? (
                <input
                  type="text"
                  defaultValue={item.translation}
                  onBlur={(e) =>
                    handleSave(
                      item.id,
                      item.word,
                      item.transcription,
                      e.target.value
                    )
                  }
                />
              ) : (
                item.translation
              )}
            </td>
            <td>
              {editingId === item.id ? (
                <button
                  className="btn"
                  onClick={() =>
                    handleSave(
                      item.id,
                      item.word,
                      item.transcription,
                      item.translation
                    )
                  }
                >
                  {" "}
                  Сохранить
                </button>
              ) : (
                <button className="btn" onClick={() => handleEdit(item.id)}>
                  Редактировать{" "}
                </button>
              )}
            </td>
            <td>
              <button className="btn" onClick={() => handleDelete(item.id)}>
                Удалить
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td>
            <input type="text" placeholder="Введите слово" />
          </td>
          <td>
            <input type="text" placeholder="Введите транскрипцию" />
          </td>
          <td>
            <input type="text" placeholder="Введите перевод" />
          </td>
          <td colSpan={2}>
            <button className="btn" onClick={handleAdd}>
              Добавить
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
