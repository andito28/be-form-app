import User from "../models/User.js";

const emailExits = async (email) => {
  const user = await User.findOne({ email: email });
  if (user) {
    return true;
  }
  return false;
};

export default emailExits;
