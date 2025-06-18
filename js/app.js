import {code1, code2, code3, code4, code5, code6, code7, code8, code9, code10, codeAdmin, emojis} from "./data.js"

const oneOut = document.getElementById("oneOut")
const twoOut = document.getElementById("twoOut")
const threeOut = document.getElementById("threeOut")

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

//! Bet Amount And Buttons

const betAmntBtn = (betIn) => {
  betAmnt = betIn
  //? Resetting all the buttons so that only one would be darker
  document.getElementById("Btn1").classList = "bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded transition cursor-pointer"
  document.getElementById("Btn2").classList = "bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded transition cursor-pointer"
  document.getElementById("Btn5").classList = "bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded transition cursor-pointer"
  document.getElementById("Btn10").classList = "bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded transition cursor-pointer"
  document.getElementById("Btn20").classList = "bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded transition cursor-pointer"
  document.getElementById("Btn50").classList = "bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded transition cursor-pointer"
  document.getElementById("Btn100").classList = "bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded transition cursor-pointer"

  //? Setting the right button to be darker
  document.getElementById(`Btn${betIn}`).classList = "bg-amber-600 text-white font-bold py-2 px-4 rounded transition cursor-pointer"
}

const winAnimation = (max, min, speed, time) => {
  let w = 20
  let dir
  const winAnim = setInterval(() => {
    if (w >= max) dir = -1
    if (w <= min) dir = 1

    w += dir * speed

    document.getElementById("peta").classList = `w-${w} rounded-full animate-[spin_2s_linear_infinite] border-blue-500 border-6 absolute`
  }, 30);
  setTimeout(() => {
    clearInterval(winAnim)
    const closingAnim = setInterval(() => {
      if (w > 20) {
        dir = -1
        w += dir * speed
      } else { clearInterval(closingAnim) }

      document.getElementById("peta").classList = `w-${w} rounded-full animate-[spin_2s_linear_infinite] border-blue-500 border-6 absolute`
    }, 30);
  }, time);
}



const slots = () => {
  if(balance >= betAmnt) {
    //! Win amount
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

    tinyamount = smallamount / 2


  //! Randomizer
    numOne = Math.floor(Math.random() * 10)
    numTwo = Math.floor(Math.random() * 10)
    numThree = Math.floor(Math.random() * 10)

    oneOut.innerText = emojis[numOne]
    twoOut.innerText = emojis[numTwo]
    threeOut.innerText = emojis[numThree]

  if(balance == 0 || balance < betAmnt) {
    alert('You ran out of money! Game over.')
    document.getElementById('balance').innerHTML = 'Game over!'
    document.getElementById('btn').disabled = true
  }
  if(lastTry) {
    lastTry = false
  }

    //! BigWin
    if (numOne == 0 && numTwo == 0 && numThree == 0) {
      bigwin = true
    } else if ((numOne == 2 && numTwo == 2 && numThree == 2) || (numOne == 1 && numTwo == 1 && numThree == 1)) {
      smallwin = true
    } else if ((numOne == 8 && numTwo == 8 && numThree == 8) || (numOne == 2 && numThree == 2)) {
      tinywin = true
    } else {
      bigwin = false
      smallwin = false
      tinywin = false
    }

    //! WIN NOTIFICATION
    if (tinywin) {
      document.getElementById("winNotification").innerHTML = `
      <div class="fixed top-10 right-10 border-l-6 border-blue-600 w-64 p-5 rounded-xl bg-gray-200 text-center align-middle text-2xl font-semibold text-blue-900 animate-bounce">
        You won ${tinyamount}$!
      </div>
      `
      setTimeout(() => {
        document.getElementById("winNotification").innerHTML = ""
      }, 3000);
    }

    if(smallwin) {
      document.getElementById("winNotification").innerHTML = `
      <div class="fixed top-10 right-10 border-l-6 border-blue-600 w-64 p-5 rounded-xl bg-gray-200 text-center align-middle text-2xl font-semibold text-blue-900 animate-bounce">
        You won ${smallamount}$!
      </div>
      `
      setTimeout(() => {
        document.getElementById("winNotification").innerHTML = ""
      }, 3000);
    }
    
    if(bigwin) {
      document.getElementById("winNotification").innerHTML = `
      <div class="fixed top-10 right-10 border-l-6 border-blue-600 w-64 p-5 rounded-xl bg-gray-200 text-center align-middle text-2xl font-semibold text-blue-900 animate-bounce">
        You won ${bigamount}$!
      </div>
      `
      setTimeout(() => {
        document.getElementById("winNotification").innerHTML = ""
      }, 3000);
    }

    console.log(7);
    
    

    if (smallwin) {
      balance += smallamount
    } else if (bigwin) {
      balance += bigamount
    } else if(tinywin) {
      balance += tinyamount
    } 

    balance -= betAmnt

    if(balance >= betAmnt && balance < betAmnt*2) {
      lastTry = true
    }


  }
  console.log(8);
  

  //! ANIMACE - PEŤA
  if (bigwin == true || smallwin == true || tinywin == true) {

    if(betAmnt == 1) {
      winAnimation(32, 20, 1, 2000)
    } else if (betAmnt == 2) {
      winAnimation(48, 20, 1, 2000)
    } else if (betAmnt == 5) {
      winAnimation(54, 20, 2, 2000)
    } else if (betAmnt == 10) {
      winAnimation(64, 20, 3, 2000)
    } else if (betAmnt == 20) {
      winAnimation(72, 20, 3, 2000)
    } else if (betAmnt == 50) {
      winAnimation(84, 20, 3, 2000)
    } else if (betAmnt == 100) {
      let w = 80;
      let direction = 1;

      const win100Anim = setInterval(() => {
        if (w >= 1000) direction = -10;
        if (w <= 80) direction = 10;

        w += direction;
        document.getElementById("peta").classList = `w-[${w}px] rounded-full animate-[spin_2s_linear_infinite] border-blue-500 border-6 absolute`;
      }, 10)
      setTimeout(() => {
        clearInterval(win100Anim)
        const win100Closing = setInterval(() => {
          if (w > 80) {
            w += -5
          } else {
            clearInterval(win100Closing)
          }
          document.getElementById("peta").classList = `w-[${w}px] rounded-full animate-[spin_2s_linear_infinite] border-blue-500 border-6 absolute`;
        }, 10);
      }, 10000)
    }
  }

  console.log(9);
  

  if (bigwin || smallwin || tinywin) {
    document.getElementById("gameBox").classList = "bg-green-500 q-full lg:w-92 mx-auto lg:rounded-3xl p-5 text-gray-100 scale-150"
    document.getElementById("gameNums").classList = "flex flex-wrap flex-row justify-center font-semibold bg-green-700 mt-5 rounded-2xl mx-8 text-3xl"
    setTimeout(() => {
      document.getElementById("gameBox").classList = "bg-blue-500 w-full lg:w-92 mx-auto lg:rounded-3xl p-5 text-gray-100 scale-150"
      document.getElementById("gameNums").classList = "flex flex-wrap flex-row justify-center font-semibold bg-blue-700 mt-5 rounded-2xl mx-8 text-3xl"
    }, 3000);
  } else {
    document.getElementById("gameBox").classList = "bg-red-500 w-full lg:w-92 mx-auto lg:rounded-3xl p-5 text-gray-100 scale-150"
    document.getElementById("gameNums").classList = "flex flex-wrap flex-row justify-center font-semibold bg-red-700 mt-5 rounded-2xl mx-8 text-3xl"
  }
  document.getElementById('balance').innerHTML = `Balance: ${balance}$`
}

let autoSwitch = 0

const autoSpin = () => {
  switch (autoSwitch) {
    case 0:
      autoSwitch = 1
      document.getElementById("autoBtn").classList = "bg-amber-500 bg-amber-600 text-white font-bold py-2 px-4 rounded transition cursor-pointer"

      const spin = () => {
        if (autoSwitch == 0) return

        if (balance < betAmnt) {
          autoSwitch = 0
          document.getElementById("autoBtn").classList = "bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded transition cursor-pointer"
          return
        }

        slots()

        if (lastTry) {
          autoSwitch = 0
          document.getElementById("autoBtn").classList = "bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded transition cursor-pointer"
          return
        }

        let pauseTime = 100

        if (bigwin || smallwin || tinywin) {
          pauseTime = 5000
          if(betAmnt == 100) pauseTime = 11000
        }

        setTimeout(spin, pauseTime)
      };

      spin(); 
      break
    case 1:
      autoSwitch = 0
      document.getElementById("autoBtn").classList = "bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded transition cursor-pointer"
      break
    }
}


//! Kódy
const submitCode = () => {
  codeIn = document.getElementById('code').value

  if (codeIn === code1 || codeIn === code2 || codeIn === code3 || codeIn === code4) {
    alert("Congratulations! You entered the correct code!\n\nYou're now getting $100!")
    document.getElementById('code').value = ''
    document.getElementById('btn').disabled = false
    balance += 100
  } else if (codeIn === code5 || codeIn === code6 || codeIn === code7 || codeIn === code8) {
    alert("Congratulations! You entered the correct code!\n\nYou're now getting $200!")
    document.getElementById('code').value = ''
    document.getElementById('btn').disabled = false
    balance += 200
  } else if (codeIn === code9 || codeIn === code10) {
    alert("Congratulations! You entered the correct code!\n\nYou're now getting $300!")
    document.getElementById('code').value = ''
    document.getElementById('btn').disabled = false
    balance += 300
  } else if (codeIn === codeAdmin) {
    alert("Good morning ADMIN! You entered the correct Admin code designed for testing purposes only!\n\nYou're now getting $900.000!")
    document.getElementById('code').value = ''
    document.getElementById('btn').disabled = false
    balance += 900000
  } else {
    alert("You fuckin' disgrace you can't even get a real working BalCode? Do you know how fat I am?")
  }

  console.log(11);
  

  document.getElementById('balance').innerHTML = `Balance: ${balance}$`
}


window.slots = slots
window.betAmntBtn = betAmntBtn
window.submitCode = submitCode
window.autoSpin = autoSpin