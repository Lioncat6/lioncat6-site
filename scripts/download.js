function showAd(url){
    const overlay = document.getElementById('overlay');
      const box = document.getElementById('box');
      
      // Inject HTML content into the box
      box.innerHTML = `
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8744471424191306"
       crossorigin="anonymous"></script>
    <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8744471424191306" data-ad-slot="7534387079" data-ad-format="auto" data-full-width-responsive="true"></ins>
                  <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>
  
          <button id="hideOverlay">Close</button>`;
      
      // Add event listener to the new close button
      document.getElementById('hideOverlay').addEventListener('click', function() {
          overlay.classList.remove('show');
          Location.href=url;
      });
  
      overlay.classList.add('show');
  };