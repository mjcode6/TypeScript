// challenge.ts
// Typer wilders
var wilders = [];
// Adapter user2 pour qu'il n'affiche plus d'erreur
var user1 = { name: "Pierre", age: 23 };
var user2 = { name: "Paul", birthday: "10/02/1990", age: 33 }; // Ajout de l'âge
var user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
// La fonction prettyPrintWilder est correctement typée
var prettyPrintWilder = function (users) {
    users.map(function (user) {
        console.log("".concat(user.name, " is ").concat(user.age, " years old"));
    });
};
// Appel de la fonction
prettyPrintWilder(wilders);
