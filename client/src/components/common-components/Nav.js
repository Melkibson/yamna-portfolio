import styled from "styled-components";
import {bp} from "../../styles/CommonStyle";
import { Scrollchor } from 'react-scrollchor';
import {NavLink} from "./nav/NavLink";
import { useEffect, useState } from "react";
import axios from "axios";

const SectionNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
  position: fixed;
  height: 80px;
  z-index: 2;
  padding: 3rem;
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: left top;
  @media screen and (max-width: ${bp.mobile}px) {
    height: 30px;
  }
  @media screen and (min-width: ${bp.desktop}px) {
    transform: rotate(-90deg) translateX(-75%);
  }
`;
const ContainerNav = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: end;
  padding-right: 50px;
  gap: 20px;
  z-index: 99;
  @media screen and (max-width: ${bp.mobile}px){
    justify-content: flex-end;
    padding-right: 50px;
  }

  span {
    &:not(:last-child){
      margin-right: 20px;

    }
  }

`
const Nav = () => {
  const [nav , setNav] = useState([])

  const fetchNav = async () => {
    try {
      const response = await axios.get('https://yamna.click/api/navbar');
      setNav(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNav();
  }, []);

  if (!nav) return null;

    return(
        <SectionNav>

            <ContainerNav>
              {
                nav.map((item, index) => (
                  <Scrollchor to={item.link} key={index}>
                    <NavLink>{item.name}</NavLink>
                  </Scrollchor>
                ))
              }
            </ContainerNav>
        </SectionNav>
    )
}

export default Nav
