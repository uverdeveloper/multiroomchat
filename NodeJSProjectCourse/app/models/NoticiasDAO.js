function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query('select * from noticias where id_noticia = 2', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticias, callback){
    this._connection.query('select into noticias set ?', noticias, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('select * from noticias order by data_noticia desc limit 5', callback);
}

module.exports = function(){
    return NoticiasDAO;
}