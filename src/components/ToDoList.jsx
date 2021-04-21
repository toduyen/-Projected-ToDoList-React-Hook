import React from 'react'
import ToDo from './ToDo'

function ToDoList({ToDos,chuyendoiTrangThai}) {
    return (
       <>
            {
                ToDos.map((value) => (
                    <ToDo key={value.id} giatri={value} chuyendoiTrangThais={chuyendoiTrangThai}/>
                ))
            }
       </>
    )
}

export default ToDoList
