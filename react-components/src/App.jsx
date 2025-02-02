import Button from "./Button"
import Card from "./Card"
import Counter from "./components/Counter"
import Form from "./components/Form"
import List from "./components/List"
import Profile from "./components/Profile"
import UserGreating from "./components/UserGreating"
import Student from "./Student"

function App() {

  // const fruits = [
  //   { id: 1, name: 'Apple', calories: 95 },
  //   { id: 2, name: 'Orange', calories: 45 },
  //   { id: 3, name: 'Banana', calories: 105 },
  //   { id: 4, name: 'Coconut', calories: 159 },
  //   { id: 5, name: 'Pineapple', calories: 37 }
  // ]

  // const vegetables = [
  //   { id: 6, name: 'potatoes', calories: 110 },
  //   { id: 7, name: 'celery', calories: 15 },
  //   { id: 9, name: 'carrots', calories: 25 },
  //   { id: 10, name: 'corn', calories: 63 },
  // ]

  return (
    <div>
      {/* Props */}
      {/* <Student name='Kataleko' age={30} isStudent={true} />
      <Student name='Beliza Kata' age={28} isStudent={true} />
      <Student name='Xibebita' age={1} isStudent={false} />
      <Student name='Floripesa' age={4} isStudent={true} />
      <Student name={'Yela'} /> */}

      {/* Conditional rendering */}
      {/* <UserGreating isLoggedIn={true} username='Kataleko' /> */}

      {/* List */}
      {/* { fruits.length > 0 && <List items={fruits} category="Fruits" /> }
      { vegetables.length > 0 && <List items={vegetables} category="Vegetables" /> } */}

      {/* Click event */}
      {/* <Button />
      <Profile /> */}

      {/* React hooks - UseState() */}
      {/* <Counter /> */}

      {/* onChange */}
      <Form />
    </div>
  )
}

export default App
