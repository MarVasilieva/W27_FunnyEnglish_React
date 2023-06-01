import React from "react";
import { observer } from "mobx-react";

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
}) => {
  const handleSave = (id, newWord, newTranscription, newTranslation) => {
    onSave(id, newWord, newTranscription, newTranslation);
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
    onDelete(id);
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
