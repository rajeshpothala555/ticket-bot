const db = require('../db/config');
const User = db.User

module.exports = {
    signin : async (req, res) => {
    try {
      //take user details from req body
      const { name, email, password } = req.body;
      //find user by email
      const findcustomer = await User.findOne({
        where: {
          email
        },
      });
      //user details undefined create new user
      if(!findcustomer){
        const newUser = await User.create({
          name,
          email,
          password,
        });
        return res.json({ message: 'User created successfully', user: newUser });
      }else{
        return res.json({ message: 'User Alredy Registerd' });
      }      
    } catch (error) {
      console.log(error);
      throw error
    }
  },
  login: async(req,res)=>{
    try{
      //take user email and password from req body
      const { email, password } = req.body;
      console.log(password,email)
      //user find by email
      const findcustomer = await User.findOne({
        where: {
          email
        },
      });
      //user undefind send Not registerd
      if(!findcustomer){
        return res.status(401).json({
          message: "Not Registered"
        })
      };
      // check passsword match or not
      if(findcustomer.password!==password){
        return res.status(401).json({
          message: "Invalid Password"
        })
      };
      return res.status(200).json({message:"Login successful",name:`${findcustomer.name}`})
    }catch(error){
      console.log(error)
      throw error
    }

  },
 
  changePassword: async (req, res) => {
    try {
      //take user details from req body
      const { email, password, newpassword } = req.body;
      console.log(email,password,newpassword)
      //user find by email
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid current password' });
      }
      user.password = newpassword;
      await user.save();

      res.status(200).json({
        message: 'Password updated successfully',
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

