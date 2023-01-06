
function genereMDP(){
    // Chaine de charactères pour le MDP
    let caracteres =  'reagihrgirhogahrgihehragpEQHRZHZRHRHZZRHRZHHéàç_éèè)';
    // Valeur aléatoire entre 0 et 8 pour le mdp
    let long = Math.floor(Math.random()*8);
    // Longueur minimum: 8 charactères, max: 16 charactères
    long = 8+long;
    // On instancier notre variable mot de passe
    let motdepasse = '';
    for(let i=0;i<=long;i++){
        motdepasse+= caracteres.charAt(Math.floor(Math.random()*caracteres.length));
    }
    document.getElementById('mdp').value = motdepasse;
    document.getElementById('mdp2').value = motdepasse;
};
function voirMdp(){
    document.getElementById('mdp').setAttribute('type','text');
    document.getElementById('mdp2').setAttribute('type','text');
};
function cacherMdp(){
    document.getElementById('mdp').setAttribute('type','password');
    document.getElementById('mdp2').setAttribute('type','password');
};
function afficherMdp(){
    let mdp = document.getElementById('mdp');
    let mdp2 = document.getElementById('mdp2');
    if(mdp.getAttribute('type') == 'text'&& mdp2.getAttribute('type') == 'text'){
        cacherMdp();
        document.getElementById('btn-affiche').innerText = 'Afficher mot de passe';
    } else{
        voirMdp();
        document.getElementById('btn-affiche').innerText = 'Cacher mot de passe';

    }
};
function checkMDP() { //fonction qui vérifie les MDP
    let mdp = document.getElementById('mdp').value;
    let mdp2 = document.getElementById('mdp2').value;
    if (mdp == mdp2) {
      return true;
    } else {
        alert("T'es MDP sont pas pareil trou d'cul")
      return false;
    }
};

// on verifie l'email
let email = document.getElementById('email').value;
let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
if (regexEmail.test(email)) {
  console.log('Adresse email valide');
} else {
  console.log('Adresse email non valide');
}

// On vérifie le num
let phone = document.getElementById('telephone').value;
let regexPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
if (regexPhone.test(phone)) {
  console.log('Numéro de téléphone valide');
} else {
  console.log('Numéro de téléphone non valide');
}
