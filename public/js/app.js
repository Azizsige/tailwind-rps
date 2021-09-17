const btnStart = document.getElementById('btn-start')
const contentPlay = document.getElementById('content-play');
const btnBack = document.getElementById('back');

btnStart.addEventListener('click', function(){
  contentPlay.classList.remove('hidden')
})
btnBack.addEventListener('click', function(){
  contentPlay.classList.add('hidden')
})