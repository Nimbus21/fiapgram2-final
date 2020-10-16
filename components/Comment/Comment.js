import React, {
    useCallback,
    useContext
} from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faTrashAlt as fasTrashAlt } from '@fortawesome/free-solid-svg-icons';

import PostContext from '../../contexts/PostContext';
import UserContext from '../../contexts/UserContext';

const Comment = (props) => {

    const { username } = useContext(UserContext);

    const { ACTIONS, dispatch } = useContext(PostContext);

    const { comment, postid } = props;

    const handleRemoveComment = useCallback((post_id, comment_id) => {
        let payload = {
            postID : post_id,
            commentID : comment_id
        }
        dispatch({ type : ACTIONS.DELETE_POST_COMMENT, payload })
    }, []);

    return (
        <View style={ styles.container }>
            <Text 
                ellipsizeMode="head"
                numberOfLines={2}
                style={ styles.comment }>
                
                <Text style={ styles.username }>
                    { comment.username }: 
                </Text> { }
                { comment.comentario }
            </Text>

            { comment.username === username &&
                <TouchableOpacity
                    onPress={ () => handleRemoveComment( postid, comment.id ) }>
                    <FontAwesomeIcon 
                        icon={ fasTrashAlt }
                        size={ 20 }/>
                </TouchableOpacity>
            }
        </View>
    );
}

export default Comment;

const styles = StyleSheet.create({
    comment : {
        flexGrow : 1,
        flexWrap : 'wrap',
        marginRight : 8,
        marginTop : 8,
        maxWidth : 360
    },
    container : {
        alignItems : 'center',
        flexDirection : 'row'
    },
    username : {
        fontWeight : 'bold',
        marginRight : 8
    }
});