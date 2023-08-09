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

        console.log(instance.chipsData);

        const labels = instance.chipsData.map(e=>e.tag);

        labels.forEach(label=>{
            const inputElem = document.createElement('input');
            inputElem.name = "labels";
            inputElem.value= label
            inputElem.hidden = true;
            formElem.appendChild(inputElem);
        });
        

        formElem.submit()
    });

});

async function fetchLabels(){

    
    
}

function chipAddHandler(){

}

function chipSelectHandler(){
    
}

function chipDeleteHandler(){

}

