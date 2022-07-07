import { useState } from "react";
import Select from 'react-select';
import { useDispatch } from "react-redux/es/exports"; //CẤU HÌNH ĐỂ SỬ DỤNG DISPATCH
import { searchFilter } from "../../redux/actions";

export default function SearchTodo() {
    
    const dispatch = useDispatch();

    const options = [
        { value: '10A1', label: '10A1' },
        { value: '10A2', label: '10A2' },
        { value: '10A3', label: '10A3' },
        { value: '11A1', label: '11A1' },
        { value: '11A2', label: '11A2' },
        { value: '11A3', label: '11A3' },
        { value: '120A1',label: '12A1' },
        { value: '12A2', label: '12A2' },
        { value: '12A3', label: '12A3' }
    ];

    const [selectOption, setSelectOption] = useState('');

    const [textSearch, setTextSearch] = useState('');

    const textChange = (e) => {
        setTextSearch(e.target.value);
        dispatch(searchFilter(e.target.value));
        console.log(e.target.value)
    }

    const handleSelect = (value) => {
        value.map((e) => {
            return setSelectOption(e.value);
        });
        console.log(selectOption)
        // dispatch(filterSelect({
        //     selectClass: selectOption
        // }))
    }


    return (
        <div className="searchTodo">
            <nav className="navbar navbar-light">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                        value={textSearch} onChange={textChange}
                    />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="button"
                    >
                        Search
                    </button>
                </form>
            </nav>
            <div className="filterStatus">
                <input id="all" name="filter-status" type="radio" /> <label htmlFor="all">Tất cả &nbsp;&nbsp;</label>
                <input id="done" name="filter-status" type="radio" /> <label htmlFor="done">Chưa hoàn thành &nbsp;&nbsp;</label>
                <input id="not-done" name="filter-status" type="radio" /> <label htmlFor="not-done">Đã hoàn thành</label>
            </div>
            <div className="selectClass">
                {/* Sử dụng mutiple select với react-select */}
                {/* https://www.freakyjolly.com/react-select-single-or-multiple-select-box-using-react-select-tutorial-with-examples/ */}
                {/* autoFocus: tự động focus vào mỗi khi load trang */}
                {/* isMulti = {true} : cho phép chọn nhiều option */}
            <Select 
                defaultValue="default" options={options} isMulti={true} value={options.value} onChange={handleSelect}
            />
            
            </div>
            
        </div>
    )
}