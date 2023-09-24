# Muted News - Top Headlines

Muted News is a React application built with Next.js that displays top headlines fetched from a news API. It features an infinite scrolling mechanism to load more news articles as the user scrolls down the page.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Code Explanation](#code-explanation)
- [Infinite Scrolling](#infinite-scrolling)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you can run this application, you need to have the following software installed on your machine:

- **Node.js and npm:** You can download and install them from [https://nodejs.org/](https://nodejs.org/).

## Getting Started

Follow these steps to get the Muted News application up and running on your local machine:

1. Clone this repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd muted-news
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file in the root directory with the following content:

   ```
   NEXT_PUBLIC_NewsApi_Key=YOUR_API_KEY
   ```

   Replace `YOUR_API_KEY` with your News API key. You can generate a free API key from [https://newsapi.org/](https://newsapi.org/) by signing up for a developer account.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

The project is structured as follows:

- `pages/index.tsx`: This is the main page component that displays the top headlines and implements infinite scrolling.

- `components/NewsData.tsx`: A component responsible for rendering the news data received from the API.

- `components/Loader.tsx`: A loading spinner component that is displayed while fetching more data.

- `api/News.ts`: A mock API route that simulates fetching news data. In a real application, this would be replaced with an actual API endpoint.

## Configuration

The News API key is stored securely in the `.env.local` file and can be accessed in the application as `process.env.NEXT_PUBLIC_NewsApi_Key`.

## Code Explanation

The `index.tsx` file is the main component of the application:

- It imports necessary libraries and components, including React, Axios, and Next.js components.

- It defines state variables for `newsData`, `pageSize`, and `loading`.

- The `useEffect` hook is used to fetch news data when the component mounts and when the `pageSize` changes. It also adds a scroll event listener to implement infinite scrolling.

- The `fetchNewsData` function uses Axios to make a GET request to the `/api/News` endpoint with pagination parameters. It updates the `newsData` state with the response data.

- The `handleScroll` function checks if the user has scrolled to the bottom of the page and loads more data if necessary.

- The component renders the top headlines, a loading spinner when fetching more data, and it uses Next.js' `<Head>` component to set the page title.

## Infinite Scrolling

Infinite scrolling is implemented by listening to the scroll event and detecting when the user is near the bottom of the page. When this happens and data is not currently being loaded (`loading` is `false`), the `pageSize` is increased, and more data is fetched. The loading spinner is displayed during this process.

## Deployment

To deploy this application to a production environment, follow the deployment instructions for Next.js provided in the official documentation: [https://nextjs.org/docs/deployment](https://nextjs.org/docs/deployment).

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository on GitHub.

2. Clone your forked repository to your local machine.

3. Create a new branch for your feature or bug fix.

4. Make your changes and commit them with descriptive commit messages.

5. Push your changes to your forked repository on GitHub.

6. Create a pull request to the original repository.

7. Your pull request will be reviewed, and your changes may be merged into the main project.


