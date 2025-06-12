document.addEventListener("DOMContentLoaded", function() {

    const multicolorElements = document.querySelectorAll('.multicolor');
    const pastelColors = ['#FFD1DC', '#FFD700', '#FFB6C1', '#FF69B4', '#FF4500', '#F08080', '#E6E6FA', '#DB7093']; 
    
    multicolorElements.forEach(element => {
        element.style.color = pastelColors[Math.floor(Math.random() * pastelColors.length)];
    });

    const title = document.getElementById('typing-title');
    const text = title.innerText;
    title.innerText = '';

    let i = 0;
    function typingEffect() {
        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
            setTimeout(typingEffect, 50); 
        }
    }
    typingEffect();
});
