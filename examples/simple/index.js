import React, { useState } from "react";
import { render } from "react-dom";
import { FlagIcon } from "react-flag-kit";

function Example() {
  const [size, setSize] = useState(128);
  const [code, setCode] = useState("US");

  return (
    <div>
      <div>
        <label>Size:</label>
        <br />
        <input
          min={0}
          max={256}
          type="range"
          value={size}
          onChange={(event) => {
            setSize(event.target.valueAsNumber);
          }}
        />
      </div>

      <div>
        <label>Code:</label>
        <br />
        <select
          value={code}
          onChange={(event) => {
            setCode(event.target.value);
          }}
        >
          <option value="AU">AU</option>
          <option value="EU">EU</option>
          <option value="US">US</option>
        </select>
      </div>

      <div>
        <FlagIcon size={size} code={code} />
      </div>
    </div>
  );
}

render(<Example />, document.getElementById("root"));
