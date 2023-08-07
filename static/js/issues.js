document.addEventListener('DOMContentLoaded', function () {
    initializeAuthorSelect();

    initializeLabelSelect();

    formSubmit();

    initializeAddFloatButton();
});

function initializeAuthorSelect() {

    let elem = document.getElementById('author-select');
    elem.innerHTML = '';

    let authors = ['Kus', 'John', 'Marry'];

    authors.forEach(author => {

        let optionElem = document.createElement('option');
        optionElem.innerHTML = author;
        optionElem.value = author;

        elem.append(optionElem);
    });


    const options = {};
    let instances = M.FormSelect.init(elem, options);

}

function initializeLabelSelect() {

    let elem = document.getElementById('label-select');
    elem.innerHTML = '';

    let labels = ['Bigginer', 'Bug', 'enhancement'];

    labels.forEach(label => {

        let optionElem = document.createElement('option');
        optionElem.innerHTML = label;
        optionElem.value = label;

        elem.append(optionElem);
    });

    const options = {};
    let instances = M.FormSelect.init(elem, options);
}

function formSubmit() {

    // const formElem = document.getElementById('issue-search-form');

    // formElem.addEventListener('submit', function(e){

    //     e.preventDefault();

    //     let formData = new FormData(formElem);

    //     console.log(formData);

    //     fetch('/abara-ka-dabra', {
    //         method: 'POST',
    //         body: formData
    //     })
    // })


}

function initializeAddFloatButton() {

    const elems = document.querySelectorAll('.tooltipped');
    const instances = M.Tooltip.init(elems, {});

}

