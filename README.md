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
    <img src="images/icon.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Audiophile</h3>

  <p align="center">
 Audiophile is a full-stack eCommerce web app specializing in high-end audio devices, including earphones, speakers, and headphones. This project was developed by MV, based on a design provided by <a href="https://www.frontendmentor.io/">Frontend Mentor</a>. The application offers a seamless experience for browsing and purchasing premium audio equipment.
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

[![Product Name Screen Shot][product-screenshot]](http://audiophile.valenzuela.dev)

This project is structured into two main parts: the frontend and the backend.

The **frontend** is developed as static pages using the Astro framework, with a largely vanilla JavaScript approach for functionality. Special attention was given to features, responsiveness, and action handling to ensure an optimal user experience.

The **backend** consists of a RESTful API that allows for fetching products, validating the shopping cart, and handling checkout and billing information. For this demonstration project, products are stored in a server variable, as a database is not required for basic functionality. However, the setup is designed to allow easy integration with a database if needed. Additionally, the API follows standard patterns, making it straightforward to add and configure payment gateways like Stripe in the server-side logic.

This project includes Docker and Docker Compose configurations, making it easy to set up and run the application in a containerized environment.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

**Frontend**

- [![Astro][Astro.build]][Astro-url]

**Backend**

- [![Node][Nodejs.org]][Nodejs-url]
- [![Express][Expressjs.com]][Expressjs-url]

**Testing**

- [![Jest][Jest.com]][Jest-url]
- Vitest

**Hosting**

- Docker/Docker-compose
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

For detailed instructions on how to use the development files for both the frontend and backend, please refer to the README files located in their respective folders.

### Prerequisites

- docker
- docker-compose

### Installation & hosting

1. Clone the repo
   ```sh
   git clone https://github.com/Dantalian5/audiophile-ecommerce-website.git
   ```
2. Configure environment variables
   ```sh
   # .env
    API_URL=https://localhost/api/
    PORT=4000
   ```
3. Use Docker compose to mount the project
   ```sh
   docker-compose --env-file .env up -d
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

The site allows users to navigate through category and product pages, add products to the cart, manage the cart, and validate the cart contents. If a product ID is incorrect or invalid, the purchase will not proceed. During checkout, the application validates the billing information to ensure all required details are provided.

The API enables retrieval of products, either by ID or by category. It also handles cart validation and billing information verification, ensuring that all purchase logic is securely processed on the server.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Create Frontend
- [x] Create backend
- [x] Create hosting configuration

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
[license-url]: https://github.com/Dantalian5/audiophile-ecommerce-website/blob/master/LICENSE
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
