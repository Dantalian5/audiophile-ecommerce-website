<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Dantalian5/audiophile-ecommerce-website">
    <img src="../images/icon.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Audiophile | API</h3>

  <p align="center">
 This is the backend of the Audiophile eCommerce project, providing a RESTful API for managing products, cart validation, and checkout processes.
<br />
<a href="https://github.com/Dantalian5/audiophile-ecommerce-website"><strong>Explore the docs »</strong></a>
<br />
<br />
<a href="https://github.com/Dantalian5/audiophile-ecommerce-website">View Demo</a>
·
<a href="https://github.com/Dantalian5/audiophile-ecommerce-website/issues">Report Bug</a>
·
<a href="https://github.com/Dantalian5/audiophile-ecommerce-website/issues">Request Feature</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

- **Product Retrieval**: Fetch a list of all products, retrieve a single product by ID, or filter products by category.
- **Cart Validation**: Validate cart items to ensure each product's ID is correct. If an invalid product is detected, the purchase will not proceed.
- **Checkout Validation**: Verify billing information during checkout to ensure secure and complete transactions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Node][Nodejs.org]][Nodejs-url]
- [![Express][Expressjs.com]][Expressjs-url]

**Testing**

- [![Jest][Jest.com]][Jest-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- nodejs

### Installation & hosting

1. Clone the repo
   ```sh
   git clone https://github.com/Dantalian5/audiophile-ecommerce-website.git
   ```
2. Run development server
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### API Endpoints

- **GET /api/products**: Returns a list of all products. You can filter products by category using a query parameter, e.g., `GET /api/products?category=headphones`.
- **POST /api/cart**: Validates the contents of the cart to ensure all product IDs are correct. If an invalid product is detected, the purchase will not proceed.
- **POST /api/checkout**: Validates both the cart and billing information to ensure a secure and complete checkout process.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Implement the routes
- [x] Implement the Controllers
- [x] Add zod validation
- [x] Add unitary & integration tests

See the [open issues](https://github.com/Dantalian5/audiophile-ecommerce-website/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

- Website - [Marcos Valenzuela](https://valenzuela.dev)
- Linkedin - [Marcos Valenzuela](https://www.linkedin.com/in/marcos-valenzuela-dev)
- Github - [@Dantalian5](https://github.com/Dantalian5)
- Frontend Mentor - [@Dantalian5](https://www.frontendmentor.io/profile/Dantalian5)
- Start2Impact Portfolio - [Marcos Valenzuela](https://talent.start2impact.it/profile/marcos-ernesto-planos-valenzuela)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Fronten Mentor](http://frontendmentor.io)
- [Iconify](https://iconify.design)
- [RealFaviconGenerator](https://realfavicongenerator.net)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Dantalian5/audiophile-ecommerce-website.svg?style=for-the-badge
[contributors-url]: https://github.com/Dantalian5/audiophile-ecommerce-website/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Dantalian5/audiophile-ecommerce-website.svg?style=for-the-badge
[forks-url]: https://github.com/Dantalian5/audiophile-ecommerce-website/network/members
[stars-shield]: https://img.shields.io/github/stars/Dantalian5/audiophile-ecommerce-website.svg?style=for-the-badge
[stars-url]: https://github.com/Dantalian5/audiophile-ecommerce-website/stargazers
[issues-shield]: https://img.shields.io/github/issues/Dantalian5/audiophile-ecommerce-website.svg?style=for-the-badge
[issues-url]: https://github.com/Dantalian5/audiophile-ecommerce-website/issues
[license-shield]: https://img.shields.io/github/license/Dantalian5/audiophile-ecommerce-website.svg?style=for-the-badge
[license-url]: https://github.com/Dantalian5/audiophile-ecommerce-website/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/marcos-valenzuela-dev
[product-screenshot]: images/screenshot.png

<!-- Tech Stack Badges -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Tailwind.com]: https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=%23fff
[Tailwind-url]: https://tailwindcss.com/
[Typescript.com]: https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=%23fff
[Typescript-url]: https://www.typescriptlang.org/
[Postgresql.com]: https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=%23fff
[Postgresql-url]: https://www.postgresql.org
[Jest.com]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=%23fff
[Jest-url]: https://jestjs.io/
[NextUI.com]: https://img.shields.io/badge/NextUI-000000?style=for-the-badge&logo=nextui&logoColor=%23fff
[NextUI-url]: https://nextui.org/
[Astro.build]: https://img.shields.io/badge/Astro-000000?style=for-the-badge&logo=astro
[Astro-url]: https://astro.build/
[Expressjs.com]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express
[Expressjs-url]: https://expressjs.com/
[Nodejs.org]: https://img.shields.io/badge/Node-000000?style=for-the-badge&logo=nodedotjs
[Nodejs-url]: https://nodejs.org/
