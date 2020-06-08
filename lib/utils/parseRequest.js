module.exports = rawRequest => {

  const [method, path] = rawRequest.split(' ');
  const arr = rawRequest.split(' ');
  return {
    method,
    path
  };
};
