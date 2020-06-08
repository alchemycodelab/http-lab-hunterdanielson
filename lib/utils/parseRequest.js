module.exports = rawRequest => {

  const [method, path,,, body] = rawRequest.split(' ');
  if(body.includes('\n')) {
    return {
      method,
      path,
      body: body.substring(
        body.lastIndexOf('{'),
        body.lastIndexOf('}') + 1
      )
    };
  } else {

    return {
      method,
      path
    };
  }
};
