import React from 'react';
import { SafeAreaView } from 'react-native';

import {PostProvider} from '../contexts/PostContext';

import PostList from '../components/List/PostList';

const Main = (props) => {
  return (
    <PostProvider>
      <SafeAreaView>
        <PostList />
      </SafeAreaView>
    </PostProvider>
  );
}

export default Main;