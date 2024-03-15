import './CardF.css'

const CardF = props => {
  const {each, tk, Chackout} = props
  const {Us, Ps, Em, id} = each
  const poss = Ps.length
  const hk = Chackout ? '*'.repeat(poss) : Ps // Use string repetition method repeat()

  const Bty = () => {
    tk(id)
  }

  return (
    <div className="col">
      <div className="pr">
        <h2 className="kk ">{Us[0]}</h2>
        <p className="pk">{Em}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="img88"
          onClick={Bty}
        />
      </div>

      <div>
        <p className="pk">{hk}</p>
      </div>
    </div>
  )
}

export default CardF
