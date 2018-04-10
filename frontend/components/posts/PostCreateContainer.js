import React from 'react';
import { connect } from 'react-redux';
import { createPost, fetchWallPosts } from '../../actions/post';
import PostForm from './PostForm';

const mapStateToProps = (state, { postAuthorId, author, wallId }) => ({
  post: { body: '' },
  postAuthorId,
  author,
  wallId,
  formType: 'Make Post'
});

const mapDispatchToProps = dispatch => ({
  action: post => dispatch(createPost(post)),
  fetchPosts: id => dispatch(fetchWallPosts(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
