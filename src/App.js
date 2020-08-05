import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Components/HomePage";
import GalleryPage from "./Components/GalleryPage";
import EducationsPage from "./Components/EducationsPage";
import BlogPage from "./Components/BlogPage";
import ContactsPage from "./Components/ContactsPage";

import BlogPage1 from "./Components/BlogPages/BlogPage1";
import BlogPage2 from "./Components/BlogPages/BlogPage2";
import BlogPage3 from "./Components/BlogPages/BlogPage3";
import BlogPage4 from "./Components/BlogPages/BlogPage4";
import BlogPage5 from "./Components/BlogPages/BlogPage5";

import styled from "styled-components";

const Error404 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: #f5f5f5;
`;

const blogLinks = [
  { patch: "/UDS/blog/1", component: BlogPage1 },
  { patch: "/UDS/blog/2", component: BlogPage2 },
  { patch: "/UDS/blog/3", component: BlogPage3 },
  { patch: "/UDS/blog/4", component: BlogPage4 },
  { patch: "/UDS/blog/5", component: BlogPage5 },
];

const App = ({}) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/UDS" component={HomePage} />
        <Route exact path="/UDS/gallery" component={GalleryPage} />
        <Route exact path="/UDS/blog" component={BlogPage} />
        <Route exact path="/UDS/contacts" component={ContactsPage} />
        <Route exact path="/UDS/educations" component={EducationsPage} />
        {blogLinks.map(({ patch, component }) => {
          return <Route key={patch} exact path={patch} component={component} />;
        })}
        <Route
          render={() => {
            return (
              <Link to="/UDS">
                <Error404>
                  <img src={require("./images/404.gif")} alt="404" />
                </Error404>
              </Link>
            );
          }}
        />
      </Switch>
    </Router>
  );
};

export default App;
