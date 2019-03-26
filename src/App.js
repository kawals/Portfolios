import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <h2>Developers' Portfolios</h2>
      <PersonList/>
    </div>
  );
}
const PersonList = () => {
  const people =[
    {img: 22, name: 'Smith', job: 'Web Developer'},
    {img: 34, name: 'Raj', job: 'Front-end Developer'},
    {img: 56, name: 'Paul', job: 'Backend Developer'}
  ]
  return (
    <section>
      <Person person={people[0]}/>
      <Person person={people[1]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Person>
      <Person person={people[2]}/>
    </section>
  );
}

const Person = (props) => {
  const {img, name, job} = props.person;
  const url = 'https://randomuser.me/api/portraits/thumb/men/'+`${img}`+
  '.jpg';
  return (
    <div className='person'>
      <img src={url} alt={name}/>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {props.children}
    </div>
  );
}

export default App;
