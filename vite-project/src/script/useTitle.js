import { useEffect } from "react";
import Counter from "../App9";

function useTitle(title) {
  useEffect(() => {
    document.title = title;
  },[title]);
}

export default useTitle;