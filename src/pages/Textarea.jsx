import { useEffect, useState } from "react";

export const Textarea = () => {
  const nbMax = 148;
  const [nb, setNb] = useState(0);

  const update = (e) => {
    const text = e.target.value;
    if (text.length <= nbMax) {
      setNb(text.length);
    } else {
      e.target.value = text.substr(0, nbMax);
      setNb(e.target.value.length);
    }
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };
  return (
    <div className="textarea">
      <h1>Textarea</h1>
      <textarea onChange={(e) => update(e)}></textarea>
      <span>
        {nb} / {nbMax} caracters
      </span>
      {nb === nbMax ? <span>You have reach the limit</span> : <span></span>}
    </div>
  );
};
