const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async(req, res)=>{
       const{name,email,password} = req.body;
       try{
        const exist= await User.findOne({email});
        if(exist) return res.status(400).json({message:"User already existes"});

        const hashedPass= await bcrypt.hash(password,10);

        const newuser = await User.create({name,email,password: hashedPass});

        const token = jwt.sign({id:newuser._id}, process.env.JWT_SECRET,{expiresIn:'1h'});
        res.status(201).json({message:"Registered successfully",token});
       }
       catch(err){
        res.status(500).json({message:"Registration failed"});
       }
};

exports.login = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid mail address' });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ message: 'Invalid password' });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: "Login successful", token });
    }
    catch (err) {
        res.status(500).json({ message: "Login failed" });
    }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('name'); 
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user' });
  }
};


