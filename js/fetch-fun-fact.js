function fetchFunFact() {
    const factElement = document.getElementById('random-fun'); 
    const buttonElement = document.getElementById('fun-button');

    factElement.innerText = '🐾 Fetching a fun cat fact...';
    buttonElement.disabled = true; 

    fetch('https://catfact.ninja/fact') 
        .then(response => response.json())
        .then(data => {
            factElement.innerText = `🐱 ${data.fact}`;
        })
        .catch(error => {
            console.error('Failed to fetch fun fact:', error);
            factElement.innerText = '⚠️ Failed to fetch a new fun fact. Please try again later.';
        })
        .finally(() => {
            buttonElement.disabled = false; 
        });
}

document.addEventListener("DOMContentLoaded", () => {
    fetchFunFact(); 
    const button = document.getElementById("fun-button");
    if (button) {
        button.addEventListener("click", fetchFunFact);
    }
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

