import React, {
    useContext,
    useState
} from 'react';

import {
    StyleSheet,
    View,
} from 'react-native';

import { 
    faComment as farComment,
    faHeart as farHeart 
} from '@fortawesome/free-regular-svg-icons';

import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

import PostComments from './PostComments';
import PostFooterIcon from './PostFooterIcon';

import PostContext from '../../contexts/PostContext';
import UserContext from '../../contexts/UserContext';

const PostFooter = (props) => {

    const { ACTIONS, dispatch } = useContext(PostContext);
    const { username } = useContext(UserContext);

    let [exibirPostarComentario, setExibirPostarComentario] = useState(false);

    const {post} = props;

    const jaCurtiu = post.curtidas.indexOf(username) > -1;

    const handleCurtir = () => {
        dispatch({ type : ACTIONS.LIKE_POST, payload : {  
            postID : post.id,
            username
        } });
    }

    return (
        <View style={ styles.container }>
            <View style={ styles.containerIcons }>
                <PostFooterIcon 
                    color={ jaCurtiu ? '#F00' : '#000' }
                    icon={ jaCurtiu ? fasHeart : farHeart }
                    onPress={ () => handleCurtir() } />

                <PostFooterIcon 
                    icon={ farComment } 
                    onPress={ () => setExibirPostarComentario( ! exibirPostarComentario ) }
                />
            </View>
            <PostComments 
                post={ post } 
                showInputs={ exibirPostarComentario } />
        </View>
    );
};

export default PostFooter;

const styles = StyleSheet.create({
    container : {
        padding : 8
    },
    containerIcons : {
        flexDirection : 'row'
    }
});