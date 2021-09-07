import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Word from "../components/Word";
const MessageContainer = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  display: grid;
  justify-content: center;
  .container{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap:10px;
    justify-content: center;
      
  }
`;
function Message() {
  let { binary }: { binary: string } = useParams();
  const colors=['ffb30b',"fb5607",'ff006e','8338ec','3a88ff','ef476f','ffd166','08d6a0','118ab2','073b4c']
  const [message, setMessage] = React.useState(JSON.parse(binary));
  console.log(message);
  return (
    <MessageContainer>
        <h1 className="container-title">My message in binary</h1>
        <h4>To click cards</h4>

      <div className="container">
          {message.map((item:any, index:number) => <Word key={index} color={colors[Math.floor(Math.random() * (9 - 0 + 1) + 0)]} {...item}/>)}
      </div>
    </MessageContainer>
  );
}

export default Message;
