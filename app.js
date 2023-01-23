const btn = document.querySelector(".btn");
const h1 = document.querySelector("h1");
const output = document.querySelector(".output");
const inputVal = document.querySelector(".val");

// Object that we can group to different pages. Within this object, this can just be JSON and an object sitting with an object
const page = { json: {}, page: 1, per: 10, arr: [] };

// New URL
// const baseurl = "https://restcountries.com/v3.1/";
// Old URL
const baseurl = "https://restcountries.com/v2/";

https: btn.addEventListener("click", (e) => {
  console.log("ready");

  const para = "all";
  const url = baseurl + para;
  fetch(url)
    .then((rep) => rep.json())
    .then((data) => {
      page.json = data;
      createPages(data);
    });
});

// Dynamically create pages. Split by 10 countries per page
function createPages(data) {
  page.arr.length = 0; // clear out the contents of an array
  let tempArr = [];
  //   let ptotal = data.length / page.per; // how many pages
  //   console.log(ptotal);
  for (let i = 0; i < data.length; i += page.per) {
    let tempArr = data.slice(i, i + page.per);
    // console.log(tempArr);
    page.arr.push(tempArr);
  }
  loadPages();
}

// Load pages and pass in the data object into pages and then within console will output
function loadPages() {
  output.innerHTML = "";

  console.log(page.arr, page.page);
  page.arr[page.page - 1].forEach((el) => {
    // [page.page - 1] - что бы начинать с индекса 0
    pageEl(el);
  });
}

// Output and create every country
function pageEl(data) {
  console.log(data);
  const main = createNode(output, "div", "");

  const title = createNode(main, "div", `<h2>${data.name}</h2>`);
  title.style.color = "red";

  const flag = createNode(output, "img", "");
  flag.setAttribute("src", data.flag);

  let html1 = `<div>Population : ${data.population}</div>`;
  html1 += `<div>Currency : ${data.currencies[0].name} ${data.currencies[0].symbol}</div>`;

  const stats = createNode(main, "div", html1);
}
// Функци для создания списков
function createNode(parent, elType, html) {
  const ele = document.createElement(elType);
  parent.append(ele);
  ele.innerHTML = html;
  return ele;
}

/*

    <!DOCTYPE html>
    <html>
    <head>
        <title>JavaScript JSON</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
            * {
                box-sizing: border-box;
            }
            body{
                font-family: 'Noto Sans JP', sans-serif;
            }
            .box{
                width:80%;
                text-align: center;
                padding: 10px;
                margin:10px auto;
            }
            .box img{
                max-width: 100%;
                width:200px;
            }
            .box h2{
                text-transform: uppercase;
            }
            .pgs{
                padding:10px;
                border: 1px solid #ddd;
                border-radius: 10px;
                cursor: pointer;
                display: inline-block;
                width:50px;
                color:white;
                background-color: black;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1>JSON</h1>
        <input type="text" class="val">
        <button class="btn">Click</button>
        <div class="output"></div>
        <script src="apps.js"></script>
    </body>
     
    </html>

    const btn = document.querySelector('.btn');
    const h1 = document.querySelector('h1');
    const output = document.querySelector('.output');
    const inputVal = document.querySelector('.val');
    const page = {json:{},page:1,per:10,arr:[]};
    const baseurl = 'https://restcountries.eu/rest/v2/';
    btn.textContent = 'Load Pages';
    inputVal.style.display = 'none';
    h1.textContent = 'Load Country Info';
    btn.addEventListener('click', (e) => {
        console.log('ready');
        const para = 'all';
        const url = baseurl + para;
        fetch(url)
            .then(rep => rep.json())
            .then(data => {
                createPages(data);
            })
    })
     
    function createPages(data){
        page.arr.length = 0;
        //let ptotal = data.length / page.per;
        //console.log(ptotal);
        for(let i=0;i<data.length;i+=page.per){
            let tempArr = data.slice(i,i+page.per);
            //console.log(tempArr);
            page.arr.push(tempArr);
        }
        //console.log(page);
        loadPages();
        
    }
     
    function loadPagination(){
        const main = createNode(output,'div','');
        for(let i=0;i<page.arr.length;i++){
            const pg = createNode(main,'div',i+1);
            pg.classList.add('pgs');
            if(page.page == i+1){
                pg.style.backgroundColor = 'red';
            }
            pg.addEventListener('click',(e)=>{
                console.log(i+1);
                page.page = i+1;
                loadPages();
            })
        }
    }
     
     
    function loadPages(){
        output.innerHTML = '';
        console.log(page.arr,page.page);
        page.arr[page.page-1].forEach(el => {
            pageEl(el);
        });
        loadPagination();
    }
     
    function pageEl(data){
        console.log(data);
        const main = createNode(output,'div','');
        main.classList.add('box');
        const title = createNode(main,'div',`<h2>${data.name}</h2>`);
        title.style.color = 'red';
        const flag = createNode(main,'img','');
        flag.setAttribute('src',data.flag);
        let html1 = `<div>Population : ${data.population}</div>`;
        html1 += `<div>Currency : ${data.currencies[0].name} ${data.currencies[0].symbol}</div>`;
        const stats = createNode(main,'div',html1);
    }
     
     
    function createNode(parent,elType,html){
        const ele = document.createElement(elType);
        parent.append(ele);
        ele.innerHTML = html;
        return ele;
    }
*/
