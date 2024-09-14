function showAd(url){
    const overlay = document.getElementById('overlay');
      const box = document.getElementById('adBox');
      
      // Inject HTML content into the box
      
      (adsbygoogle = window.adsbygoogle || []).push({});
      // Add event listener to the new close button
      document.getElementById('hideOverlay').addEventListener('click', function() {
          overlay.classList.remove('show');
          Location.href=url;
      });
  
      overlay.classList.add('show');
  };