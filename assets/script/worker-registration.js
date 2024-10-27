const form = document.getElementById('kasama-worker-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Retrieve form data
    const fullName = document.getElementById('fullName').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const relationshipStatus = document.getElementById('relationshipStatus').value;
    const positionApplyingFor = document.getElementById('positionApplyingFor').value;
    const citizenship = document.getElementById('citizenship').value;
    const address = document.getElementById('address').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const experience = document.getElementById('experience').value;
    const references = document.getElementById('references').value;
    const criminalRecord = document.getElementById('criminalRecord').value;
    const photo = document.getElementById('profilePhoto').files[0];

    // Convert the photo file to a base64 string
    const reader = new FileReader();
    reader.readAsDataURL(photo);

    reader.onloadend = () => {
        const profileData = {
            fullName,
            age,
            gender,
            relationshipStatus,
            positionApplyingFor,
            citizenship,
            address,
            contactNumber,
            experience,
            references,
            criminalRecord,
            photo: reader.result // Save base64 photo
        };

        // Store the profile in local storage (replace with API in real project)
        let workers = JSON.parse(localStorage.getItem('workers')) || [];
        workers.push(profileData);
        localStorage.setItem('workers', JSON.stringify(workers));

        alert('Worker profile created successfully!');
    };
});
