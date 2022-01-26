document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/a.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/i.png'
    },
    // {
    //   name:'s',
    //   img:'images/s.png'
    // },
    {
      name: 'ice-cream',
      img: 'images/z.png'
    },
    {
      name: 'pizza',
      img: 'images/d.jpg'
    },
    {
      name: 'milkshake',
      img: 'images/l.png'
    },
    // {
    //   name:'s',
    //   img:'images/s.png'
    // },
    {
      name: 'hotdog',
      img: 'images/g.png'
    },
    {
      name: 'fries',
      img: 'images/a.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/i.png'
    },
    {
      name: 'x',
      img: 'images/x.png'
    },
    {
      name:'y',
      img:'images/y.png'
    },
    {
      name: 'ice-cream',
      img: 'images/z.png'
    },
    {
      name: 'pizza',
      img: 'images/d.jpg'
    },
    {
      name: 'milkshake',
      img: 'images/l.png'
    },
    {
      name: 'x',
      img: 'images/x.png'
    },
    {
      name:'y',
      img:'images/y.png'
    },
    {
      name: 'hotdog',
      img: 'images/g.png'
    }
  ]
  const seconde = document.getElementById('seconde');
  const minute = document.getElementById('minute');

  let sec= 0;
  let min =0;
  const secInterval = setInterval(()=>{
    sec++;
    seconde.innerHTML =sec;
  
    if(sec == 60){
      sec =0;
      min ++;
      seconde.innerHTML = sec;
      minute.innerHTML = min;
    }


  },1000)


function playMusic(){
  let audio = new Audio('./images/song.mp3');
  document.getElementById('stop').addEventListener('click',()=>{
    audio.pause();
  })
  audio.play();

}


const btn = document.getElementById('palym');
btn.addEventListener('click',()=> playMusic())


  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.className='img'
      card.setAttribute('src', 'images/c.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {

    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/c.jpg')
      cards[optionTwoId].setAttribute('src', 'images/c.jpg')
      alert('You click at the same ')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Correct')
      cards[optionOneId].setAttribute('src', 'images/flag.jpg')
      cards[optionTwoId].setAttribute('src', 'images/flag.jpg')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/c.jpg')
      cards[optionTwoId].setAttribute('src', 'images/c.jpg')
      alert('Wrong guess')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'You find all cards'
     
      clearInterval(secInterval)
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
