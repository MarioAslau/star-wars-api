import React from "react";
import logo from "../../assets/images/rebel.png";
import { Loading, Logo, Header } from "./Loading.styles";

const LoadingPage = () => (
  <Loading>
    <Header>
      <Logo src={logo} alt="logo" />
      <p>Page is loading...</p>
    </Header>
  </Loading>
);

export default LoadingPage;
