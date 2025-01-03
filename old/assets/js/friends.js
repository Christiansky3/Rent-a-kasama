// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get all the "Book Now" buttons on the page
    const bookButtons = document.querySelectorAll('.book-btn');

    // Add a click event listener to each "Book Now" button
    bookButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default link behavior

            // Get the companion's name from the card
            const companionCard = button.closest('.companion-card');
            const companionName = companionCard.querySelector('h3').innerText;

            // Display a message that the companion has been booked
            alert(`You have booked ${companionName}!`);

            // Example: You can add further logic to direct users to a booking page or form
        });
    });
});
