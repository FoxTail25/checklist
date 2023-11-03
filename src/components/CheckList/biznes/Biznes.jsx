import React, { useContext, useState } from 'react'
import { CheckListContext } from '../contextCheckList'
import styles from './sassCSS/biznes.module.css'
// import 

export const Biznes = ({ id, bisnes, complite }) => {

  const [isEdit, setIsEdit] = useState(false)

  console.log(bisnes)


  const { status, text, del } = useContext(CheckListContext)


  return (
    <li className={complite ? styles.complite : styles.uncomplite}>
      <div className={styles.liblock}>

        <div className={complite ? styles.complite : styles.uncomplite} onClick={() => status(id)}>
          {
            complite
              ? <>"V" <br /> Выполнено</>
              : <>"X" <br /> Не выполнено </>
          }
        </div>

        <div className={styles.record}>
          {

            isEdit
              ?
              <>
                <textarea value={bisnes[1]} onChange={event => text(id, event.target.value)} />
                <button onClick={() => setIsEdit(!isEdit)}>save</button>
              </>

              : <>
                <span>{bisnes[0]}</span>
                <br />
                <span onClick={() => setIsEdit(!isEdit)}>
                  {bisnes[1]}
                </span>
              </>
          }
        </div>
        <button onClick={() => del(id)}>удалить запись</button>
      </div>
    </li>
  )
}
