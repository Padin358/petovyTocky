const button = document.getElementById("helpBtn")
let state = 0

const helpFun = () => {
    switch(state) {
        case 0:
            button.classList = "cursor-pointer text-4xl"
            state = 1
            break
        case 1:
            button.classList = "cursor-pointer text-xl"
            state = 0
            break
    }
    
}