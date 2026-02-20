export interface Author {
  name: string;
  profileUrl: string;
  imageUrl: string;
}

export interface Recipe {
  slug: string;
  title: string;
  intro: string;
  image?: string;
  author: Author;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  method: string[];
  notes?: string;
}

const authors = {
  paul: {
    name: "Paul D'Ambra",
    profileUrl: "https://posthog.com/community/profiles/30173",
    imageUrl:
      "https://res.cloudinary.com/dmukukwp6/image/upload/v1688575125/paul_64ee2de98e.png",
  },
} as const;

export const recipes: Recipe[] = [
  {
    slug: "roast-pepper-salad",
    title: "Roast Pepper Salad",
    intro:
      "A ridiculously tasty pepper salad. Be careful to have lots of good bread available to soak up the tasty oil when you're finished!",
    image: "/images/roast-pepper-salad.jpg",
    author: authors.paul,
    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: 4,
    ingredients: [
      "6 peppers (any colour)",
      "Extra virgin olive oil, to taste",
      "Capers, to taste",
      "25 black olives",
      "Thyme, to taste",
      "Basil, to taste",
      "Garlic, to taste",
      "Black pepper, to taste",
    ],
    method: [
      "Set your grill to hot.",
      "Chop the peppers into quarters or halves and remove the seeds.",
      "Rub the skins with olive oil.",
      "Place them on a baking tray skin-side up.",
      "Grill until the skins are burning and bubbling away from the flesh.",
      "Place them straight into a bowl and cover with clingfilm. Leave for at least ten minutes.",
      "Remove them from the bowl—the skin will peel away without much effort. Slice lengthways.",
      "Re-using the same bowl (which will have the pepper's juices at the bottom), add the sliced peppers, capers, basil, halved and pitted olives, a pinch of thyme, and sliced garlic.",
      "Season with black pepper and drizzle with olive oil. Stir well.",
      "Leave overnight for the flavours to combine.",
    ],
  },
  {
    slug: "pizza-dough",
    title: "Pizza Dough",
    intro:
      "Neapolitan pizza dough is a strictly described thing. This recipe can be completed in a single day and makes a very consistently tasty dough. Yes, that much salt!",
    image: "/images/pizza-dough.jpg",
    author: authors.paul,
    prepTime: "30 mins",
    cookTime: "6 hours rising",
    servings: 8,
    ingredients: [
      "1kg 00 flour",
      "556g water",
      "28 to 30g salt",
      "1 sachet dried yeast",
    ],
    method: [
      "Put the water in a large bowl.",
      "Add the salt.",
      "Add a third of the flour and mix it all together.",
      "Add the yeast and mix.",
      "Add the rest of the flour and mix until it comes together.",
      "Knead for at least five minutes—ideally up to 20 minutes.",
      "Leave in the bowl covered with a damp tea-towel somewhere about 21°C for 4 hours.",
      "Lightly flour a work surface. Take the dough out of the bowl and cut into roughly 250g lumps (you'll get 6 to 8).",
      "Make into balls and leave on the surface for another 2 hours covered with the damp towel.",
    ],
    notes:
      "I sometimes use a biga starter, but it takes more work, time, and nuance. The UK version of the EU rules for Neapolitan pizza dough uses 1.8 kilograms of flour and 1 litre of water—ingredients here have been adjusted to 1kg since that's how flour comes in bags.",
  },
  {
    slug: "pasta-e-fasule",
    title: "Pasta e Fasule",
    intro:
      "Pasta e Fasule, as made by my Neapolitan Nonna Luisa. Pasta e Fasule is Neapolitan for Pasta e Fagiole which is Italian for Pasta and Beans. Pasta and bean soup reminds me of being looked after when recovering from an illness as a kid. I like it so thick the spoon will stand up.",
    image: "/images/pasta-e-fasule.jpg",
    author: authors.paul,
    prepTime: "10 mins",
    cookTime: "40 mins",
    servings: 4,
    ingredients: [
      "400g broken spaghetti and pasta",
      "2 tins cannellini beans, washed and drained",
      "3 or 4 garlic cloves, peeled",
      "5 tablespoons olive oil (approx)",
      "10 cherry tomatoes (optional)",
      "Salt & pepper, to taste",
    ],
    method: [
      "Put oil in a pan, fry garlic till blond not brown.",
      "If you have tomatoes, add them to the pan. If not, you can add a quarter of a tin of chopped tomatoes or leave them out entirely.",
      "Cook with garlic & oil for about 5 minutes.",
      "Add beans, stir, and cook all together for 5 minutes.",
      "Cover with water—2 fingers above the beans. Add salt & pepper to taste.",
      "Cook for 20 minutes.",
      "Add pasta, stir, and cook till pasta is soft. Stir often to stop pasta sticking to bottom of the pan.",
      "If it goes dry, add more water. I like it thicker—some people like it thinner.",
      "When cooked, cover with lid and leave for 10-15 minutes to rest so pasta absorbs the sauce.",
    ],
    notes:
      "You can use odds and ends of pasta or break spaghetti in. When my dad was little he'd be sent to the pasta shop to get their broken odds and ends—they were cheaper.",
  },
  {
    slug: "zucchini-focaccia",
    title: "Zucchini Focaccia",
    intro:
      "This year we've grown way too many zucchinis. One way I've been trying to use them up is putting them in dough. The kids love it!",
    image: "/images/zucchini-focaccia.jpg",
    author: authors.paul,
    prepTime: "20 mins",
    cookTime: "3 hours (including rising)",
    servings: 8,
    ingredients: [
      "800g bread flour or 00 pizza flour",
      "1 sachet dried yeast",
      "20g salt",
      "250ml water",
      "1 big zucchini",
      "2 cloves garlic",
      "Olive oil",
      "10 cherry tomatoes (optional)",
      "10 olives (optional)",
      "Rosemary, to taste (optional)",
      "Sea salt, to taste",
    ],
    method: [
      "Grate or slice the zucchini.",
      "Put garlic and oil in a pan, fry garlic till blond not brown.",
      "Add the zucchini and cook till soft.",
      "Blitz the cooked zucchini in a blender.",
      "Put flour, salt, yeast, water, and blitzed zucchini in a stand mixer (or just use a bowl and your hands).",
      "Mix until it makes a nice dough, adding water as needed.",
      "Leave on the windowsill with a wet tea towel on top for 2 hours.",
      "Knock it back and split it into at least 2 pieces (depends on the size of tin you have).",
      "Oil the tin, spread the dough into it. Optionally leave for another hour to rise.",
      "Add tomatoes, olives, rosemary, and sea salt to taste. Use your fingers to make dimples in the dough.",
      "Cook at 180°C for 20 minutes or until golden brown.",
    ],
  },
];
  {
    slug: "white-bean-dip",
    title: "White BEan Dip",
    intro:
      "It's a dip made from beans. Trust me, it is 100x better than it sounds",
    image: "/images/white-bean-dip.jpg",
    author: authors.chris,
    prepTime: "10 mins",
    cookTime: "0 mins",
    servings: 4,
    ingredients: [
      "1.5 cups cooked cannellini beans",
      "2 tbsp extra-virgin olive oil",
      "2 tbsp fresh lemon juice",
      "1 garlic clove",
      "1/2 tsp salt",
      "2 tbsp torn basil leaves",
      "2 tbsp chopped fresh rosemary",
      "2 - 4 tbsp water",
    ],
    method: [
      "Put all the ingredients in a food processor, pulse until smooth.",
      "gradually thin with water until smooth",
      "*note* You'll be tempted to add more garlic, because we all love garlic and 1 clove isn't enough. You probably shouldn't do this.",
      "Pureed garlic is strong, and it gets stronger as you let the dip rest.",
  },
];
export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.slug === slug);
}

export function getAllRecipes(): Recipe[] {
  return recipes;
}
