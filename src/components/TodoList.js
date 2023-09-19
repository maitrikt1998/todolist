import React, { useState } from "react";

function TodoList() {
    const [activity, setActivity] = useState("");
    const [listData, setListData] = useState([]);
    function addActivity(){
        // setListData([...listData, activity])
        setListData((listData)=>{
            const updateList =[...listData, activity]
            setActivity('')
            return updateList
        })
    }

    function removeActivity(i){

        const updatedListData = listData.filter((elem, id)=>{
             return i != id;
        })
            setListData(updatedListData)
    }

    return (
        <>
            <div className="container">
                <div className="header">Todo List</div>
                <input type="text" placeholder="Add New Todo" value={activity} onChange={(e) =>setActivity(e.target.value)} />
                <button onClick={addActivity}>Add Todo</button>   
                <p className="list-heading">
                    Task List:
                </p>   
                {listData != [] && listData.map((data, i) =>{
                    return (
                        <>
                        <p key = {i}>
                            <div className="listData">{data}</div>
                            <div className="btn-position"><button onClick={()=>removeActivity(i)}>remove(-)</button></div>
                        </p>
                        </>
                    )
                })}      
            </div>
        </>
    )
}

export default TodoList;