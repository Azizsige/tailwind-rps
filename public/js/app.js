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

window.addEventListener('popstate', function(event) {
  // The popstate event is fired each time when the current history entry changes.

  var r = confirm("You pressed a Back button! Are you sure?!");

  if (r == true) {
      // Call Back button programmatically as per user confirmation.
      history.back();
      // Uncomment below line to redirect to the previous page instead.
      // window.location = document.referrer // Note: IE11 is not supporting this.
  } else {
      // Stay on the current page.
      history.pushState(null, null, window.location.pathname);
  }

  history.pushState(null, null, window.location.pathname);

}, false);