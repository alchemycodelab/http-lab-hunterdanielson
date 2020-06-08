module.exports = rawRequest => {

  const arr = rawRequest.split(' ');
  const [method, path] = arr;
  const [, body] = rawRequest.split('\r\n\r\n');
  if(body) {
    return {
      method,
      path,
      body
    };
  } else {

    return {
      method,
      path
    };
  }
};
