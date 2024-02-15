import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { colors } from "../../../styles/CommonStyle";

const LinkDescription = styled.div`
  font-family: "Neon", sans-serif;
  background-image: linear-gradient(45deg, #fa8bff, #2bd2ff, #2bff88);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.3rem;
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 2em;
  padding: 3em 0;
`;
const Link = styled.a`
  font-family: "Neon", sans-serif;
  color: ${colors.white};
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(45deg, #fa8bff, #2bd2ff, #2bff88);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const GithubLinks = () => {
  const [githubLink, setGithubLink] = useState([]);

  const fetchLink = async () => {
    try {
      const response = await axios.get("https://yamna.click/api/projectweb");
      setGithubLink(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchLink();
  }, []);
  if (!githubLink.length) return null;

  return (
    <div>
      <LinkContainer>
        <LinkDescription>Github repositories:</LinkDescription>
        {githubLink
          .filter((link) => link.github)
          .map((link) => {
            return (
              <Link href={link.github} key={link._id}>
                {link.title}
              </Link>
            );
          })}
      </LinkContainer>
    </div>
  );
};

export default GithubLinks;
