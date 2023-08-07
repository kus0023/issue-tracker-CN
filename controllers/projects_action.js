const mydata = require('../helper/data');


module.exports.getProjects = function (req, res){

   return res.render('projects', {projects: mydata.projects})

    
}

module.exports.createProject = function(req, res){

    
}

module.exports.addProject = async function(req, res){
}