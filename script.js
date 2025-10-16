document.getElementById('waitlistForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Create mailto link
    const subject = `Lumina Waitlist - ${data.interest}`;
    const body = `Name: ${data.name}
Interest: ${data.interest}
Background: ${data.background}
${data.message ? `Message: ${data.message}` : ''}

Submitted via Lumina Waitlist Form`;

    const mailtoLink = `mailto:info@synapticwars.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Optional: Show confirmation message
    alert('Thank you! Your email client will open with a pre-filled message. Please send it to complete your waitlist registration.');
});
