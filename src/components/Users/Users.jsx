import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h3>Users: {users.length} </h3>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
};

const User = ({ user }) => {
  return (
    <>
      <h2>Name: {user.name}</h2>
      <h3>Phone: {user.phone}</h3>
      <Link to={`/user/${user.id}`}>
        <button>Details</button>
      </Link>
    </>
  );
};
export default Users;
