const { v4: uuidv4 } = require('uuid');
const errHandle = require('./errorHandle');

const postTodo = (res, body, todos, headers) => {
    try{
        const title = JSON.parse(body).title;
        if(title){
            todos.push({
                'title':title,
                'id': uuidv4()
            });
            res.writeHead(200, headers);
            res.write(JSON.stringify({
                'status': 'success',
                'data': todos
            }));
            res.end();
        }else{
            errHandle(res);
        }
    }catch(err){
        errHandle(res);
    }
};

module.exports = postTodo;
