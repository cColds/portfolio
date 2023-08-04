import pixelhunt from "./assets/preview/pixelhunt.png";
import shoppingCart from "./assets/preview/shopping-cart.png";
import battleship from "./assets/preview/battleship.png";

const projectData = [
  {
    id: crypto.randomUUID(),
    title: "PixelHunt",
    image: pixelhunt,
    description:
      "A Where's Waldo (Photo Tagging) game where your goal is to find all the hidden characters. After finding all of them, you can submit your score on the leaderboard, sorted by fastest times.",
    tech: ["React", "TypeScript", "Firebase"],
    links: {
      repo: "https://github.com/cColds/wheres-waldo",
      site: "https://wheres-waldo-74fe1.web.app/",
    },
  },
  {
    id: crypto.randomUUID(),
    title: "Shopping Cart",
    image: shoppingCart,
    description:
      "An ecommerce app that fetches Shopify's API to generate products. You can browse items via the store, or by searching for it. You can add items to your cart and view your cart in the checkout.",
    tech: ["React", "TypeScript", "Vitest"],
    links: {
      repo: "https://github.com/cColds/shopping-cart",
      site: "https://ccolds.github.io/shopping-cart",
    },
  },
  {
    id: crypto.randomUUID(),
    title: "Battleship",
    image: battleship,
    description:
      "Battleship is a strategy type guessing game for two players, played on a 10x10 board, where the objective to win is destroying all of the opponent's fleets. In this version, the opponent is an AI, which has been tweaked to attack adjacent to fleet hits. This game was built with TDD in mind.",
    tech: ["JavaScript", "Jest", "SCSS"],
    links: {
      repo: "https://github.com/cColds/battleship",
      site: "https://ccolds.github.io/battleship",
    },
  },
];

export default projectData;
