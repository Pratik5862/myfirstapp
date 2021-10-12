import images from './images/img2.JPG';
import image from './images/demo123.JPG';
import logo from './images/img1.JPG';
import './App.css';

function App() {
 
    return (
        <div>
            <img className="img1" src={images} alt="image 1" />
            <img className="img1" src={image} alt="image 1" />
            <img className="img1" src={logo} alt="image 1" />
        </div>
    );

}

export default App;