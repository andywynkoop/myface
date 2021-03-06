import React from 'react';
import NavMain from './NavMain';
import FeedPostsContainer from './FeedPostsContainer';
import Trending from './Trending';
import FeedSidebarLinks from './FeedSidebarLinks';
import { connect } from 'react-redux';
import { logout } from '../actions/session';

const Feed = ({ currentUser, logout }) => (
	<div>
		<NavMain currentUser={currentUser} />
		<div className="feed-container">
			<FeedSidebarLinks currentUser={currentUser} logout={logout} />
			<div className="feed">
				<FeedPostsContainer />
			</div>
			<Trending />
		</div>
	</div>
);

const msp = state => ({
	currentUser: state.entities.users[state.session.id],
});

const mdp = dispatch => ({
	logout: () => dispatch(logout()),
});

export default connect(
	msp,
	mdp
)(Feed);
