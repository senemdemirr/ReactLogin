import React from 'react'


function TodoCard({todoId,todoTitle,todoContent,todoUserId}) {
    return (
        <>
            <div className="todoCartContainer">
                <h3 className="todoTitle">{todoTitle}</h3>
                <h3 className="todoTitle">{todoUserId}</h3>
                <p className="todoContent">{todoContent}</p>
            </div>
        </>
    );

}

export default TodoCard
