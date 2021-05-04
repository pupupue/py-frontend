import React from "react";
import { WholeApp } from "./UI/WholeApp";
import { Routes } from "./Routes";
import { HeaderContent as Header } from "./Components/HeaderContent";
import { Main } from "./UI/Main";
import { Content } from "./UI/Content";
import { SidenavContent as Sidenav } from "./Components/SidenavContent";

function App() {
  return (
    <div className="App">
      <WholeApp>
        <Header />
        <Main>
          <Content>
            <Routes />
          </Content>
          <Sidenav />
        </Main>
      </WholeApp>
    </div>
  );
}

export default App;
