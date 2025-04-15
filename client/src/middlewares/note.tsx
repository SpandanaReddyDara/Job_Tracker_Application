import axios from 'axios';

export const addNote = async (userId: any, noteDetails: any, token: any) =>
  await axios.post(
    `http://localhost:4000/api/add-note/${userId}`,
    noteDetails,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const deleteNote = async (userId: any, noteDetails: any, token: any) =>
  await axios.post(
    `http://localhost:4000/api/delete-note/${userId}`,
    noteDetails,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
