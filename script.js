document.addEventListener('DOMContentLoaded', function() {
    const portfolioContainer = document.getElementById('portfolioContainer');
    const modal = document.getElementById('imageModal');
    const imageContainer = document.getElementById('imageContainer');
    const modalImg = document.getElementById('fullImage');
    const closeBtn = document.querySelector('.close');
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    const resetZoomBtn = document.getElementById('resetZoom');
    
    // Image data - replace with your actual images
    const imageFiles = [
{ thumb: 'images/thumbs/1304_Bulbs.JPG', full: 'images/1304_Bulbs.JPGphoto1.jpg', title: '1304_Bulbs.JPG' },
{ thumb: 'images/thumbs/1304_Edge.JPG', full: 'images/1304_Edge.JPGphoto1.jpg', title: '1304_Edge.JPG' },
{ thumb: 'images/thumbs/1304_Gentletouch.JPG', full: 'images/1304_Gentletouch.JPGphoto1.jpg', title: '1304_Gentletouch.JPG' },
{ thumb: 'images/thumbs/1304_Overdrive.JPG', full: 'images/1304_Overdrive.JPGphoto1.jpg', title: '1304_Overdrive.JPG' },
{ thumb: 'images/thumbs/1304_Skynet.JPG', full: 'images/1304_Skynet.JPGphoto1.jpg', title: '1304_Skynet.JPG' },
{ thumb: 'images/thumbs/blue_window.jpg', full: 'images/blue_window.jpgphoto1.jpg', title: 'blue_window.jpg' },
{ thumb: 'images/thumbs/bottle.jpg', full: 'images/bottle.jpgphoto1.jpg', title: 'bottle.jpg' },
{ thumb: 'images/thumbs/guard1.jpg', full: 'images/guard1.jpgphoto1.jpg', title: 'guard1.jpg' },
{ thumb: 'images/thumbs/guard2.jpg', full: 'images/guard2.jpgphoto1.jpg', title: 'guard2.jpg' },
{ thumb: 'images/thumbs/guard3.jpg', full: 'images/guard3.jpgphoto1.jpg', title: 'guard3.jpg' },
{ thumb: 'images/thumbs/IMG_0021.jpg', full: 'images/IMG_0021.jpgphoto1.jpg', title: 'IMG_0021.jpg' },
{ thumb: 'images/thumbs/IMG_0022.jpg', full: 'images/IMG_0022.jpgphoto1.jpg', title: 'IMG_0022.jpg' },
{ thumb: 'images/thumbs/IMG_0023.JPG', full: 'images/IMG_0023.JPGphoto1.jpg', title: 'IMG_0023.JPG' },
{ thumb: 'images/thumbs/IMG_0109_full.jpg', full: 'images/IMG_0109_full.jpgphoto1.jpg', title: 'IMG_0109_full.jpg' },
{ thumb: 'images/thumbs/IMG_0110.jpg', full: 'images/IMG_0110.jpgphoto1.jpg', title: 'IMG_0110.jpg' },
{ thumb: 'images/thumbs/IMG_0116.jpg', full: 'images/IMG_0116.jpgphoto1.jpg', title: 'IMG_0116.jpg' },
{ thumb: 'images/thumbs/IMG_0143.jpg', full: 'images/IMG_0143.jpgphoto1.jpg', title: 'IMG_0143.jpg' },
{ thumb: 'images/thumbs/IMG_0146.JPG', full: 'images/IMG_0146.JPGphoto1.jpg', title: 'IMG_0146.JPG' },
{ thumb: 'images/thumbs/IMG_0150.JPG', full: 'images/IMG_0150.JPGphoto1.jpg', title: 'IMG_0150.JPG' },
{ thumb: 'images/thumbs/IMG_0155.JPG', full: 'images/IMG_0155.JPGphoto1.jpg', title: 'IMG_0155.JPG' },
{ thumb: 'images/thumbs/IMG_0175.jpg', full: 'images/IMG_0175.jpgphoto1.jpg', title: 'IMG_0175.jpg' },
{ thumb: 'images/thumbs/IMG_0176.JPG', full: 'images/IMG_0176.JPGphoto1.jpg', title: 'IMG_0176.JPG' },
{ thumb: 'images/thumbs/IMG_0187.JPG', full: 'images/IMG_0187.JPGphoto1.jpg', title: 'IMG_0187.JPG' },
{ thumb: 'images/thumbs/IMG_0200.JPG', full: 'images/IMG_0200.JPGphoto1.jpg', title: 'IMG_0200.JPG' },
{ thumb: 'images/thumbs/IMG_0231 - Copy.JPG', full: 'images/IMG_0231 - Copy.JPGphoto1.jpg', title: 'IMG_0231 - Copy.JPG' },
{ thumb: 'images/thumbs/IMG_0233.jpg', full: 'images/IMG_0233.jpgphoto1.jpg', title: 'IMG_0233.jpg' },
{ thumb: 'images/thumbs/IMG_0234.JPG', full: 'images/IMG_0234.JPGphoto1.jpg', title: 'IMG_0234.JPG' },
{ thumb: 'images/thumbs/IMG_0244.JPG', full: 'images/IMG_0244.JPGphoto1.jpg', title: 'IMG_0244.JPG' },
{ thumb: 'images/thumbs/IMG_0245.jpg', full: 'images/IMG_0245.jpgphoto1.jpg', title: 'IMG_0245.jpg' },
{ thumb: 'images/thumbs/IMG_0251.JPG', full: 'images/IMG_0251.JPGphoto1.jpg', title: 'IMG_0251.JPG' },
{ thumb: 'images/thumbs/IMG_0257.jpg', full: 'images/IMG_0257.jpgphoto1.jpg', title: 'IMG_0257.jpg' },
{ thumb: 'images/thumbs/IMG_0271.JPG', full: 'images/IMG_0271.JPGphoto1.jpg', title: 'IMG_0271.JPG' },
{ thumb: 'images/thumbs/IMG_0350_final.jpg', full: 'images/IMG_0350_final.jpgphoto1.jpg', title: 'IMG_0350_final.jpg' },
{ thumb: 'images/thumbs/IMG_0448.jpg', full: 'images/IMG_0448.jpgphoto1.jpg', title: 'IMG_0448.jpg' },
{ thumb: 'images/thumbs/IMG_0462.jpg', full: 'images/IMG_0462.jpgphoto1.jpg', title: 'IMG_0462.jpg' },
{ thumb: 'images/thumbs/IMG_0482.jpg', full: 'images/IMG_0482.jpgphoto1.jpg', title: 'IMG_0482.jpg' },
{ thumb: 'images/thumbs/IMG_0488.jpg', full: 'images/IMG_0488.jpgphoto1.jpg', title: 'IMG_0488.jpg' },
{ thumb: 'images/thumbs/IMG_0496.jpg', full: 'images/IMG_0496.jpgphoto1.jpg', title: 'IMG_0496.jpg' },
{ thumb: 'images/thumbs/IMG_0498.jpg', full: 'images/IMG_0498.jpgphoto1.jpg', title: 'IMG_0498.jpg' },
{ thumb: 'images/thumbs/IMG_0506.jpg', full: 'images/IMG_0506.jpgphoto1.jpg', title: 'IMG_0506.jpg' },
{ thumb: 'images/thumbs/IMG_20250505_152743.jpg', full: 'images/IMG_20250505_152743.jpgphoto1.jpg', title: 'IMG_20250505_152743.jpg' },
{ thumb: 'images/thumbs/NotRoseMoon_A.jpg', full: 'images/NotRoseMoon_A.jpgphoto1.jpg', title: 'NotRoseMoon_A.jpg' },
{ thumb: 'images/thumbs/parcer.py', full: 'images/parcer.pyphoto1.jpg', title: 'parcer.py' },
{ thumb: 'images/thumbs/stripes.jpg', full: 'images/stripes.jpgphoto1.jpg', title: 'stripes.jpg' },
{ thumb: 'images/thumbs/teabag_dream.jpg', full: 'images/teabag_dream.jpgphoto1.jpg', title: 'teabag_dream.jpg' },
{ thumb: 'images/thumbs/thumb_creator.py', full: 'images/thumb_creator.pyphoto1.jpg', title: 'thumb_creator.py' }
    ];
    
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
