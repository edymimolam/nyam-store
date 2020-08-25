import { v4 as uuidv4 } from "uuid";
import catPhoto from "./assets/cat-photo.png";

export default [
  {
    id: uuidv4(),
    description: "печень утки разварная с артишоками.",
    title: "нямушка",
    subTitle: {
      main: "сказочное заморское яство",
      second: "Котэ не одобряет?",
    },
    taste: "с фуа-гра",
    isAvailable: true,
    bonus: "10 порций мышь в подарок",
    weight: 2,
    image: catPhoto,
  },
  {
    id: uuidv4(),
    description: "головы щучьи с чесноком да свежайшая сёмгушка.",
    title: "нямушка",
    subTitle: {
      main: "сказочное заморское яство",
      second: "Котэ не одобряет?",
    },
    taste: "с рыбой",
    isAvailable: false,
    bonus: "10 порций мышь в подарок",
    weight: 5,
    image: catPhoto,
  },
  {
    id: uuidv4(),
    description: "филе из цыплят с трюфелями в бульоне.",
    title: "нямушка",
    subTitle: {
      main: "сказочное заморское яство",
      second: "Котэ не одобряет?",
    },
    taste: "с курой",
    isAvailable: true,
    bonus: "10 порций мышь в подарок",
    weight: 0.5,
    image: catPhoto,
  },
];
