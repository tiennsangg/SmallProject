export const todoListSelector = (state) => {
    const todoRemaining = state.todoList.filter((todo) => {
         //filter tạo ra một mảng mới chứa những element khớp với điều kiện, không thay đổi mảng cũ và sẽ trả về false nếu ko có điều kiện khớp
        return todo.name.toLowerCase().includes(state.filters.search.toLowerCase()); //Nếu ko có giá trị search truyền vào sẽ mặc định là chuỗi rỗng nên vẫn sẽ trả về kết quả 
        //Vì includes phân biệt cả chữ hoa và chữ thường nên buộc khi xử lý phải chuyển đổi hết sang lowercase hoặc upercase để chữ hoa với chữ thường match được với nhau nhưng không ảnh hưởng đến phía UI
    });
    return todoRemaining;
}

export const searchTextSelector = (state) => state.filters.search;