import { useState } from 'react';
import ArtCard from '../components/ArtCard';
import { artService } from '../services/artService';

const RangePage = () => {
  const [numberOfObjects, setNumberOfObjects] = useState(5);
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchArtworks = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await artService.fetchMultipleArtworks(numberOfObjects);
      setArtworks(data);
    } catch (err) {
      setError('Failed to fetch artworks. Please try again later.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Range of Objects</h1>
      <div className="flex justify-center mb-6">
        <input
          type="number"
          value={numberOfObjects}
          onChange={(e) => setNumberOfObjects(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mr-4"
          min="1"
        />
        <button
          onClick={fetchArtworks}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Fetch
        </button>
      </div>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork) => (
            <ArtCard key={artwork.objectID} artwork={artwork} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RangePage;
