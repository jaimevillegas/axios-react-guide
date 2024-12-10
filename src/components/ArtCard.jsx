import PropTypes from 'prop-types';

const ArtCard = ({ artwork, isSingle }) => {
  if (!artwork) return null;

  const {
    primaryImage,
    title,
    artistDisplayName,
    objectDate,
    department
  } = artwork;

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${isSingle ? 'h-auto' : 'h-72'}`}>
      <div className={`${isSingle ? 'h-80' : 'h-48'} overflow-hidden`}>
        {primaryImage ? (
          <img
            src={primaryImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No Image Available</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 truncate">{title}</h3>
        {artistDisplayName && (
          <p className="text-gray-600 text-sm mb-1">{artistDisplayName}</p>
        )}
        <div className="flex justify-between text-sm text-gray-500">
          <span>{objectDate}</span>
          <span>{department}</span>
        </div>
      </div>
    </div>
  );
};

ArtCard.propTypes = {
  artwork: PropTypes.shape({
    primaryImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    artistDisplayName: PropTypes.string,
    objectDate: PropTypes.string,
    department: PropTypes.string
  }),
  isSingle: PropTypes.bool
};

ArtCard.defaultProps = {
  isSingle: false,
  artwork: {
    title: 'Untitled',
    artistDisplayName: 'Unknown Artist',
    objectDate: 'Unknown Date',
    department: 'Unknown Department'
  }
};

export default ArtCard;
