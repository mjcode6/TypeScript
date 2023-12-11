

  // challenge.ts

//  une interface 
interface User {
    name: string;
    age: number;
    birthday?: string; // birthday est désormais une propriété optionnelle
  }
  
  // Déclarer des types pour la fonction prettyPrintWilder
  type UsersArray = User[];
  type PrettyPrintWilderFunction = (users: UsersArray) => void;
  
  // Typer wilders
  const wilders: UsersArray = [];
  
  // Adapter user2 pour qu'il n'affiche plus d'erreur
  const user1: User = { name: "Pierre", age: 23 };
  const user2: User = { name: "Paul", birthday: "10/02/1990", age: 33 }; // Ajout de l'âge
  const user3: User = { name: "Jacques", age: 25 };
  
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  
  // La fonction prettyPrintWilder est correctement typée
  const prettyPrintWilder: PrettyPrintWilderFunction = (users) => {
    users.map((user) => {
      console.log(`${user.name} is ${user.age} years old`);
    });
  };
  
  // Appel de la fonction
  prettyPrintWilder(wilders);
  