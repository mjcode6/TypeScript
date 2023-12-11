# TypeScript
corriger les erreur


7
Manojan Sivasuthan
Logo Wild Code School

Installation et types basiques
Une introduction à l’intérêt de Typescript

Typescript
1h
3 pairs

Installation et types basiques
Cette quête est prévue pour être réalisé avec l'IDE Visual Studio Code
NodeJS doit être installé et la commande npm fonctionnelle
Introduction
Le Javascript est un langage omniprésent dans le développement Web.
Il nous donne la possibilité d'écrire des applications fullstack et mobile.
Il est pourtant décrié par de nombreux développeurs à cause de sa permissivité.
L'absence de typage statique notamment résulte souvent en des bugs indétectables dans votre IDE.
Ces bugs ne seront détectés qu'à l’exécution du code et dans le pire des cas ils seront détectés par l'utilisateur final, après la mise en production.

"Attraper" des bugs en repérant les incohérences dans l'utilisation des types dans votre code. Voici le premier intérêt de l'utilisation de Typescript.

Lors du développement de votre application, vous allez développer et utiliser des fonctions qui s'attendent à recevoir un certain type de données mais rien ne vous empêche de ne pas respecter ces types. Par contre, il y a de fortes de chances que lors de l'exécution votre application crash.
Typescript est un sur-ensemble de Javascript.
Votre code Javascript fonctionnera toujours avec Typescript. Cela vous permettra de faire évoluer graduellement une base de code Javascript en Typescript

js in ts

🤓 A la fin de cette quête tu sauras
✅ Installer Typescript
✅ Manipuler les types de base
✅ Comprendre les messages d'erreur dans VScode
✅ Compiler du Typescript vers du Javascript
👀 Contenu de la quête :

Pourquoi ne pas en rester au Javascript ?
Une première compilation en Typescript
Exploration des erreurs Typescript
🤷‍♂️ Pourquoi ne pas en rester au Javascript ?
Depuis ES6 et l'apparition d'outil comme Babel ou Webpack permettant de s'abstraire des soucis de compatibilité entre navigateurs, l'expérience du développeur JS s'est considérablement améliorée.

Ajouter un sur-ensemble tel que Typescript qui nous oblige à écrire des déclarations dans notre code peut paraître rébarbatif et superflu.

Mieux qu'un long traité sur les avantages de Typescript cette courte vidéo donne un retour d'expérience sur le sujet en plus de vous montrer les bases du fonctionnement de Typescript.

Les boutons pause et sous-titre sont tes amis

# 1 - La version actuelle de Typescript est 3.1.6


# 2


# 3


# 4


# 5


# 6


# 7



# 8



# 9



# 10




# 11



# 12




# 13



# 14



👉Une première compilation en Typescript
Installation et compilation
Dans ton terminal tape la commande suivante pour installer Typescript de façon globale :

npm install -g typescript
Dans un dossier typescript-basic crée le fichier 'hello.ts' avec le code suivant:

let myName = "Jane"

const hello = (name) => { return (`Hello ${name}`)}

console.log(hello(myName))
Compile

tsc hello.ts
Un fichier hello.js est créé
C'est le but :)

Des erreurs apparaissent dans mon fichier hello.ts
VSC considère que j'ai déclaré plusieurs fois des variables avec le même nom.

à retenir
Le code compilé devrait être placé dans un dossier 'build' qui dans un vrai projet ne sera souvent pas versionné
Le code devrait être compilé à chaque fois que je sauve le fichier 'hello.ts'
On peut choisir la version de JS désirée à la compilation
Un peu de configuration
Tout d'abord supprime le fichier 'hello.js'
Créé le fichier de configuration

tsc --init
Observe les nombreuses options commentées dans tsconfig.json
Décommente, modifie ou ajoute les lignes concernées par:

{
...
"watch" : true,
"target": "ES2015",
...
"outDir": "./build",
...
}
Pour que la configuration soit prise en compte il ne faut plus taper tsc hello.ts mais tsc seulement
Une erreur dans hello.ts
Le code a été compilé : ./build/hello.js a été créé, on observe un erreur dans hello.ts
Comme on a spécifié strict:true en configuration, Typescript nous indique une erreur car l'argument name est implicitement de type any.
Cela permet d'appeler la fonction hello avec n'importe quel type d'argument faisant perdre tout intérêt à l'utilisation de typescript.

Règle cette erreur en spécifiant le type de l'argument name.
🔬Exploration des erreurs Typescript
Afin de te familiariser avec les erreurs affichées par Typescript dans ton IDE.

Télécharge le fichier basic.ts dans ton dossier.
Décommente les lignes de code une par une
Observe les types et les erreurs
Marque chaque erreur de la façon suivante :

/**
 * (3) but if we try to change type
 */
x = 42; // 🚨 ERROR : Type 'number' is not assignable to type 'string'
☝️Résumé
Typescript est un sur-ensemble (superset) du langage Javascript.
Il ne modifie pas le fonctionnement de Javascript mais y ajoute le typage statique qui permet d'identifier un certain nombre d'erreurs avant éxécution.
Avec l'outil tsc on compile le code Typescript en code Javascript
Cette compilation peut être configurée dans le fichier tsconfig.json
Le typage permet d'auto-documenter le code et de rendre l'utilisation de l'IDE plus efficace.
💪Challenge
Le but est de corriger les erreurs TypeScript et de rendre le code fonctionnel.

Créé le fichier challenge.ts et copie le contenu ci-dessous.

// challenge.ts
const prettyPrintWilder = (users) => {
  users.map((user) => {
    console.log(`${user.name} is ${user.age} years old`);
  });
};

const wilders = [];
const user1 = { name: "Pierre", age: 23 };
const user2 = { name: "Paul", birthday: "10/02/1990" };
const user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
Pour typer correctement ce code tu vas devoir:

Déclarer une interface User avec des propriétés typées
Déclarer des types pour le paramètre et le retour de la fonction prettyPrintWilder
Typer wilders
Adapter user2 pour qu'il n'affiche plus d'erreur
Créé un gist sur github avec ton code typé et soumet l'url comme solution à ce challenge.

🧐 Critères d'acceptation

⭙ Le fichier comporte une interface ou un type décrivant User
⭙ La fonction prettyPrintWilder est correctement typée
⭙ La constante wilders est correctement typée

Solution postée le undefined

source  
https://youtu.be/ahCwqrYpIuM
