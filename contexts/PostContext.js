import React, 
{
    createContext,
    useEffect,
    useReducer
} from 'react';

import { getPosts } from '../services/PostService';

const PostContext = createContext();

const ACTIONS = {
    RELOAD_DATA : "RELOAD_DATA",
    INSERT_POST_COMMENT : "INSERT_POST_COMMENT",
    DELETE_POST_COMMENT : "DELETE_POST_COMMENT",
    LIKE_POST : "LIKE_POST"
}

const reducer = (state, action) => {
    switch ( action.type ) {
        case ACTIONS.RELOAD_DATA : 
            return action.payload;
        case ACTIONS.INSERT_POST_COMMENT : {
            let post = state.find((post) => post.id == action.payload.postID);            
            post.comentarios.push({
                id : post.comentarios.length + 1,
                username : action.payload.username,
                comentario : action.payload.comment
            })
            return state;
        }
        case ACTIONS.DELETE_POST_COMMENT : {
            let post = state.find((post) => post.id == action.payload.postID);
            post.comentarios = post.comentarios.filter((comentario) => {
                return comentario.id != action.payload.commentID
            });
            return [...state];
        }
        case ACTIONS.LIKE_POST : {
            let username = action.payload.username;
            let post = state.find((post) => post.id == action.payload.postID);            
            let jaHaviaCurtido = post.curtidas.indexOf( username ) > -1;
            
            if ( jaHaviaCurtido ) {
                post.curtidas = post.curtidas.filter((curtida) => curtida != username);
            } else {
                post.curtidas.push(username);
            }

            return [...state];
        }
        default : 
            return state;
    }
}

const PostProvider = (props) => {

    let [posts, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        getPosts().then((response) => {
            dispatch({ type : ACTIONS.RELOAD_DATA, payload : response.data });
        });        
        console.log('Requisição realizada!');
    }, []);

    return (
        <PostContext.Provider value={{ posts, dispatch, ACTIONS }}>
            {props.children}
        </PostContext.Provider>
    );
}

export { PostProvider, ACTIONS };

export default PostContext;