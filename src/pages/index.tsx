import React, {  useState} from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
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
function Index() {
  let history = useRouter();
  const { onChange, valueInput } = useInputValue("");
 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/message", {
      method: "POST",
      body: JSON.stringify({ note: valueInput }),
    });
    const data = await res.json();
    setUrl(data.url);
    console.log(data);

    // console.log("submit");
    // const binary = JSON.stringify(text2Binary(valueInput));
    // history.push(`/message/${binary}`);
  };
  const handleChange = (e: any) => {
    onChange(e);
  };
  const [url,setUrl]=useState("");
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
      <div className="container-message">
        <h4>{url}</h4>

      </div>
    </Container>
  );
}

export default Index;
