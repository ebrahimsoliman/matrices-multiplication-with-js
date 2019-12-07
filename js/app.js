const lenform = document.querySelector('.len');
const inputtable = document.querySelectorAll('.intbdy');
const inform = document.querySelector('.takein');
//const qwsform = document.querySelector('.quesform');
const lenrow = document.querySelector(".lenrw");
const table = document.querySelectorAll('.tbl');
//let tabletr = document.querySelectorAll('.tbl > tr');
let rwsintbl = 0;
let cells = document.getElementsByName('innn');
let rwsq = inform.querySelectorAll('.rowinput');
const otbdy = document.querySelectorAll('.outbdy');
let newp = document.createElement("p");
const infrmdev = document.querySelector(".infrm");
let col;
let row;
let stcells = [];
let ndcells = [];
let stmatrix = [];
let ndmatrix = [];
//let dummyrow = [];
let matrices = [];

let rowout1 = document.querySelectorAll(".rwot1");
let rowout2 = document.querySelectorAll(".rwot2");
//taking matrices length
lenform.addEventListener('submit', e => {

    e.preventDefault();

    col = lenform.cols.value;
    row = lenform.rows.value;

    let newrow;
    let newd;
    let newin;
    for (let a = 0; a < 2; a++) {

        for (let q = 0; q < row; q++) {
            newrow = document.createElement("TR");
            inputtable[a].appendChild(newrow);
            newrow.classList.add("rowinput");
        }



    }
    rwsq = inform.querySelectorAll('.rowinput');
    for (let i = 0; i < rwsq.length; i++) {
        for (let c = 0; c < col; c++) {
            newd = document.createElement("TD");
            newin = document.createElement("INPUT");
            rwsq[i].appendChild(newd);
            newd.appendChild(newin);
            newd.classList.add("tdm");
            newin.classList.add("innumm");
            newin.setAttribute("type", "number");
            newin.setAttribute("placeholder", "#");
            newin.setAttribute("required", "");
            newin.setAttribute("min", '0');
            newin.setAttribute("name", "innn");
            lenrow.classList.add("d-none");
        }
    }
    cells = document.getElementsByName('innn');
});

inform.addEventListener('submit', e => {
    e.preventDefault();

    cells.forEach((cell, index) => {
        if (index < cells.length / 2) {
            stcells.push(cell.value);
        } else if (index >= cells.length / 2) {
            ndcells.push(cell.value);
        }
    });
    //OK

    rwsq = inform.querySelectorAll('.rowinput');

    rwsintbl = (rwsq.length / 2);
    let colsinrow = stcells.length / rwsintbl;
    let r = colsinrow;
    for (let i = 0; i < stcells.length; i += colsinrow) {

        stmatrix.push(stcells.slice(i, r));
        ndmatrix.push(ndcells.slice(i, r));
        r += colsinrow;

    }
    matrices.push(stmatrix);
    matrices.push(ndmatrix);
    //OK
console.log(matrices);
        let newrowot = document.createElement("TR");
        matrices.forEach((matrix, indexm) => {

            matrix.forEach((row, indexr) => {

                newrowot = document.createElement("TR");

                otbdy[indexm].appendChild(newrowot);

                if (indexm == 0) {

                    newrowot.classList.add("rwot1");

                } else if (indexm == 1) {
                    newrowot.classList.add("rwot2");

                }

            })


        });
        rowout1 = document.querySelectorAll(".rwot1");
        rowout2 = document.querySelectorAll(".rwot2");

        matrices.forEach((matrix, mindex) => {
            matrix.forEach((row, rindex) => {
                for (let x = 0; x < row.length; x++) {
                    newd = document.createElement("TD");
                    newp = document.createElement("P");
                    if (mindex == 0) {
                        rowout1[rindex].appendChild(newd);
                        newd.innerText = row[x];
                    }
                    if (mindex == 1) {
                        rowout2[rindex].appendChild(newd);
                        newd.innerText = row[x];
                    }


                }
            })

        })
        infrmdev.classList.add("d-none");

});