import User from '../models/User.js';
import bcrypt from 'bcryptjs';

const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("Received:", {name, email}); // Log request

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: 'User registered', user });
  } catch (err) {
    console.error("Signup Error:", err); 
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
   
export default signupUser;
