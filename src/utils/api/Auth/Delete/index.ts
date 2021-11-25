import instance from "../../Default";

export const deleteAuth = async () => {
  try {
    const response = await instance.delete('/v1/user/');
    return response
  } catch (error) {
    throw error;
  }
};
