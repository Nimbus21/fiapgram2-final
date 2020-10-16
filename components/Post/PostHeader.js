import React from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {Avatar} from 'react-native-elements';

const PostHeader = (props) => {
    const {post} = props;

    const avatar = (post.perfil.trim().length > 0)
                        ? <Avatar rounded size={32} source={{ uri : post.perfil }} />
                        : <Avatar containerStyle={{backgroundColor : '#CCC'}} 
                                  rounded 
                                  title={post.username.substring(0, 2)} />

    return (
        <View style={ styles.container }>
            {avatar}
            <Text style={ styles.username }>
                {post.username}
            </Text>
        </View>
    );
};

export default PostHeader;

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        flexDirection : 'row',
        padding : 8
    },
    username : {
        fontSize : 16,
        fontWeight : 'bold',
        marginLeft : 8
    }
});