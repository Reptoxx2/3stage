let modal = document.querySelector('.modal');
let modalc = document.querySelector('.modal__content');
let close = document.getElementById('close-but')
let send = document.getElementById('send-but')
let connect = document.getElementById('connection')
let back = document.querySelector('.content__background')

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


let slidefade = setInterval(async () =>
{

  if (window.getComputedStyle(back).backgroundImage === 'url("http://3stage.docksal/img/slide1.png")')
  {

    back.style.backgroundImage = "url(\"http://3stage.docksal/img/slide2.png\")"
  }
  else if (window.getComputedStyle(back).backgroundImage === 'url("http://3stage.docksal/img/slide2.png")')
  {

    back.style.backgroundImage = "url(\"http://3stage.docksal/img/slide1.png\")"
  }

},4000)
{

}
