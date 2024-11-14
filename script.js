const cardAll= document.querySelectorAll(".card"),
      btn = document.querySelector('.btn'),
      resUser = document.querySelector('.res__user'),
      resComp = document.querySelector('.res__comp'),
      modal = document.querySelector('.modal'),
      closeModal = document.querySelector('.close__btn'),
      textRes = document.querySelector('.text__result'),
      count = document.querySelector('.count'),
      countL = document.querySelector('.countL'),
      btns = document.querySelectorAll('.btns'),
      countgame = document.querySelector('.countgame')
let res, id, random, win = 0, loose = 0, diff = 2,allgame = 0

btns[0].addEventListener('click', ()=> {
  btns[0].style.color = 'black'
  btns[1].style.color = 'white'
  btns[2].style.color = 'white'
  diff = 1
})
btns[1].addEventListener('click', ()=> {
  btns[0].style.color = 'white'
  btns[1].style.color = 'black'
  btns[2].style.color = 'white'
  diff = 2
})
btns[2].addEventListener('click', ()=> {
  btns[0].style.color = 'white'
  btns[1].style.color = 'white'
  btns[2].style.color = 'black'
  diff = 3
})

document.addEventListener('click', clickBox)

      btn.addEventListener('click', ()=> {
        console.log(diff)
        if (res === undefined) {
          showModal('Вы не выбрали действие!')
        } else {
        cardAll.forEach(element => {
            element.classList.remove('active')
        })
        
        if (diff === 1) {
          userMoveId()
          compMoveEasy()
        }
        if (diff === 2) {
          userMoveId()
          compMove()
        }
        if (diff === 3) {
          userMoveId()
          compMoveHard()
        }
        
        setTimeout(resWin, 1000)
         }
      })
closeModal.addEventListener('click', closeMod )
window.addEventListener('click', (event) => {
 if (event.target == modal) {
  closeMod()
 }
})
function clickBox(event) {
  if (event.target.classList.contains("card")) {
    // event.target.classList.add('active')
    res =  event.target.cloneNode(true)
    resUser.innerHTML =""
    resUser.appendChild(res)
}
// document.removeEventListener('click', clickBox)
}

function compMove() {
      random = Math.floor(Math.random()*3+1)
  let resCompCard
  switch(random) {
    case 1 :
        resCompCard = cardAll[0].cloneNode(true)
        resComp.innerHTML =""
    resComp.appendChild(resCompCard)
    break
    case 2 : 
        resCompCard = cardAll[1].cloneNode(true)
        resComp.innerHTML =""
    resComp.appendChild(resCompCard)
    break
    case 3 :
      resCompCard = cardAll[2].cloneNode(true)
      resComp.innerHTML =""
      resComp.appendChild(resCompCard)
      break
  }
}
function userMoveId() {
  if (res.classList.contains("card__stone")) {
    id=1
  }
  if(res.classList.contains("card__scissors")) {
    id=2
  }
  if(res.classList.contains("card__paper")) {
    id=3
  }
}
function resWin() {
  allgame++
  if (random === id) {
    showModal('ничья')
  }
  if (random === 1 && id === 3 || random === 2 && id === 1 || random === 3 && id === 2) {
    showModal('Вы победили!!!')
    win++
  }
  if (id === 1 && random === 3 || id === 2 && random === 1 || random === 2 && id === 3) {
    showModal('Вы проиграли!!!')
    loose++
  }
}
function showModal(text) {
 textRes.textContent = text
  modal.classList.add('modal__active')
}
function closeMod() {
  textRes.textContent = ""
  modal.classList.remove('modal__active')
  resUser.innerHTML = ""
  resComp.innerHTML = ""
  id = undefined
  res = undefined
  count.textContent = win
  countL.textContent = loose
  countgame.textContent = allgame
}
function compMoveEasy() {
  if (id === 1) {
    random = 2
    resCompCard = cardAll[1].cloneNode(true)
    resComp.innerHTML =""
resComp.appendChild(resCompCard)
  }
  if (id === 2) {
    random = 3
    resCompCard = cardAll[2].cloneNode(true)
    resComp.innerHTML =""
resComp.appendChild(resCompCard)
  }
  if (id === 3) {
    random = 1
    resCompCard = cardAll[0].cloneNode(true)
    resComp.innerHTML =""
resComp.appendChild(resCompCard)
  }
}
function compMoveHard() {
if (id === 1) {
  random = 3
  resCompCard = cardAll[2].cloneNode(true)
  resComp.innerHTML =""
resComp.appendChild(resCompCard)
}
if (id === 2) {
  random = 1
  resCompCard = cardAll[0].cloneNode(true)
  resComp.innerHTML =""
resComp.appendChild(resCompCard)
}
if (id === 3) {
  random = 2
  resCompCard = cardAll[1].cloneNode(true)
  resComp.innerHTML =""
resComp.appendChild(resCompCard)
}
}
