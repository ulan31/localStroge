let container = document.querySelector('.wrapper .container');

function animate(){
  let pos = 0;
  let id = setInterval(frame, 10);

  function frame(){
    if(pos == 250){
      clearInterval(id);
    } else{
      pos++;
      container.style.top = pos + 'px';
      container.style.left = pos + 'px';
    }
  }
}

container.addEventListener('click', animate);