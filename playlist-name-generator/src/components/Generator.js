import '../Generator.scss';
import React, { useState } from 'react';

const Generator = props => {
    const [values, setValue] = useState("");

    const handleClick = () => {
        props.setKeywords(values);
        
        if (values != "") {
            props.setGenerated(true);
        }
    }

    return (
        <div className="Generator">
            <div class="form__group field">
                <input type="input" onChange={event => setValue(event.target.value)} value={values} class="form__field" placeholder="Enter Main Keywords" name="keywords" id='keywords' required />
                <label for="keywords" class="form__label">Enter Keywords</label>

                <button class="testbutton" onClick={handleClick} />

            </div>
        </div>
    );
}

export default Generator;