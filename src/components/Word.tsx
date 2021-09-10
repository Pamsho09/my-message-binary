import React from "react";
import styled from "styled-components";
interface Ip {
  colorBack: string;
}
const WordC = styled.div<Ip>`
cursor: pointer;
  background-color: #${(props: Ip) => props.colorBack};
  color: #fff;
  padding: 15px;
  font-weight: bold;
  font-size: 12px;
  max-height: 20px;
  border-radius: 10px;
  text-align: center;
  display: grid;
  place-items: center;
`;

function Word({ binary, word, color }: any) {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <>
      <WordC colorBack={color} onClick={() => setIsHover(!isHover)}>
        {isHover ? word : binary}
      </WordC>
    </>
  );
}

export default Word;
