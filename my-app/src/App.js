import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import React, { Component } from "react";
import { WholeApp } from "./UI/WholeApp";
import { HeaderContent as Header } from "./components/HeaderContent";
import { Main } from "./UI/Main";
import { Content } from "./UI/Content";
import { SidenavContent as Sidenav } from "./components/SidenavContent";
import { Routes } from "./Routes";

/**
 * App has pages Login Register ect
 */
function App() {
  // logged in state ? am i logged in or not
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [articles, setArticles] = useState([]);
  const [editArticle, setEditArticle] = useState(null);
  const [token, setToken, removeToken] = useCookies(["mytoken"]);
  const [username, setUsername, removeUsername] = useCookies(["myusername"]);

  let history = useHistory();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token["mytoken"]}`,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setArticles(resp))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (!token["mytoken"]) {
      history.push("/App/login");
      //window.location.href = '/'
    } else if (token["mytoken"] != "undefined") {
      setisAuthenticated(true);
    }
  }, [token]);

  const updatedInformation = (article) => {
    const new_article = articles.map((myarticle) => {
      if (myarticle.id === article.id) {
        return article;
      } else {
        return myarticle;
      }
    });

    setArticles(new_article);
  };

  const articleForm = () => {
    setEditArticle({ title: "", description: "" });
  };

  const insertedInformation = (article) => {
    const new_articles = [...articles, article];
    setArticles(new_articles);
  };

  const deleteBtn = (article) => {
    const new_articles = articles.filter((myarticle) => {
      if (myarticle.id === article.id) {
        return false;
      }
      return true;
    });

    setArticles(new_articles);
  };

  const onLogout = () => {
    setisAuthenticated(false);
    removeToken(["mytoken"]);
    removeUsername(["myusername"]);
    //history.push("/App/login");
  };

  return (
    <div className="App">
      <WholeApp>
        <Header
          onLogout={onLogout}
          auth={{ isAuthenticated: isAuthenticated }}
        />

        <Main>
          <Content>
            <Routes
              auth={{ isAuthenticated: isAuthenticated, loading: false }}
            />
          </Content>
          {isAuthenticated && <Sidenav />}
        </Main>
      </WholeApp>
    </div>
  );
}

export default App;
