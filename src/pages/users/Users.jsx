import {React,useState } from 'react'
import '../../assets/css/users.css';
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import CreateUserModal from '../../components/dashboard/usermodal/CreateUserModal';

const Users = () => {

  const [showModal, setShowModal] = useState(false);

    const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Michael Lee",
      email: "michael@example.com",
      role: "User",
      status: "Active",
    },
  ];

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-main">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div>
              <h2>Users</h2>
              <p className="page-sub">
                Manage application users and access roles
              </p>
            </div>

            <button className="primary-btn" onClick={() => setShowModal(true)}>+ Add User</button>
          </div>

          {/* Users Table */}
          <div className="card table-card">
            <table className="user-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th align="right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <span
                        className={`status ${
                          user.status === "Active"
                            ? "active"
                            : "inactive"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td align="right" className="action-cell">
                      <button className="table-btn view">View</button>
                      <button className="table-btn edit">Edit</button>
                      <button className="table-btn delete">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
      {showModal && (
        <CreateUserModal onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}

export default Users