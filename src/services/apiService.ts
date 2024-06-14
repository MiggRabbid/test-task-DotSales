import axios from 'axios';

const TOKEN='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJhOGM5MzRhYjBjZTFkYjRmMmFjNTg5MzVkYzJjZjY1YjcyMzM4M2U0OTkyNWM0NjZkZTc4NjI2NzcxOTc4ZTI5NGU0ODQ4MDkyZWMxMGIxIn0.eyJhdWQiOiI1YjJkMzQ2ZC0yMmFhLTQ3OWYtYThlMy0yMjcyYjEzZTNmZTIiLCJqdGkiOiIyYThjOTM0YWIwY2UxZGI0ZjJhYzU4OTM1ZGMyY2Y2NWI3MjMzODNlNDk5MjVjNDY2ZGU3ODYyNjc3MTk3OGUyOTRlNDg0ODA5MmVjMTBiMSIsImlhdCI6MTcxODM0OTE5NywibmJmIjoxNzE4MzQ5MTk3LCJleHAiOjE3MjUxNDg4MDAsInN1YiI6IjExMTU1NDM4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxNzk4Nzc4LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiMWUzYTI1YmYtNGM1YS00OWRhLTkzNTMtOTllMzE5NTFkOTQwIn0.RTxqZ9_IoScVl8zPgoULjr_3wMUTFYxWhv7HDDU8qIA7DJt2BJtOu-vEUoEQ9uvozBYVhYDI6wrH5CRaDZg60FUnbCghI7GMlGNMNb7EBF2TtFAv5AFi2T_vCWmp3GcH0-EkWO0Z0hbwxVLxzQKTiQitWV9X_RmD7-7d7vsSwLyqzXnFJ5XgdkBxYu7_Qg5tFOA_Ytuo1lmBCXyif59IKaDARRgkAlmhMnNIfSs60l_IOKTcQ7LBPQD28_xWkjjpU4ibCeD2BD-V0j4moE-xVki7tdlNuVUu03fu-z2G0n2M2na3KKpRohp3ZVzq0fK5bZnE1jDGw-Zxjg7uMjYV2g'

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Authorization': `Bearer ${TOKEN}`,
    'Content-Type': 'application/json'
  }
});

const fetchLeads = async () => {
  console.log('---- start fetchLeads');
  try {
    const response = await api.get('/leads');
    return response.data._embedded.leads;
  } catch (error) {
    console.error('Ошибка при выполнении запроса', error);
    throw error;
  }
}

const fetchUsers = async () => {
  console.log('---- start fetchUsers');
  try {
    const response = await api.get(`/users/`);
    return response.data._embedded.users;
  } catch (error) {
    console.error('Ошибка при выполнении запроса', error);
    throw error;
  }
}

const fetchPipelines = async () => {
  console.log('---- start fetchPipelines');
  try {
    const response = await api.get(`/leads/pipelines`);
    console.log(response.data._embedded.pipelines);
    return response.data._embedded.pipelines;
  } catch (error) {
    console.error('Ошибка при выполнении запроса', error);
    throw error;
  }
}

export { fetchLeads, fetchUsers, fetchPipelines};