import styled from 'styled-components'
import {PostItemImg} from "./PostItemImg";


const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

const PostItem = styled.a`
  position: relative;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  &:hover {
    ${PostItemImg} {
      border: 5px solid #000;
      transition: all 0.2s ease-in-out;
    }
  }
`;

const Post = (props) => {
    return (
      <>
        <PostItem href={props.link}>
          <PostItemImg src={props.imgSrc} />
        </PostItem>
      </>
    );
}
export default Post
