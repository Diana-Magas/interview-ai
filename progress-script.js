const ctx = document.getElementById('progressChart').getContext('2d');

const purpleGradient = ctx.createLinearGradient(0, 0, 0, 400);
purpleGradient.addColorStop(0, 'rgba(90, 79, 243, 0.3)');
purpleGradient.addColorStop(1, 'rgba(90, 79, 243, 0)');

const blueGradient = ctx.createLinearGradient(0, 0, 0, 400);
blueGradient.addColorStop(0, 'rgba(79, 209, 243, 0.2)');
blueGradient.addColorStop(1, 'rgba(79, 209, 243, 0)');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['May 1', 'May 8', 'May 15', 'May 22', 'May 29'],
        datasets: [{
            label: 'Score',
            data: [40, 55, 48, 65, 85],
            borderColor: '#5a4ff3',
            backgroundColor: purpleGradient,
            fill: true,
            tension: 0.4, 
            pointRadius: 0
        }, {
            label: 'Sessions',
            data: [20, 30, 25, 45, 40],
            borderColor: '#4fd1f3',
            backgroundColor: blueGradient,
            fill: true,
            tension: 0.4,
            pointRadius: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: {
                grid: { color: '#1e1e26' },
                ticks: { color: '#a0a0ab', stepSize: 20 }
            },
            x: {
                grid: { display: false },
                ticks: { color: '#a0a0ab' }
            }
        }
    }
});