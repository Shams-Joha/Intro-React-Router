import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title } = post;

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '10px',
        marginBottom: '15px',
    }
    const handleShowDetail = () => {
        navigate(`/posts/${id}`)
    }


    return (
        <div style={postStyle}>
            <h4>Post of id: {id} </h4>
            <p>{title}</p>
            <Link to={`/posts/${id}`}>Post Detail</Link>
            <Link to={`/posts/${id}`}><button>Details</button></Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;