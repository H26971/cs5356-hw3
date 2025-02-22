function fetchCatFact() {
    const factElement = document.getElementById('random-cat-fact');
    const buttonElement = document.querySelector('button');

    factElement.innerText = 'Loading a fun cat fact... 🐾';
    buttonElement.disabled = true; 

    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            factElement.innerText = `🐾 Fun Fact: ${data.fact}`;
        })
        .catch(error => {
            console.error('Failed to fetch cat fact:', error);
            factElement.innerText = 'Failed to fetch a new fact. Please try again later.';
        })
        .finally(() => {
            buttonElement.disabled = false; 
        });
}

document.addEventListener('DOMContentLoaded', fetchCatFact);
