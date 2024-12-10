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
