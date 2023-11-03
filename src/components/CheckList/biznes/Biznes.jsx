import React, { useContext, useState } from 'react'
import { CheckListContext } from '../contextCheckList'
import styles from './sassCSS/biznes.module.css'
// import 

export const Biznes = ({ id, bisnes, complite }) => {

  const [isEdit, setIsEdit] = useState(false)


  const { status, text, del } = useContext(CheckListContext)


  return (
    <li className={complite ? styles.complite : styles.uncomplite}>
      <div>

        <span className={complite ? styles.complite : styles.uncomplite} onClick={() => status(id)}>
          {
            complite
              ? "V"
              : "X"
          }
        </span>

        {
          isEdit
            ?
            <>
              <input style={{ padding: "0 5px" }} value={bisnes} onChange={event => text(id, event.target.value)} />
              <button onClick={() => setIsEdit(!isEdit)}>save</button>
            </>

            : <span onClick={() => setIsEdit(!isEdit)}>
              {bisnes}
            </span>
        }
      <button onClick={() => del(id)}>удалить запись</button>
      </div>
    </li>
  )
}
