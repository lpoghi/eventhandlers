let clickButton = document.querySelector('.btn-alert');

clickButton.addEventListener('click', function (e) {
    alert('button clicked')
});

let changeButton = document.querySelector('#button2');

changeButton.addEventListener('click', function () {
    changeButton.classList.add("red-background")
});

let toggleButton = document.querySelector('#button3');

toggleButton.addEventListener('click', function () {
    toggleButton.classList.toggle('red-background')
})