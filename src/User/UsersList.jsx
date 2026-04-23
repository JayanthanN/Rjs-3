import React from "react";
import useFetchUsers from "./useFetchUsers";
import "./UsersList.css";

const UsersList = () => {
  const { users, loading, error } = useFetchUsers();

if (loading)
  return (
    <div className="status-container">
      <h2 className="status">Loading...</h2>
    </div>
  );

if (error)
  return (
    <div className="status-container">
      <h2 className="status error">{error}</h2>
    </div>
  );

  return (

    <div className="container">
      <h2>USER DETAILS</h2>
      <div className="card-container">
        {users.slice(0, 8).map((user) => (
          <div className="card" key={user.id}>
            <h3>{user.name}</h3>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company?.name}</p>
            <p>City: {user.address?.city}</p>
          </div>
          
        ))}
      </div>
    </div>
    
  );
};

export default UsersList;