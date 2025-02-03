import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    name: "",
    email: "",
    age: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = () => {
    axios
      .get("http://localhost:3000/api/v1/users") // Ensure this matches your backend URL
      .then((response) => {
        setUsers(response.data.data.tour); // Adjust based on API response structure
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/users/${id}`);
      setUsers(users.filter((user) => user._id !== id)); // Remove user from state
      console.log(users);
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEditClick = (user) => {
    setEditingUser(user._id);
    setUpdatedData({ name: user.name, email: user.email, age: user.age });
  };

  const handleUpdate = async (id) => {
    try {
      await axios.patch(
        `http://localhost:3000/api/v1/users/${id}`,
        updatedData
      );
      fetchUsers(); // Refresh user list
      setEditingUser(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="row">
      {users?.map((user) => (
        <div key={user._id} className="col-3">
          <div className="card">
            <div className="card-body">
              {editingUser === user._id ? (
                <div>
                  <input
                    type="text"
                    value={updatedData.name}
                    onChange={(e) =>
                      setUpdatedData({ ...updatedData, name: e.target.value })
                    }
                  />
                  <input
                    type="email"
                    value={updatedData.email}
                    onChange={(e) =>
                      setUpdatedData({ ...updatedData, email: e.target.value })
                    }
                  />
                  <input
                    type="number"
                    value={updatedData.age}
                    onChange={(e) =>
                      setUpdatedData({ ...updatedData, age: e.target.value })
                    }
                  />
                  <button
                    className="btn btn-success"
                    onClick={() => handleUpdate(user._id)}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <>
                  <h5 className="card-title">{user.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {user.email}
                  </h6>
                  <p className="card-text">Age: {user.age}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEditClick(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleDelete(user._id)}
                  >
                    del
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
