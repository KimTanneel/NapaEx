require('dotenv').config()
const nodemailer = require("nodemailer")

async function main() {
  let testAccount = await nodemailer.createTestAccount()
  let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS, 
    },
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.USER, 
    to: process.env.USER, 
    subject: "Send Node JS", 
    text: "Hi Send Mail From Node Js ", 
  },function(err,info){
    if(err){
      console.log(err);
    }
    else{
      console.log("Send Email"+info.response);
    }
  });
}

main().catch(console.error);