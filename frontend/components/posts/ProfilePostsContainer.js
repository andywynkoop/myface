import React from 'react';
import { connect } from 'react-redux';
import PostsList from './PostsList';
import { fetchWallPosts } from '../../actions/post';

const ProfilePosts = ({ user, currentUser }) => (
  <PostsList user={user} currentUser={currentUser} />
);

const mapStateToProps = ({ entities: { posts } }, ownProps) => ({
  posts: posts[ownProps.user.id]
});

const mapDispatchToProps = dispatch => ({
  fetchAction: id => dispatch(fetchWallPosts(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
