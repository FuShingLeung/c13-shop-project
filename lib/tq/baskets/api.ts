import { BasketType } from '@/ts/interfaces/props.interfaces';
import axios from 'axios';

export const BASKETS_ENDPOINT = `/api/v1/baskets/`;

// User functions
export const fetchUserBasket = async () => {
  const { data } = await axios(`${BASKETS_ENDPOINT}`);
  // const data = {};
  // console.log('fetchUserBasket data', data);
  return data;
};

export const addToBasket = async (itemID: string) => {
  console.log('addToBasket', itemID);
  const response = await axios({
    method: 'POST',
    url: `${BASKETS_ENDPOINT}own`,
    data: { itemID },
  });
  return response.data;
};

export const removeItemFromUserBasket = async (itemID: string) => {
  return await axios({
    method: 'DELETE',
    url: `${BASKETS_ENDPOINT}own/${itemID}`,
  });
};

export const emptyBasket = async () => {
  return await axios({
    method: 'DELETE',
    url: `${BASKETS_ENDPOINT}own/all`,
  });
};

// Admin ones for CRUD-ing baskets
export const fetchBaskets = async () => {
  const { data } = await axios(BASKETS_ENDPOINT);
  return data;
};

export const addBasket = async (data: BasketType) => {
  const response = await axios({
    method: 'POST',
    url: BASKETS_ENDPOINT,
    data,
  });
  return response.data;
};

export const updateBasket = async ({
  id,
  data,
}: {
  id: string;
  data: BasketType;
}) => {
  const response = await axios({
    url: `${BASKETS_ENDPOINT}${id}`,
    method: 'PUT',
    data,
  });
  return response.data;
};

export const deleteBasket = async (id: string) => {
  return await axios({
    method: 'DELETE',
    url: `${BASKETS_ENDPOINT}${id}`,
  });
};
