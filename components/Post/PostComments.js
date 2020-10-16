import React,
{
    useCallback,
    useContext,
    useState
} from 'react';

import {
    FlatList,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faPaperPlane as fasPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { Input } from 'react-native-elements';

import Comment from '../Comment/Comment';

import PostContext from '../../contexts/PostContext';
import UserContext from '../../contexts/UserContext';

const PostComments = (props) => {

    let [ comentario, setComentario ] = useState('');

    const { ACTIONS, dispatch } = useContext(PostContext);
    const { username } = useContext(UserContext);
    const {post, showInputs} = props;
    const {comentarios} = post;    

    const sendComment = useCallback((postID, comment) => {
        let payload = {
            postID,
            comment,
            username
        };
        dispatch({ type : ACTIONS.INSERT_POST_COMMENT, payload });
        setComentario('');
    }, []);

    return (
        <>
            { showInputs && 
                <View style={ styles.containerComment }>
                    <Input 
                        onChangeText={ (txt) => setComentario(txt) }
                        inputContainerStyle={{ borderColor : '#ccc' }} 
                        containerStyle={{ flex : 1}}
                        value={ comentario } />

                    <TouchableOpacity
                        onPress={ () => sendComment(post.id, comentario) }>
                        <FontAwesomeIcon 
                            icon={ fasPaperPlane } 
                            size={ 24 }/>
                    </TouchableOpacity>
                </View>
            }
            <FlatList 
                data={ comentarios }
                renderItem={ ({item}) => <Comment postid={post.id} comment={ item } /> }
                keyExtractor={ (item) => item.id.toString() } />
        </>
    );
};

export default PostComments;

const styles = StyleSheet.create({
    containerComment : { 
        alignItems : 'center',
        flexDirection : 'row'
    }
});