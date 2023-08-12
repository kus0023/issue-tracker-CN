
const mydata = require('../helper/data');


module.exports.getCreateIssue = function (req, res) {
    return res.render('issues_create', {projectIndex: req.query.projectId});
}

module.exports.getIssues = function (req, res) {
    
    let index = req.query.projectId;

    if(typeof Number.parseInt(index) == 'number'){

        index = Number.parseInt(index);

        let issues = mydata.projects[index].issues;

        let projectId = index;

        let labels = mydata.projects[index].labels;

        let authors = [];

        issues.forEach(issue => {
            authors.push(issue.author);
        });

        // console.log({issues, projectId, labels, authors});

        return res.render('issues', {issues, projectId, labels, authors });
    }else{
        return res.redirect('back');
    }
}

module.exports.addIssue = function (req, res){

    let {title, description, labels, author, projectId} = req.body

    if(typeof labels == 'string'){
        labels=[labels];
    }

    projectId = Number.parseInt(projectId);

    mydata.projects[projectId].addIssue(title, description, author, labels);


    return res.redirect('/issues?projectId='+projectId);
}