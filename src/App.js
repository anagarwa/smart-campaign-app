import React, { useState } from 'react';
import './App.css';
import image0 from './images/first.png'
import image1 from './images/third.png';
import image2 from './images/second.png';
import image3 from './images/redoutput3.png';
import image4 from './images/blueoutput.png';
import image5 from './images/blueoutput2.png';
import image6 from './images/blueoutput3.png';

import FormComponent from './FormComponent';
import ImageGallery from './ImageGallery'; // Create this component


function App() {
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [images, setImages] = useState([]);

    const goToPreviousImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const updateTagline = (index, newTagline) => {
        const updatedImages = [...images];
        updatedImages[index].tagline = newTagline;
        if (newTagline ===  'Engineered for Stability') {
            updatedImages[index].src = image1;
        }
        setImages(updatedImages);
    };

    const updateTextTheme = (newTheme) => {
        console.log(newTheme);
        const updatedImages = [...images];
        if (newTheme === 'blue light') {
            updatedImages[0].theme = newTheme;
            updatedImages[1].theme = newTheme;
            updatedImages[2].theme = newTheme;
            updatedImages[0].src = image4;
            updatedImages[1].src = image5;
            updatedImages[2].src = image6;
            setImages(updatedImages);

        } else {
            updatedImages[0].theme = newTheme;
            updatedImages[1].theme = newTheme;
            updatedImages[2].theme = newTheme;
            setImages(updatedImages);
        }
    };

    const showImages = () => {
        const  updatesImages = [
            { src: image0, tagline: 'Engineered for Comfort', theme: 'red solid' },
            { src: image1, tagline: 'X CRAZYFAST.1 FG', theme: 'red solid' },
            { src: image2, tagline: 'Layered Mesh Support', theme: 'red solid' },
        ];
        setImages(updatesImages);
        setCurrentIndex(0);
    }

    return (
        <div className="App">
            <div className="half">
                <FormComponent
                    images={images}
                    currentIndex={currentIndex}
                    updateTagline={updateTagline}
                    updateTextTheme={updateTextTheme}
                    showImages={showImages}
                />
            </div>
            <div className="half">
                <ImageGallery images={images}
                              currentIndex={currentIndex}
                              setCurrentIndex={setCurrentIndex}
                              goToPreviousImage={goToPreviousImage}
                              goToNextImage={goToNextImage}
                />
            </div>
        </div>
    );
}

export default App;
