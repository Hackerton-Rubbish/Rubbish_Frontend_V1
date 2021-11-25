import instance from "../Default";

export const getMyLitter = async () => {
  try {
    return await instance.get("/v1/user/data/garbage-output/");
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
    return await instance.post("/v1/user/data/garbage-output/", data);
  } catch (error) {
    throw error;
  }
};
