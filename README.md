# Store Shopping Cart: A Novice ReactJS Project

## Table of Contents

1. [About](#about)
2. [Getting Started](#getting-started)
3. [Project Dependencies](#project-dependencies)
4. [The App](#the-app)
5. [Future Fixes and Improvements](#future-fixes-and-improvements)

## About

This React project forms part of [The Odin Project React Course](https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart). Its purpose is to deepen skills in React, specifically in using [React Router](https://reactrouter.com) for managing multi-page applications (MPAs).

The objective is to create a simple online storefront that

- Has at least two individual pages
- Let's the user navigate between pages via a navigation bar
- A shopping cart that stores and displays the products the user has selected
- Fetches product data via an API

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository:

```bash
git clone git clone https://github.com/JE-Richards/odin-shopping-cart
```

2. Navigate to the project directory

```bash
cd your-repo
```

3. Install the [project dependencies](#project-dependencies):

```bash
npm install
```

4. To run the app:

```bash
npm run dev
```

5. Open the app in your browser at:

```bash
http://localhost:5173/
```

## Project Dependencies

The project was initialised using React with Vite, with package management handled by npm. For the full list of depencies, see the [package.json](./package.json) file.

## The App

The app has been deployed via [Vercel](https://vercel.com/) and can be viewed here: https://odin-shopping-cart-theta.vercel.app/

## Future Fixes and Improvements

- **Known bugs**:
  - [ ] Disabled button styling isn't applying correctly to buttons on the ProductPage.
- **Future improvements**:
  - Styling:
    - [ ] Improve product display within cart page. The sizes of segments (i.e. product details, quantity, etc.) varies based on content length. Consistency across products would be an improvement.
    - [ ] Implement toggle button for light and dark mode.
  - Tests:
    - [ ] Add integration testing.
    - [ ] Add unit tests for app pages.
