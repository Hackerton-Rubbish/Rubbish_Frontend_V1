import instance from "../Default";

export const getMyLitter = async () => {
    try {
      return await instance.get("/");
    } catch (error) {
      throw error;
    }
  };