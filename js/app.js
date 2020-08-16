// lấy thẻ input
var input = document.getElementById("myInput");
// định nghĩa hàm xử lý myFunction
function myFunction() {
    var filter, ul, li, a, i;
    // lấy giá trị người dùng nhập
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    // Nếu filter không có giá trị thị ẩn phần kết quare\
    if (!filter) {
        ul.style.display = "none";
    } else {
        // lặp qua tất cả các thẻ li chứa kết quả
        for (i = 0; i < li.length; i++) {
            // lấy thẻ a trong các thẻ li
            a = li[i].getElementsByTagName("a")[0];
            // kiểm tra giá trị nhập có tôn tại trong nội dung thẻ a
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                //nếu có hiển thị phàn tử ul và các thẻ li đó
                ul.style.display = "block";
                li[i].style.display = "block";
            } else {
                // nếu không ẩn các thẻ li
                li[i].style.display = "none";

            }
        }
    }
}
//gán sự kiện cho thẻ input
input.addEventListener("keyup", myFunction);
document.getElementById('myUL').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let searchResult = li.innerHTML
        console.log(searchResult)
    }
});

input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        filltextEnter();
    }
});

function filltextEnter() {
    document.getElementById("selected").innerHTML = "";
    ul = document.getElementById("myUL");
    var li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        if (li[i].style.display == "block") {
            txt = li[i].getElementsByTagName("a")[0].innerText;
            node = document.createElement("li");
            var textnode = document.createTextNode(txt);         // Create a text node
            node.appendChild(textnode);                       // Append the text to <li>
            document.getElementById("selected").appendChild(node);     // Append <li> to <ul> with id="myList
        }
    }
}
function filltextClick(event) {
    document.getElementById("selected").innerHTML = "";
    txt = event.target.innerText;
    node = document.createElement("li");
    var textnode = document.createTextNode(txt);         // Create a text node
    node.appendChild(textnode);                       // Append the text to <li>
    document.getElementById("selected").appendChild(node);     // Append <li> to <ul> with id="myList

}