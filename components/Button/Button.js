import React from 'react';
import { Button as RNEButton } from 'react-native-elements';

import Colors from '../../colors';

const Button = (props) => {
  const {magenta, white} = Colors;

  return (
    <RNEButton 
        buttonStyle={{backgroundColor : magenta}}
        titleStyle={{color : white}}
        type='clear' 
        {...props} />
  );
}

export default Button;