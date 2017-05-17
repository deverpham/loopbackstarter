let loopback = require('loopback');
let express =require('express')
var boot = require('loopback-boot');
export let app=loopback();
const bodyParser = require('body-parser');
app.use('/public',express.static('./public'));
const path =require('path');

//IMPORT ROUTER
import indexRouter from './router/index.router';
app.use(bodyParser.urlencoded({
  extended:true
}));

app.use(bodyParser.json());
app.set('views','./views');
app.set('view engine','pug');
//USER ROUTER
app.use(indexRouter);
boot(app,path.join(__dirname,'../server'),() => {

  app.listen(process.env.PORT,() => {
    console.log(`Server started \r\nlisten ${process.env.PORT}`)
  });
});
