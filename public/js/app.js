const btnStart = document.getElementById('btn-start')
const imageThumb = document.getElementById('img-thumb')

function welcome(){
  let image = ['rock', 'paper', 'scissors'];
  let count = 0;

  setInterval(function(){
    imageThumb.setAttribute('src', `./assets/thumb-${image[count++]}.png`)
      if(count == image.length) count = 0
    return;
  }, 700)
}

welcome()

btnStart.addEventListener('click', function(){
  location.href = './public/play.html';
})