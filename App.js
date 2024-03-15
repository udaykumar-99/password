import {Component} from 'react'
import CardF from './CardF/CardF'

import './App.css'

const Det = []

class App extends Component {
  state = {
    UserName: '',
    PassWord: '',
    email: '',
    count: 0,
    Detaile: Det,
    imgState: false,
    Chackout: true,
  }

  onCl = () => {
    this.setState(prevState => ({
      Chackout: !prevState.Chackout,
    }))
  }

  btnOn = () => {
    const {UserName, PassWord, email, count, Detaile} = this.state
    this.setState(prevState => {
      console.log(``)
      return {count: prevState.count + 1}
    })

    Det.push({Us: UserName, Ps: PassWord, Em: email, id: UserName})
    this.setState({UserName: ''})
    this.setState({PassWord: ''})
    this.setState({email: ''})

    this.setState({imgState: true})
  }

  tk = id => {
    const {Detaile} = this.state
    const filteredDetaile = Detaile.filter(item => item.id !== id)
    console.log(filteredDetaile)
    this.setState({Detaile: filteredDetaile})
    this.setState({count: Detaile.length})
  }

  oncheageUesr = event => {
    this.setState({UserName: event.target.value})
  }

  oncheage1 = event => {
    this.setState({email: event.target.value})
  }

  oncheagePassWord = event => {
    this.setState({PassWord: event.target.value})
  }

  render() {
    const {
      email,
      PassWord,
      UserName,
      count,
      Detaile,
      imgState,
      Chackout,
    } = this.state
    console.log(imgState)
    return (
      <div className="main">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="logo"
          alt="img"
        />

        <div className="card1">
          <div className="card1_first">
            <h2 className="heading">Add New Password</h2>
            <div className="input1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="img1"
                className="icon"
              />
              <input
                type="text"
                placeholder="Enter WebSite"
                className="user_input"
                value={email}
                onChange={this.oncheage1}
              />
            </div>
            <div className="input1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="img1"
                className="icon"
              />
              <input
                type="text"
                placeholder="Enter UserName"
                className="user_input"
                value={UserName}
                onChange={this.oncheageUesr}
              />
            </div>
            <div className="input1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="img1"
                className="icon"
              />
              <input
                type="text"
                placeholder="Enter PassWord"
                className="user_input"
                onChange={this.oncheagePassWord}
                value={PassWord}
              />
            </div>
            <div className="card1_button">
              <button type="button" className="button" onClick={this.btnOn}>
                Save
              </button>
            </div>
          </div>
          <div className="card1_second">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="logo_lg"
              className="main_img"
            />
          </div>
        </div>
        <div className="card2">
          <div className="card2_password">
            <h2 className="heading_password">Your PassWords {count}</h2>
            <div className="card2_UserSearch">
              <div className="Search_input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="user_search"
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="User_search1"
                />
              </div>
            </div>
          </div>

          <hr />
          <div className="card_bottom">
            <div className="chackbox_1">
              <input type="checkbox" className="Chackbox" onClick={this.onCl} />
              <h2>Show PassWord</h2>
            </div>
          </div>
          <div className="one">
            {imgState ? (
              <div className="User_card9">
                <div>
                  {Detaile.map(each => (
                    <CardF each={each} tk={this.tk} Chackout={Chackout} />
                  ))}
                </div>
              </div>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="No PassWord"
                className="bottonimg"
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
