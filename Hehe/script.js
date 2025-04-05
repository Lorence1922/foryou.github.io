document.getElementById('revealButton').addEventListener('click', function() {
    const envelope = document.getElementById('envelope');
    const openButton = document.getElementById('openButton');

    // Reveal the envelope and the open button
    envelope.style.display = 'block';
    openButton.style.display = 'inline-block';
});

document.getElementById('openButton').addEventListener('click', function() {
    const envelope = document.getElementById('envelope');
    envelope.classList.toggle('open');
});
document.getElementById('revealButton').addEventListener('click', function() {
    const envelope = document.getElementById('envelope');
    const openButton = document.getElementById('openButton');
    const revealButton = document.getElementById('revealButton');

    // Reveal the envelope and the open button
    envelope.style.display = 'block';
    openButton.style.display = 'inline-block';
    
    // Hide the reveal button
    revealButton.style.display = 'none';
});

document.getElementById('openButton ').addEventListener('click', function() {
    const envelope = document.getElementById('envelope');
    envelope.classList.toggle('open');
});