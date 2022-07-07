//BƯỚC 5:  TẠO EVENT ONCLICK VÀ FUNCTION ĐỂ DISPATCH Ở BUTTON 

import { useDispatch } from "react-redux/es/exports"; //CẤU HÌNH ĐỂ SỬ DỤNG DISPATCH
import { addToDo } from "../../redux/actions"; //THÊM ACTION VÀO ĐỂ DISPATCH GỬI ĐI
import { useState } from "react";
export default function AddStudents() {
    const [todoName, settodoName] = useState(''); //Tạo một useState để lấy giá trị thay đổi từ UI (dùng onchange và e.target.value ở input)

    const [className, setclassName] = useState('10A1'); //Tạo một useState để lấy giá trị thay đổi từ UI (dùng onchange và e.target.value ở input)

    const dispatch = useDispatch(); //SỬ DỤNG DISPATCH

    const buttonAddHandler = () => {
        //TRUYỀN VÀO DISPATCH ACTION CẦN GỬI ĐI, ACTION NHẬN 1 ĐỐI SỐ LÀ DATA (NHỮNG DỮ LIỆU NHẬP TỪ UI)
        console.log({
            name: todoName,
            class: className,
            completed: false
        })

        dispatch(addToDo({
            name: todoName,
            class: className,
            completed: false
        }))

        settodoName(''); //sau khi dispatch sẽ reset lại để nhập tên mới
        setclassName('10A1'); //sau khi dispatch sẽ reset lại để chọn lớp mới (mặc định là 10A1)
    }

    //Xử lý event tên lớp - Lấy data từ UI
    const handleOnchangeSelect = (event) => {
        console.log({value: event.target.value}); //Khi đã set lại state thì ta có state className mới và gán vào data của action 
        setclassName(event.target.value);
    }

    //Xử lý event tên việc - Lấy data từ UI
    const handleOnchangeInput = (e) => {
        console.log(e.target.value);
        settodoName(e.target.value); //Khi đã set lại state thì ta có state todoName mới và gán vào data của action 
    }

    return (
        <div className="add-todo">
            <h1>Phân công công việc</h1>
            <div className="info">
                Việc cần làm:<br />
                <input type='text' value={todoName} autoFocus onChange={handleOnchangeInput}/><br />
                Lớp cần làm:<br />
                <select value={className} onChange={handleOnchangeSelect}>
                    <optgroup label="Khối 10">
                        <option value='10A1'>10A1</option>
                        <option value="10A2">10A2</option>
                        <option value="10A3">10A3</option>
                    </optgroup>
                    <optgroup label="Khối 11">
                        <option value="11A1">11A1</option>
                        <option value="11A2">11A2</option>
                        <option value="11A3">11A3</option>
                    </optgroup>
                    <optgroup label="Khối 12">
                        <option value="12A1">12A1</option>
                        <option value="12A2">12A2</option>
                        <option value="12A3">12A3</option>
                    </optgroup>
                </select>
                <br />
                <br />
                <button type="button" className="btn btn-outline-warning" onClick={buttonAddHandler}>
                    Phân công
                </button>
            </div>
        </div>
    );
}
