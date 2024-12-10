import { useState } from 'react';
import ArtCard from '../components/ArtCard';
import { artService } from '../services/artService';

const SinglePage = () => {
  const [objectNumber, setObjectNumber] = useState('');
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchArtwork = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await artService.getArtworkByNumber(objectNumber);
      setArtwork(data);
    } catch (err) {
      setError('Failed to fetch artwork. Please try again later.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Single Object</h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={objectNumber}
          onChange={(e) => setObjectNumber(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mr-4"
        />
        <button
          onClick={fetchArtwork}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Fetch
        </button>
      </div>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        artwork && <ArtCard artwork={artwork} isSingle={true} />
      )}
    </div>
  );
};

export default SinglePage;
