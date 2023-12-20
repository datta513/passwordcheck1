import {Component} from 'react'
import Input from './userinput/userinput'
import Item from './listitem'
import './form.css'

export default class Form1 extends Component {
  state = {pres: [], fil: [], searchinp: '', check: false}

  renderheader = () => {
    const {pres, fil, searchinp} = this.state
    return (
      <div className="header">
        <div className="passlengthsty">
          <h1>Your Passwords</h1>
          <p>{fil.length}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
          />
          <input type="search" value={searchinp} onChange={this.searchchange} />
          {searchinp.length > 0 ? (
            <button onClick={this.clearsearch}>X</button>
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }

  renderelement = () => {
    const {fil} = this.state
    return (
      <div>
        <div className="io">
          <label htmlFor="trip">Show passwords</label>
          <input type="checkbox" onChange={this.stye} id="trip" />
        </div>
        {fil.length > 0 ? (
          this.renderlistitem()
        ) : (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
            />
            <p>No Passwords</p>
          </div>
        )}
      </div>
    )
  }

  stye = () => {
    const {check} = this.state
    this.setState(prev => ({check: !prev.check}))
  }

  renderlistitem = () => {
    const {check, fil, pres} = this.state
    const data = fil.len
    return (
      <ul className="liststy">
        {fil.map(each => (
          <Item data={each} key={each.id} chec={check} change={this.dele} />
        ))}
      </ul>
    )
  }

  dele = d => {
    const {fil} = this.state
    const data = fil.filter(each => each.id !== d)
    this.setState(() => ({fil: data}))
  }

  clearsearch = () => {
    this.setState(
      () => ({
        searchinp: '',
      }),
      this.changedone,
    )
  }

  searchchange = event => {
    this.setState(() => ({searchinp: event.target.value}), this.changedone)
  }

  changedone = () => {
    const {searchinp, pres} = this.state
    const k = searchinp.toLocaleLowerCase()
    console.log(k)
    const filterdata = pres.filter(each =>
      each.websitename.toLocaleLowerCase().includes(k),
    )
    this.setState(() => ({fil: [...filterdata]}))
  }

  l = data => {
    this.setState(prev => ({pres: [...prev.pres, data]}), this.changedone)
  }

  renderinput = () => {
    const k = 0

    return (
      <div className="inputcontainer">
        <Input change={this.l} />
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png "
          alt="password manager"
          width="200"
        />
      </div>
    )
  }

  render() {
    const {pres, searchinp} = this.state
    console.log(pres.length)
    return (
      <div className="backg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          height="100"
          width="180"
        />
        <div className="inputcontainer">{this.renderinput()}</div>
        <div>{this.renderheader()}</div>
        <hr />
        <div>{this.renderelement()}</div>
      </div>
    )
  }
}
