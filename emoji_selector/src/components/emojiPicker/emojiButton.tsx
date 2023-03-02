interface Emoji {
  symbol: string
  name: string
  weywords: string
}

interface prop {
  emoji: Emoji
  onClick: (emoji: Emoji)=> void
}

export function EmojiButton({ emoji, onClick }:prop) {

  function handleClick() {
    onClick(emoji);
  }

  return (
    <button onClick={ handleClick } >{emoji.symbol}</button>
  );
}