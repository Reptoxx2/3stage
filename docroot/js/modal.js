let modal = document.querySelector('.modal');
let modalc = document.querySelector('.modal__content');
let close = document.getElementById('close-but')
let send = document.getElementById('send-but')
let connect = document.getElementById('connection')

document.body.addEventListener("click", (event) => {

  if (event.target === connect)
  {
    modal.classList.remove('active');
  }
  else if (!event.target.closest('.modal__wrap') || event.target === close)
  {
    modal.classList.add('active');
  }
})
