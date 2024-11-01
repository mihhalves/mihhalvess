import "./parallax.scss"

const Parallax = (type) => {
  return (
    <div className="parallax" style={{background:type==="servicos" ? "linear-gradient(180deg, #111132, #0c0c1d)" 
    : "linear-gradient(180deg, #111132, #505064)",
    }}
    >
      <h1>{type==="servicos" ? "Como podemos ajudar?" : "Como podemos ajudar hoje?"}</h1>
      <div className="mountains"></div>
      <div className="planets"></div>
      <div className="stars"></div>
    </div>
  )
}

export default Parallax