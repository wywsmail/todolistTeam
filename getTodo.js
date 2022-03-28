const getTodo = (res, header, data) => {
  res.writeHead(200, header);
  res.write(JSON.stringify({
    status: 'success',
    data
  }));
  res.end();
}

module.exports = getTodo;