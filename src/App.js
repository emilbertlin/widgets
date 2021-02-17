// eslint-disable-next-line no-unused-vars
import Accordion from './components/Accordion'
// eslint-disable-next-line no-unused-vars
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from './components/Translate'

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

const options = 
[
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  }
]

const App = () => {
  return (
    <div>
      <Translate />
    </div>
  )
}


export default App