import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>USER LIST</h2>

      {users.map(user => (
        <p
          key={user.id}
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => navigate(`/user/${user.id}`)}
        >
          {user.name}
        </p>
      ))}
    </div>
  );
}

export default UserList;