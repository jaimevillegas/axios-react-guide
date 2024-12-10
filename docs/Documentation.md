# Axios React Guide Documentation

## Overview
This project is a React application that integrates Axios to fetch data from The Metropolitan Museum of Art Collection API. It demonstrates how to use Axios for making HTTP requests in a React environment and provides a structured approach to organizing API calls.

## Project Structure
- **`src/`**: Contains the source code of the application.
  - **`components/`**: Reusable React components.
  - **`pages/`**: Page components for different routes.
  - **`services/`**: Contains service files that handle API requests.
  - **`App.jsx`**: Main application component.
  - **`main.jsx`**: Entry point of the React application.

## Axios Implementation
Axios is used in this project to handle HTTP requests. The following steps outline how Axios is implemented:

### Step 1: Install Axios
Ensure Axios is installed in your project. It is listed as a dependency in the `package.json` file:

```json
"dependencies": {
  "axios": "^1.7.9",
  ...
}
```

### Step 2: Create a Service File
The `artService.js` file in the `services` directory is where Axios is primarily used to interact with the API.

#### Example Code:
```javascript
import axios from 'axios';

const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1';

export const artService = {
  async getArtworkByNumber(number) {
    try {
      const response = await axios.get(`${BASE_URL}/objects/${number}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(`Error fetching artwork with number ${number}:`, error);
      return null;
    }
  },

  async fetchMultipleArtworks(numberOfObjects) {
    const artworks = [];
    const min = 100;
    const max = 10000;
    const randomNumbers = new Set();

    while (randomNumbers.size < numberOfObjects) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      randomNumbers.add(randomNum);
    }

    for (const num of randomNumbers) {
      const artwork = await this.getArtworkByNumber(num);
      if (artwork) {
        artworks.push(artwork);
      }
    }
    return artworks;
  }
};
```

### Step 3: Using the Service in Components
To use the `artService` in your components, import it and call the necessary functions. For instance, you can fetch artworks when a component mounts.

#### Example:
```javascript
import React, { useEffect, useState } from 'react';
import { artService } from './services/artService';

const ArtGallery = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      const data = await artService.fetchMultipleArtworks(5);
      setArtworks(data);
    };
    fetchArtworks();
  }, []);

  return (
    <div>
      {artworks.map(art => (
        <div key={art.objectID}>
          <h2>{art.title}</h2>
          <img src={art.primaryImage} alt={art.title} />
        </div>
      ))}
    </div>
  );
};

export default ArtGallery;
```

## Running the Project
To run the project locally, use the following commands:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Conclusion
This documentation provides a detailed guide on how to implement Axios in a React project. By following the steps outlined, developers can effectively integrate and use Axios to manage API requests and handle data within their React applications.
