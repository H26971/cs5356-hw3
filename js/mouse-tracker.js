document.addEventListener("mousemove", (event) => {
    let x = event.clientX / window.innerWidth;
    let y = event.clientY / window.innerHeight;
    let red = Math.round(x * 255);
    let green = Math.round(y * 255);
    let blue = Math.round((1 - x) * 255);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});