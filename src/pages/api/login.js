// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../../models/User"
import connectDb from "../../../middlewere/mongoose"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');


const handler =async (req,res)=>{
    if (req.method === "POST") {
       
       
        let user = await User.findOne({ "email": req.body.email }); 
        if (user) {
          const bytes  = CryptoJS.AES.decrypt(user.password, 'secret333')
          let decryptPass = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
          if (req.body.email == user.email && req.body.password == decryptPass) {
            var token = jwt.sign({  email: user.email, name: user.name }, 'jwtsecret333');
            res.status(200).json({success: true,token});
          } else {
            res.status(200).json({ success: false, error: "Invalid Credentials" });
          }
        } else {
          res.status(200).json({ success: false, error: "No user found" });
        }
        
       
      } else {
        res.status(400).json({ error: "This method is not allowed" });
      }
      
   
}
export default connectDb(handler);
  

