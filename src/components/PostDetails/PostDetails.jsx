import { useLoaderData, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const { postId } = useParams();
    const handleBtnClick = () => {
        navigate(-1);
    }
    
    const { id, title, body } = post;
    return (
        <div>
            <h3>Post Details about: {id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleBtnClick}>Go back</button>
        </div>
    );
};

export default PostDetails;