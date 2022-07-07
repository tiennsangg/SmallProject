/*
    BƯỚC 4: TẠO ACTION
            - ACTION ĐƠN GIẢN CHỈ LÀ MỘT OBJECT LƯU THÔNG TIN ĐỂ DISPATCH ĐI GỒM:
            - TYPE ACTION và DATA TỪ PHÍA UI
            * NHƯNG NÊN SỬ DỤNG ActionCreator là một function để không phải dùng lại hay khai báo nhiều và có thể nhận giá trị từ phía UI
    BƯỚC 5:  TẠO EVENT ONCLICK VÀ FUNCTION ĐỂ DISPATCH Ở BUTTON 
*/

// export const addToDoAction = {
//     type: 'addToDo',
//     payload:
//         {
//         name: 'Lau quạt trần',
//         class: '11A2',
//         completed: true
//         }
// }

export const addToDo = (data) => {
    return {
        type: 'addTodo',
        payload: data,
    }
}

export const searchFilter = (text) => {
    return {
        type: 'searchFilterChange',
        payload: text
    }
}