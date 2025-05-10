document.addEventListener('DOMContentLoaded', function() {
    const portfolioContainer = document.getElementById('portfolioContainer');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('fullImage');
    const captionText = document.getElementById('imageCaption');
    const closeBtn = document.querySelector('.close');
    
    // Replace with your actual image folder path
    const imageFolder = 'images/';
    
    // Array of image filenames (or you could fetch them dynamically from the server)
    const imageFiles = ['1304_Bulbs.JPG', '1304_Edge.JPG', '1304_Gentletouch.JPG', '1304_Overdrive.JPG', '1304_Skynet.JPG', 'blue_window.jpg', 'bottle.jpg', 'guard1.jpg', 'guard2.jpg', 'guard3.jpg', 'IMG_0021.jpg', 'IMG_0022.jpg', 'IMG_0023.JPG', 'IMG_0109_full.jpg', 'IMG_0110.jpg', 'IMG_0116.jpg', 'IMG_0143.jpg', 'IMG_0146.JPG', 'IMG_0150.JPG', 'IMG_0155.JPG', 'IMG_0175.jpg', 'IMG_0176.JPG', 'IMG_0187.JPG', 'IMG_0200.JPG', 'IMG_0231 - Copy.JPG', 'IMG_0233.jpg', 'IMG_0234.JPG', 'IMG_0244.JPG', 'IMG_0245.jpg', 'IMG_0251.JPG', 'IMG_0257.jpg', 'IMG_0271.JPG', 'IMG_0350_final.jpg', 'IMG_0448.jpg', 'IMG_0462.jpg', 'IMG_0482.jpg', 'IMG_0488.jpg', 'IMG_0496.jpg', 'IMG_0498.jpg', 'IMG_0506.jpg', 'IMG_20250505_152743.jpg', 'NotRoseMoon_A.jpg', 'parcer.py', 'stripes.jpg', 'teabag_dream.jpg'];
    
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
