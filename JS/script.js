window.onload = () => {
    const phoneText = "0709876679";
    document.getElementById("phone").textContent = phoneText;
    
    anime({
        targets: '#phone',
        value: [0, phoneText.length],
        duration: 1500,
        easing: 'easeInOutQuad',
        round: 1,
        direction: 'normal',
    });

    anime({
        targets: 'h1, h2, p, li',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeInOutQuad',
        delay: anime.stagger(100, { start: 500 }),
    });
}