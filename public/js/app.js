const btnStart = document.getElementById('btn-start')
const contentPlay = document.getElementById('content-play');
const btnBack = document.getElementById('back');
const selecteds = document.querySelectorAll('.selected');
const contentPlay_user = document.querySelector('.content-play__user');
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

  console.log(userSelected);
}

selecteds.forEach(selected => {
  selected.addEventListener('click', event => {
    getUserSelect(event)
  })
})

document.addEventListener("backbutton", onBackButton);

function onBackButton(e){
  //display popup
  alert("You Back!!!")
}