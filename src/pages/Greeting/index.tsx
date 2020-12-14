import React, { FC } from "react";

type GreetingProps = {
  name: string;
}

export const Greeting:FC<GreetingProps> = ({ name }) => {
  // name is string!
  return <h1>Hello {name}</h1>;
};

Greeting.defaultProps = {
  name: "World"
};

