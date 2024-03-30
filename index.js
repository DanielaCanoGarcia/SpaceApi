require('dotenv').config();//read file .env
const server = require('./server/index.js');//vars in process.env
const PORT = process.env.PORT || 3300;
console.log(PORT);
server.listen(PORT, ()=> console.log('Server is live at localhost:${PORT}'));
