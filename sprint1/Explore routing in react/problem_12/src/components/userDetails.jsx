import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1>User Details for ID: {id}</h1>
    </div>
  );
}

export default UserDetails;