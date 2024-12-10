import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white font-bold text-lg">
          Art Gallery
        </Link>
        <div className="flex space-x-4">
          <Link to="/range" className="text-white hover:underline">
            Range of Objects
          </Link>
          <Link to="/single" className="text-white hover:underline">
            Single Object
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
