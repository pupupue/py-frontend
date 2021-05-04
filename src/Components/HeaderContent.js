import React from "react";
import { Header } from "../UI/Header";

export const HeaderContent = () => {
  return (
    <Header>
      <div>Icon</div>
      <div
        style={{
          marginLeft: "auto",
        }}
      >
        TIME
      </div>
      <div>Login/Logout</div>
    </Header>
  );
};
