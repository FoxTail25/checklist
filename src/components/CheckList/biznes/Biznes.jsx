import React from 'react'

export const Biznes = ({ record, changeRecord}) => {

  const { id, bisnes, complite } = record

 
  console.log(complite);

  return (
    <li>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        {bisnes}
        <span onClick={() => changeRecord(id)}>
          {
            complite
              ? "выполнено"
              : "не выполнено"
          }
        </span>
      </div>
    </li>
  )
}
