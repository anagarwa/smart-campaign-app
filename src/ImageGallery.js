import React, { useState } from 'react';
import './ImageGallery.css'; // Import the new CSS file
import placeholderImage from './images/placeholder.png';

function ImageGallery({ images, currentIndex, setCurrentIndex, goToPreviousImage, goToNextImage }) {

    const [excludeChecked, setExcludeChecked] = useState(false);
    //const [generated, setGenerated] = useState(false);
    const generated =  currentIndex >=0 ;
    console.log("current index is " + currentIndex);
    return (
        <>
        { currentIndex >= -1 && (
            <>
                <div className="image-gallery">
                    <div className="image-container">
                        <img src={generated ? images[currentIndex]?.src : placeholderImage} alt={`Image ${currentIndex}`} className="image" />
                    </div>
                    {!generated && (
                        <div className="arrow-buttons-placeholder">
                        </div>)}
                    {generated && (
                    <div className="arrow-buttons">

                        <label>
                            <input
                                type="checkbox"
                                checked={excludeChecked}
                                onChange={() => setExcludeChecked(!excludeChecked)}
                            />
                            Exclude
                        </label>
                        <button  onClick={goToPreviousImage}>&#8592;</button>
                        <button  onClick={goToNextImage}>&#8594;</button>

                    </div>)}
                </div>
            </>
        )}
        </>
    );
}

export default ImageGallery;