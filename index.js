document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const copyBtn = document.getElementById('copyBtn');
    const resetBtn = document.getElementById('resetBtn');
    const saveBtn = document.getElementById('saveBtn');
    const text = document.getElementById('text');
    const colorHistory = document.getElementById('colorHistory');
    const favoriteColors = document.getElementById('favoriteColors');
    const initialColor = '#017e71';

    let history = [];
    let favorites = [];

    btn.addEventListener('click', () => {
        let randomNum = Math.floor(Math.random() * 16777216);
        let randomColor = randomNum.toString(16).padStart(6, '0'); // Ensure 6 digits
        let newColor = '#' + randomColor;

        document.body.style.backgroundColor = newColor;
        text.innerText = newColor;

        addColorToHistory(newColor);
    });

    copyBtn.addEventListener('click', () => {
        const colorCode = text.innerText;
        navigator.clipboard.writeText(colorCode).then(() => {
            alert(`Copied ${colorCode} to clipboard`);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });

    resetBtn.addEventListener('click', () => {
        document.body.style.backgroundColor = initialColor;
        text.innerText = initialColor;
    });

    saveBtn.addEventListener('click', () => {
        const colorCode = text.innerText;
        if (!favorites.includes(colorCode)) {
            favorites.push(colorCode);
            displayFavoriteColors();
        }
    });

    function addColorToHistory(color) {
        history.push(color);
        displayColorHistory();
    }

    function displayColorHistory() {
        colorHistory.innerHTML = '';
        history.forEach(color => {
            const colorBox = document.createElement('div');
            colorBox.className = 'color-box';
            colorBox.style.backgroundColor = color;
            colorHistory.appendChild(colorBox);
        });
    }

    function displayFavoriteColors() {
        favoriteColors.innerHTML = '';
        favorites.forEach(color => {
            const colorBox = document.createElement('div');
            colorBox.className = 'color-box';
            colorBox.style.backgroundColor = color;
            favoriteColors.appendChild(colorBox);
        });
    }
});
