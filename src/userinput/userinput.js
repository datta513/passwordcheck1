import {Component} from 'react'
import {v4} from 'uuid'
import '../form.css'

export default class Input extends Component {
  state = {websitename: '', username: '', password: ''}

  stu1 = event => {
    this.setState(prev => ({
      websitename: event.target.value,
    }))
  }

  webn1 = event => {
    this.setState(prev => ({
      username: event.target.value,
    }))
  }

  pass1 = event => {
    this.setState(prev => ({
      password: event.target.value,
    }))
  }

  render() {
    const {change} = this.props
    const {username, password, websitename} = this.state
    const val = event => {
      event.preventDefault()
      const res = {id: v4(), username, password, websitename}
      if (username !== '' && websitename !== '' && password !== '') {
        change(res)
      }
      this.setState(prev => ({username: '', password: '', websitename: ''}))
    }
    return (
      <div>
        <h1>Add New Password</h1>
        <form onSubmit={val} id="submit">
          <div className="al">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
              height="50"
              className="img1"
            />
            <input
              className="inph"
              type="text"
              id="inpW"
              placeholder="Enter Website"
              value={websitename}
              onChange={this.stu1}
            />
          </div>
          <div className="al">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
              height="50"
              className="img1"
            />
            <input
              className="inph"
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={this.webn1}
            />
          </div>
          <div className="al">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
              height="50"
              className="img1"
            />
            <input
              className="inph"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={this.pass1}
            />
          </div>
          <div>
            <div className="btn1">
              <button type="submit" className="btno">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
