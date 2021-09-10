import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import useInputValue from "../hooks/useValueInputs";
import { Icon } from "../components/Icon";
import message from "./api/message";
interface IStyleProps {
  color: string;
}
const Container = styled.div<IStyleProps>`
  border-radius: 14px;
  background: #f5f5f5;
  box-shadow: 16px 16px 32px #d0d0d0, -16px -16px 32px #ffffff;
  height: auto;
  padding: 10px;
  min-height: 50vh;
  max-width: 400px;
  margin: auto;
  display: grid;
  justify-content: center;
  text-align: center;
  .container-hero {
    width: 100%;
    margin: auto;
  }
  .container-form {
    /* width: 100%; */
    display: grid;
    justify-content: center;
    padding: 1em;
    gap: 2em;
    .container-textarea {
      padding: 2em;
      width: 100%;
      border-radius: 10px;
      box-sizing: border-box;
      outline: none;
      transition: 0.5s;
      border: 1px solid #${(props: IStyleProps) => props.color};
    }
    .container-button {
      background-color: #${(props: IStyleProps) => props.color};
      border-radius: 10px;
      height: 40px;
      border: none;
      color: #fff;
      transition: 0.5s;
    }
  }
  .container-message {
    margin: auto;
    width: 80%;
    h4 {
      width: 100%;
      margin: 10px;
    }
    svg{
      padding: 5px;
      cursor: pointer;
      border: ra;
      &:hover{
        border-radius: 10px;
       background-color: #${(props: IStyleProps) => props.color}53;
      }
    }
    display: grid;
    grid-template-columns: 70% 10%;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
    border: 1px solid #${(props: IStyleProps) => props.color};
    border-radius: 10px;
  }
`;
const Char = styled.span<IStyleProps>`
  transition: 0.5s;
  color: #${(props: IStyleProps) => props.color};
`;
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
interface ITitle{
  char: string;
  color: string;
}
interface IProps {
  color: string;
  title: ITitle[];
}
function Index({ color, title }: IProps) {
  let history = useRouter();
  const [alert, setAlert] = useState(false);
  const { onChange, valueInput } = useInputValue("");
 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (valueInput.length > 0) {
      setAlert(false);
      const res = await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify({ note: valueInput }),
      });
      const data = await res.json();
      setUrl(data.url);
      console.log(data);
    }
    else{
      setAlert(true);
    }
  

    // console.log("submit");
    // const binary = JSON.stringify(text2Binary(valueInput));
    // history.push(`/message/${binary}`);
  };
  const handleChange = (e: any) => {
    onChange(e);
  };
  const [url, setUrl] = useState(null);

  return (
    <Container color={color}>
      <h1 className="container-title">
        {title.map((e: any, index: number) => (
          <Char key={index} color={e.color}>
            {e.char}
          </Char>
        ))}
      </h1>
      <div className="container-hero">
        <p>
          Bienvenido a My message in binary, aqui podras convertir tu mensaje a
          binario y poder compartirlo con otros usuarios.
        </p>
      </div>

      <form className="container-form" onSubmit={handleSubmit}>
        <textarea
          name="message"
          className="container-textarea"
          id="message"
          cols={30}
          rows={10}
          onChange={handleChange}
          defaultValue={valueInput}
        ></textarea>
        {alert && (<span> No hay ningun mensaje :,( </span>)}
        <input
          className="container-button"
          type="submit"
          value="Create message"
        />
      </form>
      {url && (
        <div className="container-message">
          <h4>{url}</h4>
          <Icon color={`#${color}`} url={url||""} />
        </div>
      )}
    </Container>
  );
}

export default React.memo(Index);

export const getServerSideProps = () => {
  const Title = "My message in binary";
  return {
    props: {
      color: colors[Math.floor(Math.random() * (9 - 0 + 1) + 0)],
      title: Title.split("").map((e: string, index: number) => ({
        char: e,
        color: colors[Math.floor(Math.random() * (9 - 0 + 1) + 0)],
      })),
    },
  };
};
