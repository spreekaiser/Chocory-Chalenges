import './Variables.css';
import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Session from './Components/Session/Session';

function App() {
    return (
        <main className='app'>
            <Header />
            <Session />
            <Footer />
        </main>
    );
}

export default App;
