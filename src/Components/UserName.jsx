import React from 'react';

// remove double & single quotes from string
const getName = localStorage.getItem('name');
const withoutQuotes = getName.replace(/['"]+/g, '');
export default class UserName extends React.Component {

    render() {

        return withoutQuotes;
    }
}