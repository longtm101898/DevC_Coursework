const weapons = {
    rock: {
      wins: ["scissors"]
    },
    paper: {
      wins: ["rock"]
    },
    scissors: {
      wins: ["paper"]
    }
  },
  weaponKeys = Object.keys(weapons);

export { weapons, weaponKeys };
