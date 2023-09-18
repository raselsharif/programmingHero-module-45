import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  return (
    <div>
      <h3>Post Details: {post.id}</h3>
      <p>{post.body}</p>
      <p>{post.title}</p>
    </div>
  );
};

export default PostDetails;
