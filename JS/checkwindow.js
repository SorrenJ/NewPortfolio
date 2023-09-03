function checkWindowSize() {
    if (window.innerWidth < 800) {
    var specificScript = document.getElementById('pro');
        specificScript.parentNode.removeChild(specificScript);
    } else {
    // Enable your specific script (e.g., add the script tag back or enable its functionality)
    }
    }
    
    // Initial check
    checkWindowSize();
    
    // Listen for window resize
    window.addEventListener('resize', checkWindowSize);
      
      
    //remove element id for the processing.js file
      