class Project{

    name
    description
    author
   

    constructor(name, desc, author){
        this.name = name;
        this.description = desc;
        this.author = author;

        this.labels = new Set();
        this.issues = [];
    }

    addIssue(title, des, author, labels){
        const issue = new Issue(title, des, author, labels);
        
        labels.forEach(label => {
            this.labels.add(label);
        });

        this.issues.push(issue);
    }
}

class Issue {

    title
    description
    labels
    author

    constructor(title, desc, author, labels){
        this.title = title;
        this.description = desc;
        this.labels = labels;
        this.author = author
    }
}

class MyAppData {
    projects = [];
    self

    constructor(){
        // if(this.self){
            this.initMyData();
        //     return this.self = new MyAppData();
        // }else{
        //     return this.self;
        // }
    }

    initMyData(){
        this.projects.push(new Project('First Project', 'Description', 'Kus_Maurya'));
    }

    getAllProject(){
        return this.projects;
    }
}

const myApp = new MyAppData();

module.exports = myApp;