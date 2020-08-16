var recArr = [{
    id: 1,
    img: "https://img-global.cpcdn.com/recipes/2731c287c32c11e0/751x532cq70/canh-ga-chien-by-ngo-sen-chanel-%F0%9F%98%81%F0%9F%98%81%F0%9F%98%81-recipe-main-photo.jpg",
    name: "Cánh gà chiên by Ngó Sen chanel 😁😁😁",
    tits: "Gọi là siêu tốc vì đế tart và kem trứng phô mai mua sẵn hết rồi chỉ việc về nướng thôi nạ. Mùa dịch này stayathome nhiều nên các bạn trẻ quay ra làm flan và tart trứng này như một trào lưu luôn ahihi",
    kp: "2,3 người",
    ingredients: ["4 cái Cánh gà", "1 gói Bột chiên giòn", "1 gói Bột chiên xù","Gia vị","Tỏi, gừng, hành củ, nghệ","Sốt BBQ","Rau húng quế"],
    steps:[ {
        stepName: "Cánh gà rửa sạch để ráo nước",
        img: ["https://img-global.cpcdn.com/steps/fcd973ec8bd666d8/160x128cq70/healthy-meals-2-pancake-y%E1%BA%BFn-m%E1%BA%A1ch-trai-cay-recipe-step-3-photo.jpg","./cook/u.jpg"]
    }, {
        stepName: "Cho tỏi, hành củ, gừng, nghệ vào cối giã nguyễn, cho thêm ít bột nêm, muối, sốt BBQ vào trộn đều"
    },  {
        stepName: "Ướp cánh gà với hỗn hợp vừa giã trong 30 phút."
    }, {
        stepName: "Sau đó thái húng quế trộn với gà"
    }, {
        stepName: "Chuẩn bị 1 bát để pha gói bột chiên giòn và 1 bát để đổ gói bột chiên xù. Hoà bột chiên giòn với nước tạo thành hỗn hợp sệt sệt"
    }, {
        stepName: "Bật bếp cho dầu ngập chảo nhỏ",
        img: ["https://img-global.cpcdn.com/steps/c3887de0d389e7cc/160x128cq70/canh-ga-chien-by-ngo-sen-chanel-%F0%9F%98%81%F0%9F%98%81%F0%9F%98%81-recipe-step-10-photo.jpg"]
    }
]
},
{
    id: 2,
    img: "https://img-global.cpcdn.com/recipes/3edd9ad0f11e9910/400sq70/photo.jpg",
    name: "Cooking",
    tits: "Kem trứng phô mai mua sẵn hết rồi chỉ việc về nướng thôi nạ. Mùa dịch này stayathome nhiều nên các bạn trẻ quay ra làm flan và tart trứng này như một trào lưu luôn ahihi",
    kp: "4 người",
    ingredients: ["200 gam", "100 ml"],
    steps:[{
        step: "Tiếp theo, bỏ hỗn hợp này vào tủ lạnh khoảng 3 phút cho đông lại rồi sẽ làm vị sôcôla.",
        imgsp: ["https://img-global.cpcdn.com/steps/fcd973ec8bd666d8/160x128cq70/healthy-meals-2-pancake-y%E1%BA%BFn-m%E1%BA%A1ch-trai-cay-recipe-step-3-photo.jpg"],
    },{
        stepsp: "Vị của nó ngọt, ngon và thơm. Các anh chị có thể thấy hộp làm rau câu purinmix ở siêu thị và ở chợ.",
        imgsp: ["https://img-global.cpcdn.com/steps/1f57172c35e82771/160x128cq70/rau-cau-2-v%E1%BB%8B-recipe-step-7-photo.jpg"],
    }]
}]

var arrUser = [{
    name: "Trần Vũ",
    img: "https://scontent.fhan5-5.fna.fbcdn.net/v/t1.0-9/117039274_2800143570220157_8092088375204193952_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=5FUCe-mo6zwAX8yK-DJ&_nc_ht=scontent.fhan5-5.fna&oh=ea2f7e095e3b72e0994fb07200a2739b&oe=5F5492B5",
}]

//Add ảnh lớn
const titImg = document.getElementById('title-imgg');
function getImgTits(recArr){
    titImg.innerHTML += `<img class="tits-img" src="${recArr[0].img}">`;
}
getImgTits(recArr);

//Add tên món
const nameRec = document.getElementById('name-rec');
function addNameRec(recArr) {
    const name = recArr[0].name;
    nameRec.innerHTML += `<h1 class="name   ">${name}</h1>`;
}
addNameRec(recArr);

//Add tits ở dưới
const  txt = document.getElementById('main-txt');
function getTxt(recArr) {
    const text = recArr[0].tits;
    txt.innerHTML += `<p class="txt">${text}</p>`
}
getTxt(recArr);


//Add số người ăn
const kpAn = document.getElementById('kp');
function addKp(recArr){
    kpAn.innerHTML += `<i class="fas fa-user"></i>
    <span>${recArr[0].kp}</span>`;
}
addKp(recArr);

//Add thành phần
const ulIngre = document.getElementById('add-ingre');
function addIngre(recArr) {
    const tp = recArr[0].ingredients;
    for(let i = 0; i < tp.length; i++){
        ulIngre.innerHTML += `<li>
        <div class="pd-1">
            <p class="ingredient-quantity">${tp[i]}</p>
        </div>
        </li>`
    }
}
addIngre(recArr);

//Add các bước
const numberList = document.getElementById('number-list');
function addSteps(recArr) {
    const step = recArr[0].steps;
    for(let i = 0; i < step.length; i++){
        numberList.innerHTML += `<li class="number-list-item">
        <div>
            <p>${step[i].stepName}</p>
        </div>
    </li>`
    const ig = step[i].img;
    if("img" in step[i]){
        for(let j = 0; j < step[i].img.length; j++){
            numberList.innerHTML += `
            <a>
                <img src="${step[i].img[j]}" class="step-img" alt="">
            </a>
            `
        }
    }
    }
}
addSteps(recArr);

//Comment
const mainForm = document.getElementById('form-cmt');
const cmtUser = document.getElementById('in-cmt-user');

mainForm.addEventListener('submit', (e) => {
    let stringSave="";
    e.preventDefault();
    const comment = mainForm.comment.value;
    console.log(comment);
    cmtUser.innerHTML += `<div class="box-u-cmt">
    <img src="${arrUser[0].img}" class="img-comment">
    <a class="name-user-cmt">${arrUser[0].name}</a>
    </div>
    <div class="comm">${comment}</div>
     `
})

//Hiện tab câu gửi câu hỏi
var modal = document.getElementById('myModal');
var btn = document.getElementById("btn-modal");
var cl = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

cl.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal){
        modal.style.display = "none";
    }
}

//
var btnRec = document.getElementsByClassName("btn-add-rec")[0];
btnRec.onclick = function() {
    alert("Đã thêm vào thực đơn của bạn");
}

//
var kb = document.getElementsByClassName("kb")[0];
kb.onclick = function() {
    alert("Đã kết bạn bếp !!!")
}
