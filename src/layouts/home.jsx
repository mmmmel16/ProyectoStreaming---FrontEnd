import { useState } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Body from './body';
import Footer from './footer';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <div className="container-fluid">
        <div className='row'>
          <Navbar onSearch={handleSearch} />
        </div>
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Body searchTerm={searchTerm} />
          </div>
        </div>
      </div>
      <div className='row'>
        <Footer />
      </div>
    </>
  )
}
export default Home