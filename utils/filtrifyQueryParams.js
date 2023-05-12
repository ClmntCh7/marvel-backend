const filtrifyQueryParams = (queryParam) => {
  //   if (queryParam.l) {
  //   }
  const entries = Object.entries(queryParam);
  log(entries.length);
  const newArr = [];
  entries.map((elem, index) => {
    [...newArr];
    newArr.push(elem.join("="));
  });
  const filters = newArr.join("&");
  return filters + "&";
};
