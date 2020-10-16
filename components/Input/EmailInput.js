import React from 'react';

import { Input } from 'react-native-elements';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope as fasEnvelope  } from '@fortawesome/free-solid-svg-icons';


const EmailInput = (props) => {
  return (
    <Input 
      leftIcon={
        <FontAwesomeIcon 
            icon={fasEnvelope}
            size={24} />
      }
      placeholder='Digite seu e-mail:'
      {...props} />
  );
};

export default EmailInput;