import { forwardRef, useState } from "react";
import { data as emojiList} from "./data";
import { EmojiSerch } from "./emojiSerch";

export function EmojiPicker(props:any, ref:any) {

  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState(emojiList);

  function handleClickOpen() {
    setIsOpen(!isOpen);
  }

  function handleSearch(e: any) {
    const q = e.trget.value.toLowerCase();

    if(!!q){
      const search = emojiList.filter(emoji=> {
        return (
          emoji.name.toLowerCase().includes(q) || 
          emoji.weywords.toLowerCase().includes(q)
        );
      });

      setEmojis(search);
    }else {
      setEmojis(emojiList);
    }
  }

  /* function EmojiPickerContainer() {
    return (
      <div>
        <EmojiSerch onSearch={ handleSearch }/>
        <div>
          {emojiList.map(emoji => 
              <div key={emoji.symbol}>
                {emoji.symbol}
              </div>
            )
          }
        </div>
      </div>
    );
  } */

  return (
    <div>
      <button onClick={handleClickOpen}>😊</button>

      {isOpen ? 
      <div>
        <EmojiSerch onSearch={ handleSearch }/>
        <div>
          {emojiList.map(emoji => 
              <div key={emoji.symbol}>
                {emoji.symbol}
              </div>
            )
          }
        </div>
      </div> : ""}
    </div>
  );
}

export default forwardRef(EmojiPicker);