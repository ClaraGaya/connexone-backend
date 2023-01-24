import * as dotenv from 'dotenv';


const isAuth = (req, res, next) => {
    const auth = req.headers.authorization;
    console.log('auth', auth)
    if (auth === `${process.env.SECRET}`) {
      return next();
    } else {
      res.status(403);
      res.send('Access forbidden');
      return res;
    }
};

export default isAuth;