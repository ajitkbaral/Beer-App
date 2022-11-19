export const getAllBeers = (pageNumber, itemsPerPage) => {
  return new Promise((resolve, reject) => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/beers?page=${pageNumber}&per_page=${itemsPerPage}`
    )
      .then((res) => resolve(res.json()))
      .catch((e) => reject(e));
  });
};
