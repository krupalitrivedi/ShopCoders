import connectDb from "../../../middleware/db";
import Users from "../../../models/UserSchema";

const handler = async (req, res) => {
  let searcheduser = await Users.findOne({ email: req.body.email });
  if (searcheduser) {
    let u = await Users.findOneAndUpdate(
      { email: req.body.email },
      { cartproducts: req.body.cartproducts }
    );

    return res.status(200).json({ sucess: "sucess" });
  }

  console.log(req.body.cartproducts);
  console.log(req.body.email);
  let p = new Users({
    email: req.body.email,
    cartproducts: req.body.cartproducts,
  });

  await p.save();

  return res.status(200).json(p);
};

export default connectDb(handler);
