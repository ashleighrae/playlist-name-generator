import '../scss/Generator.scss';
import React, { useState } from 'react';

const Generator = props => {
    const [values, setValue] = useState("");

    const handleClick = () => {
        var regExp = /[a-zA-Z]/g;

        props.setKeywords(values);
        if (values !== "" && regExp.test(values)) {
            setValue(values + " ")
            props.setGenerated(true);
        }
    }

    return (
        <div className="Generator">
            <div class="input">
                <input type="input" onChange={event => setValue(event.target.value)} value={values} class="inputfield" placeholder="Jazzy, Chill, Lo-Fi" name="keywords" id='keywords' required />
                <label for="keywords" class="inputlabel">Enter Keywords</label>

                <button class="generatebutton" onClick={handleClick} />

            </div>
        </div>
    );
}

export default Generator;