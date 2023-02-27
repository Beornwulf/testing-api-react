import React, {useEffect, useState} from 'react';

const StarWars = () => {
    const [person, setPerson]: [{}, ((value: (((prevState: {}) => {}) | {})) => void)] = useState({});

    useEffect(() => {
        const fetchPerson = async () => {
            const response = await fetch("https://swapi.dev/api/people/1");
            const data = await response.json();
            setPerson(data);
        };
        fetchPerson();
    }, []);
    return <pre>{JSON.stringify(person, null, 2)}</pre>;
};

function App() {
    return (
        <div className="App">
            <StarWars/>
        </div>
    );
}

export default App;
