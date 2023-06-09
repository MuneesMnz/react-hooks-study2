import React, { useEffect, useState } from "react";

const DocTitleTwo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count-{count}
      </button>
    </div>
  );
};
export default DocTitleTwo;
