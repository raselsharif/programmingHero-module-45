import { Link, useLoaderData } from "react-router-dom";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h2>Posts: {posts.length}</h2>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
};

const Post = ({ post }) => {
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <Link to={`/post/${post.id}`}>
        <button>Post Details</button>
      </Link>
    </div>
  );
};
export default Posts;
