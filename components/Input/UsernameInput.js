import React from 'react';

import { Input } from 'react-native-elements';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser as fasUser } from '@fortawesome/free-solid-svg-icons';

const UsernameInput = (props) => {
  return (
    <Input 
      leftIcon={
        <FontAwesomeIcon 
        icon={fasUser}
        size={24} />
      }
      placeholder='Digite seu usuário:'
      {...props} />
  );
};

export default UsernameInput;