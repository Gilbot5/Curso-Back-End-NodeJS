import userModel from "../models/user.model.js"

export const getUser = async (id) => {
  const usuario = await userModel.getUser(id);
  if (usuario === null) {
    return null;
  }
  return usuario;
};

export default {
  getUser
};