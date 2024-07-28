import Chatlist from "./chatList/chatlist"
import "./list.css"
import Userinfo from "./userinfo/userinfo"
const List = () => {
  return (
    <div className='list'>
        <Userinfo/>
        <Chatlist/>
    </div>
  )
}

export default List