import React, { useState } from 'react';
import './ImageGallery.css'; // Import the new CSS file

function ImageGallery({ images, currentIndex, setCurrentIndex, goToPreviousImage, goToNextImage }) {

    const [excludeChecked, setExcludeChecked] = useState(false);

    return (
        <>
        { currentIndex >= 0 && (
            <>
                <div className="image-gallery">
                    <div className="image-container">
                        <img src={images[currentIndex].src} alt={`Image ${currentIndex}`} className="image" />
                    </div>
                    <div className="arrow-buttons">
                        <label>
                            <input
                                type="checkbox"
                                checked={excludeChecked}
                                onChange={() => setExcludeChecked(!excludeChecked)}
                            />
                            Exclude
                        </label>
                        <button onClick={goToPreviousImage}>&#8592;</button>
                        <button onClick={goToNextImage}>&#8594;</button>
                        <div>
                        </div>
                    </div>
                </div>
            </>
        )}
        </>
    );
}

export default ImageGallery;