# Frontend Mentor - REST Countries API with color theme switcher

![Design preview for the REST Countries API with color theme switcher coding challenge](/public/design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a good understanding of HTML, CSS, and JavaScript.**

## The challenge

Your challenge is to integrate with the [REST Countries API](https://restcountries.com) to pull country data and display it like in the designs.

You can use any JavaScript framework/library on the front-end such as [React](https://reactjs.org) or [Vue](https://vuejs.org). You also have complete control over which packages you use to do things like make HTTP requests or style your project.

Your users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

**⚠️ NOTE ⚠️: Sometimes the REST Countries API can go down. We've added a `data.json` file with all the country data if you prefer to use that instead. However, please be aware that the data in the JSON file might not be up-to-date.**

## My process

- Add components for HomePage and InnerPage.
- Create pages and setup routes.
- SharedLayout/ style an setup menu mobile and desktop view. Setup themes with daisyUI.
- Create theme slice and add functionality to theme switching in Menu.
- Add menu button animation.
- Add Search and Filter views for mobile and desktop.
- Add Filterbox and setup reducer filterSlice.
- Add cards views and card styling. Fetching data.
- Add loader to inner page and style the InnerPage basically.
- Style and link the Back button.
- Style the View and add flag image.
- Style the Infos and parent elements.
- Add Borderlands and Borderland component and link them.
- Add fetchedData (all countries) as state. Create dataSlice.js.
- Create filtered by region.
- Create filtered searching. Filter the countries and submit country name.
- Design ErrorPage and catch existing errors.
- Create PlaceholderCards for fetching.
- Finish styling of components and make them look closer to the desgin. Add accessibility and seo optimizations.
- Add simple animations. Change styles on components to meet design closer.

### Built with

- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [React Router](https://reactrouter.com/en/main/start/tutorial) - To navigate in SPAs
- [TailwindCSS] (https://tailwindcss.com/docs/installation) - Perfect for React styling
- [Daisy-UI](https://daisyui.com/docs/install/) - Built on TailwindCSS offers UI and themes setup
- [Framer](https://www.framer.com/motion/introduction/) - Create animations easily
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started) - Statemanagament library
- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/usage/queries) - Fetching chaching library for Redux
