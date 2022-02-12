import React, { useState } from "react";
import styles from "./PinBox.module.scss";
import OtpInput from "react-otp-input";

const PinBox = () => {
  const [input, setInput] = useState("");
  return (
    <OtpInput
      value={input}
      onChange={(value) => {
        setInput(value);
        console.log(input);
      }}
      numInputs={4}
      inputStyle={styles["pin-box__input"]}
      isInputNum
      isInputSecure
    />
  );
};

export default PinBox;
