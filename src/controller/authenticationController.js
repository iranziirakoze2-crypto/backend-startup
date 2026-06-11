import User from "../models/user.js";
import { accessToken } from "../utilis/workingToken.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
    try {
        const { FirstName, LastName, email, password, userRole } = req.body;

        if (!FirstName || !LastName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            FirstName,
            LastName,
            email,
            password: hashedPassword,
            userRole
        });

        await newUser.save();
const safeUser = {
    id: newUser._id,
    FirstName: newUser.FirstName,
    LastName: newUser.LastName,
    email: newUser.email,
    userRole: newUser.userRole
};

return res.status(201).json({
    user: safeUser,
    token,
    message: "User registered successfully"
});

    } catch (error) {
        return res.status(500).json({
            error,
            message: "Internal server error"
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Check if user exists (by email only)
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        // 2. Compare password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        // 3. Generate token
        const token = accessToken(user);

        const loggedInUser = {
            id: user._id,
            email: user.email,
            userRole: user.userRole,
            FirstName: user.FirstName,
            LastName: user.LastName,
        };

        return res.status(200).json({
            token,
            loggedInUser,
            message: "Login successful"
        });

    } catch (error) {
        return res.status(500).json({
            error,
            message: "Internal server error"
        });
    }
};