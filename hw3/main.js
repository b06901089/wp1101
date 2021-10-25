var input_text = null;
var count = 0;
var first_todo = true;
var todo_count = 0;

document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        input_text = document.getElementsByClassName("todo-app__input")[0].value;
        createTodo(input_text);
        document.getElementsByClassName("todo-app__input")[0].value = null;
    }
});

function createTodo(input_text) {

    var new_todo = document.createElement("li");
    new_todo.classList.add("todo-app__item");

    var new_div1 = document.createElement("div");
    new_div1.classList.add("todo-app__checkbox");
    var new_input = document.createElement("input");
    new_input.id = count.toString();
    new_input.type = "checkbox"
    var new_label = document.createElement("label");
    new_label.htmlFor = count.toString();
    count++;

    var new_h1 = document.createElement("h1");
    new_h1.classList.add("todo-app__item-detail");
    new_h1.innerHTML = input_text;
    var new_img = document.createElement("img");
    new_img.src ="./img/x.png";
    new_img.classList.add("todo-app__item-x");
    new_img.onclick = function() { delete_todo(this); };

    new_div1.appendChild(new_input);
    new_div1.appendChild(new_label);
    new_todo.appendChild(new_div1);
    new_todo.appendChild(new_h1);
    new_todo.appendChild(new_img);

    new_todo.onclick = function() { change_style(); };

    var todo_app_list = document.getElementById("todo-list");
    todo_app_list.appendChild(new_todo);

    if (first_todo) {
        create_footer();
        first_todo = false;
    }

    todo_count++;
    ckeck_todo_count();
    check_footer_hide();
}

function change_style() {
    var items = document.getElementsByClassName("todo-app__item-detail");
    var checkboxs = document.getElementsByClassName("todo-app__checkbox");
    for (let i=0; i < items.length; i++) {
        if (checkboxs[i].getElementsByTagName("input")[0].checked) {
            items[i].style = "text-decoration: line-through; opacity: 0.5;"
        }
        else {
            items[i].style = "text-decoration: none; opacity: 1;"
        }
    }
    ckeck_todo_count();
}

function create_footer() {

    var total = document.createElement("div");
    total.classList.add("todo-app__total");

    var buttons = document.createElement("ul");
    buttons.classList.add("todo-app__view-buttons");

    var clean = document.createElement("div");
    clean.classList.add("todo-app__clean");

    var all = document.createElement("button");
    all.innerHTML = "ALL";
    all.onclick = function() { click_all(); };

    var active = document.createElement("button");
    active.innerHTML = "ACTIVE";
    active.onclick = function() { click_active(); };

    var complete = document.createElement("button");
    complete.innerHTML = "COMPLETE";
    complete.onclick = function() { click_complete(); };

    buttons.appendChild(all);
    buttons.appendChild(active);
    buttons.appendChild(complete);

    var clear = document.createElement("button");
    clear.innerHTML = "Clear completed";
    clear.onclick = function() { click_clear(); };

    clean.appendChild(clear);
    clean.style.visibility = "hidden";

    footer = document.querySelector(".todo-app__footer");
    footer.appendChild(total);
    footer.appendChild(buttons);
    footer.appendChild(clean);
}

function ckeck_todo_count() {

    var count = 0;
    var count_complete = 0;
    var items = document.getElementsByClassName("todo-app__item-detail");
    var checkboxs = document.getElementsByClassName("todo-app__checkbox");
    for (let i=0; i < items.length; i++) {
        if (!checkboxs[i].getElementsByTagName("input")[0].checked) count++;
        else count_complete++;
    }

    todo_count = count;
    total = document.querySelector(".todo-app__total");
    total.innerHTML = todo_count.toString() + " left";

    if (count_complete != 0) document.querySelector(".todo-app__clean").style.visibility = "visible";
    else document.querySelector(".todo-app__clean").style.visibility = "hidden";
}

function delete_todo(img) {
    img.parentNode.remove();
    check_footer_hide();
}

function check_footer_hide() {
    var items = document.getElementsByClassName("todo-app__item-detail");
    var footer = document.querySelector("#todo-footer");
    if (items.length == 0) {
        footer.style.visibility = "hidden";
        document.querySelector(".todo-app__clean").style.visibility = "hidden";
    }
    else {
        footer.style.visibility = "visible";
    }
}

function click_all() {
    var checkboxs = document.getElementsByClassName("todo-app__checkbox");
    for (let i=0; i < checkboxs.length; i++) checkboxs[i].parentNode.style.display = "flex";
}

function click_active() {
    var checkboxs = document.getElementsByClassName("todo-app__checkbox");
    for (let i=0; i < checkboxs.length; i++) {
        if (checkboxs[i].getElementsByTagName("input")[0].checked) checkboxs[i].parentNode.style.display = "none";
        else checkboxs[i].parentNode.style.display = "flex";
    }
}

function click_complete() {
    var checkboxs = document.getElementsByClassName("todo-app__checkbox");
    for (let i=0; i < checkboxs.length; i++) {
        if (!checkboxs[i].getElementsByTagName("input")[0].checked) checkboxs[i].parentNode.style.display = "none";
        else checkboxs[i].parentNode.style.display = "flex";
    }
}

function click_clear() {
    var checkboxs = document.getElementsByClassName("todo-app__checkbox");
    var delete_count = 0;
    var length = checkboxs.length;
    // console.log(checkboxs.length);
    for (let i=0; i < length; i++) {
        // console.log(checkboxs[i-delete_count])
        if (checkboxs[i-delete_count].getElementsByTagName("input")[0].checked){
            checkboxs[i-delete_count].parentNode.remove();
            delete_count++;
        }
    }
    check_footer_hide();
}