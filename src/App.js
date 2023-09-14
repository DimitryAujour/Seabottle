import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PlaintextExample from './login';
import MessageInBottle from './MessageInBottle';
import ReadBottle from './ReadBottle';
import './App.css';

function AnimationWrapper() {
    let location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Routes location={location}>
                    <Route path="/" element={<PlaintextExample />} />
                    <Route path="/message-in-bottle" element={<MessageInBottle />} />
                    <Route path="/read-bottle" element={<ReadBottle />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}

function App() {
    return (
        <Router>
            <AnimationWrapper />
        </Router>
    );
}

export default App;
