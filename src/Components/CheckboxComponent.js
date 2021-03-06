import react from 'react';

export const CheckboxComponent = () => {
  return (

    < div class="mdc-form-field" >
        <div class="mdc-checkbox">
          <input type="checkbox"
           class="mdc-checkbox__native-control"
           id="checkbox-1"/>
            <div class="mdc-checkbox__background">
              <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
                <path class="mdc-checkbox__checkmark-path"
                fill="none"
               d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
              </svg>
         </div>
        <div class="mdc-checkbox__ripple"></div>
      </div>
      <label for="checkbox-1">Get something done
      </label>
      <div class="mdc-checkbox__mixedmark"></div>
    </div >
  )    
}