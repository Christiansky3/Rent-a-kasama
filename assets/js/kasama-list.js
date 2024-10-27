// scripts/kasama-list.js

// Fetch workers from local storage (or API)
const workers = JSON.parse(localStorage.getItem('workers')) || [];

const workerCardsContainer = document.getElementById('worker-cards');

// Dynamically create worker cards
workers.forEach((worker) => {
    const card = `
        <div class="worker-card">
            <img src="${worker.photo}" alt="${worker.name}">
            <div class="worker-info">
                <h3>${worker.name}</h3>
                <p>Age: ${worker.age}</p>
                <p>Location: ${worker.location}</p>
            </div>
        </div>
    `;
    workerCardsContainer.innerHTML += card;
});
