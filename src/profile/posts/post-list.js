import PostListItem from "./post-list-item";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCommentsByAuthorIDThunk} from "../../services/comment-thunk";

const PostList = ({uid, allowedToRemove}) => {
    const {comments} = useSelector(state => state.comments)
    const dispatch = useDispatch()

    // Source: https://stackoverflow.com/questions/10123953/how-to-sort-an-object-array-by-date-property
    const sortedComments = comments.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))


    useEffect(() => {
        dispatch(getCommentsByAuthorIDThunk(uid))
    }, [dispatch, uid])
    return(
        <ul className={'list-group'}>
            {
                sortedComments.length > 0 && sortedComments.map(
                    comment => <PostListItem
                        key={comment._id}
                        comment={comment}
                        allowedToRemove={allowedToRemove}/>
                )
            }
            {
                sortedComments.length === 0 &&
                <li className='list-group-item'>
                    <br/><br/>
                    <h4 className='text-center text-secondary'>
                        No posts/comments from this user yet!
                    </h4>
                    <br/><br/>
                </li>
            }
        </ul>
    )
}
export default PostList