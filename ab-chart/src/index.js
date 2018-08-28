import Styled from "styled-components";
import React from "react";

const FooDiv = Styled.div`
background-color: blue;
`;

const Foo = () => {
  return <FooDiv>hello</FooDiv>;
};

export { Foo };
