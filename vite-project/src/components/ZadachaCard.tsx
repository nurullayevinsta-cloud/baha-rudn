import { useState } from 'react'

interface ZadachaCardProps {
  nazvanie: string
  onUdalit: () => void
}

function ZadachaCard({ nazvanie, onUdalit }: ZadachaCardProps) {
  const [vipolneno, setVipolneno] = useState(false)

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
      <span style={{ textDecoration: vipolneno ? 'line-through' : 'none', flex: 1 }}>
        {nazvanie}
      </span>
      <button onClick={() => setVipolneno(!vipolneno)}>
        {vipolneno ? 'Отменить' : 'Выполнено'}
      </button>
      <button onClick={onUdalit}>Удалить</button>
    </div>
  )
}

export default ZadachaCard
