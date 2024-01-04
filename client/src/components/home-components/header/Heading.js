import {useEffect, useState} from "react";
import axios from "axios";
import JobTitle from "./JobTitle";
import {Line} from "./Line";
import {animate, initial} from "../../../styles/Animation";
import styled from "styled-components";
import {bp} from "../../../styles/CommonStyle";
import Title from "./Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: space-between;
  @media screen and (max-width: ${bp.mobile}px){
    height: 100%;
    justify-content: space-evenly;
  }
`
const Heading = () => {
    const [mainTitle, setMainTitle] = useState([]);

    const fetchMainTitle = () => {
        axios.get("https://yamna.click/api/maintitle")
            .then(res => {
                setMainTitle(res.data[0])
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchMainTitle()
    }, [])

    if (!mainTitle) return null;
    
    return(
        <Container>
            <Title
                name={mainTitle.firstName}
                lastName={mainTitle.lastName}
            />
            <JobTitle 
                position={mainTitle.position}
                type={mainTitle.type}
            >
                <Line
                    initial={initial.slide}
                    animate={animate.slide}
                />
            </JobTitle>
        </Container>

    )
}
export default Heading
