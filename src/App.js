import React from 'react';
// eslint-disable-next-line no-unused-vars
import Accordion from './components/Accordion'
import Search from "./components/Search";

// eslint-disable-next-line no-unused-vars
const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end javascript library'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers and developers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
];

const App = () => {
  return (
    <div>
      <Search />
    </div>
  )
}


export default App