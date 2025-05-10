document.addEventListener('DOMContentLoaded', function() {
    const portfolioContainer = document.getElementById('portfolioContainer');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('fullImage');
    const captionText = document.getElementById('imageCaption');
    const closeBtn = document.querySelector('.close');
    
    // Replace with your actual image folder path
    const imageFolder = 'images/';
    
    // Array of image filenames (or you could fetch them dynamically from the server)
    const imageFiles = [
        'photo1.jpg',
        'photo2.jpg',
        'photo3.jpg',
        'photo4.jpg',
        'photo5.jpg',
        'photo6.jpg'
    ];
    
    // Function to create thumbnail elements
    function createThumbnails() {
        imageFiles.forEach((filename, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'thumbnail';
            
            const img = document.createElement('img');
            img.src = `${imageFolder}thumbs/${filename}`; // Assuming you have a thumbs subfolder
            img.alt = `Photo ${index + 1}`;
            
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.textContent = `Photo ${index + 1}`;
            
            thumbnail.appendChild(img);
            thumbnail.appendChild(overlay);
            
            // Add click event to show modal
            thumbnail.addEventListener('click', function() {
                modal.style.display = 'block';
                modalImg.src = `${imageFolder}${filename}`;
                captionText.textContent = `Photo ${index + 1}`;
            });
            
            portfolioContainer.appendChild(thumbnail);
        });
    }
    
    // Close modal when clicking the X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Initialize the portfolio
    createThumbnails();
});
