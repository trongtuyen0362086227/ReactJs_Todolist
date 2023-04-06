import React from 'react'
import ItemToDo from './ItemToDo'

export default function List() {
  return (
    <div>
        <div className="panel panel-success">
          <div className="panel-heading">List Task</div>
          <table className="table table-hover ">
            <thead>
              <tr>
                <th style={{ width: "10%" }} className="text-center">
                  #
                </th>
                <th>Task</th>
                <th style={{ width: "20%" }} className="text-center">
                  Level
                </th>
                <th style={{ width: "20%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              <ItemToDo></ItemToDo>
              <ItemToDo></ItemToDo>
              <ItemToDo></ItemToDo>
            </tbody>
          </table>
        </div>
    </div>
  )
}
