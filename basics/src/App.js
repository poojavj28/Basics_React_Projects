import Home from './Home';
import About from './About.jsx';
import Contact from './Contact';
import Greeting from './Greeting';

function App() {
  return (
    <div><h1>Hello from ReactJS</h1>
    <Home name = {'Pooja'} age = {24} />
    <About />
    <Contact />
    <Greeting name = {'Akash'}/>
    <Greeting name = {'Ayush'}/>
    <Greeting name = {'Priya'}/>
    </div>
    
  );
}
export default App;
