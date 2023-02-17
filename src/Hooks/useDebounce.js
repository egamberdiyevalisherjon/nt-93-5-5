import { useState } from "react";

function useDebounce(cb, delay) {
  const [id, setId] = useState(null);

  return (...args) => {
    clearTimeout(id);

    let toID = setTimeout(() => {
      cb(...args);
    }, delay);

    setId(toID);
  };
}

export default useDebounce;
