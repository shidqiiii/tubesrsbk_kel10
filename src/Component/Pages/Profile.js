import React, { useState } from 'react';
import Show from './Show';
import { Button } from "react-bootstrap";

const App = () => {

    const [showTab, setShowTab] = useState(false);

    // handle click event of the toggle button
    const handleToggle = () => {
        setShowTab(preState => !preState);
    }

    return (
        <div className="App">
            <div className="mt-2">
                <Button variant="dark" type="button" value={`${showTab ? 'Hide' : 'Show'} Tab`} onClick={handleToggle}>Show</Button>
                {Show(showTab)}
            </div>
        </div>
    );
}

export default App;