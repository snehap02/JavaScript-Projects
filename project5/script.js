const tab = document.querySelectorAll('.tab-item');
const content = document.querySelectorAll('.tab-content-item');

function selectItem(e){
    removeCont();
    removeBorder();
    this.classList.add('border-l-4', 'border-[#6246ea]');
    const showCont = document.querySelector(`#${this.id}-content`);
    showCont.classList.add('show');
}

function removeCont(){
    content.forEach(item => item.classList.remove('show'));
}

function removeBorder(){
    tab.forEach(item => item.classList.remove('border-l-4', 'border-[#6246ea]'));
}


tab.forEach(item => item.addEventListener('click', selectItem));




