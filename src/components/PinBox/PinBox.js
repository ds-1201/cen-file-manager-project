import React from "react";
import styles from "./PinBox.module.scss";
import OtpInput from "react-otp-input";
import PropTypes from "prop-types";

const PinBox = ({ pin, setPin }) => {
  return (
    <OtpInput
      value={pin}
      onChange={(value) => {
        setPin(value);
      }}
      numInputs={4}
      inputStyle={styles["pin-box__input"]}
      isInputSecure
    />
  );
};

PinBox.propTypes = {
  pin: PropTypes.string.isRequired,
  setPin: PropTypes.func.isRequired,
};

export default PinBox;
