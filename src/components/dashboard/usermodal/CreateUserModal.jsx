import React, { useEffect, useState } from "react";
import Select from "react-select";
import api from "../../../services/axios";
import "../../../assets/css/modal.css";

const CreateUserModal = ({ onClose }) => {
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  useEffect(() => {
    api
      .get("/roles")
      .then((res) => {
        const options = res.data.map((role) => ({
          value: role.code, 
          label: role.name,
        }));
        setRoles(options);
      })
      .catch((err) => console.error("Failed to fetch roles:", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (!form.name.trim()) validationErrors.name = "Name is required";
    if (!form.email.trim()) validationErrors.email = "Email is required";
    if (!form.password.trim()) validationErrors.password = "Password is required";
    if (!selectedRole) validationErrors.role = "Please select a role";

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    try {
      await api.post("/auth/register", {
        ...form,
        role: selectedRole.value,
      });

      onClose(true); 
      setForm({ name: "", email: "", password: "" });
      setSelectedRole(null);
      setErrors({});
    } catch (err) {
      console.error("Create user failed:", err.response || err);
      alert("Failed to create user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const customSelectStyles = {
    input: (base) => ({
...base,
"input[type='text']:focus": { boxShadow: 'none' },
})
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Add New User</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p className="field-error">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="field-error">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p className="field-error">{errors.password}</p>}

          <Select
            options={roles}
            value={selectedRole}
            onChange={setSelectedRole}
            placeholder="Select Role"
            styles={customSelectStyles}
            classNamePrefix="react-select"
          />
          {errors.role && <p className="field-error">{errors.role}</p>}

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUserModal;