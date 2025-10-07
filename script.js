// Preia contul din URL
const params = new URLSearchParams(window.location.search);
const cont = params.get('cont');

if (cont) {
    document.getElementById('titlu-cont').textContent = `Formular Cont ${cont}€`;
    document.getElementById('cont-selectat').value = cont;
}

// Simulare submit
document.getElementById('formular').addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('mesaj').textContent = `Formular pentru cont ${cont}€ trimis cu succes!`;
});

