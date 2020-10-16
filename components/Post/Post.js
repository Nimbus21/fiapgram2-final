import React from 'react';

import { 
    Image,
    StyleSheet,
    View
} from 'react-native';

import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

const Post = (props) => {

    const {post} = props;

    return (
        <View style={ styles.container }>
            <PostHeader post={post} />
            
            <Image 
                style={{ height : 300 }}
                source={{ uri : post.imagem }} />

            <PostFooter post={post} />
        </View>
    );
};

export default Post;

const styles = StyleSheet.create({
    container : {
        marginBottom : 16
    }
});