var click_pic_id = "ref1";
var click_gal_id = "gal1";
var default_pic = document.getElementById("ref1");
var default_gal = document.getElementById("gal1");

var pic_num = [6, 8, 10, 1, 0];
var div_num = 6;
var gal_num = 5;

var col_url = [
    [
        "https://images.unsplash.com/photo-1634096384757-c034cf28be3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
        "https://images.unsplash.com/photo-1634116352697-6a9b4fe829ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
        "https://images.unsplash.com/photo-1634227366803-2c9acda0d60a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
        "https://images.unsplash.com/photo-1634096383668-fa38bab26aea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
        "https://images.unsplash.com/photo-1634149944809-106fe7210c51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
        "https://images.unsplash.com/photo-1634093054336-7dd2a7b41ef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
    ],
    [
        "https://images.unsplash.com/photo-1634034379073-f689b460a3fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80",
        "https://images.unsplash.com/photo-1634325232058-e7b8f80cc20b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        "https://images.unsplash.com/photo-1634309490604-1270c0d486e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        "https://images.unsplash.com/photo-1611931960487-4932667079f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        "https://images.unsplash.com/photo-1580249632702-9dab8c1445c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1962&q=80",
        "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2071&q=80",
        "https://images.unsplash.com/photo-1581390114939-946f9a890a7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80",
    ],
    [
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2988&q=80",
        "https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
        "https://images.unsplash.com/photo-1493997181344-712f2f19d87a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        "https://images.unsplash.com/photo-1505069446780-4ef442b5207f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
        "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1953&q=80",
        "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
        "https://images.unsplash.com/photo-1494588024300-e9df7ff98d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=984&q=80",
        "https://images.unsplash.com/photo-1511360823-5c672a170787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1554797589-7241bb691973?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2836&q=80",
        "https://images.unsplash.com/photo-1634127524203-8f9a85786c61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2702&q=80",
    ],
    [
        "https://images.pexels.com/photos/6785291/pexels-photo-6785291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/9474580/pexels-photo-9474580.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/9433360/pexels-photo-9433360.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/9433361/pexels-photo-9433361.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        
    ],
    [

    ]
];

var empty_url = "https://images.unsplash.com/photo-1623057000049-e220f79c7051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1904&q=80";

var currentPictureNumber = 1;
var currentCollectionNumber = 1;

function changeBig(url) {
    var pic = document.getElementById("big-pic");
    pic.src = url;
    pic.parentElement.style.display = "block";
}

function clickPicture(img) {
    
    changeBig(img.src);

    var last_pic = document.getElementById(click_pic_id);

    if (last_pic) {
        last_pic.classList.remove('object-fit-cover-select');
        last_pic.classList.add('object-fit-cover');
    }

    img.classList.remove('object-fit-cover');
    img.classList.add('object-fit-cover-select');

    click_pic_id = img.id;

    var selected_pic = document.getElementById("Selected_pic");
    selected_pic.innerHTML = "Selected Picture : " + click_pic_id.toString().substring(3);
    currentPictureNumber = Number(click_pic_id.substring(3));

}

function addNewImgDiv(new_url) {

    var new_div = document.createElement("div");
    new_div.classList.add("gallery-item");

    var new_img = document.createElement("img");
    new_img.classList.add("object-fit-cover");
    new_img.src = new_url;

    div_num++;
    var index = div_num;

    new_img.id = "ref" + index.toString();
    new_img.alt = "ref" + index.toString();
    new_img.onclick = function() { clickPicture(this); };

    new_div.appendChild(new_img);

    var temp = document.querySelector(".gallery-item-container");
    temp.appendChild(new_div);

}

function DeleteImgDiv() {

    div_num--;
    var delete_pic = document.getElementById("gallery0").firstElementChild.lastElementChild;
    delete_pic.remove();

}

function checkImgDivNumber(bool) {

    if (bool) {
        var _pic_num = pic_num[currentCollectionNumber - 1];
        if(_pic_num == 0) {
            setTimeout(() => {  alert("This is an empty album."); }, 100);
        }
    }
    else {
        var _pic_num = 0;
        changeBig(empty_url);
        var selected_pic = document.getElementById("Selected_pic");
        selected_pic.innerHTML = "Selected Picture : " + "None";
        var selected_gal = document.getElementById("Selected_gal");
        selected_gal.innerHTML = "Selected Album : " + "None";
        setTimeout(() => {  alert("Please add a album first."); }, 500);
    }

    while (_pic_num > div_num) {
        addNewImgDiv(null);
    }

    while (_pic_num < div_num) {
        DeleteImgDiv();
    }
}

function findPicforCollection() {

    var collections = document.querySelectorAll(".collection");

    for (var i=0; i < collections.length; i++) {
        collections[i].getElementsByTagName('img')[0].src = col_url[i][0];
    }

}

function clickCollection(img) {

    var index = Number(img.alt.charAt(3)) - 1;
    currentCollectionNumber = index + 1;

    var selected_gal = document.getElementById("Selected_gal");
    selected_gal.innerHTML = "Selected Album : " + currentCollectionNumber.toString();

    checkImgDivNumber(true);

    var pics = document.querySelectorAll(".gallery-item");
    var num = col_url[index].length;
    // pics.length should equals to num here

    for (var i=0; i < num; i++){
        pics[i].getElementsByTagName('img')[0].src = col_url[index][i];
    }

    // the check icon display
    var last_gal = document.getElementById(click_gal_id);
    if (last_gal) last_gal.nextElementSibling.style.display = "none";
    img.nextElementSibling.style.display = "inline-block";
    click_gal_id = img.id;

    var first_pic = document.getElementById("ref1");
    if (!first_pic) {
        clickEmptyAlbum();
        return;
    }
    clickPicture(first_pic);
}

function checkPictureNumber() { // check how many pictures in every album

    var collections = document.querySelectorAll(".collection");

    var total_pic = 0;

    for (var i=0; i < collections.length; i++) {
        collections[i].children[3].innerHTML = "pic_number : " + col_url[i].length.toString();
        pic_num[i] = col_url[i].length;
        total_pic += pic_num[i];
    }

    document.getElementById("total_photos").innerHTML = total_pic.toString() + " photos";
}

function NewPicture() {

    if (gal_num != 0) {

        let new_url = prompt("please enter the url for the picture");
        if (!new_url) return;
    
        pic_num[currentCollectionNumber - 1]++;
        col_url[currentCollectionNumber - 1].push(new_url);
    
        addNewImgDiv(new_url);
    
        checkPictureNumber();
        findPicforCollection();
    
        if (pic_num[currentCollectionNumber - 1] == 1) clickPicture(document.getElementById("ref1"));

    }

}

function DeletePicture() {

    if (gal_num != 0) {

        let warning = prompt("Are you sure you want to delete this photo from the album ? y/n");
        if (!warning) return;
        if (warning.toLowerCase() != "y" && warning.toLowerCase() != "yes") return;
        if (pic_num[currentCollectionNumber - 1] == 0) {
            alert("this is already an empty album!!!");
            return;
        }
    
        col_url[currentCollectionNumber - 1].splice(currentPictureNumber - 1, 1);
        pic_num[currentCollectionNumber - 1]--;
    
        DeleteImgDiv();
    
        let id = "gal" + currentCollectionNumber.toString();
        var current_col = document.getElementById(id);
        clickCollection(current_col);
    
        checkPictureNumber();
        findPicforCollection();
    
    }

}

function clickEmptyAlbum() {

    changeBig(empty_url);
    var selected_pic = document.getElementById("Selected_pic");
    selected_pic.innerHTML = "Selected Picture : " + "None";
    // setTimeout(() => {  alert("Please add some pictures to the empty album."); }, 700);
}

function NewAlbum() {

    var new_gal = document.createElement("div");
    new_gal.classList.add("collection");

    var new_img = document.createElement("img");
    new_img.classList.add("object-fit-cover-gal");

    gal_num++;
    var index = gal_num;

    new_img.id = "gal" + index.toString();
    new_img.alt = "gal" + index.toString();
    new_img.onclick = function() { clickCollection(this); };

    new_gal.appendChild(new_img);

    var span1 = document.createElement("span");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    span1.classList.add("checkmark");
    div1.classList.add("checkmark_circle");
    div2.classList.add("checkmark_stem");
    div3.classList.add("checkmark_kick");

    span1.appendChild(div1);
    span1.appendChild(div2);
    span1.appendChild(div3);

    new_gal.appendChild(span1);

    var new_text1 = document.createElement("h6");
    new_text1.innerHTML = " Album " + index.toString() + " ";

    var new_text2 = document.createElement("h6");
    new_text2.innerHTML = " pic_number : ";

    new_gal.appendChild(new_text1);
    new_gal.appendChild(new_text2);

    var temp = document.querySelector(".gallery-collection");
    temp.appendChild(new_gal);

    pic_num.push(0);
    col_url.push([]);
    checkPictureNumber();

} 

function DeleteAlbum() {

    if (gal_num == 0) {
        alert("No album left!!! Can not delete.");
        return;
    }

    let warning = prompt("You are currently in Album " + currentCollectionNumber.toString() + ". Are you sure you want to delete this whole album ? y/n");
    if (!warning) return;
    if (warning.toLowerCase() != "y" && warning.toLowerCase() != "yes") return;

    col_url.splice(currentCollectionNumber - 1, 1);
    pic_num.splice(currentCollectionNumber - 1, 1);
    gal_num--;

    var delete_gal = document.querySelector(".gallery-collection").lastElementChild;
    delete_gal.remove();

    if (gal_num == 0) {
        alert("No album left!!!");
        checkImgDivNumber(false);
        return;
    }

    findPicforCollection();
    checkPictureNumber();
    clickCollection(document.getElementById("gal1"));

}

clickCollection(default_gal);
findPicforCollection();
checkPictureNumber();
