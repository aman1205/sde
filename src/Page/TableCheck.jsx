import { useState } from "react";
import Record from "../data.json"
import './main.css'

const UserTable = (props) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);


  const handleEditClick = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleViewClick = (user) => {
    window.location.href = `/users/${user.email}`;
  };

  const handleCloseModal = () => {
    // setSelectedUser(null);
    setShowEditModal(false);
  };
  const newValue =()=>{
    props.setUsers(selectedUser);
    
  }

  const handleSaveChanges = (updatedUser) => {
    // update user data in your backend or state management system
//     const updatedUsers = props.users.map((user) =>
//     user.email === updatedUser.email ? updatedUser : user
//   );
    handleCloseModal();
  };


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEditClick(user)}>Edit</button>
                <button onClick={() => handleViewClick(user)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit User Data</h2>
            <form onSubmit={() => handleSaveChanges(selectedUser)}>
              <label>Name:</label>
              <input
                type="text"
                value={selectedUser.name}
                onChange={(e) =>
                  setSelectedUser({ ...selectedUser, name: e.target.value })
                }
              />

              <label>Age:</label>
              <input
                type="number"
                value={selectedUser.age}
                onChange={(e) =>
                  setSelectedUser({ ...selectedUser, age: e.target.value })
                }
              />

              <label>Gender:</label>
              <select
                value={selectedUser.gender}
                onChange={(e) =>
                  setSelectedUser({ ...selectedUser, gender: e.target.value })
                }
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <label>Email:</label>
              <input
                type="email"
                value={selectedUser.email}
                onChange={(e) =>
                  setSelectedUser({ ...selectedUser, email: e.target.value })
                }
              />

              <button onClick={newValue}>Save Changes</button>
              <button onClick={handleCloseModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );

};

export default UserTable;



