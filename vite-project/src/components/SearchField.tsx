import { useRef } from 'react'
import './SearchField.css'

interface SearchFieldProps {
  value: string
  onChange: (value: string) => void
}

function SearchField({ value, onChange }: SearchFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClear = () => {
    onChange('')
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="search-field-wrapper">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Введите текст для поиска..."
        className="search-field-input"
      />
      <button onClick={handleClear} className="search-field-button">
        Очистить
      </button>
    </div>
  )
}

export default SearchField
