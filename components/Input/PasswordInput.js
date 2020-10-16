import React from 'react';

import { Input } from 'react-native-elements';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLock as fasLock } from '@fortawesome/free-solid-svg-icons';

const PasswordInput = (props) => {

  const placeholder = (props.confirm) 
                        ? 'Confirme sua senha:' 
                        : 'Digite sua senha:';

  return (
    <Input 
        leftIcon={
          <FontAwesomeIcon 
            icon={fasLock}
            size={24} />
        }
        placeholder={placeholder}
        secureTextEntry={true}
        {...props} />
  );
};

export default PasswordInput;