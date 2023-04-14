// Fetch data from Api
export const getUsers = async (page, resultsPerPage) => {
  const URL = `https://randomuser.me/api/?page=${page}&results=${resultsPerPage}`;
  const response = await fetch(URL);
  return response.json();
};
