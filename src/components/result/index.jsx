import React from "react";

export default function ResultComponent({ ...props }) {
  return (
    <div>
      <p>You clicked {props.counter} times</p>
    </div>
  );
}
