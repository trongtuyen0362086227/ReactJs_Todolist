import React, { useRef } from 'react'

export default function Form() {
    const task_name = useRef();
    const task_level = useRef();
    return (
        <div>
            <div className="row">
                <div className="col-md-offset-7 col-md-5">
                    <form action="" method="POST" className="form-inline">
                        <div className="form-group">
                            <label className="sr-only" htmlFor="">
                                label
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Task Name"
                                ref={task_name}
                            />
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="">
                                label
                            </label>
                            <select
                                name="ds"
                                id="inputDs"
                                className="form-control"
                                required="required"
                                ref={task_level}
                            >
                                Small
                                <option value={1}>Medium</option>
                                <option value={2}>High</option>
                                <option value={3}>Small</option>
                            </select>
                        </div>
                        <button type="button" className="btn btn-primary">
                            Submit
                        </button>
                        <button type="button" className="btn btn-default">
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
