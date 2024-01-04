import styled from 'styled-components'
import Post from "./work/Post";
import { useEffect, useState } from "react";
import axios from "axios";

import {
    Section,
    Grid,
    H2,
    bp, Row
} from "../../styles/CommonStyle";

const SectionWork = styled(Section)`
  height: 100%;
  flex-direction: column;
`

const Heading = styled.div`
  display: flex;
  height: 110px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  text-transform: lowercase;
  ${H2}
`
const ContainerPosts = styled(Row)`
  width: 100%;
  height: 100%;
  padding: 50px 0;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
  &:last-child{
    justify-self: center;
  }
  @media screen and (max-width: ${bp.tablet}px){
     margin: 0;
  }
`


const Works = ({title}) => {
    const [ work, setWork ] = useState([])

    const fetchWork = async () => {
        try {
            const response = await axios.get("https://yamna.click/api/work");
            setWork(response.data);
        } catch (err) {
            console.log(err);

        }
    }
    useEffect(() => {
        fetchWork();
    }, []);

    if (!work) return null;

    return(
        <SectionWork id={'xp'}>
            <Grid column>
                <Heading>
                      <H2>{title}</H2>
                </Heading>
                <ContainerPosts>
                    {work.map((post, index) => (
                        <Post
                            key={index}
                            company={post.company}
                            city={post.location.city}
                            country={post.location.country}
                            position={post.position}
                            colorDark={post.colorDark}
                            colorLight={post.colorLight}
                            type={post.type}
                            startMonth={post.period.startMonth}
                            endMonth={post.period.endMonth}
                            startYear={post.period.startYear}
                            endYear={post.period.endYear}
                            tech={post.tech}
                            links={post.links}
                        />
                    ))}
                </ContainerPosts>
            </Grid>
        </SectionWork>
    )
}
export default Works
