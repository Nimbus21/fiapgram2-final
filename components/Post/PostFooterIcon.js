import React from 'react';

import {
    TouchableOpacity
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const PostFooterIcon = (props) => {
    return (
        <TouchableOpacity 
            onPress={ props.onPress }
            style={{marginRight : 8}}>
            <FontAwesomeIcon 
                icon={ props.icon }
                size={ 32 } 
                {...props} />
        </TouchableOpacity>
    );
};

export default PostFooterIcon;