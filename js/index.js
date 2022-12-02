const newItem = document.querySelectorAll('.unread');
const allRead = document.querySelector('.head a');
const countNew = document.querySelector('.head h1 span');

for(i = 0; i < newItem.length; i++) {
    const allNewItems = newItem[i];
    countNew.textContent = newItem.length;
    document.title = newItem.length + ' notifications page'

    allRead.addEventListener('click', () => {
        allRead.classList.add('dnone');
        allNewItems.classList.remove('unread');
        countNew.textContent = 0;
        document.title = "Pas de nouvelles notifications";
    })
}