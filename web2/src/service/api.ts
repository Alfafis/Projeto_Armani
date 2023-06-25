async function api(endpoint: string) {
  await fetch(`${import.meta.env.VITE_API_ROTA_URL}/${endpoint}`, {
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:5173',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
}
export default api;
