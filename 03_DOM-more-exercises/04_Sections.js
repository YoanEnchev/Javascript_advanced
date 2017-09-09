function create(sentences) {
    let wrapper = document.querySelector('div#content');
    
    for (let i = 0; i < sentences.length; i++) {
        let section = document.createElement('div');
        let content = document.createElement('p');
        content.style.visibility = "hidden";

        content.textContent = `Section ${i + 1}`;
        section.appendChild(content);
        wrapper.appendChild(section);

        section.addEventListener('click', showText);
    }

    function showText() {
        this.childNodes[0].style.visibility = 'initial';
    }
}
