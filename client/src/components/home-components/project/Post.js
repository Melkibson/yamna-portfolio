import styled from 'styled-components'
import {PostItemImg} from "./PostItemImg";

const PostItem = styled.a`
  position: relative;
  align-items: flex-start;
  justify-content: center;
  z-index: 99;
  overflow: hidden;
  &:hover {
    ${PostItemImg} {
      border: 5px solid #000;
      transition: all 0.2s linear;
    }
  }
`;

const Post = (props) => {
    return(
            <PostItem href={props.link}>
                <PostItemImg src={props.imgSrc}/>
            </PostItem>
    )
}
export default Post
