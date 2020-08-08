const express=require('express');
const app=express();
const authenticationUser=require('./router/allrouter');
var port =1338;
app.use('/', require('./router/allrouter'));
app.get('*',  (req, res) => res.status(404).send({ error: 'page not found' }));









app.listen(port, function () {
    console.log('listening on *:', port);
})