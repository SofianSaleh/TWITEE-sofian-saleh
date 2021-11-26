import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: `${process.env.SERVICE}`,
  auth: {
    user: `${process.env.EMAIL_USER}`,
    pass: `${process.env.EMAIL_PASS}`,
  },
  //   host: `${process.env.host}`,
  //   port: `${process.env.port}`,
  //   service: `${process.env.service}`,
  //   secure: false,
  //   auth: {
  //     user: `${process.env.user}`,
  //     pass: `${process.env.pass}`,
  //   },
  //   debug: false,
  //   logger: true,
});

const sendMail = async (info: { name: string; email: string }) => {
  const mailOptions = {
    from: `${process.env.EMAIL_USER}`, // sender address
    to: info.email, // list of receivers
    subject: `Welcome to Twitter Clone"`, // Subject line
    html: `<h1>From Sofian Test twitter clone</h1>
        <p> Welcome to our wbsite we hope you enjoy our services </p>
        `,
  };
  try {
    const emailVerification = await transporter.sendMail(mailOptions);
    return {
      success: true,
      msg: emailVerification,
    };
  } catch (e: any) {
    throw e;
  }
};
export default sendMail;
