import React, { useState, useContext } from "react";
import "./styles.scss";
import "./Wordlist.css";
import WordRow from "./WordRow.jsx";
import { observer, inject } from "mobx-react";

const Table = ({ wordStore, word }) => {
  const [editingId, setEditingId] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = (id, newWord, newTranscription, newTranslation) => {
    if (
      newWord.trim() === "" ||
      newTranscription.trim() === "" ||
      newTranslation.trim() === ""
    ) {
      setEmptyFields([id]);
      return;
    }

    const newData = wordStore.words.map((item) => {
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
    setEditingId(null);
    setEmptyFields([]);
  };

  const handleDelete = (id) => {
    const newData = wordStore.data.filter((item) => item.id !== id);
    setEditingId(null);
  };

  const handleAdd = () => {
    const newId = wordStore.data.length + 1;
    setEditingId(newId);
  };

  const handleChangeWord = (id, value) => {
    // ...
  };

  const handleChangeTranscription = (id, value) => {
    // ...
  };

  const handleChangeTranslation = (id, value) => {
    // ...
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
        {word.map((item) => (
          <WordRow
            key={item.id}
            item={item}
            editingId={editingId}
            emptyFields={emptyFields}
            onEdit={handleEdit}
            onSave={handleSave}
            onDelete={handleDelete}
            onChangeWord={handleChangeWord}
            onChangeTranscription={handleChangeTranscription}
            onChangeTranslation={handleChangeTranslation}
          />
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
