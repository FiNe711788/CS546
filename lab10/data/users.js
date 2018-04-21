const users = [
  {
    _id: "1245325124124", username: "masterdetective123", hashedPassword: "$2a$16$7JKSiEmoP3GNDSalogqgPu0sUbwder7CAN/5wnvCWe6xCKAKwlTD.",
    firstName: "Sherlock", lastName: "holmes", profession: "Detective",
    bio: "Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional private detective created by British author Sir Arthur Conan Doyle. Known as a 'consulting detective' in the stories, Holmes is known for a proficiency with observation, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard."
  },
  {
    _id: "723445325124124", username: "lemon", hashedPassword: "$2a$16$SsR2TGPD24nfBpyRlBzINeGU61AH0Yo/CbgfOlU1ajpjnPuiQaiDm",
    firstName: "Elizabeth", lastName: "Lemon", profession: "Writer",
    bio: "Elizabeth Miervaldis 'Liz' Lemon is the main character of the American television series 30 Rock. She created and writes for the fictional comedy-sketch show The Girlie Show or TGS with Tracy Jordan."
  },
  {
    _id: "813445325124124", username: "theboywholived", hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    firstName: "Harry", lastName: "Potter", profession: "Student",
    bio: "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles."
  }
];

let exportedMethods = {
  async findById(id) {
      return users.find(function (obj) {
        return obj._id === id;
      });
  },
  async findByUsername(username) {
      return users.find(function (obj) {
        return obj.username === username;
      });
  }
};

module.exports = exportedMethods;