import rr, * as rrClass from "./railroad.js";
Object.assign(window, rr);
window.rrOptions = rrClass.Options;

let elements = document.querySelectorAll('.diagram-container p');
[].forEach.call(elements, function(el) {
    let result = eval(el.innerHTML).format();
    let diagramContainer = el.closest('.diagram-container');
    diagramContainer.innerHTML = '';
    result.addTo(diagramContainer);
})
