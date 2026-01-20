const CilindrObem = () => {
  const obem = 'V'
  const pi = 'π'
  const radius = 'r'
  const visota = 'h'
  const stepenDva = '2'
  
  return (
    <li className="formula-item cylinder">
      Объем цилиндра: {obem} = {pi}{radius}<sup>{stepenDva}</sup>{visota}
    </li>
  )
}

export default CilindrObem
