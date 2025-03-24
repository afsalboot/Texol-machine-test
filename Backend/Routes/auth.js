//user auth router

const router = require("express").Router();
const user = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config;

//User registration :

router.post("/register", async (req, res) => {
    try {
        const hashedpassword = bcrypt.hashSync(req.body.password, 10);
        const newUser = await user.create({ ...req.body, password: hashedpassword });
        return res.status(200).json({ message: "newUser value", newUser });
    } catch (err) {
        console.log("register error",err.message)
        return res.status(500).json({ message: err.message });
    }
});

// User Login :

router.post("/verifyUser", async (req, res) => {
    try {
        const verify = await user.findOne({ mobile: req.body.mobile });
        console.log("verify value",verify)
        if (!verify) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log("User data from DB:", verify);
        if (!verify.password) {
            return res.status(500).json({ message: "User password not found in database" });
        }
        const pass = bcrypt.compareSync(req.body.password, verify.password);

        if (!pass) {
            return res.status(401).json({ message: "Password does not match" });
        }
        //JsonWebToken :
        const token = jwt.sign({ id: user._id }, process.env.SEC_KEY, { expiresIn: "1d" });
        console.log("token value:", token);

        return res.status(200).json({ message: "Logged in", token: token, userId: verify._id });
    } catch (err) {
        console.log("login error",err.message)
        return res.status(500).json({ message: err.message });
    }
});

module.exports = router;
