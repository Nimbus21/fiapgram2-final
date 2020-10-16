import React,
{
    useContext
} from 'react';

import { 
    FlatList
} from 'react-native';

import PostContext from '../../contexts/PostContext';

import Post from '../../components/Post/Post';

const PostList = (props) => {
    const { posts } = useContext(PostContext);

    return (
        <FlatList 
            data={posts}
            renderItem={({item}) => <Post post={item}/>}
            keyExtractor={(item) => item.id.toString()}/>
    );
}

export default PostList;