const btnStart = document.getElementById('btn-start')
const contentPlay = document.getElementById('content-play');
const btnBack = document.getElementById('back');
const selecteds = document.querySelectorAll('.selected');
const contentPlay_user = document.querySelector('.content-play__user');
const contentPlay_comp = document.querySelector('.content-play__comp img');
const contentPlay_userSelected = document.querySelector('.content-play__user--selected');
const contentPlay_text = document.querySelector('.content-play__text');



btnStart.addEventListener('click', function(){
  contentPlay.classList.remove('hidden')
})
btnBack.addEventListener('click', function(){
  contentPlay.classList.add('hidden')
  location.reload()
})

function getUserSelect(selected){
  let userSelected = selected.target.id;
  const deleteTag = contentPlay_user.remove();
  contentPlay_userSelected.innerHTML += `<img class="w-28" src="./assets/${userSelected}-user.png" alt="" srcset="">`

  // console.log(userSelected);
  return userSelected;
}

function getCompSelected(){
  const comp = Math.random();
  if( comp > 0.34) return contentPlay_comp.src = './assets/rock-comp.png';
  if( comp >= 0.34 && comp < 0.67) return contentPlay_comp.src = './assets/paper-comp.png';
  return contentPlay_comp.src = './assets/scissors-comp.png';
}

function getResults(comp, user){
  if(user == comp) return 'Draw';
  if(user == 'rock') return (comp == './assets/scissors-comp.png') ? 'Win' : 'Lose';
  if(user == 'paper') return (comp == './assets/scissors-comp.png') ? 'Lose' : 'Win';
  if(user == 'scissors') return (comp == './assets/paper-comp.png') ? 'Win' : 'Lose';
}


selecteds.forEach(selected => {
  selected.addEventListener('click', event => {
    // getUserSelect(event)
    const userGame = getUserSelect(event);
    const computer = getCompSelected();
    const result = getResults(computer, userGame);

    console.log(`user : ${userGame}`);
    console.log(`comp : ${computer}`);
    console.log(`result : ${result}`);

  })
})