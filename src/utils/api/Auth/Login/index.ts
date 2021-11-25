import instance from "../../Default";

export const postLogin = async (data: object) => {
  try {
    const response = await instance.post('/v1/user/signin/', data);
    return response
  } catch (error) {
    throw error;
  }
};
