import React, { useState } from 'react'
import s from './sassCSS/saveCheck.module.css'

export const SaveCheck = () => {
    
    // let savePlace;

    // let local = true;
    // let server = false;
    
    let dataBtn = JSON.parse(localStorage.getItem('saveBtn'))

    // if(dataBtn) {
    //     setSave(dataBtn)
    // }
    
    const [save, setSave] = useState(dataBtn)
     


    function changeSaveBtn() {
        dataBtn = !save
        setSave(!save)
        localStorage.setItem('saveBtn', JSON.stringify(save))
    }
    

    // if (save) {
    //     savePlace = true
     
    // } else {
    //     savePlace = false
    // }

    // console.log('render')

    // function changeButton() {
    //     local = !local
    //     server = !server
    //     // setSave(save)
    //     console.log('da')
    // }


    return (
        <div className={s.container}>
            <p>
                сохранять изменения<input type='checkbox' checked={save} onChange={changeSaveBtn} />
            </p>

            {/* <div className={s.buttons}>
                <button disabled = {!local} onClick={changeButton}>локально <br/>(в браузере)</button>
                <button disabled = {!server} onClick={changeButton}>глобально  <br/>(на сервере)</button>
            </div> */}
        </div>
    )
}
