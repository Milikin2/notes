import { useRef, useState } from 'react';
import { HiXMark } from 'react-icons/hi2'

import AddNote from './AddNote';
import Note from './Note'

import styles from './style.module.scss'

function NoteList({ notes, setNotes }) {
    const [searchValue, setSearchValue] = useState('')
    const inputRef = useRef()

    const searchValueReset = () => {
        setSearchValue('')
        inputRef.current.focus()
    }

    const filteredNotes = notes.filter(item => item.title.trim().toLowerCase().includes(searchValue.trim().toLowerCase()))

    const searchHandler = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className={styles.notes__container}>
            <h1 style={{ textAlign: 'left' }}>Записи</h1>
            <div className={styles.notes__search_container}>
                <input ref={inputRef} value={searchValue} onChange={e => searchHandler(e)} type="text" className={styles.notes__search} placeholder='Поиск по записям...' />
                {searchValue && <HiXMark onClick={searchValueReset} className={styles.notes__search_reset} />}
            </div>
            <div className={styles.notes__list}>
                {filteredNotes.map((note, i) => {
                    return <Note key={note.id} title={note.title} date={note.date} notes={notes} index={i} setNotes={setNotes} />
                })}
                <AddNote notes={notes} setNotes={setNotes} />
            </div>
        </div>
    )
}

export default NoteList;