document.addEventListener('DOMContentLoaded', () => {
    const redLight = document.getElementById('red');
    const yellowLight = document.getElementById('yellow');
    const greenLight = document.getElementById('green');
    const timerEl = document.getElementById('timer');
    const statusEl = document.getElementById('status');

    // Configuration for the light sequence
    const lights = [
        { el: redLight, duration: 20000, status: 'STOP', colorClass: 'red' },
        { el: greenLight, duration: 10000, status: 'GO', colorClass: 'green' },
        { el: yellowLight, duration: 5000, status: 'WAIT', colorClass: 'yellow' }
    ];

    let currentLightIndex = 0;
    let countdownInterval;

    function changeLight() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        
        lights.forEach(light => light.el.classList.remove('active'));

        const currentLight = lights[currentLightIndex];
        currentLight.el.classList.add('active');
        
        // Update status display
        statusEl.textContent = currentLight.status;
        statusEl.className = `status-text ${currentLight.colorClass}`;

        let timeLeft = currentLight.duration / 1000;
        timerEl.textContent = timeLeft;

        countdownInterval = setInterval(() => {
            timeLeft--;
            timerEl.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
            }
        }, 1000);

        setTimeout(() => {
            currentLightIndex = (currentLightIndex + 1) % lights.length;
            changeLight();
        }, currentLight.duration);
    }

    // Start the traffic light sequence
    changeLight();
});