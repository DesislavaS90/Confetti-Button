function generateConfetti() {
    const confettiBtn = document.querySelector('.confetti-button');

    confettiBtn.addEventListener('click', () => {
        console.log("Button clicked!");
        const canvas = document.createElement('canvas');
        const container  = document.querySelector('.wrapper');

        canvas.width = 600;
        canvas.height = 600;

        container.appendChild(canvas);

        const confettiInstance = confetti.create(canvas);

        
        confettiInstance().then(() => {
    
            canvas.remove();
        });
    });
}

generateConfetti();
