import styled from "styled-components";
import {RowBetween} from "../../../styles/CommonStyle";
import Card from "./social-component/Card";
import {useEffect, useState} from "react";
import axios from "axios";

const Container = styled(RowBetween)`
  width: 100%;
  flex-wrap: wrap;
  padding-top: 50px;
`
const Social = () => {
    const [social, setSocial] = useState([])
    const fetchSocial = async () => {
        try {
            const response = await axios.get('https://yamna.click/api/contact');
            setSocial(response.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchSocial();
    }, [])


    return(
        <Container>
            {social.map(({ ref, color, name }, index) => (
                <Card
                    key={index}
                    color={color}
                    link={ref}
                    name={name}
                />
            ))}
        </Container>
    )
}

export default Social
