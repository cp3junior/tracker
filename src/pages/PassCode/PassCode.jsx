import { useState, useEffect, useContext } from "react";

import Code from "./Code";
import Numbers from "./Numbers";
import AuthContext from "../../context/AuthContext";

const PassCode = () => {
  const { checkPasscode, connect } = useContext(AuthContext);
  const [passCode, setpassCode] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (passCode.length === 1) {
      setHasError(false);
    }

    if (passCode.length === 6) {
      const stringPasscode = passCode.join("");
      const isOK = checkPasscode(stringPasscode);
      if (isOK) connect();
      else {
        setHasError(true);
        setpassCode([]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passCode]);

  const handleDelete = (e) => {
    e.preventDefault();
    setpassCode((prevState) => {
      const newData = [...prevState];
      newData.pop();
      return newData;
    });
  };

  return (
    <div className="passcode">
      <div className="passcode-top">
        <h3 className="passcode-top-text">Enter Passcode</h3>
        <Code length={passCode.length} error={hasError} />
      </div>
      <div className="passcode-middle">
        <Numbers onChange={setpassCode} />
      </div>
      <div className="passcode-bottom">
        {!!passCode.length && (
          <div className="passcode-bottom-container">
            <button
              className="passcode-bottom-button"
              type="button"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PassCode;
