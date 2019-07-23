import React from "react";
import Button from "./Button";

const ClearFinishedButton = props => {
  return <Button onClick={props.onClick}>Clear Finished</Button>;
};

export default ClearFinishedButton;
