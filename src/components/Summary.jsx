import { useState } from "react";
import Button from "./Button";

function Summary({ isEdit }) {
  const [summary, setSummary] = useState(
    "Highly motivated Front-End Developer with a passion for expanding skillsets and tackling challenges as opportunities for growth. A natural explorer with a love for innovation, ensuring a creative and resourceful approach to problem-solving."
  );

  return (
    <div>
      {!isEdit ? (
        <p>{summary}</p>
      ) : (
        <textarea
          onChange={(e) => setSummary(e.target.value)}
          value={summary}
          rows={4}
          cols={50}
        ></textarea>
      )}
    </div>
  );
}

export default Summary;
