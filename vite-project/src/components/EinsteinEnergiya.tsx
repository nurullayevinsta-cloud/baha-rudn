const EinsteinEnergiya = () => {
  const formulaTekst = 'E = mc'
  const stepen = '2'
  
  return (
    <li className="formula-item energy">
      Формула энергии: {formulaTekst}<sup>{stepen}</sup>
    </li>
  )
}

export default EinsteinEnergiya
