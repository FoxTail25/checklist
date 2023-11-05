import React, { useState } from 'react'
import s from './sassCSS/saveCheck.module.css'

export const SaveCheck = () => {

    let saveData;

    let dataBtn = JSON.parse(localStorage.getItem('saveBtn'))
    if (dataBtn) {
        saveData = dataBtn;
    } else {
        saveData = false
    }

    const [save, setSave] = useState(saveData)

    function changeSaveBtn() {
        setSave(!save)
        localStorage.setItem('saveBtn', JSON.stringify(!save))
    }




console.log('save', save)

    return (
        <div className={s.container}>
            <p>
                сохранять изменения<input type='checkbox' checked={save} onChange={changeSaveBtn} />
            </p>

            <div className={s.buttons}>

                <button disabled={!save} className={save ? s.active: ''} >локально <br/>(в браузере)</button>
                <button disabled title='Функционал пока не реализован'>глобально<br/>(на сервере)</button>
            </div>
        </div>
    )
}
