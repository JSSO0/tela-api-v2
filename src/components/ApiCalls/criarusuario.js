// api.js
import axios from 'axios';

export const criarusuario = async (userData) => {
  try {
    const response = await axios.post(
      'http://localhost:8080/api/pessoas',
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Erro ao chamar a API:', error);
    throw new Error('Erro ao chamar a API');
  }
};
