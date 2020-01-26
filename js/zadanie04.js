document.addEventListener("DOMContentLoaded", () => {

    const sampleClassEls = document.querySelectorAll(".sample_class");
    const sampleIdEl = document.querySelector('#sample_id');
    const sampleClass2Els = document.querySelectorAll('.sample_class_2 ul');
    const links = document.querySelectorAll('a');
    const sampleClass3Els = [...document.querySelector('.sample_class_3').children];

    function getTagsOfElements(elements) {
        return [...elements].map(el => el.tagName);
    }

    function getClassesOfElement(element){
        return [...element.classList];
    }

    function getInnerTextsOfElements(elements) {
        return [...elements].flatMap(el => [...el.children]).map(el => el.innerText);
    }

    function getAddressesOfElements(elements) {
        return [...elements].map(el => el.href);
    }
});
