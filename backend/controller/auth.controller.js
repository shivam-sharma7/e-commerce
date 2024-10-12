import { User } from '../models/user.model.js';

export const signUP = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exist' });
    }

    const createUser = await User.create({ name, email, password });
    res.status(201).json({ message: 'User created successfully', user: createUser });
  } catch (error) {
    console.log('Error while signing up', error);
    throw new Error('Internal server error', error);
  }
};

export const login = async (req, res) => {
  //TODO:
};

export const logout = async (req, res) => {
  // TODO:
};
