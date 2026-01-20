import { useState } from 'react'
import ZadachaCard from './ZadachaCard'

function DelaManager() {
  const [spisokDel, setSpisokDel] = useState<string[]>([])
  const [tekstVvoda, setTekstVvoda] = useState('')

  const dobavitDelo = () => {
    if (tekstVvoda.trim() !== '') {
      setSpisokDel([...spisokDel, tekstVvoda])
      setTekstVvoda('')
    }
  }

  const udalitDelo = (indeks: number) => {
    const noviySpisok = spisokDel.filter((_, i) => i !== indeks)
    setSpisokDel(noviySpisok)
  }

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h2>Мои дела</h2>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={tekstVvoda}
          onChange={(e) => setTekstVvoda(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              dobavitDelo()
            }
          }}
          style={{ padding: '8px', marginRight: '10px', width: '300px' }}
          placeholder="Что нужно сделать?"
        />
        <button onClick={dobavitDelo}>Добавить</button>
      </div>
      <div>
        {spisokDel.length === 0 ? (
          <p>Пока дел нет</p>
        ) : (
          spisokDel.map((delo, indeks) => (
            <ZadachaCard
              key={indeks}
              nazvanie={delo}
              onUdalit={() => udalitDelo(indeks)}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default DelaManager
