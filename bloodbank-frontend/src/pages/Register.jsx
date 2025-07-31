
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', bloodGroup: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      toast.success('Registration successful');
      navigate('/login');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="w-full p-2 border rounded" required />
        <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" className="w-full p-2 border rounded" required />
        <input name="password" value={form.password} onChange={handleChange} type="password" placeholder="Password" className="w-full p-2 border rounded" required />
        <input name="bloodGroup" value={form.bloodGroup} onChange={handleChange} placeholder="Blood Group" className="w-full p-2 border rounded" required />
        <button type="submit" className="w-full bg-red-600 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}
