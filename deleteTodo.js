const errHandle = require('./errorHandle');

const deleteTodo = (res, header, reqUrl, todos) => {
  const id = reqUrl.split('/').pop();
  const delIndex = todos.findIndex(e => e.id == id);
  if(delIndex !== -1) {
    todos.splice(delIndex, 1);
    res.writeHead(200, header);
    res.write(JSON.stringify({
      'status': 'success',
      'data': todos
    }));
    res.end();
  } else {
    errHandle(res);
  }
}

const deleteAllTodos = (res, header, todos) => {
  todos.length = 0;
  res.writeHead(200, header);
  res.write(JSON.stringify({
    'status': 'success',
    'messaage': '已全部刪除',
    'data': todos
  }));
  res.end();
};

module.exports = { deleteTodo, deleteAllTodos };