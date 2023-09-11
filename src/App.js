import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import PlaintextExample from './login';
import MessageInBottle from './MessageInBottle';
import ReadBottle from './ReadBottle'


function App() {
    return (

        <Router>
            <Routes>

                <Route path="/" element={<PlaintextExample />} />
                <Route path="/message-in-bottle" element={<MessageInBottle />} />
                <Route path="/read-bottle" element={<ReadBottle />} />

            </Routes>
        </Router>
    );
}

export default App;
