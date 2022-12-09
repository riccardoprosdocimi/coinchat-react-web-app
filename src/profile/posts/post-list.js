import PostListItem from "./post-list-item";

const PostList = ({comments, allowedToRemove}) => {
    //  Source: https://stackoverflow.com/questions/10123953/how-to-sort-an-object-array-by-date-property
    const sortedComments = comments.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    return(
        <ul className={'list-group'}>
            {
                sortedComments.map(
                    comment => <PostListItem
                        key={comment._id}
                        comment={comment}
                        allowedToRemove={allowedToRemove}/>
                )
            }
        </ul>
    )
}
export default PostList