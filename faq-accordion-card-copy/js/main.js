
// Accordion folding actions

const accordion = document.getElementsByClassName('container');

for(i = 0; i < accordion.length; i++){
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
}


const ham = [1,2,3,4,5,6]

console.log(ham);

// document.getElementsByClassName('container').forEach(container.addEventListener('click',function)){
//   this.classList.toggle('active')
// }
