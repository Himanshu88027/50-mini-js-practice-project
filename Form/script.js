document.querySelectorAll('.form label').forEach(label => {
    const letters = label.innerText.split('');
    label.innerHTML = '';

    letters.forEach((letter, idx) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.transitionDelay = `${idx * 50}ms`;
        label.appendChild(span);
    });
});