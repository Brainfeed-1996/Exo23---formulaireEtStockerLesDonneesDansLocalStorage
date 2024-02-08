let btnEnvoyerFormulaire = document.querySelector("button");
console.log(btnEnvoyerFormulaire);

btnEnvoyerFormulaire.addEventListener("click", () => {
  //Récupérer les données du formulaire
  let genre = document.querySelectorAll("input[name = 'genre']");

  for (i = 0; i < genre.length; i++) {
    if (genre[i].checked === true) {
      leGenre = genre[i].value;
    }
  }

  //Stocker les saisies dans le localStorage
  localStorage.setItem("Nom", document.querySelector("#nom").value);
  localStorage.setItem("Prénom", document.querySelector("#prenom").value);
  localStorage.setItem("Le genre", leGenre);
  localStorage.setItem(
    "Texte Formulaire",
    document.querySelector("#texteFormulaire").value
  );

  //Récupérer et afficher les données sur la page Web
  document.querySelector("#leGenre").innerHTML =
    localStorage.getItem("Le genre");

  document.querySelector("#leNom").innerHTML = localStorage.getItem("Nom");

  document.querySelector("#lePrenom").innerHTML =
    localStorage.getItem("Prénom");

  document.querySelector("#leTexteFormulaire").innerHTML =
    localStorage.getItem("Texte Formulaire");

  console.log(document.querySelector("#leGenre"));
});
