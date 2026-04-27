import React, { useEffect, useState } from "react";


const API = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  
  const handleSubmit = () => {
    if (!name || !email) return;

    if (editId) {
      
      const updatedUsers = users.map((user) =>
        user.id === editId ? { ...user, name, email } : user
      );
      setUsers(updatedUsers);
      setEditId(null);
    } else {
      // CREATE
      const newUser = {
        id: Date.now(),
        name,
        email,
      };
      setUsers([...users, newUser]);
    }

    setName("");
    setEmail("");
  };

  
  const handleDelete = (id) => {
    const filtered = users.filter((user) => user.id !== id);
    setUsers(filtered);
  };

  
  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  };

  return (
    <div className="container">
      <h2>CRUD App</h2>


      <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleSubmit}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      {/* TABLE */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;