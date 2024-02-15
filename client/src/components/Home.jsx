import React, { Fragment, Suspense, lazy, useState, useEffect } from 'react';
import Loader from './common-components/Loader';
import styled from "styled-components";
import { colors } from "../styles/CommonStyle";
import { Helmet } from 'react-helmet';
import {components} from "../utils/Lazy";


const lazyLoad = (importFunc) => lazy(() => importFunc().catch(() => import('../utils/Error')));

const lazyComponents = Object.entries(components).reduce((acc, [name, path]) => {
    acc[name] = lazyLoad(() => import(`${path}`));
    return acc;
}, {});

const { Header, Projects, Works, Skills, Contact, Footer, Nav } = lazyComponents;

const Main = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  background: ${colors.black};
  transition: 0.3s ease-in;
`;

const Home = () => {
  const [titles, setTitles] = useState({
    projects: "",
    works: "",
    skills: "",
    contact: "",
  });
    useEffect(() => {
      fetchTitles();
    }, []);

    const fetchTitles = async () => {
      try {
        const response = await fetch("https://yamna.click/api/title");
        const dataArray = await response.json();
        const titleMapping = dataArray.reduce((acc, item) => {
          switch (item.name){
            case "projets":
              acc.projects = item.name; break;
            case "expériences":
              acc.works = item.name; break;
            case "compétences":
              acc.skills = item.name; break;
            case "contactez moi":
              acc.contact = item.name; break;
            default: break;  
          }
          return acc;
        }, {});
        setTitles(titleMapping);

      } catch (error) {
        console.error("Error fetching titles:", error);
      }
    };


    return (
      <Fragment>
        <Helmet>
          <title>Yamna MELKI - Développeuse Full Stack</title>
          <meta name="description" content="Portfolio - Yamna MELKI" />
          <meta
            name="keywords"
            content="web development, web developer, frontend developer, backend developer, fullstack developer, Yamna MELKI, portfolio"
          />
        </Helmet>
        <Suspense fallback={<Loader />}>
          <Nav />
          <Main id={"main"}>
            <Header />
            <Projects title={titles.projects} />
            <Works title={titles.works} />
            <Skills title={titles.skills} />
            <Contact title={titles.contact} />
          </Main>
          <Footer />
        </Suspense>
      </Fragment>
    );
};

export default Home;
