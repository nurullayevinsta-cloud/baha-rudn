import { useState } from 'react'
import SearchField from './components/SearchField'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tasks] = useState([
    'Изучить новый рецепт пасты карбонара',
    'Записаться на мастер-класс по гончарному делу',
    'Прочитать главу из книги о космосе',
    'Создать плейлист для утренней пробежки',
    'Написать письмо другу из другого города',
    'Попробовать приготовить домашний хлеб',
    'Изучить базовые фразы на японском языке',
    'Организовать фотосессию с друзьями в парке',
    'Найти новое кафе для работы с ноутбуком',
    'Запланировать поездку на выходные в соседний город',
    'Начать вести дневник благодарности',
    'Изучить основы игры на укулеле',
    'Создать коллаж из старых фотографий',
    'Попробовать новый вид спорта - скалолазание',
    'Организовать вечер настольных игр с коллегами'
  ])
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTasks = tasks.filter(task => {
    return task.includes(searchQuery)
  })

  return (
    <div className="main-container">
      <header className="main-header">
        <h1 className="main-title">Список дел</h1>
      </header>
      <section className="main-content">
        <SearchField value={searchQuery} onChange={setSearchQuery} />
        <TaskList tasks={filteredTasks} />
      </section>
    </div>
  )
}

export default App
