import React, { useContext, useState } from 'react'
import { CheckListContext } from '../contextCheckList'
import styles from './biznes.module.css'
// import 

export const Biznes = ({ record }) => {

  const [isEdit, setIsEdit] = useState(false)

  const { id, bisnes, complite } = record

  const {status, text, del} = useContext(CheckListContext)


  // console.log(status);

  return (
    <li className={complite ? styles.complite : styles.uncomplite}>
      <div>

        <span style={{ padding: "0 5px" }} onClick={() => status(id)}>
          {
            complite
              ? "выполнено"
              : "не выполнено"
          }
        </span>

        {
          isEdit
            ?
            <>
              <input  style={{ padding: "0 5px" }} value={bisnes} onChange={event => text(id, event.target.value)} />
              <button onClick={() => setIsEdit(!isEdit)}>save</button>
            </>

            : <span onClick={() => setIsEdit(!isEdit)}>
              {bisnes}
            </span>
        }
        <button onClick={()=>del(id)}>удалить запись</button>
      </div>
    </li>
  )
}
