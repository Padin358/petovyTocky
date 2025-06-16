// const button = document.getElementById("helpBtn")
// const section = document.getElementById("helpDiv")
// let state = 0
// let direction
// let left

// const helpFun = () => {
//     switch(state) {
//         case 0:
//             direction = 1
//             left = 58
//             const helpAnimOpen = setInterval(() => {
//                 if (left > 0) {
//                     left -= 3
//                     section.classList = `absolute top-0 -left-${left} text-gray-100 p-2 text-xl font-semibold grid grid-cols-2 items-right`
//                 } else {
//                     clearInterval(helpAnimOpen)
//                 }
//             }, 10);
//             section.classList = "absolute top-0 left-0 text-gray-100 p-2 text-xl font-semibold grid grid-cols-2 items-right"
//             state = 1
//             break
//         case 1:
//             direction = 1
//             left = 0
//             const helpAnimClose = setInterval(() => {
//                 if (left < 58) {
//                     left += 3
//                     section.classList = `absolute top-0 -left-${left} text-gray-100 p-2 text-xl font-semibold grid grid-cols-2 items-right`
//                 } else {
//                     clearInterval(helpAnimClose)
//                 }
//             }, 10);
//             section.classList = "absolute top-0 left-0 text-gray-100 p-2 text-xl font-semibold grid grid-cols-2 items-right"
//             state = 0
//             break
//     }
// }


const button = document.getElementById("helpBtn");
const section = document.getElementById("helpDiv");

const helpFun = () => {
    section.classList.toggle("open");
}