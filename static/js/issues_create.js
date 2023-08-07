document.addEventListener('DOMContentLoaded', function () {
    let elem = document.querySelectorAll('.chips')[0];
    let options = {
        placeholder: "Add labels",
        secondaryPlaceholder: "+labels",
        autocompleteOptions: {
            data: {
                'Apple': null,
                'Microsoft': null,
                'Google': null
            },
            limit: Infinity,
            minLength: 1
        },
        limit: Infinity,
        onChipAdd: chipAddHandler,
        onChipSelect: chipSelectHandler,
        onChipDelete: chipDeleteHandler
    };

    let instance = M.Chips.init(elem, options);


    //Setting up the form data
    const formElem = document.getElementsByTagName('form')[0];


    formElem.addEventListener('submit', function (ev){
        ev.preventDefault();

        //Getting all the form data
        const formData = new FormData(formElem);

        //get the labels data from chip
        //convert them into array of string
        // data from chipData will be in form of [{key: 'chip1'}, {key: 'chip2'}]
        //convert that into ['chip1', 'chip2']

        const labels = instance.chipsData.map(e=>e.tag);

        labels.forEach(label => {
            formData.append('labels', label);
        });

        //create the issue by calling the API
        createIssueAPICall(formData);

    });

});

async function createIssueAPICall(formData){

    try {

        const res = await fetch("/api/v1/issues", {
            method: 'POST',
            body: formData
        });
    
        const jsonRes = await res.json();
    
        location.replace('/issues'+location.search)
        
    } catch (error) {
        console.log(error);
    }
    
}

function chipAddHandler(){

}

function chipSelectHandler(){
    
}

function chipDeleteHandler(){

}

