const KvadratnoeUravnenie = () => {
  const yPeremennaya = 'y'
  const aKoef = 'a'
  const bKoef = 'b'
  const xPeremennaya = 'x'
  const cKoef = 'c'
  const kvadratX = '2'
  
  return (
    <li className="formula-item quadratic">
      Квадратное уравнение: {yPeremennaya} = {aKoef}{xPeremennaya}<sup>{kvadratX}</sup> + {bKoef}{xPeremennaya} + {cKoef}
    </li>
  )
}

export default KvadratnoeUravnenie
