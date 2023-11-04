import { MdDeleteForever } from 'react-icons/md'

import styles from './style.module.scss'

function Note({ title, date, notes, setNotes, index }) {
    const handler = () => {
        setNotes(notes.filter((_, i) => i !== index))
    }

    return (
        <div className={styles.notes__note}>
            <span className={styles.notes__title}>{title}</span>
            <div className={styles.notes__footer}>
                <span className="notes__date">{date}</span>
                <MdDeleteForever className={styles.notes__remove} onClick={handler} size='1.3rem' />
            </div>
        </div>
    )
}

export default Note;