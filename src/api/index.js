import instance from "./request";

export const requestPOST = (url, payload, header) => {
  return new Promise((resolve, reject) => {
    instance({
      method: "post",
      url,
      data: payload,
      headers: {
        "Content-Type": header ? header : "application/x-www-form-urlencoded",
      },
    }).then((res) => {
      return resolve(res.data);
    });
  });
};
export const requestGET = (url, payload, header) => {
  return new Promise((resolve, reject) => {
    instance
      .get(url, {
        params: payload,
      })
      .then((res) => {
        return resolve(res);
      });
  });
};
