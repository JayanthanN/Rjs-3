import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.log(err));
  }, [id]);

  if (!user) return <h3>Loading...</h3>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>USER DETAILS</h2>

      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>

      <h3>Company</h3>
      <p>{user.company.name}</p>

      <h3>Address</h3>
      <p>{user.address.street}</p>
      <p>{user.address.city}</p>
      <p>{user.address.zipcode}</p>
    </div>
  );
}

export default UserDetails;