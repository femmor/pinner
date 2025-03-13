
import Image from "../Image"
import "./LeftBar.css"

const LeftBar = () => {

  return (
    <div className="left-bar">
      <div className="menu-icons">
        <a href="/" title="logo" className="menu-icon">
          <Image path="/general/logo.png" alt="logo" className="logo"/>
        </a>
        <a href="/" title="home" className="menu-icon">
          <Image path="/general/home.svg" alt="home" />
        </a>
        <a href="/" title="create" className="menu-icon">
          <Image path="/general/create.svg" alt="create" />
        </a>
        <a href="/" title="updates" className="menu-icon">
          <Image path="/general/updates.svg" alt="updates" />
        </a>
        <a href="/" title="messages" className="menu-icon">
          <Image path="/general/messages.svg" alt="messages" />
        </a>
      </div>
      <a href="/" className="menu-icon" title="settings">
        <Image path="/general/settings.svg" alt="settings" />
      </a>
    </div>
  )
}
export default LeftBar