import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

export default function Button () {
  return (
    <AwesomeButton
      cssModule={AwesomeButtonStyles}
      type="primary"
      ripple
      onPress={() => {
        // do something
      }}
    >
      Button
    </AwesomeButton>
  );
}