import postArray from './post-test.json'
import PostListItem from "./post-list-item";

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