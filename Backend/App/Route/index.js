module.exports= function(app){
     app.use(require('./Auth/Auth.Route'));
     app.use(require('./Product.Route'));
}