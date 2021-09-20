const btnStart = document.getElementById('btn-start')
const contentPlay = document.getElementById('content-play');
const btnBack = document.getElementById('back');
const selecteds = document.querySelectorAll('.selected');

btnStart.addEventListener('click', function(){
  contentPlay.classList.remove('hidden')
})
btnBack.addEventListener('click', function(){
  contentPlay.classList.add('hidden')
})

selecteds.forEach(selected => {
  selected.addEventListener('click', event => {
    let target = event.target.id

    console.log(target);
  })
})

// -mt-32

// <div class="user-selected">
//                 <img src="./assets/paper-user.png" alt="" srcset="">
//               </div>