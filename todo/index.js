const inputVal = document.getElementsByClassName('inputVal')[0];
const addItemBtn = document.getElementsByClassName('btn')[0];


function showItems() {
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if (localItems === null) {
        taskList = [];
    }
    else {
        taskList = localItems;
    }
    let html = '';
    let itemShow = document.querySelector('.todoLists');
    taskList.forEach((item, index) => {
        html += `
            <div class="item">
                <p class="pText">${item}</p>
                <div class="deleteItem" onclick="deleteItem(${index})"><i class="fa-solid fa-check"></i></i></div>
            </div>
        `
    })
    itemShow.innerHTML = html;
}

showItems();


addItemBtn.addEventListener('click', function () {
    if (inputVal.value != null) {
        let localItems = JSON.parse(localStorage.getItem('localItem'));
        if (localItems === null) {
            taskList = [];
        }
        else {
            taskList = localItems;
        }
        taskList.push(inputVal.value);
        localStorage.setItem('localItem', JSON.stringify(taskList));
        inputVal.value = '';
    }
    showItems();
})


function deleteItem(index) {
    let localItems = JSON.parse(localStorage.getItem('localItem'));
    taskList.splice(index, 1);
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showItems();
}

function clearItem() {
    localStorage.clear();
    showItems();
}