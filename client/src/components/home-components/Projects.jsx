import { Fragment } from "react";
import axios from "axios";
import GithubLink from "./project/GithubLinks";
import styled, { css } from "styled-components";
import Masonry from "react-masonry-css";
import Post from "./project/Post";
import { Section, Grid, RowBetween, H2, bp } from "../../styles/CommonStyle";
import { useEffect, useState } from "react";

const SectionWork = styled(Section)`
  display: flex;
  flex-direction: column;
  padding: 90px 0;
  @media screen and (max-width: ${bp.mobile}px) {
    padding: 50px 0;
  }
`;
const Heading = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  height: 130px;
`;
const HeadingContainer = styled(RowBetween)`
  align-items: center;
  ${H2} {
  }
  @media screen and (max-width: ${bp.mobile}px) {
    height: 100%;
  }
`;
const MasonryCSS = css`
  .masonry-grid {
    width: auto;
    display: flex;
    height: auto;
  }
  .column-grid {
    height: 100%;
  }
`;
const MasonryGrid = styled(Grid)`
  ${MasonryCSS};
  overflow: hidden;
`;

const breakpointColumnsObj = {
  default: 2,
  1200: 2,
  700: 1,
};

const Projects = ({ title }) => {
  const [project, setProject] = useState([]);

  const fetchProjects = async () => {
    try {
      const responseWeb = await axios.get("https://yamna.click/api/projectweb");
      setProject(responseWeb.data);
      console.log(responseWeb.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (!project.length) return null;
  return (
    <SectionWork id={"projects"}>
      <Grid column>
        <Heading>
          <HeadingContainer>
            <H2>{title}</H2>
          </HeadingContainer>
        </Heading>
        <MasonryGrid style={{ position: "relative" }} id={"grid"}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="column-grid"
          >
            {project.map((post) => (
              <Fragment key={post._id}>
                <Post imgSrc={post.src} link={post.demo} />
              </Fragment>
            ))}
          </Masonry>
        </MasonryGrid>
      </Grid>
      <GithubLink/>
    </SectionWork>
  );
};

export default Projects;
