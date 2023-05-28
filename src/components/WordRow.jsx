import React from "react";

const WordRow = ({
  item,
  editingId,
  emptyFields,
  onEdit,
  onSave,
  onDelete,
  onChangeWord,
  onChangeTranscription,
  onChangeTranslation,
  fetchWords, // Функция для обновления таблицы слов
}) => {
  const handleSave = (id, newWord, newTranscription, newTranslation) => {
    onSave(id, newWord, newTranscription, newTranslation);
    if (id === "new") {
      addNewWord(newWord, newTranscription, newTranslation);
    } else {
      updateWord(id, newWord, newTranscription, newTranslation);
    }
  };

  const handleChangeWord = (id, value) => {
    onChangeWord(id, value);
  };

  const handleChangeTranscription = (id, value) => {
    onChangeTranscription(id, value);
  };

  const handleChangeTranslation = (id, value) => {
    onChangeTranslation(id, value);
  };

  const handleDelete = (id) => {
    deleteWord(id);
  };

  const addNewWord = (word, transcription, translation) => {
    fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        english: word,
        transcription: transcription,
        russian: translation,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("New word added successfully");
          fetchWords(); // Обновить таблицу
        } else {
          throw new Error("Add request failed");
        }
      })
      .catch((error) => {
        console.log("Add Error!", error);
      });
  };

  const updateWord = (id, word, transcription, translation) => {
    fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        english: word,
        transcription: transcription,
        russian: translation,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Word updated successfully");
          fetchWords(); // Обновить таблицу
        } else {
          throw new Error("Update request failed");
        }
      })
      .catch((error) => {
        console.log("Update Error!", error);
      });
  };

  const deleteWord = (id) => {
    fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Word deleted successfully");
          fetchWords(); // Обновить таблицу
        } else {
          throw new Error("Delete request failed");
        }
      })
      .catch((error) => {
        console.log("Delete Error!", error);
      });
  };

  return (
    <tr key={item.id}>
      <td>
        {editingId === item.id ? (
          <input
            type="text"
            value={item.english}
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
          item.english
        )}
      </td>
      <td>
        {editingId === item.id ? (
          <input
            type="text"
            value={item.transcription}
            className={emptyFields.includes(item.id) ? "empty-field" : ""}
            onChange={(e) => handleChangeTranscription(item.id, e.target.value)}
            onBlur={(e) =>
              handleSave(
                item.id,
                item.english,
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
            onChange={(e) => handleChangeTranslation(item.id, e.target.value)}
            onBlur={(e) =>
              handleSave(
                item.id,
                item.english,
                item.transcription,
                e.target.value
              )
            }
          />
        ) : (
          item.russian
        )}
      </td>
      <td>
        {editingId === item.id ? (
          <button
            className="btn"
            onClick={() =>
              handleSave(
                item.id,
                item.english,
                item.transcription,
                item.translation
              )
            }
            disabled={emptyFields.includes(item.id)}
          >
            Сохранить
          </button>
        ) : (
          <button className="btn" onClick={() => onEdit(item.id)}>
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
  );
};

export default WordRow;
