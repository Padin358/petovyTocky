const code1 = '2038786903'
const code2 = '2208515018'
const code3 = '8102138954'
const code4 = '6705342961'
const code5 = '5628414102'
const code6 = '3045949295'
const code7 = '5967363441'
const code8 = '9769985895'
const code9 = '6990918890'
const code10 = '8428359773'

let betAmnt = 5

let codeIn


let numOne
let numTwo
let numThree

let outOne
let outTwo
let outThree

let bigwin
let smallwin
let tinywin
let smallamount
let bigamount
let tinyamount

let balance = 100

let lastTry = false

const oneBtnFun = () => {
  betAmnt = 1
  document.getElementById('betAmntOut').innerHTML = `Current bet amount: ${betAmnt}$`
}
const twoBtnFun = () => {
  betAmnt = 2
  document.getElementById('betAmntOut').innerHTML = `Current bet amount: ${betAmnt}$`
}
const fiveBtnFun = () => {
  betAmnt = 5
  document.getElementById('betAmntOut').innerHTML = `Current bet amount: ${betAmnt}$`
}
const tenBtnFun = () => {
  betAmnt = 10
  document.getElementById('betAmntOut').innerHTML = `Current bet amount: ${betAmnt}$`
}
const twentyBtnFun = () => {
  betAmnt = 20
  document.getElementById('betAmntOut').innerHTML = `Current bet amount: ${betAmnt}$`
}
const fiftyBtnFun = () => {
  betAmnt = 50
  document.getElementById('betAmntOut').innerHTML = `Current bet amount: ${betAmnt}$`
}
const hunBtnFun = () => {
  betAmnt = 100
  document.getElementById('betAmntOut').innerHTML = `Current bet amount: ${betAmnt}$`
}

const slots = () => {
  if(balance >= betAmnt) {
      // Win amount
    if (betAmnt === 1) {
      smallamount = 10
      bigamount = 30
    } else if (betAmnt === 2) {
      smallamount = 20
      bigamount = 60
    } else if (betAmnt === 5) {
      smallamount = 50
      bigamount = 150
    } else if (betAmnt === 10) {
      smallamount = 100
      bigamount = 300
    } else if (betAmnt === 20) {
      smallamount = 200
      bigamount = 600
    } else if (betAmnt === 50) {
      smallamount = 500
      bigamount = 1500
    } else if (betAmnt === 100) {
      smallamount = 1000
      bigamount = 3000
    }

    tinyamount = smallamount / 4

  // Randomizer
    numOne = Math.floor(Math.random() * 10)
    numTwo = Math.floor(Math.random() * 10)
    numThree = Math.floor(Math.random() * 10)

    outOne = document.getElementById('outOne').innerHTML = numOne
    outTwo = document.getElementById('outTwo').innerHTML = numTwo
    outThree = document.getElementById('outThree').innerHTML = numThree

  if(balance <= 0) {
    alert('You ran out of money! Game over.')
    document.getElementById('balance').innerHTML = 'Game over!'
    document.getElementById('btn').disabled = true
  }
  if(lastTry) {
    lastTry = false
  }

    // BigWin
    if(numOne === numTwo && numTwo === numThree) {
      bigwin = true
    } else if(numOne === numThree) {
      if(bigwin === false) {
        if(numOne === 1 || numOne === 3 ||numOne === 5 || numOne === 7 || numOne === 9) {
          smallwin = true
        }else if(numOne === 0 ||numOne === 2 || numOne === 4 ||numOne === 6 || numOne === 8) {
          smallwin = false
        }
      } else {
        smallwin = false
      }
    } else if(numOne === numTwo && numOne === 6 && numTwo === 6) {
      tinywin = true
    } else if(numTwo === numThree && numTwo === 5 && numThree === 5) {
      tinywin = true
    } else {
      smallwin = false
      bigwin = false
      tinywin = false
    }

    if (tinywin) {
      document.getElementById('result').innerHTML = 'Congratulations! You won!'
      alert(`You just won ${tinyamount}$!`)
    }

    if(smallwin) {
      document.getElementById('result').innerHTML = 'Congratulations! You won!'
      alert(`You won just about ${smallamount}$!`)
    } else {
      document.getElementById('result').innerHTML = 'Sorry, you lost!'
    }
    
    if(bigwin) {
      document.getElementById('result').innerHTML = 'Congratulations! You won!'
      alert(`You just won ${bigamount}$!`)
    } else {
      document.getElementById('result').innerHTML = 'Sorry, you lost!'
    }

    
    

    if (smallwin) {
      balance += smallamount
    } else if (bigwin) {
      balance += bigamount
    } else if(tinywin) {
      balance += tinyamount
    } 

    balance -= betAmnt

    document.getElementById('balance').innerHTML = `Balance: ${balance}$`

    if(balance <= betAmnt && balance > 0) {
      lastTry = true
    }

    if(lastTry) {
      alert('Last try!')
    }

    if(balance <= 0) {
      alert('Game over! You lost all your money.')
      document.getElementById('btn').disabled = true
      document.getElementById('result').innerHTML = "Game over!"
    }
  } else {
    alert("You don't have enough money for this bet!")
  }
}


//? Kódy
const submitCode = () => {
  codeIn = document.getElementById('code').value

  if (codeIn === code1 || codeIn === code2 || codeIn === code3 || codeIn === code4) {
    alert('Congratulations! You entered the correct code!')
    document.getElementById('code').value = ''
    document.getElementById('btn').disabled = false
    balance += 100
  }

  if (codeIn === code5 || codeIn === code6 || codeIn === code7 || codeIn === code8) {
    alert('Congratulations! You entered the correct code!')
    document.getElementById('code').value = ''
    document.getElementById('btn').disabled = false
    balance += 200
  }

  if (codeIn === code9 || codeIn === code10) {
    alert('Congratulations! You entered the correct code!')
    document.getElementById('code').value = ''
    document.getElementById('btn').disabled = false
    balance += 300
  }

  document.getElementById('balance').innerHTML = `Balance: ${balance}$`
}
