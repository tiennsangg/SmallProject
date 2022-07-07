import { useSelector } from "react-redux"; //Sử dụng useSlector để truy cập vào dữ liệu trong store
import { searchTextSelector, todoListSelector } from "../../redux/selector";

export default function ListToDo() {
    const todoList = useSelector(todoListSelector)
    const searchText = useSelector(searchTextSelector)
    console.log(todoList,searchText)
    return (
        <div className="list-todo">
            <ul>
                {todoList.map((e, i) => {
                    return (
                        <li key={i}>{e.name} - {e.class} - {e.completed ? 'Đã hoàn thành' : 'Chưa hoàn thành'}</li>
                    )
                })}
            </ul>
        </div>
    )
}