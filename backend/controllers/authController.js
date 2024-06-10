import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//user Registration

export const register = async(req , res) =>{
    try{

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password , salt);

        const newUser = new User({
           username:req.body.username,
            email:req.body.email,
            password: hash,
            photo:req.body.photo
        })

         await newUser.save();

         res.status(200).json({success:true , message:'Successfully Created'})

    }catch(err){ 
         res.status(500).json({success:false , message: 'Failed to Create. Try again'});
    }
};

// user login

export const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
  
      // Check if the user exists
      if (!user) {
        return res.status(404).json({ success: false, message: 'User Not Found' });
      }
  
      // Check if the password is correct
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
  
      // If the password is incorrect
      if (!isPasswordCorrect) {
        return res.status(401).json({ success: false, message: 'Incorrect email or password' });
      }
  
      // Destructure user object to exclude password
      const { password: userPassword, role, ...rest } = user._doc;
  
      // Create JWT token
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: '15d' });
  
      // Set the token as a cookie and send the response
      res.cookie('accessToken', token, { httpOnly: true, expires:token.expiresIn }).status(200).json({
        success: true,
        token,
        message: 'Successfully logged in',
        data: { ...rest },
        role,
      });
  
    } catch (err) {
      // Handle any errors
      console.error(err);
      res.status(500).json({ success: false, message: 'Failed to login' });
    }
  };