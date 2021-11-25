import { instance, connection } from "../Default";

export const getConnectionList = async () => {
  try {
    return await instance.get("/v1/post/market/");
  } catch (error) {
    console.log(error);
  }
};

export const getConnected = async () => {
  try {
    return await instance.get("/v1/post/market/connect/");
  } catch (error) {
    console.log(error);
  }
};

export const postConnection = async (
  postKind: string,
  trashKind: string,
  content: string,
  qty: number,
  image: any
) => {
  const data = {
    postKind: postKind,
    trashKind: trashKind,
    content: content,
    qty: qty,
    image: image,
  };
  try {
    return await connection.post("/v1/post/market/", data);
  } catch (error) {
    console.log(error);
  }
};
