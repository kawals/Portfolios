import React from 'react'

const Person = (props) => {
  const {name, job, age, img} = props.person
  const url = 'https://randomuser.me/api/portraits/thumb/men/'+`${img}`+'.jpg'
  return (
    <section>
      <img src={url} alt={name} />
      <h1>Name: {name}</h1>
      <p>Job: {job}</p>
      <p>Age: {age}</p>
    </section>
  )
}
const PersonList = () => {
    const people = [
      {name:'John', job: 'Web Developer', age: '34', img: 22},
      {name:'Paul', job: 'Programmer', age: '30', img: 11},
      {name:'Soni', job: 'Designer', age: '24', img: 30}
    ]
    return (
      people.map(person=>{
        return <Person person={person}/>
      })
    )
}

const App = () => <PersonList/>

export default App
