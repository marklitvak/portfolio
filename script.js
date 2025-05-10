document.addEventListener('DOMContentLoaded', function() {
    const portfolioContainer = document.getElementById('portfolioContainer');
    const modal = document.getElementById('imageModal');
    const modalContent = document.getElementById('fullImage');
    const closeBtn = document.querySelector('.close');
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    const resetZoomBtn = document.getElementById('resetZoom');

    // Image data - replace with your actual images
    const imageFiles = [{ thumb: 'images/thumbs/1304_Bulbs.JPG', full: 'images/1304_Bulbs.JPG', title: '1304_Bulbs.JPG' },
{ thumb: 'images/thumbs/1304_Edge.JPG', full: 'images/1304_Edge.JPG', title: '1304_Edge.JPG' },
{ thumb: 'images/thumbs/1304_Gentletouch.JPG', full: 'images/1304_Gentletouch.JPG', title: '1304_Gentletouch.JPG' },
{ thumb: 'images/thumbs/1304_Overdrive.JPG', full: 'images/1304_Overdrive.JPG', title: '1304_Overdrive.JPG' },
{ thumb: 'images/thumbs/1304_Skynet.JPG', full: 'images/1304_Skynet.JPG', title: '1304_Skynet.JPG' },
{ thumb: 'images/thumbs/blue_window.jpg', full: 'images/blue_window.jpg', title: 'blue_window.jpg' },
{ thumb: 'images/thumbs/bottle.jpg', full: 'images/bottle.jpg', title: 'bottle.jpg' },
{ thumb: 'images/thumbs/guard1.jpg', full: 'images/guard1.jpg', title: 'guard1.jpg' },
{ thumb: 'images/thumbs/guard2.jpg', full: 'images/guard2.jpg', title: 'guard2.jpg' },
{ thumb: 'images/thumbs/guard3.jpg', full: 'images/guard3.jpg', title: 'guard3.jpg' },
{ thumb: 'images/thumbs/IMG_0021.jpg', full: 'images/IMG_0021.jpg', title: 'IMG_0021.jpg' },
{ thumb: 'images/thumbs/IMG_0022.jpg', full: 'images/IMG_0022.jpg', title: 'IMG_0022.jpg' },
{ thumb: 'images/thumbs/IMG_0023.JPG', full: 'images/IMG_0023.JPG', title: 'IMG_0023.JPG' },
{ thumb: 'images/thumbs/IMG_0109_full.jpg', full: 'images/IMG_0109_full.jpg', title: 'IMG_0109_full.jpg' },
{ thumb: 'images/thumbs/IMG_0110.jpg', full: 'images/IMG_0110.jpg', title: 'IMG_0110.jpg' },
{ thumb: 'images/thumbs/IMG_0116.jpg', full: 'images/IMG_0116.jpg', title: 'IMG_0116.jpg' },
{ thumb: 'images/thumbs/IMG_0143.jpg', full: 'images/IMG_0143.jpg', title: 'IMG_0143.jpg' },
{ thumb: 'images/thumbs/IMG_0146.JPG', full: 'images/IMG_0146.JPG', title: 'IMG_0146.JPG' },
{ thumb: 'images/thumbs/IMG_0150.JPG', full: 'images/IMG_0150.JPG', title: 'IMG_0150.JPG' },
{ thumb: 'images/thumbs/IMG_0155.JPG', full: 'images/IMG_0155.JPG', title: 'IMG_0155.JPG' },
{ thumb: 'images/thumbs/IMG_0175.jpg', full: 'images/IMG_0175.jpg', title: 'IMG_0175.jpg' },
{ thumb: 'images/thumbs/IMG_0176.JPG', full: 'images/IMG_0176.JPG', title: 'IMG_0176.JPG' },
{ thumb: 'images/thumbs/IMG_0187.JPG', full: 'images/IMG_0187.JPG', title: 'IMG_0187.JPG' },
{ thumb: 'images/thumbs/IMG_0200.JPG', full: 'images/IMG_0200.JPG', title: 'IMG_0200.JPG' },
{ thumb: 'images/thumbs/IMG_0231 - Copy.JPG', full: 'images/IMG_0231 - Copy.JPG', title: 'IMG_0231 - Copy.JPG' },
{ thumb: 'images/thumbs/IMG_0233.jpg', full: 'images/IMG_0233.jpg', title: 'IMG_0233.jpg' },
{ thumb: 'images/thumbs/IMG_0234.JPG', full: 'images/IMG_0234.JPG', title: 'IMG_0234.JPG' },
{ thumb: 'images/thumbs/IMG_0244.JPG', full: 'images/IMG_0244.JPG', title: 'IMG_0244.JPG' },
{ thumb: 'images/thumbs/IMG_0245.jpg', full: 'images/IMG_0245.jpg', title: 'IMG_0245.jpg' },
{ thumb: 'images/thumbs/IMG_0251.JPG', full: 'images/IMG_0251.JPG', title: 'IMG_0251.JPG' },
{ thumb: 'images/thumbs/IMG_0257.jpg', full: 'images/IMG_0257.jpg', title: 'IMG_0257.jpg' },
{ thumb: 'images/thumbs/IMG_0271.JPG', full: 'images/IMG_0271.JPG', title: 'IMG_0271.JPG' },
{ thumb: 'images/thumbs/IMG_0350_final.jpg', full: 'images/IMG_0350_final.jpg', title: 'IMG_0350_final.jpg' },
{ thumb: 'images/thumbs/IMG_0448.jpg', full: 'images/IMG_0448.jpg', title: 'IMG_0448.jpg' },
{ thumb: 'images/thumbs/IMG_0462.jpg', full: 'images/IMG_0462.jpg', title: 'IMG_0462.jpg' },
{ thumb: 'images/thumbs/IMG_0482.jpg', full: 'images/IMG_0482.jpg', title: 'IMG_0482.jpg' },
{ thumb: 'images/thumbs/IMG_0488.jpg', full: 'images/IMG_0488.jpg', title: 'IMG_0488.jpg' },
{ thumb: 'images/thumbs/IMG_0496.jpg', full: 'images/IMG_0496.jpg', title: 'IMG_0496.jpg' },
{ thumb: 'images/thumbs/IMG_0498.jpg', full: 'images/IMG_0498.jpg', title: 'IMG_0498.jpg' },
{ thumb: 'images/thumbs/IMG_0506.jpg', full: 'images/IMG_0506.jpg', title: 'IMG_0506.jpg' },
{ thumb: 'images/thumbs/IMG_20250505_152743.jpg', full: 'images/IMG_20250505_152743.jpg', title: 'IMG_20250505_152743.jpg' },
{ thumb: 'images/thumbs/NotRoseMoon_A.jpg', full: 'images/NotRoseMoon_A.jpg', title: 'NotRoseMoon_A.jpg' },
{ thumb: 'images/thumbs/parcer.py', full: 'images/parcer.py', title: 'parcer.py' },
{ thumb: 'images/thumbs/stripes.jpg', full: 'images/stripes.jpg', title: 'stripes.jpg' },
{ thumb: 'images/thumbs/teabag_dream.jpg', full: 'images/teabag_dream.jpg', title: 'teabag_dream.jpg' },
{ thumb: 'images/thumbs/thumb_creator.py', full: 'images/thumb_creator.py', title: 'thumb_creator.py' }];

    // Zoom and pan variables
    let scale = 1;
    let posX = 0;
    let posY = 0;
    let isDragging = false;
    let startX, startY, initialX, initialY;
    let initialDistance = null;
    let lastTouchTime = 0;

    // Create thumbnails
    function createThumbnails() {
        imageFiles.forEach((image) => {
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
        modalContent.src = src;
        modalContent.alt = title;
        
        // Wait for image to load before positioning
        if (modalContent.complete) {
            centerImage();
        } else {
            modalContent.onload = centerImage;
        }
    }

    // Center image in view
    function centerImage() {
        const containerWidth = modal.clientWidth;
        const containerHeight = modal.clientHeight;
        const imgWidth = modalContent.naturalWidth;
        const imgHeight = modalContent.naturalHeight;
        
        // Calculate initial scale to fit image to container
        scale = Math.min(
            containerWidth / imgWidth,
            containerHeight / imgHeight,
            1 // Don't scale up beyond 100%
        );
        
        // Center the image
        posX = (containerWidth - imgWidth * scale) / 2;
        posY = (containerHeight - imgHeight * scale) / 2;
        
        updateTransform();
    }

    // Update image transform
    function updateTransform() {
        modalContent.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
    }

    // Reset zoom and position
    function resetZoom() {
        scale = 1;
        posX = 0;
        posY = 0;
        updateTransform();
        centerImage();
    }

    // Zoom functions with center point preservation
    function zoom(zoomFactor, clientX, clientY) {
        const prevScale = scale;
        scale *= zoomFactor;
        
        // Limit scale
        scale = Math.max(0.1, Math.min(scale, 10));
        
        // Calculate mouse position relative to image
        const imgRect = modalContent.getBoundingClientRect();
        const relativeX = clientX - imgRect.left;
        const relativeY = clientY - imgRect.top;
        
        // Adjust position to zoom toward the point
        posX = clientX - (clientX - posX) * (scale / prevScale);
        posY = clientY - (clientY - posY) * (scale / prevScale);
        
        updateTransform();
    }

    // Button event handlers
    zoomInBtn.addEventListener('click', (e) => {
        const rect = modal.getBoundingClientRect();
        zoom(1.2, rect.left + rect.width/2, rect.top + rect.height/2);
    });

    zoomOutBtn.addEventListener('click', (e) => {
        const rect = modal.getBoundingClientRect();
        zoom(1/1.2, rect.left + rect.width/2, rect.top + rect.height/2);
    });

    resetZoomBtn.addEventListener('click', resetZoom);
    closeBtn.addEventListener('click', () => modal.style.display = 'none');

    // Mouse event handlers
    modalContent.addEventListener('mousedown', (e) => {
        if (scale <= 1) return;
        
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialX = posX;
        initialY = posY;
        modalContent.style.cursor = 'grabbing';
        e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        
        posX = initialX + dx;
        posY = initialY + dy;
        
        updateTransform();
        e.preventDefault();
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
        modalContent.style.cursor = 'grab';
    });

    // Touch event handlers
    modalContent.addEventListener('touchstart', (e) => {
        const now = Date.now();
        if (now - lastTouchTime < 300) { // Double-tap detection
            resetZoom();
            e.preventDefault();
            return;
        }
        lastTouchTime = now;

        if (e.touches.length === 1) {
            if (scale <= 1) return;
            
            isDragging = true;
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            initialX = posX;
            initialY = posY;
            e.preventDefault();
        } else if (e.touches.length === 2) {
            initialDistance = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            e.preventDefault();
        }
    });

    window.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1 && isDragging) {
            const dx = e.touches[0].clientX - startX;
            const dy = e.touches[0].clientY - startY;
            
            posX = initialX + dx;
            posY = initialY + dy;
            
            updateTransform();
            e.preventDefault();
        } else if (e.touches.length === 2) {
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            const currentDistance = Math.hypot(
                touch1.clientX - touch2.clientX,
                touch1.clientY - touch2.clientY
            );
            
            if (initialDistance) {
                const centerX = (touch1.clientX + touch2.clientX) / 2;
                const centerY = (touch1.clientY + touch2.clientY) / 2;
                zoom(currentDistance / initialDistance, centerX, centerY);
            }
            initialDistance = currentDistance;
            e.preventDefault();
        }
    });

    window.addEventListener('touchend', () => {
        isDragging = false;
        initialDistance = null;
    });

    // Prevent modal close when interacting with image
    modalContent.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Initialize cursor
    modalContent.style.cursor = 'grab';

    // Create the portfolio
    createThumbnails();
});
