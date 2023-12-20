const Item = props => {
  const {data, chec, change} = props
  const triger = () => {
    change(data.id)
  }
  return (
    <li key={data.id} id={data.id}>
      <h1>{data.username[0]}</h1>
      <p>{data.username}</p>
      <p>{data.websitename}</p>

      {chec ? (
        <p>{data.password}</p>
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          alt="stars"
        />
      )}
      <button data-testid="delete" onClick={triger}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default Item
