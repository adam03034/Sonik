function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.innerText = '❤️';
    document.body.appendChild(heart);
    
    // Remove heart after it floats away
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create a heart every 300 milliseconds
setInterval(createHeart, 300);

// Add some CSS for the heart
const css = document.createElement('style');
css.type = 'text/css';
css.innerHTML = `.heart {
    position: absolute;
    bottom: 0;
    font-size: 24px;
    animation: floatUp linear infinite;
}`;

// Add keyframes for floating animation
css.innerHTML += `@keyframes floatUp {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100vh); opacity: 0; }
}`;

document.head.appendChild(css);
