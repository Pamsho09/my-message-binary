import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Poppins', sans-serif;
}
body{
    margin: 0;
    padding: 0;
}
`;
const LayoutC =styled.div`
display: grid;
place-items: center;
width: 80%;
height: 100vh;
margin: 0 auto;

`
interface IProps {
  children: JSX.Element;
}
function Layout({ children }: IProps) {
  return (
    <LayoutC>
      {children}
      <GlobalStyle />
    </LayoutC>
  );
}

export default Layout;
