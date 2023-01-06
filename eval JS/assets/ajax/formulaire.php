

<?php
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $mdp = $_POST['mdp'];
    $mdp2 = $_POST['mdp2'];
    $email = $_POST['email'];
    $telephone = $_POST['telephone'];
    // Générer le message à afficher dans l'alerte
    $message = "Nom : $nom\nPrénom : $prenom\nMot de passe : $mdp\nConfirmation mot de passe : $mdp2\nEmail : $email\nTéléphone : $telephone";
    // Afficher l'alerte
    echo "<script type='text/javascript'>alert('$message');</script>";
  }
?>