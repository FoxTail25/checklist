import React, { useEffect, useState } from 'react'
import { Biznes } from '../biznes/Biznes'
import { nanoid } from 'nanoid'
import { CheckListContext } from '../contextCheckList'
import styles from './sassCSS/checklist.module.css'
import { Header } from '../header/Header'


let bisnesArr = [
  { id: nanoid(), bisnes: ['Заголовок', 'новое дело'], complite: false },
  { id: nanoid(), bisnes: ['Заголовок', 'новое дело'], complite: false },
  { id: nanoid(), bisnes: ['Заголовок', 'новое дело'], complite: false },
]

export const CheckList = () => {

  let data, saveBtn;


  let localData = localStorage.getItem('records')
  if (localData) {
    data = JSON.parse(localData)
  } else {
    data = bisnesArr
  }

  const [bisnes, setBisnes] = useState(data)

useEffect(()=> {
  setLocalStore()
},[bisnes])



  function setLocalStore() {
    localStorage.setItem('records', JSON.stringify(bisnes));
    console.log('locStor',bisnes)
  }


  function changeRecordStatus(id) {
    setBisnes([...bisnes.map(el => {
      if (el.id === id) {
        el.complite = !el.complite
      }
      return el
    })])
    // setLocalStore()
  }

  function changeRecordText(id, text, n) {
    setBisnes([...bisnes.map(el => {
      if (el.id === id) {
        el.bisnes[n] = text
      }
      return el
    })])
    // setLocalStore()
  }

  function addRecord() {
    setBisnes([...bisnes, { id: nanoid(), bisnes: ['Новая заголовок', 'Новое дело'], complite: false }])
    console.log('add bis',bisnes)
    // setLocalStore()
  }

  function dellRecord(id) {
    setBisnes([...bisnes.filter(record => record.id !== id)])
    // setLocalStore()
  }

  const changeRecord = {
    status: changeRecordStatus,
    text: changeRecordText,
    del: dellRecord
  }


  let result = bisnes.map((record) => <Biznes key={record.id} {...record} />)


  return (
    <div className={styles.checklist__bg}>
      <Header />
      <ol>
        <CheckListContext.Provider value={changeRecord}>
          {result}
        </CheckListContext.Provider>
      </ol>
      <button className={styles.addrecord} onClick={addRecord}>добавить дело</button>
    </div>
  )
}
