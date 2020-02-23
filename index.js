function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', function(event) {
    alert('I was clicked!');
});
}

addingEventListener(); // adding this bit allows the browser to run the code above and execute the event