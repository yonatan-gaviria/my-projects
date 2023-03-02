import { useRef } from "react";
import { EmojiPicker } from "./emojiPicker";

export function EmojiPickerInput() {

  const refInput = useRef(null);

  return (
    <div>
      <input ref={refInput} />
      <EmojiPicker ref={refInput}/>
    </div>
  );
}