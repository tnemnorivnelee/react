import { useCallback, useRef, useState } from "react";

export default function useInput() {
  const [value, setValue] = useState("");
  const ref = useRef(null);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, ref, onChange];
}
