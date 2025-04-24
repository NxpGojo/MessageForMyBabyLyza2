(function() {
    const numOfFlowers = 4;
    const growGarden = () => {
      function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
      }
  
      let positions = [];
  
      function getNum(){
        let pos = getRandomArbitrary(0, 100);
        for(let x = 0; x < positions.length; x++){
          if(pos > positions[x] - 3 && pos < positions[x] + 3){
            return false;
          }
        }
        positions.push(pos);
      }
  
      while(positions.length < numOfFlowers){
        getNum();
      }
  
      let more = setInterval(function() {
        let flwr = document.createElement('div');
        let dim = getRandomArbitrary(30, 80);
        let leftPos = positions[0];
        positions.shift();
  
        flwr.classList.add('sunflwr');
        flwr.innerHTML = `<div class="sunflwr__leaf--left"></div>
                          <div class="sunflwr__leaf--right"></div>
                          <div class="sunflwr__stem"></div>
                          <div class="sunflwr__center"></div>
                          <div class="sunflwr__pedal--1"></div>
                          <div class="sunflwr__pedal--2"></div>
                          <div class="sunflwr__pedal--3"></div>
                          <div class="sunflwr__pedal--4"></div>
                          <div class="sunflwr__pedal--5"></div>
                          <div class="sunflwr__pedal--6"></div>
                          <div class="sunflwr__pedal--7"></div>
                          <div class="sunflwr__pedal--8"></div>
                          <div class="sunflwr__pedal--9"></div>
                          <div class="sunflwr__pedal--10"></div>
                          <div class="sunflwr__pedal--11"></div>
                          <div class="sunflwr__pedal--12"></div>`;
        flwr.style.left = `${leftPos}vw`;
        flwr.style.height = `${dim}vmin`;
        flwr.style.width = `${dim}vmin`;
        flwr.style.zIndex = 100 - dim;
        flwr.style.filter = `saturate(${getRandomArbitrary(70, 100)}%) brightness(${getRandomArbitrary(80, 150)}%)`;
        document.querySelector('body').appendChild(flwr);
      }, 150);
  
      setTimeout(function() {
        window.clearInterval(more);
      }, numOfFlowers * 150);
    }
    
    document.body.addEventListener('click', () => {
      growGarden();
    });
  })();
   // Some browsers block autoplay with sound, so this helps ensure it plays on user interaction
   document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('myAudio');
    
    // Try to play immediately
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay started
          console.log("Music is playing.");
        })
        .catch(error => {
          // Autoplay was prevented.
          console.log("Autoplay was blocked. Waiting for user interaction...");

          const unlockAudio = () => {
            audio.play();
            document.removeEventListener('click', unlockAudio);
          };

          document.addEventListener('click', unlockAudio);
        });
    }
  });