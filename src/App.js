import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import PlaintextExample from './login';
import MessageInBottle from './MessageInBottle';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PlaintextExample />} />
                <Route path="/message-in-bottle" element={<MessageInBottle />} />
            </Routes>
        </Router>
    );
}

export default App;
