module.exports.home = async function(req,res){
    return res.render('index',{
        title: 'Covideo'
    });
}