import postArray from './postTest.json'
import PostListItem from "./PostListItem";

const PostList = () => {
    return(
        <ul className={'list-group'}>
            {
                postArray.map(
                    post => <PostListItem
                        post={post}/>
                )
            }
        </ul>
    )
}
export default PostList