import { request } from "../../Default";

export const postEmailAuthRequest = async (data: object) => {
  try {
    const response = await request.post('/v1/user/signup/email-auth/', data);
    return response
  } catch (error) {
    throw error;
  }
};

export const emailAuthCheck = async (email: string, data: object) => {
  try {
    const response = await request.put(`/v1/user/signup/email-auth/?email=${email}`, data);
    return response
  } catch (error) {
    throw error;
  }
};

export const postRegister = async (data: object) => {
  try {
    const response = await request.post('/v1/user/signup/', data);
    return response
  } catch (error) {
    throw error;
  }
}
