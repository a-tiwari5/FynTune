import axios from "axios";
import * as types from "./actionType";

const getShops = (shops) => ({
  type: types.GET_SHOPS,
  payload: shops,
});

const shopDeleted = () => ({
  type: types.DELETE_SHOP,
});

const shopAdded = () => ({
  type: types.ADD_SHOP,
});

export const loadShops = () => {
  return (disptach) => {
    axios
      .get(`http://localhost:5000/shops`)
      .then((res) => {
        console.log("response" + res);
        disptach(getShops(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteShop = (id) => {
  return (disptach) => {
    axios
      .delete(`http://localhost:5000/shops/${id}`)
      .then((res) => {
        console.log("response" + res);
        disptach(shopDeleted());
        disptach(loadShops());
      })
      .catch((err) => console.log(err));
  };
};

export const addShop = (shop) => {
  const ot = shop.openingTime.split(":");
  const ct = shop.closingTime.split(":");
  const dateNow = new Date();
  const nowHours = dateNow.getHours();
  // const nowMins = dateNow.getMinutes();

  var status = false;

  if (nowHours >= ot[0] && nowHours <= ct[0]) {
    status = "open";
  } else {
    status = "closed";
  }

  return (disptach) => {
    axios
      .post(`http://localhost:5000/shops/`, { ...shop, status })
      .then((res) => {
        disptach(shopAdded());
      })
      .catch((err) => console.log(err));
  };
};
