import instance from "../Default";

export const getDreamsWrittenToday = async () => {
    try {
      return await instance.get(`그거 주소`);
    } catch (error) {
      throw error;
    }
  };