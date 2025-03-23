const box = document.querySelector('.box'),
      body = document.querySelector('body')
const active = document.querySelector('.active__filter')
let ActiveX, ActiveY, isMouseDown = false, rotateX = 0, rotateY=0;
active.addEventListener('mousedown', (event)=> {
    isMouseDown = true
    ActiveX = event.clientX
    ActiveY = event.clientY  
    body.style.cursor = 'grabbing'
    active.style.cursor = 'grabbing'
})
document.addEventListener('mousemove', (event) => {
    if (!isMouseDown) return;
    const dx = (event.clientX-ActiveX)*0.5
    const dy = (event.clientY-ActiveY)*0.5
    rotateY+=dx*0.5
    rotateX+=-dy*0.5
        box.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`

            ActiveX = event.clientX
            ActiveY = event.clientY 
})
document.addEventListener('mouseup', (event)=> {
    isMouseDown = false;
    body.style.cursor = 'default'
    active.style.cursor = 'grab'
})
let posX ;
let posY;
active.addEventListener(  "touchstart",
    (event) => {
        const { clientX, clientY } = event.touches[0];	
        ActiveX = clientX;
        ActiveY = clientY;
    }
  );

document.addEventListener('touchmove', event => {
	const { clientX, clientY } = event.touches[0];	
	posX = clientX;
	posY = clientY;
    const dx = (posX-ActiveX)*0.5
    const dy = (posY-ActiveY)*0.5
    rotateY+=dx*0.5
    rotateX+=-dy*0.5
        box.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`

            ActiveX = clientX
            ActiveY = clientY 
})
