import Styled from "styled-components";

const FooDiv = Styled.div`
background-color: blue;
`;

const Foo = () => {
  return <FooDiv>hello</FooDiv>;
};

export { Foo };
