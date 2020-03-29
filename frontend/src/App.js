import React, { useState } from 'react';

import Header from './Header';

function App() {
    const [counter, setCounter] = useState(0);

    function incrementar() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <Header>
                Contador: {counter}
            </Header>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    );
}

export default App;