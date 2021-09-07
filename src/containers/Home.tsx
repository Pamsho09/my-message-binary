import React, { HtmlHTMLAttributes } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import useInputValue from "../hooks/useValueInputs";
const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 50vh;

  margin: auto;
  display: grid;
  justify-content: center;
  text-align: center;
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
    }
  }
`;
function Home() {
    let history = useHistory();
  const { onChange, valueInput } = useInputValue("");
  function text2Binary(string: string) {
    return string.split(" ").map((item) => ({
      binary: item
        .split("")
        .map((char) => char.charCodeAt(0).toString(2))
        .join(" "),
        word : item
    }));
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    const binary = JSON.stringify(text2Binary(valueInput));
    history.push(`message/${binary}`);
   
  };
  const handleChange = (e: any) => {
    onChange(e);
  };
  return (
    <Container>
      <h1 className="container-title">My message in binary</h1>

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
        <input
          className="container-button"
          type="submit"
          value="Create message"
        />
      </form>
    </Container>
  );
}

export default Home;
