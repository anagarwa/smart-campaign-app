import React, { useState } from 'react';

function FormComponent({ images,  currentIndex, updateTagline, updateTextTheme, showImages }) {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('https://www.adidas.co.in/x-crazyfast.1-fg/HQ4516.html');
    const [input3, setInput3] = useState('');
   // const [input3, setInput3] = useState(tagline);
  //  const [input4, setInput4] = useState('');
  //  const [input5, setInput5] = useState('');
    //let updatedTagline = tagline;
    const [showForm2, setShowForm2] = useState(false);
    const tagline = currentIndex != -1  ? images[currentIndex].tagline : '';
    const theme = currentIndex != -1  ? images[currentIndex].theme : '';

    const handleSubmitForm1 = (event) => {
        event.preventDefault();
        console.log('Form 1 submitted:', input1, input2);
        setTimeout(() => {
            showImages();
            setShowForm2(true);
        }, 10000);
    };

    const handleSubmitForm2 = (event) => {
        event.preventDefault();
        // Process the form 2 data here
  //      console.log('Form 2 submitted:', input3);
        const url = 'https://stage-daily.projectx.corp.adobe.com/id/urn:aaid:sc:VA6C2:f223af62-05a2-388e-bb60-1efd8295de5b'; // Replace with your desired URL
        window.open(url, '_blank');
    };

    const handleTaglineChange = (event) => {
        updateTagline(currentIndex, event.target.value);
    };

    const handleThemeChanges  = (event) => {
        updateTextTheme(event.target.value);
    };

    return (
        <div className="secondHalf">
            <form className="form form1" onSubmit={handleSubmitForm1}>
                <label>Type:</label>
                <select value={input1} onChange={(e) => setInput1(e.target.value)}>
                    <option value="sites">Sites</option>
                    <option value="assets">Assets</option>
                </select>
                <label>Source Url:</label>
                <input
                    type="text"
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                />

                <label>Intent for Campaign:</label>
                <textarea
                    type="text"
                    value={input3}
                    onChange={(e) => setInput3(e.target.value)}
                />
                <button type="submit">Generate</button>

            </form>
            {showForm2 && ( // Conditionally render Form 2
                <>
            <div className="gap" />
            <form className="form form2" onSubmit={handleSubmitForm2}>
                {/*<label>Tagline:</label>*/}
                {/*<input*/}
                {/*    type="text"*/}
                {/*    value= {tagline}*/}
                {/*    onChange={handleTaglineChange}*/}
                {/*/>*/}
                {/*<label>Text Decoration Prompt:</label>*/}
                {/*<input*/}
                {/*    type="text"*/}
                {/*    value={theme}*/}
                {/*    onChange={handleThemeChanges}*/}
                {/*/>*/}
                <div className="buttonSection">
                    <div><button type="submit" className="previewButton">Open in Express - Screens</button></div>

                {/*<div><button type="button" className="publishButton">Publish</button></div>*/}
                </div>
            </form>
                </>
            )}
        </div>
    );
}

export default FormComponent;