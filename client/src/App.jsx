import './app.css'

import { LeftBar, TopBar, Gallery } from './components'
const App = () => {
  return (
    <div className='app'>
      <LeftBar />
      <div className="content">
        <TopBar />
        <Gallery />
      </div>
    </div>
  )
}

export default App