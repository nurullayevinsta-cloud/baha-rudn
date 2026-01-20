const PifagorTeorema = () => {
  const peremennayaA = 'a'
  const peremennayaB = 'b'
  const peremennayaC = 'c'
  const kvadrat = '2'
  
  return (
    <li className="formula-item pythagoras">
      Теорема Пифагора: {peremennayaA}<sup>{kvadrat}</sup> + {peremennayaB}<sup>{kvadrat}</sup> = {peremennayaC}<sup>{kvadrat}</sup>
    </li>
  )
}

export default PifagorTeorema
