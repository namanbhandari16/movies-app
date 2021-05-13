import {useState} from "react"
import {Link,useHistory} from "react-router-dom"

function Nav(){
    const [searchTerm, setSearchTerm] = useState("");
    let history=useHistory()
    const handleOnChange = (event) => {
        setSearchTerm(event.target.value);
      };
      const handleOnSubmit = () => {
        history.push(`/search/${searchTerm}`)
      }
    return(<header>
      <ul>
        <li><Link to="/" style={{textDecoration:'none',marginLeft:'24px',paddingTop:'24px',color:'white',width:'500px',fontSize:'1.8rem'}}>Moviezz</Link></li>
        <li><Link to="/bookmarks" style={{textDecoration:'none',marginLeft:'24px',paddingTop:'24px',color:'white',width:'500px',fontSize:'1.2rem'}}>Bookmarks</Link></li>
       <li style={{float:'right'}}><form onSubmit={handleOnSubmit}>
          <input
            type="search"
            className="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
        </li>
        </ul>
      </header>)
}

export default Nav;