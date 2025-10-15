# Sass & Webpack Project Starter

A front-end starter template built with a scalable 7-1 Sass setup and Webpack for managing all your assets in development and production.

## Getting Started

Follow these steps to create a new project based on this template.

1.  **Create a new repository from this template**

      * Click the green **`Use this template`** button on the GitHub page.
      * Select **`Create a new repository`**.
      * Give your new repository a name and create it.

2.  **Clone your new repository**

      * On the page of your newly created repository, click the `<> Code` button and copy the URL.
      * Run the following command in your terminal:
        ```bash
        git clone https://github.com/your-username/your-new-repository-name.git
        ```

3.  **Navigate to the project directory**

    ```bash
    cd your-new-repository-name
    ```

4.  **Install dependencies**

    ```bash
    npm install
    ```

Now you are ready to run the development server with `npm start`\!

## Available Scripts
After installing the dependencies, you can use these commands:

* **`npm start`**
  Launches the development server at `http://localhost:8080` with live reloading.
  Any changes in the `src` folder will automatically refresh the browser.

* **`npm run build`**
  Builds an optimized production version of your project in the `dist` folder, ready for deployment.

## Sass Architecture

* **`abstracts/`** for variables, functions, and mixins.
* **`base/`** for resets, typography, and global styles.
* **`components/`** for reusable components like `_button.scss`.
* **`layouts/`** for major page structures like the header or sidebar.
* **`main.scss`** to import all partials in the correct order.

## Project Structure

```
.
├── dist/             # Bundled output (auto-generated)
├── src/              # Your source code
│   ├── assets/       # Images, fonts, etc.
│   ├── index.js      # Main JavaScript entry point
│   ├── scss/         # Sass files
│   │   ├── abstracts/
│   │   ├── base/
│   │   ├── components/
│   │   │   └── _button.scss
│   │   ├── layouts/
│   │   │   ├── _header.scss
│   │   │   ├── _main.scss
│   │   │   └── _sidebar.scss
│   │   └── main.scss
│   └── template.html # HTML template file
│
├── package.json
└── webpack.config.js
```

## Useful Links & Acknowledgements

  * [Sass Documentation](https://sass-lang.com/documentation)
  * [Webpack Documentation](https://webpack.js.org/)
  * [Sass Guidelines](https://sass-guidelin.es/)

The Sass architecture was inspired by the [technoph1le/sass-template](https://github.com/technoph1le/sass-template) project.
