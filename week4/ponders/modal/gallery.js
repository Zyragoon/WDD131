
let dialog = document.querySelector('dialog');
let gallery = document.querySelector('.gallery');
let dialogImage = document.querySelector('dialog img');
const closeButton = document.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', function(event){
    console.log(event.target.src);

    if(event.target.src != undefined){
        dialogImage.src = event.target.src.replace("-sm", "-full");
        dialog.showModal();
    }
});


    
// Code to show modal  - Use event parameter 'e'   
    

// Close modal on button click
closeButton.addEventListener('click', () => {
    dialog.close();
});

// Close modal if clicking outside the image
dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});
          