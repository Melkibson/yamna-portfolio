import styled from 'styled-components'
import {PostItemImg} from "./PostItemImg";

const PostItem = styled.a`
    position: relative;
    align-items: flex-start;
    justify-content: center;
    z-index: 2;
    transition: all 0.5s linear;
    overflow: hidden;
    
`

const Post = (props) => {
    return(
            <PostItem href={props.link}>
                <PostItemImg src={props.imgSrc}/>
            </PostItem>
    )
}
export default Post
