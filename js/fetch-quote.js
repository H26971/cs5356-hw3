function fetchQuote() {
    const quoteElement = document.getElementById('random-quote'); 
    const buttonElement = document.getElementById('quote-button');

    quoteElement.innerText = 'Loading an inspirational quote... ✨';
    buttonElement.disabled = true; 

    fetch('https://api.quotable.io/random') 
        .then(response => response.json())
        .then(data => {
            quoteElement.innerText = `💡 "${data.content}" - ${data.author}`;
        })
        .catch(error => {
            console.error('Failed to fetch quote:', error);
            quoteElement.innerText = 'Failed to fetch a new quote. Please try again later.';
        })
        .finally(() => {
            buttonElement.disabled = false; 
        });
}

document.addEventListener("DOMContentLoaded", () => {
    fetchQuote();
    document.getElementById("quote-button").addEventListener("click", fetchQuote);
});

function enableImageFollowEffect() {
    const image = document.getElementById('profile-image');

    image.addEventListener('mousemove', (event) => {
        const { offsetX, offsetY } = event;
        const moveX = (offsetX / image.clientWidth) * 10 - 5;  
        const moveY = (offsetY / image.clientHeight) * 10 - 5;

        image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'translate(0, 0)';  
    });
}

document.addEventListener('DOMContentLoaded', enableImageFollowEffect);

