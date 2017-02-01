import React from 'react';
import NavBar from './NavBar';
import FilmList from './FilmList';
import UserList from './UserList';

var UserProfile = ({user, handleFilmClick, handleUserClick}) => (
		<div className="user-profile">

			<h1>{user.firstName} {user.lastName}</h1>

			{/*This is the user's film list*/}
			<h3>List of {user.firstName}'s ranked films</h3>
			<FilmList
				allFilms={user.ratings}
				handleFilmClick={handleFilmClick}
			/>

			{/*This is the user's friend list*/}
			<h3>List of {user.firstName}'s friends</h3>
			<UserList
				allFriends={user.friends}
				handleUserClick={handleUserClick}
			/>
		</div>
	)

export default UserProfile