# Be-Romantic

Welcome to **Be-Romantic**, the ultimate guide to all love celebrations around the world! This project is designed to help people discover and celebrate love in various cultures by listing love days specific to different countries and languages.

## Table of Contents

1. [About the Project](#about-the-project)
2. [How to Contribute](#how-to-contribute)
    - [Adding New Dates](#adding-new-dates)
    - [Completing Information](#completing-information)
    - [Suggesting New Features](#suggesting-new-features)
3. [Getting Started](#getting-started)
4. [Contact](#contact)
5. [License](#license)

## About the Project

Be romantic is an open-source project created for fun and to keep the romance alive by always having a reason to surprise loved ones. We aim to build a comprehensive, fun, and engaging resource listing all love days celebrated globally. Contributions from the community are essential to achieving this goal.

## How to Contribute

We welcome contributions from everyone! Whether you want to add new love days, complete information for existing dates, or suggest new features, your help is invaluable.

### Adding New Dates

To add a new love day:

1. **Fork the Repository**: Click the 'Fork' button at the top of this repository page to create a copy of this repository in your GitHub account.

2. **Clone the Repository**: Clone your forked repository to your local machine.

    ```sh
    git clone https://github.com/your-username/be-romantic.git
    ```

3. **Create a New Branch**: Create a new branch for your changes.

    ```sh
    git checkout -b add-new-love-day
    ```

4. **Add Your Date**: Add your new love day to the appropriate file in the `/src/service/date-service.ts` file. Follow the existing format.

5. **Commit Your Changes**: Commit your changes with a descriptive message.

    ```sh
    git commit -m "Add [Love Day Name] on [Date]"
    ```

6. **Push to Your Fork**: Push your changes to your forked repository.

    ```sh
    git push origin add-new-love-day
    ```

7. **Create a Pull Request**: Open a pull request to merge your changes into the main repository. Describe the love day and any relevant details.

### Completing Information

If you notice missing or incomplete information for a love day:

1. **Follow Steps 1-3**: Fork, clone, and create a new branch.
2. **Update the Information**: Add or complete the information in the appropriate file.
3. **Commit and Push**: Commit your changes with a message detailing what you added or updated, and push to your fork.
4. **Create a Pull Request**: Open a pull request with your updates.

### Suggesting New Features

To suggest a new feature:

1. **Open an Issue**: Go to the Issues tab and open a new issue describing the feature you’d like to see.
2. **Detail Your Suggestion**: Provide as much detail as possible about the feature and how it could improve the project.

## Getting Started

To get a local copy up and running, follow these simple steps:

1. **Clone the Repository**:
    ```sh
    git clone git@github.com:Vico1993/be-romantic.git
    ```
2. **Install Dependencies**:
    ```sh
    npm ci
    ```
3. **Run the Project**:
    ```sh
    npm run dev
    ```

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

Thank you for helping us celebrate love every day, everywhere!
