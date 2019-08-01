import { weaponKeys } from "../constants/Weapons";

export const getRandomWeapon = () => {
  return weaponKeys[Math.floor(weaponKeys.length * Math.random())];
};
