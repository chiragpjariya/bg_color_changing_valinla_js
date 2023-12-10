let Color = '0123456789ABCDEF';



let setInterval_fun;
let setInterval_fun1;
let setInterval_fun2;

let start_btn = document.getElementById('start');
let stop_btn = document.getElementById('stop');




//body background color
start_btn.addEventListener('click', () => {
    console.log(Color.length)
    setInterval_fun = setInterval(() => {
        let Hex = "#";
        for (let index = 0; index < 6; index++) {
            Hex += Color[Math.floor(Math.random() * 16)];
        }
        document.querySelector('body').style.backgroundColor = Hex;
        console.log(Hex)
    }, 1000)

    //boxbackground color
    setInterval_fun1 = setInterval(() => {
        let Hex = "#";
        for (let index = 0; index < 6; index++) {
            Hex += Color[Math.floor(Math.random() * 16)];
        }
        document.querySelector('div').style.backgroundColor = Hex;
        console.log(Hex)
    }, 1000)

    //color-for-hexacode

    setInterval_fun2 = setInterval(() => {
        let Hex = "#";
        for (let index = 0; index < 6; index++) {
            Hex += Color[Math.floor(Math.random() * 16)];
        }
        document.querySelector('div').style.color = Hex;
        document.querySelector('div').innerHTML = Hex;
        console.log(Hex)
    }, 1000)
})

stop_btn.addEventListener('click', () => {
    clearInterval(setInterval_fun)
    clearInterval(setInterval_fun1)
    clearInterval(setInterval_fun2)
})
