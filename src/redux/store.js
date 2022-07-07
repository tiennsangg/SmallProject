// BƯỚC 1: CẤU HÌNH createStore 
// BƯỚC 2: CẤU HÌNH REDUCER.JS

import rootReducer from './reducer';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; //devtool extension của redux, để cài npm install --save redux-devtools-extension

const composedEhencer = composeWithDevTools();
const store = createStore(rootReducer, composedEhencer);
/*
    * createStore sẽ nhận 3 tham số:
        - Reducer: Để cập nhật giá trị state trong store
        - InitValue: Giá trị mặc định, có thể để trống 
        - Ehencers: Dùng để cấu hình middleware (nếu để trống InitValue và truyền tham số 2 vào sẽ đc hiểu là Ehencer)
*/

export default store;