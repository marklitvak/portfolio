document.addEventListener('DOMContentLoaded', function() {
    const portfolioContainer = document.getElementById('portfolioContainer');
    const modal = document.getElementById('imageModal');
    const imageContainer = document.getElementById('imageContainer');
    const modalImg = document.getElementById('fullImage');
    const closeBtn = document.querySelector('.close');
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    const resetZoomBtn = document.getElementById('resetZoom');
    
    
    // Replace with your actual image folder path
    const imageFolder = 'images/';
    
    // Array of image filenames (or you could fetch them dynamically from the server)
    const imageFiles = ['1304_Bulbs.JPG', '1304_Edge.JPG', '1304_Gentletouch.JPG', '1304_Overdrive.JPG', '1304_Skynet.JPG', 'blue_window.jpg', 'bottle.jpg', 'guard1.jpg', 'guard2.jpg', 'guard3.jpg', 'IMG_0021.jpg', 'IMG_0022.jpg', 'IMG_0023.JPG', 'IMG_0109_full.jpg', 'IMG_0110.jpg', 'IMG_0116.jpg', 'IMG_0143.jpg', 'IMG_0146.JPG', 'IMG_0150.JPG', 'IMG_0155.JPG', 'IMG_0175.jpg', 'IMG_0176.JPG', 'IMG_0187.JPG', 'IMG_0200.JPG', 'IMG_0231 - Copy.JPG', 'IMG_0233.jpg', 'IMG_0234.JPG', 'IMG_0244.JPG', 'IMG_0245.jpg', 'IMG_0251.JPG', 'IMG_0257.jpg', 'IMG_0271.JPG', 'IMG_0350_final.jpg', 'IMG_0448.jpg', 'IMG_0462.jpg', 'IMG_0482.jpg', 'IMG_0488.jpg', 'IMG_0496.jpg', 'IMG_0498.jpg', 'IMG_0506.jpg', 'IMG_20250505_152743.jpg', 'NotRoseMoon_A.jpg', 'stripes.jpg', 'teabag_dream.jpg'];
    
    // Zoom and pan variables
    let scale = 1;
    let posX = 0;
    let posY = 0;
    let isDragging = false;
    let startX, startY, initialX, initialY;
    
    // Create thumbnails
    function createThumbnails() {
        imageFiles.forEach((image, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'thumbnail';
            
            const img = document.createElement('img');
            img.src = image.thumb;
            img.alt = image.title;
            
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.textContent = image.title;
            
            thumbnail.appendChild(img);
            thumbnail.appendChild(overlay);
            
            thumbnail.addEventListener('click', () => openModal(image.full, image.title));
            
            portfolioContainer.appendChild(thumbnail);
        });
    }
    
    // Open modal with image
    function openModal(src, title) {
        resetZoom();
        modal.style.display = 'block';
        modalImg.src = src;
        modalImg.alt = title;
        
        // Wait for image to load before positioning
        modalImg.onload = function() {
            centerImage();
        };
    }
    
    // Center image in view
    function centerImage() {
        const containerWidth = imageContainer.clientWidth;
        const containerHeight = imageContainer.clientHeight;
        const imgWidth = modalImg.naturalWidth;
        const imgHeight = modalImg.naturalHeight;
        
        // Calculate initial scale to fit image to container
        const scaleX = containerWidth / imgWidth;
        const scaleY = containerHeight / imgHeight;
        scale = Math.min(scaleX, scaleY);
        
        // Center the image
        posX = (containerWidth - imgWidth * scale) / 2;
        posY = (containerHeight - imgHeight * scale) / 2;
        
        updateTransform();
    }
    
    // Update image transform
    function updateTransform() {
        modalImg.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
    }
    
    // Reset zoom and position
    function resetZoom() {
        scale = 1;
        posX = 0;
        posY = 0;
        updateTransform();
        centerImage();
    }
    
    // Zoom in/out functions
    function zoomIn() {
        scale *= 1.2;
        updateTransform();
    }
    
    function zoomOut() {
        scale /= 1.2;
        if (scale < 0.1) scale = 0.1;
        updateTransform();
    }
    
    // Mouse event handlers for dragging
    imageContainer.addEventListener('mousedown', (e) => {
        if (scale <= 1) return;
        
        isDragging = true;
        startX = e.clientX - posX;
        startY = e.clientY - posY;
        imageContainer.style.cursor = 'grabbing';
    });
    
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        posX = e.clientX - startX;
        posY = e.clientY - startY;
        updateTransform();
    });
    
    window.addEventListener('mouseup', () => {
        isDragging = false;
        imageContainer.style.cursor = 'grab';
    });
    
    // Touch event handlers for mobile
    imageContainer.addEventListener('touchstart', (e) => {
        if (scale <= 1 || e.touches.length !== 1) return;
        
        isDragging = true;
        startX = e.touches[0].clientX - posX;
        startY = e.touches[0].clientY - posY;
        e.preventDefault();
    });
    
    window.addEventListener('touchmove', (e) => {
        if (!isDragging || e.touches.length !== 1) return;
        
        posX = e.touches[0].clientX - startX;
        posY = e.touches[0].clientY - startY;
        updateTransform();
        e.preventDefault();
    });
    
    window.addEventListener('touchend', () => {
        isDragging = false;
    });
    
    // Pinch zoom for touch devices
    let initialDistance = null;
    
    imageContainer.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) {
            initialDistance = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
        }
    });
    
    imageContainer.addEventListener('touchmove', (e) => {
        if (e.touches.length === 2) {
            const currentDistance = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            
            if (initialDistance) {
                const newScale = scale * (currentDistance / initialDistance);
                if (newScale > 0.1 && newScale < 10) {
                    scale = newScale;
                    updateTransform();
                }
            }
            initialDistance = currentDistance;
            e.preventDefault();
        }
    });
    
    // Button event listeners
    zoomInBtn.addEventListener('click', zoomIn);
    zoomOutBtn.addEventListener('click', zoomOut);
    resetZoomBtn.addEventListener('click', resetZoom);
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Initialize the portfolio
    createThumbnails();
});
