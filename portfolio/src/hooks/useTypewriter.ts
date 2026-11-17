import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../utils/motion";

// Escribe y borra cada palabra en bucle. "words" debe ser una constante estable
export function useTypewriter(words: string[]): string {
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    let wordIndex = 0;
    let charCount = words[0].length;
    let deleting = true;
    let timer = 0;
    const tick = () => {
      const word = words[wordIndex];
      charCount += deleting ? -1 : 1;
      setText(word.slice(0, charCount));
      let delay = deleting ? 35 : 80;
      if (!deleting && charCount === word.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && charCount === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 350;
      }
      timer = window.setTimeout(tick, delay);
    };
    timer = window.setTimeout(tick, 1800);
    return () => window.clearTimeout(timer);
  }, [words]);
  return text;
}
