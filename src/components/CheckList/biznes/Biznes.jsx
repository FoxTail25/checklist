import React, { useContext, useState } from 'react'
import { CheckListContext } from '../contextCheckList'
import styles from './sassCSS/biznes.module.css'

export const Biznes = ({ id, bisnes, complite }) => {

  const [isEditText, setIsEditText] = useState(false)
  const [isEditHead, setIsEditHead] = useState(false)

  // console.log(bisnes)


  const { status, text, del } = useContext(CheckListContext)


  return (
    <li className={complite ? styles.complite : styles.uncomplite}>
      <div className={styles.liblock}>

        <div title="click для изменения статуса записи" className={complite ? styles.complite : styles.uncomplite} onClick={() => status(id)}>
          {
            complite
              ? <>"V" <br /> Выполнено</>
              : <>"X" <br /> Не выполнено </>
          }
        </div>

        <div className={styles.record}>

          {
            isEditHead
              ? <>
                <input value={bisnes[0]} onChange={event => text(id, event.target.value, 0)} />
                <button onClick={() => setIsEditHead(!isEditHead)}>сохранить</button>
              </>
              : <h2  title='click для изменения'  onClick={()=> setIsEditHead(!isEditHead)}>{bisnes[0]}</h2>
          }

          {
            isEditText
              ?
              <>
                <textarea value={bisnes[1]} onChange={event => text(id, event.target.value, 1)} />
                <button onClick={() => setIsEditText(!isEditText)}>сохранить</button>
              </>

              : <>
                <span title='click для изменения' onClick={() => setIsEditText(!isEditText)}>
                  {bisnes[1]}
                </span>
              </>
          }
        </div>
        <button className={styles.delBtn} onClick={() => del(id)}>удалить запись</button>
      </div>
    </li>
  )
}
