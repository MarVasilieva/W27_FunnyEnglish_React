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
  const [emptyFields, setEmptyFields] = useState([]);

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = (id, newWord, newTranscription, newTranslation) => {
    if (
      typeof newWord !== "string" ||
      typeof newTranscription !== "string" ||
      typeof newTranslation !== "string"
    ) {
      alert("Тип данных некорректный!");
      return;
    }

    if (
      newWord.trim() === "" ||
      newTranscription.trim() === "" ||
      newTranslation.trim() === ""
    ) {
      setEmptyFields([id]);
      return;
    }

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
    setEmptyFields([]);
  };

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const handleAdd = () => {
    const newId = data.length + 1;
    setData((prevData) => [
      ...prevData,
      { id: newId, word: "", transcription: "", translation: "" },
    ]);
    setEditingId(newId);
  };

  const handleChangeWord = (id, value) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, word: value };
        }
        return item;
      })
    );
  };

  const handleChangeTranscription = (id, value) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, transcription: value };
        }
        return item;
      })
    );
  };

  const handleChangeTranslation = (id, value) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, translation: value };
        }
        return item;
      })
    );
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
      <tbody className="bodyTable">
        {data.map((item) => (
          <tr key={item.id}>
            <td>
              {editingId === item.id ? (
                <input
                  type="text"
                  value={item.word}
                  className={emptyFields.includes(item.id) ? "empty-field" : ""}
                  onChange={(e) => handleChangeWord(item.id, e.target.value)}
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
                  value={item.transcription}
                  className={emptyFields.includes(item.id) ? "empty-field" : ""}
                  onChange={(e) =>
                    handleChangeTranscription(item.id, e.target.value)
                  }
                  onBlur={(e) =>
                    handleSave(
                      item.id,
                      item.word,
                      e.target.value,
                      item.translation
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
                  value={item.translation}
                  className={emptyFields.includes(item.id) ? "empty-field" : ""}
                  onChange={(e) =>
                    handleChangeTranslation(item.id, e.target.value)
                  }
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
                  disabled={emptyFields.includes(item.id)}
                >
                  Сохранить
                </button>
              ) : (
                <button className="btn" onClick={() => handleEdit(item.id)}>
                  Редактировать
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
            <input
              type="text"
              placeholder="Введите слово"
              value=""
              onChange={(e) => handleChangeWord(null, e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Введите транскрипцию"
              value=""
              onChange={(e) => handleChangeTranscription(null, e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Введите перевод"
              value=""
              onChange={(e) => handleChangeTranslation(null, e.target.value)}
            />
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
