# Rick and Morty APP
Display latest info about Rick and Morty Characters.
Tips are highly appreciated!

![Mr Meeseeks](https://media.giphy.com/media/DgLsbUL7SG3kI/giphy.gif)
![Rick](https://media.giphy.com/media/3oEduHUtBvTIIBosJq/giphy.gif)

---

## The Case
Using the API: https://rickandmortyapi.com/

Display the following:
- Show all characters that exist (or are last seen) in a given dimension
- Show all characters that exist (or are last seen) at a given location
- Show all characters that partake in a given episode
- Showing all information of a character (Name, species, gender, last location, dimension, etc)

![Show me what you got!](https://media.giphy.com/media/26DOs997h6fgsCthu/giphy.gif)

---

## Run App
To run the app, run:

```bash
cd rick-and-morty-case
npm install
npm run dev
```

The App will run on port 7777

---

## Stack
Here's what I used to build the app:

- Next.js (React) with Server Side Rendering
- Apollo Client
- Styled Components
- Eslint
- Prettier
- Jest & Enzyme (I would've used React Testing Library but there was no time to learn yet another tool)
- Husky & Lint-staged for the pre-commit hook