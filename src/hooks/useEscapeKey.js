import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    // handlers(s)
    const handler = (e) => {
      if (e.keyCode !== 27) return;

      callback(e);
    };

    // cleanup
    const cleanUp = window.removeEventListener("keydown", handler);

    window.addEventListener("keydown", handler);

    return cleanUp;
  }, [callback]);
}

export default useEscapeKey;
