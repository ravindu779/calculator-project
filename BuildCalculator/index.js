//CALCULATOR PROGRAM

//console.dir(document);
//console.log(document.URL);
//console.log(document.lastModified);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[9]);
//console.log(document.links);
//console.log(document.images);


const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
