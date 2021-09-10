let selectedTd;

// ================
// вариант с делегированием

table.onclick = function(event) {
    let target = event.target;

    if (target.tagName != 'TD') return;

    highlight(target);
};


// =================
// вариант без делегирования


// for (const td of document.getElementById('table').children) {
//
//     td.addEventListener("click", handlerClick)
// }
//
// function handlerClick(event) {
//
//     let target = event.target;
//
//     if (target.tagName != 'TD') return;
//
//     highlight(target);
// };

function highlight(td) {

    if (selectedTd) {
        selectedTd.classList.remove('highlight');
    }
    selectedTd = td;
    selectedTd.classList.add('highlight');
}