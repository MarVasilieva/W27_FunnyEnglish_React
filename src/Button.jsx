import React, { useState } from "react";

export default function Button(props) {
  const [pressed, setPressed] = useState(false);
  const handleChange = () => {
    setPressed(!pressed);
  };

  return (
    <button {...props} onClick={handleChange}>
      {pressed ? "Нажата" : "Нажми меня"}
    </button>
  );
}
