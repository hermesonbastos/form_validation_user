// recebem o elemento DOM o qual chamou as funçoes e altera o seu placeholder

function uncheckOthers(checkbox) {
    if (checkbox.checked) {
      // Desmarca todas as outras checkboxes com o mesmo nome
      var checkboxes = document.getElementsByName(checkbox.name);
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != checkbox) {
          checkboxes[i].checked = false;
        }
      }
    }
  }

const input = document.querySelector('input[name="mat"]');
input.addEventListener('input', function() {
  if (this.value.length > 6) {
    this.value = this.value.slice(0, 6);
  }
});

function not_numbers(element){
    element.value=element.value.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ ]/g,'');
}

function generateJSON() {
    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const mat = document.querySelector('input[name="mat"]').value;
    const curso = Array.from(document.querySelectorAll('input[name="curso"]:checked')).map(c => c.value);
    const data = { nome, email, mat, curso };
    const json = JSON.stringify(data);
    console.log(json);
}