/* 
    BƯỚC 2: TẠO REDUCER ĐỂ TRUYỀN LẠI STORE
    BƯỚC 3: CẤU HÌNH SỬ DỤNG STORE TRONG INDEX.JS FILE ĐỂ RENDER RA UI

    - Reducer sẽ nhận 2 tham số đó là state và action
    - action cấu trúc gồm: 
        {
            type: 'typeText',
            payload: 'data muốn thêm'
        }
*/

const initState = {
    filters: {
        search: '',
        filter: '',
        selectClass: []
    },
    todoList: [
        {
            name: 'Quét sân trường',
            class: '10A3',
            completed: false
        },
        {
            name: 'Quét sân trường',
            class: '11A2',
            completed: true
        },
        {
            name: 'Dọn vệ sinh',
            class: '12A1',
            completed: false
        }
    ]
}

const rootReducer = (state = initState, action) => {
    // console.log(state, action)
    switch (action.type) {
        case 'addTodo':
            return {
                ...state, //Không được thay đổi trực tiếp state vì sẽ phá vỡ quy ước của redux mà phải copy ra rồi cập nhật lại như trong khối code này 
                //để tránh được nhiều lỗi bug, và có thể kiểm tra các giá trị state từng thời điểm được cập nhật như nào
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
            
        case 'searchFilterChange':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payload
                }
            }
        default:
            return state;
    }
}

export default rootReducer;