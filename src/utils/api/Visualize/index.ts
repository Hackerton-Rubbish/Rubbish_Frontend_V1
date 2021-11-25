import instance from "../Default";

export const getMyLitter = async (year : number, month : number) => {
  try {
    return await instance.get(`/v1/user/data/garbage-output/?year=${year}&month=${month}`);
  } catch (error) {
    throw error;
  }
};

export const postMyLitter = async (year : number, month : number, amount : number) => {
  const data = {
    year: year,
    month: month,
    amount: amount,
  };
  try {
    return await instance.post(`/v1/user/data/garbage-output/?year=${year}&month=${month}`, data);
  } catch (error) {
    throw error;
  }
};
