import User from '../models/User.js';
import bcrypt from 'bcryptjs';

 const signupUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email: normalizedEmail });
      if (existingUser) return res.status(400).json({ message: 'User already exists' });
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const normalizedEmail = email.toLowerCase();
     

      const user = await User.create({ name, email: normalizedEmail, password: hashedPassword });

      res.status(201).json({
        message: 'User registered',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      });
      
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
 };

export default signupUser;
