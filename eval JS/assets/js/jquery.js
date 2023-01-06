function genereMDP(){
    // Chaine de caractères pour le MDP
    let caracteres = 'reagihrgirhogahrgihehragpEQHRZHZRHRHZZRHRZHHéàç_éèè)';
    // Valeur aléatoire entre 0 et 8 pour le mdp
    let long = Math.floor(Math.random()*8);
    // Longueur minimum: 8 caractères, max: 16 caractères
    long = 8 + long;
    // On instancie notre variable mot de passe
    let motdepasse = '';
    for(let i = 0; i <= long; i++){
      motdepasse += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
    }
    $('#mdp').val(motdepasse);
    $('#mdp2').val(motdepasse);
  }
  
  // Affiche les mdp
  function voirMdp(){
    $('#mdp').attr('type', 'text');
    $('#mdp2').attr('type', 'text');
  }
  
  // Cache les mdp
  function cacherMdp(){
    $('#mdp').attr('type', 'password');
    $('#mdp2').attr('type', 'password');
  }
  
  // soit on affiche soit on cache les mdp
  function afficherMdp(){
    let mdp = $('#mdp').attr('type');
    let mdp2 = $('#mdp2').attr('type');
    if(mdp == 'text' && mdp2 == 'text'){
      cacherMdp();
      $('#btn-affiche').text('Afficher mot de passe');
    } else{
      voirMdp();
      $('#btn-affiche').text('Cacher mot de passe');
    }
  }
  
  // Pour virifeir si les 2 mdp se ressemble
  function checkMDP(){
    let mdp = $('#mdp').val();
    let mdp2 = $('#mdp2').val();
    if(mdp == mdp2){
      return true;
    } else{
      alert("T'es MDP sont pas pareil trou d'cul");
      return false;
    }
  }
  
  
  // Vérifie l'email
  let email = $('#email').val();
  let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if(regexEmail.test(email)){
    console.log('Adresse email valide');
} else{
  console.log('Adresse email non valide');
}

// Vérifie le tel
let phone = $('#telephone').val();
let regexPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
if(regexPhone.test(phone)){
  console.log('Numéro de téléphone valide');
} else{
  console.log('Numéro de téléphone non valide');
}

$('#formulaire_ajax').on("submit", function(event) {
  let formData = $(this).serialize(); 
  $.ajax({
    type: 'POST', 
    url: 'assets/ajax/formulaire.php', 
    data: formData,
    dataType: 'html', 
    success: function(response) {
      $('#formulaire_ajax')[0].reset();
      alert(response);
      $('#message').html('<p>Formulaire envoyé tu a reussis pauve tache!</p>');
      // window.open('https://fr.pornhub.com/video/search?search=camion', '_blank');
      
    },
    error: function(error){
      $('#message').html('<p>Formulaire non envoyé car tu a fait de la merde connard!!!</p>'); 
  }
  
  });
  event.preventDefault();
});
