# MyPortfolio

![Portfolio](/src/assests/images/portfolio.gif)

## Video
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/ElFDp9rD8c4/0.jpg)](https://www.youtube.com/watch?v=ElFDp9rD8c4)

### My personal and clean portfolio.

[Publish version](https://sopzak.github.io/Portfolio/)

# Sections

- Home
- Education
- Experience
- Projects
- Contact and Resume

# Follow Me

- [Git](https://github.com/Sopzak/)
- [LinkedIn](https://www.linkedin.com/in/jesiel-sopzak)
- [Instagram](https://www.instagram.com/jesopzak/)

# How To Use/Clone this project

- Clone this repository (or fork, then clone your fork :) )
- Run `npm i`
- Check it out using `npm start`

# How Do I Customize

- Replace `homepage` in package.json to your domain name or `https://<username>.github.io`
- In `src/portfolio.js` you can add your personal portfolio details.
- In `src/theme.js` you can change the theme colors. You can change between Light and Dark theme with the theme switch on the header.

# How to Deploy

- Once you are done with your setup and have successfully completed all steps above, you need to put your website online!
- I highly recommend using [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) to achieve this the EASIEST WAY.
- To deploy your website, you have two options. First you need to create a github repository with the name `<your-github-username>.github.io`. Please don't give it any other name.
- Now, you need to generate a production build and deploy the website.

**Option 1:**

- Run `npm run build` to generate the production build folder.
- Enter the build folder, `git init` and push the generated code to the `master` branch of your new repository. That's it. Done.
  You may need to `git init` and force push at every new build.

**Option 2 (will not work with [user pages](https://docs.github.com/en/github/working-with-github-pages/about-github-pages)):**

- Run `npm run deploy` to build and create a branch called `gh-pages`. It will push the `build` files to that branch.
- The last step in deploying is to enable `Github Pages` in settings of the repository and select `gh-pages` branch.

Now, your website is successfully deployed and you can visit it at `<your-github-username>.github.io`.

# Technologies used 🛠️

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/)
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/)
- [baseui](https://github.com/uber/baseweb)
- [react-reveal](https://www.react-reveal.com/)
- [styled-components](https://styled-components.com/)

# illustrations 🍥

- [UnDraw](https://undraw.co/illustrations)

# References

Based on https://github.com/harikanani/PortfolioV2,
