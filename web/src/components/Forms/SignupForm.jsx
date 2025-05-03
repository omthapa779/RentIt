import React, { useState } from 'react';
import '../../styles/Global.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/signup`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          

      const data = await res.json();

      if (res.ok) {
        alert('Signup successful!');
      } else {
        alert(data.message || 'Signup failed');
      }

    } catch (error) {
      console.error('Error:', error);
      alert('Server error');
    }
  };

  return (
    <section className="w_100 padding_s10 h_100vh bg_light">
      <form onSubmit={handleSubmit} className="flex_cl w_20 gap_2vh">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg_primary text_white padding_button border_none"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default SignupForm;
