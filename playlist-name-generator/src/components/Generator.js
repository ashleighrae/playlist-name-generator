import '../Generator.scss';
import React from 'react';

const Generator = props => {
    return (
        <div className="Generator">
            <div class="form__group field">
                <input type="input" class="form__field" placeholder="Enter Main Keywords" name="keywords" id='keywords' required />
                <label for="keywords" class="form__label">Enter Keywords</label>

                <button class="testbutton" onClick={() => props.setGenerated(true)} />

            </div>
        </div>
    );
}

export default Generator;