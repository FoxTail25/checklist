import React, { useState } from 'react'
import { Biznes } from '../biznes/Biznes'
import { nanoid } from 'nanoid'
import { CheckListContext } from '../contextCheckList'
import styles from './checklist.module.css'


let bisnesArr = [
  { id: nanoid(), bisnes: ['Заголовок', 'новое дело'], complite: false },
  { id: nanoid(), bisnes: ['Заголовок', 'новое дело'], complite: false },
  { id: nanoid(), bisnes: ['Заголовок', 'новое дело'], complite: false },
]

export const CheckList = () => {

  const [bisnes, setBisnes] = useState(bisnesArr)

  function changeRecordStatus(id) {
    setBisnes([...bisnes.map(el => {
      if (el.id === id) {
        el.complite = !el.complite
      }
      return el
    })])
  }

  function changeRecordText(id, text) {
    setBisnes([...bisnes.map(el => {
      if (el.id === id) {
        el.bisnes[1] = text
      }
      return el
    })])
  }

  function addRecord() {
    let bisnesNumber = bisnes.length + 1;
    setBisnes([...bisnes, { id: nanoid(), bisnes: `Дело №${bisnesNumber}`, complite: false }])
  }

  function dellRecord(id) {
    setBisnes([...bisnes.filter(record => record.id !== id)])
  }

  const changeRecord = {
    status: changeRecordStatus,
    text: changeRecordText,
    del: dellRecord
  }


  let result = bisnes.map((record) => <Biznes key={record.id} {...record} />)


  return (
    <div className={styles.checklist__bg}>
      <h1>Список дел</h1>
      <ol>
        <CheckListContext.Provider value={changeRecord}>
          {result}
        </CheckListContext.Provider>
      </ol>
      <button onClick={addRecord}>добавить дело</button>
    </div>
  )
}
