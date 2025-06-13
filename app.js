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
const codeAdmin = '56449131019113165489841654984134816158asdf'

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

    tinyamount = smallamount / 4

  //! Randomizer
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

    //! BigWin
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
    } else {
      document.getElementById('result').innerHTML = 'Sorry, you lost!'
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


  //! ANIMACE - PEŤA
  if (bigwin == true || smallwin == true || tinywin == true) {
    if(betAmnt == 1) {
      let w = 20;
      let direction = 1;

      const win1Anim = setInterval(() => {
        if (w >= 32) direction = -1;
        if (w <= 20) direction = 1;

        w += direction;
        document.getElementById("peta").classList = `w-${w} rounded-full animate-[spin_2s_linear_infinite] border-blue-500 border-6`;
      }, 30)
      setTimeout(() => {
        clearInterval(win1Anim)
        const win1Closing = setInterval(() => {
          if (w > 20) {
            w += -1
          } else {
            clearInterval(win1Closing)
          }
          document.getElementById("peta").classList = `w-${w} rounded-full animate-[spin_2s_linear_infinite] border-blue-500 border-6`;
        }, 30);
      }, 2000)
    } else if (betAmnt == 2) {
      let w = 20;
      let direction = 1;

      const win2Anim = setInterval(() => {
        if (w >= 48) direction = -1;
        if (w <= 20) direction = 1;

        w += direction;
        document.getElementById("peta").classList = `w-${w} rounded-full animate-[spin_2s_linear_infinite] border-blue-500 border-6`;
      }, 20)
      setTimeout(() => {
        clearInterval(win2Anim)
        const win2Closing = setInterval(() => {
          if (w > 20) {
            w += -1
          } else {
            clearInterval(win2Closing)
          }
          document.getElementById("peta").classList = `w-${w} rounded-full animate-[spin_2s_linear_infinite] border-blue-500 border-6`;
        }, 20);
      }, 2000)
    } else if (betAmnt == 5) {
      let w = 20;
      let direction = 1;

      const win5Anim = setInterval(() => {
        if (w >= 52) direction = -1;
        if (w <= 20) direction = 1;

        w += direction;
        document.getElementById("peta").classList = `w-${w} rounded-full animate-[spin_2s_linear_infinite] border-blue-500 border-6`;
      }, 20)
      setTimeout(() => {
        clearInterval(win5Anim)
        const win5Closing = setInterval(() => {
          if (w > 20) {
            w += -1
          } else {
            clearInterval(win5Closing)
          }
          document.getElementById("peta").classList = `w-${w} rounded-full animate-[spin_2s_linear_infinite] border-blue-500 border-6`;
        }, 20);
      }, 2000)
    } else if (betAmnt == 10) {
      let w = 20;
      let direction = 1;

      const win10Anim = setInterval(() => {
        if (w >= 64) direction = -1;
        if (w <= 20) direction = 1;

        w += direction;
        document.getElementById("peta").classList = `w-${w} rounded-full animate-[spin_2s_linear_infinite] border-blue-500 border-6`;
      }, 20)
      setTimeout(() => {
        clearInterval(win10Anim)
        const win10Closing = setInterval(() => {
          if (w > 20) {
            w += -1
          } else {
            clearInterval(win10Closing)
          }
          document.getElementById("peta").classList = `w-${w} rounded-full animate-[spin_2s_linear_infinite] border-blue-500 border-6`;
        }, 20);
      }, 2000)
    } else if (betAmnt == 20) {
      let w = 20;
      let direction = 1;

      const win20Anim = setInterval(() => {
        if (w >= 72) direction = -1;
        if (w <= 20) direction = 1;

        w += direction;
        document.getElementById("peta").classList = `w-${w} rounded-full animate-[spin_2s_linear_infinite] border-blue-500 border-6`;
      }, 20)
      setTimeout(() => {
        clearInterval(win20Anim)
        const win20Closing = setInterval(() => {
          if (w > 20) {
            w += -1
          } else {
            clearInterval(win20Closing)
          }
          document.getElementById("peta").classList = `w-${w} rounded-full animate-[spin_2s_linear_infinite] border-blue-500 border-6`;
        }, 20);
      }, 2000)
    } else if (betAmnt == 50) {
      let w = 20;
      let direction = 1;

      const win50Anim = setInterval(() => {
        if (w >= 84) direction = -1;
        if (w <= 20) direction = 1;

        w += direction;
        document.getElementById("peta").classList = `w-${w} rounded-full animate-[spin_2s_linear_infinite] border-blue-500 border-6`;
      }, 20)
      setTimeout(() => {
        clearInterval(win50Anim)
        const win50Closing = setInterval(() => {
          if (w > 20) {
            w += -1
          } else {
            clearInterval(win50Closing)
          }
          document.getElementById("peta").classList = `w-${w} rounded-full animate-[spin_2s_linear_infinite] border-blue-500 border-6`;
        }, 20);
      }, 2000)
    } else if (betAmnt == 100) {
      let w = 80;
      let direction = 1;

      const win100Anim = setInterval(() => {
        if (w >= 600) direction = -5;
        if (w <= 80) direction = 5;

        w += direction;
        document.getElementById("peta").classList = `w-[${w}px] rounded-full animate-[spin_2s_linear_infinite] border-blue-500 border-6`;
      }, 10)
      setTimeout(() => {
        clearInterval(win100Anim)
        const win100Closing = setInterval(() => {
          if (w > 80) {
            w += -5
          } else {
            clearInterval(win100Closing)
          }
          document.getElementById("peta").classList = `w-[${w}px] rounded-full animate-[spin_2s_linear_infinite] border-blue-500 border-6`;
        }, 10);
      }, 10000)
    }
  }

  if (bigwin == true || smallwin == true || tinywin == true) {
    document.getElementById("gameBox").classList = "bg-green-500 w-64 mx-auto rounded-3xl p-5 text-gray-100"
    document.getElementById("gameNums").classList = "flex flex-wrap flex-row justify-center font-semibold bg-green-700 mt-5 rounded-2xl mx-8 text-3xl"
    setTimeout(() => {
      document.getElementById("gameBox").classList = "bg-blue-500 w-64 mx-auto rounded-3xl p-5 text-gray-100"
      document.getElementById("gameNums").classList = "flex flex-wrap flex-row justify-center font-semibold bg-blue-700 mt-5 rounded-2xl mx-8 text-3xl"
    }, 3000);
  } else {
    document.getElementById("gameBox").classList = "bg-red-500 w-64 mx-auto rounded-3xl p-5 text-gray-100"
    document.getElementById("gameNums").classList = "flex flex-wrap flex-row justify-center font-semibold bg-red-700 mt-5 rounded-2xl mx-8 text-3xl"
  }

}


//! Kódy
const submitCode = () => {
  codeIn = document.getElementById('code').value

  if (codeIn === code1 || codeIn === code2 || codeIn === code3 || codeIn === code4) {
    alert("Congratulations! You entered the correct code!\n\nYou're now getting $300!")
    document.getElementById('code').value = ''
    document.getElementById('btn').disabled = false
    balance += 100
  } else if (codeIn === code5 || codeIn === code6 || codeIn === code7 || codeIn === code8) {
    alert("Congratulations! You entered the correct code!\n\nYou're now getting $300!")
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

  document.getElementById('balance').innerHTML = `Balance: ${balance}$`
}