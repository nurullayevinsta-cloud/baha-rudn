const KvadratSummy = () => {
  const peremennayaA = 'a'
  const peremennayaB = 'b'
  const dva = '2'
  const dvaAB = '2ab'
  
  return (
    <li className="formula-item binomial">
      Квадрат суммы: ({peremennayaA} + {peremennayaB})<sup>{dva}</sup> = {peremennayaA}<sup>{dva}</sup> + {dvaAB} + {peremennayaB}<sup>{dva}</sup>
    </li>
  )
}

export default KvadratSummy
