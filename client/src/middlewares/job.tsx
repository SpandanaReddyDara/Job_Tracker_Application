import axios from 'axios';

export const fetchJob = async (link: any, token: any) =>
  await axios.post(`http://localhost:4000/api/fetch-job`, link, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

export const getJobs = async (userId: any, query: any, token: any) =>
  await axios.post(`http://localhost:4000/api/jobs/${userId}`, query, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

export const addJob = async (userId: any, jobDetails: any, token: any) =>
  await axios.post(
    `http://localhost:4000/api/add-job/${userId}`,
    jobDetails,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const editJob = async (userId: any, jobDetails: any, token: any) =>
  await axios.post(
    `http://localhost:4000/api/edit-job/${userId}`,
    jobDetails,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const deleteJob = async (userId: any, jobId: any, token: any) =>
  await axios.post(`http://localhost:4000/api/delete-job/${userId}`, jobId, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

export const changeJobStatus = async (jobId: any, userId: any, token: any) =>
  await axios.post(`http://localhost:4000/api/status/${jobId}`, userId, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

export const getJobSites = async (userId: any, token: any) =>
  await axios.get(`http://localhost:4000/api/job-sites/${userId}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

export const getJobStats = async (userId: any, token: any) =>
  await axios.get(`http://localhost:4000/api/job-stats/${userId}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
