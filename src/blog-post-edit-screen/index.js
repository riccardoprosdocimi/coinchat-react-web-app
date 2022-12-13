import BlogPostScreen from "./blog-post-screen";
import {useParams} from "react-router-dom";

const BlogPostEditScreen = () => {
    const { type } = useParams();
    if (type === "Post") {
        return (
            <BlogPostScreen />
        )
    } else if (type === "Edit") {
        return (
            <h1>Edit blog</h1>
        )
    }
    return (
        <h1>Blog Edit/Post</h1>
    )

}

export default BlogPostEditScreen;