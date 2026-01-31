import { useState } from "react";
import { useLocation } from "react-router-dom";
import { createTodo, updateTodo } from "../Services/TodoService";
import { useNavigate } from "react-router-dom";

const TodoForm = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [formData, setFormData] = useState({
        id: state?.id || "",
        title: state?.title || "",
        status: state?.status || "created",
        problem_desc: state?.problem_desc || "",
    });

    function handleChange(e: any) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }


    async function handleOnSubmit() {
        console.log(formData)
        if (!state) {
            // Create
            const request = await createTodo(formData);
            if (request.statusCode == 201) {
                navigate("/")
            }
        } else {
            const request = await updateTodo(formData);
            if (request.statusCode == 200) {
                navigate("/")
            }
        }
    }
    
    return (
        <div className="p-5">
            <div className="container border rounded p-4">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label
                                htmlFor="title"
                                className="form-label"
                            >
                                Title
                            </label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="title" 
                                name="title" 
                                placeholder="Type the title"
                                defaultValue={formData.title}
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="status">Status</label>
                            <select 
                                className="form-select" 
                                id="status" 
                                name="status"
                                aria-label="Floating label select example"
                                onChange={handleChange} 
                            >
                                <option value="created">Created</option>
                                <option value="completed">Completed</option>
                                <option value="on_going">On Going</option>
                                <option value="problem">Problem</option>
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <label htmlFor="problem_desc" className="mb-2">Description</label>
                        <textarea 
                            className="form-control" 
                            placeholder="Add Description" 
                            id="problem_desc"
                            name="problem_desc"
                            onChange={handleChange} 
                        ></textarea>
                    </div>
                </div>
                <button onClick={handleOnSubmit} type="button" className="btn btn-primary">Submit</button>
            </div>
        </div>
    )
}

export default TodoForm;