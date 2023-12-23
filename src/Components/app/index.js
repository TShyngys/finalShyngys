import React, { useState, useEffect } from 'react';

import Dashboard from '../dashboard/index';
import Login from '../Login/index';
import '../data/data.css'

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
    }, []);

    return (
        <>


            {isAuthenticated ? (
                <Dashboard setIsAuthenticated={setIsAuthenticated} />
            ) : (
                <Login setIsAuthenticated={setIsAuthenticated} />
            )}
        </>
    );
};

export default App;
