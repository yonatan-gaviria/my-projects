import React, { useState } from "react";

interface Prop {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>)=> void
}

export function EmojiSerch({ onSearch }: Prop) {
  const [value, setValue] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    onSearch(e);
  }

  return (
    <input type="text" onChange={ handleChange } value={value} />
  );
}