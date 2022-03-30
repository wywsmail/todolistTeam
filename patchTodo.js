const errHandle = require('./errorHandle');

const patchTodo = (payload) => {
  const {req, res, body, headers, todos} = payload;

  try {
    const { title } = JSON.parse(body);
    if(!title) {
      return errHandle(res);
    }

    const id = req.url.split('/').pop();
    const isExist = todos.find(o => o.id === id);
    if(!isExist) {
      return errHandle(res);
    }

    const i = todos.findIndex(o => o.id === id);
    todos[i].title = title;

    res.writeHead(200, headers);
    res.write(JSON.stringify({
      'status': 'success',
      'data': todos
    }));
    res.end();
  } catch (error) {
    errHandle(res);
  }
}

module.exports = patchTodo;