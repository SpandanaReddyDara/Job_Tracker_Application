import axios from 'axios';

export const getCategories = async (userId: any, token: any) =>
  await axios.get(`http://localhost:4000/api/categories/${userId}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

export const addCategory = async (userId: any, category: any, token: any) =>
  await axios.post(
    `http://localhost:4000/api/add-category/${userId}`,
    category,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const editCategory = async (
  userId: any,
  categoryDetails: any,
  token: any
) =>
  await axios.post(
    `http://localhost:4000/api/edit-category/${userId}`,
    categoryDetails,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const deleteCategory = async (
  userId: any,
  categoryId: any,
  token: any
) =>
  await axios.post(
    `http://localhost:4000/api/delete-category/${userId}`,
    categoryId,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
