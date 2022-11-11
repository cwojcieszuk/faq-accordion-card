const elmntsWithTabindex = document.querySelectorAll('[tabindex]');
const elementsWithDataIndex = document.querySelectorAll('[dataindex]')
const elemntsParagraphs = document.querySelectorAll('[pindex]');


const arrows = Array.from(elmntsWithTabindex);
const answers = Array.from(elementsWithDataIndex);
const paragraphs = Array.from(elemntsParagraphs);


paragraphs.forEach(ele => {
    ele.addEventListener('click', () => {
        if(!ele.hasAttribute('shown')) {
            arrows.find(arr => arr.attributes.tabindex.value == ele.attributes.pindex.value).style.setProperty('--rotation', 180);
            answers.find(answ => answ.attributes.dataindex.value == ele.attributes.pindex.value).classList.remove('invisible');
            ele.style.fontWeight = "700";
            ele.setAttribute('shown', "");
        }
        else {
            ele.style.setProperty('--rotation', 0);
            arrows.find(arr => arr.attributes.tabindex.value == ele.attributes.pindex.value).style.setProperty('--rotation', 0);
            answers.find(answ => answ.attributes.dataindex.value == ele.attributes.pindex.value).classList.add('invisible');
            ele.style.fontWeight = "400";
            ele.removeAttribute('shown');
        }
    });
})
