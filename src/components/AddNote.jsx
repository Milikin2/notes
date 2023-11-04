import { useState } from 'react'
import { nanoid } from 'nanoid'

import styles from './style.module.scss'

function AddNote({ notes, setNotes }) {
    const [inputValue, setInputValue] = useState('')
    const date = new Date()
    const currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

    const resetInput = () => {
        setInputValue('')
    }

    const addNote = () => {
        if (inputValue) {
            setNotes([...notes, { id: nanoid(), title: inputValue, date: currentDate }])
            setInputValue('')
        }
    }

    return (
        <div className={styles.notes__note_add}>
            <input maxLength={200} className={styles.notes__input} placeholder='Добавьте новую запись...' type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            {inputValue && <div onClick={resetInput} className={styles.notes__note_reset}>Очистить поле</div>}

            <div className={styles.notes__footer}>
                <span>{200 - inputValue.length} символов</span>
                <button type='button' onClick={addNote} className={styles.notes__note_save}>Сохранить</button>
            </div>
        </div>
    )
}

export default AddNote