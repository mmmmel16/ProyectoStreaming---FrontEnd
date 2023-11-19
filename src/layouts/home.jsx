import { useState } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Body from './body';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
      setSearchTerm(term);
    };

    return(
        <>
            <Navbar onSearch={handleSearch} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                      <Sidebar />
                    </div>
                    <div className="col-md-10">
                      <Body searchTerm={searchTerm} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home