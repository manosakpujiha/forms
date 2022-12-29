const form = document.querySelector('#form');
const creditCard = document.querySelector('#credit-card');
const file = document.querySelector('#file');
const book = document.querySelector('#book');
const check = document.querySelector('#check');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('creditCard:', creditCard.value);
    console.log('file:', file.value);
    console.log('book:', book.value);
    console.log('check:', check.checked);
    console.log(formData);
})

const formData = {};
check.addEventListener('input', function(e) {
   formData['check'] = e.target.checked;
   console.log(formData);
});

creditCard.addEventListener('input', function(e) {
    formData['credit'] = e.target.value;
    console.log(formData);
 })

 book.addEventListener('input', function(e) {
    formData['book'] = e.target.value;
    console.log(formData);
 });

 file.addEventListener('input', function(e) {
    formData['file'] = e.target.value;
    console.log(formData);
 })