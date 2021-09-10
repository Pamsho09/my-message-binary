import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Error from "next/error";
import { Loading } from "../../../components/Loading";
import styled from "styled-components";
import Word from "../../../components/Word";
import Custom404 from "../../404";
const MessageContainer = styled.div`
  border-radius: 14px;
  background: #f5f5f5;
  box-shadow: 16px 16px 32px #d0d0d0, -16px -16px 32px #ffffff;
  height: auto;
  padding: 10px;
  min-height: 50vh;
  max-width: 700px;
  margin: auto;
  display: grid;
  justify-content: center;
  text-align: center;
  .container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
`;
function Index() {
  let router = useRouter();
  let { id } = router.query;
  const colors = [
    "ffb30b",
    "fb5607",
    "ff006e",
    "8338ec",
    "3a88ff",
    "ef476f",
    "ffd166",
    "08d6a0",
    "118ab2",
    "073b4c",
  ];
  const [message, setMessage]: any = React.useState(null);

  useEffect(() => {
    fetch(`/api/message/${id}`)
      .then((res) => res.json())
      .then((data) => {
        data?.message ? setMessage(data) : setMessage(data);
      });
  }, [id]);
  console.log(message);
  return (
    <MessageContainer>
      <h1 className="container-title">My message in binary</h1>
      <h4>To click cards</h4>

      <div className="container">
        {message && message.message ? (
          <Custom404/>
        ) : message?.data ? (
          message.map((item: any, index: number) => (
            <Word
              key={index}
              color={colors[Math.floor(Math.random() * (9 - 0 + 1) + 0)]}
              {...item}
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </MessageContainer>
  );
}

export default Index;
