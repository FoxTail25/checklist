import React, { useState } from 'react'
import { Biznes } from '../biznes/Biznes'
import { nanoid } from 'nanoid'
import { CheckListContext } from '../contextCheckList'


let bisnesArr = [
  { id: nanoid(), bisnes: 'дело1', complite: false },
  { id: nanoid(), bisnes: 'дело2', complite: false },
  { id: nanoid(), bisnes: 'дело3', complite: false },
]

export const CheckList = () => {

  const [bisnes, setBisnes] = useState(bisnesArr)

  function changeRecord(id) {
    setBisnes([...bisnes.map(el => {
      if(el.id === id) {
        el.complite = !el.complite
      }
      return el
    })])
  }

  let result = bisnes.map((record) => <Biznes key={record.id} record={record} changeRecord={changeRecord}/>)


  return (
    <ol>
    <CheckListContext.Provider value={bisnes}>
    {result}
    </CheckListContext.Provider>
    </ol>
  )
}
