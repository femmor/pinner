
import "./LeftBar.css"

const LeftBar = () => {

  return (
    <div className="left-bar">
      <div className="menu-icons">
        <a href="/" title="logo" className="menu-icon">
          <img src="/general/logo.png" alt="logo" className="logo"/>
        </a>
        <a href="/" title="home" className="menu-icon">
          <img src="/general/home.svg" alt="home" />
        </a>
        <a href="/" title="create" className="menu-icon">
          <img src="/general/create.svg" alt="create" />
        </a>
        <a href="/" title="updates" className="menu-icon">
          <img src="/general/updates.svg" alt="updates" />
        </a>
        <a href="/" title="messages" className="menu-icon">
          <img src="/general/messages.svg" alt="messages" />
        </a>
      </div>
      <a href="/" className="menu-icon" title="settings">
        <img src="/general/settings.svg" alt="settings" />
      </a>
    </div>
  )
}
export default LeftBar