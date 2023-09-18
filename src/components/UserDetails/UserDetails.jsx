import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <div>
      <h3>User Details: {user.name}</h3>
      <h3>User Details: {user.website}</h3>
    </div>
  );
};

export default UserDetails;
