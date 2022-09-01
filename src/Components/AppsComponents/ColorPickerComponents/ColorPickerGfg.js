import React from 'react';

import { ColorPicker, useColor } from "@nivoda/react-color-palette";
//Default Css
import "@nivoda/react-color-palette/lib/css/styles.css";

//CSS
import styles from './ColorPicker.module.css'

//Image
import pen from '../../../images/pen.png'

const ColorPickerGfg = () => {
    const [color, setColor] = useColor("hex", "#121212");
  
    return (
      <div className={`section ${styles.colorpicker}`}>
          <h1>Color Picker</h1>
          <ColorPicker  
            height={228} 
            width={456}
            color={color} 
            onChange={setColor} 
            dark
          />
      </div>
    )
};

export default ColorPickerGfg;