window.sr = ScrollReveal ({reset: true});

sr.reveal('.inicio', {duration: 2000});

sr.reveal('.paragrafosSobre', {
    duration: 2500,
    rotate: {x:0, y:0, z:0}
});

sr.reveal('.formacao', {
    duration: 2500,
    rotate: {x:0, y:0, z:0}
});

sr.reveal('.idiomas', {
    duration: 2500,
    rotate: {x:0, y:0, z:0}
});
sr.reveal('.competencias', {
    duration: 2500,
    rotate: {x:0, y:0, z:0}
});

sr.reveal('.portfolio', {
    duration: 3000,
    rotate: {x:80, y:0, z:0}
});

function abrirMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}