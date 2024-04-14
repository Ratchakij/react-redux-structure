// import { combineReducers } from "redux";

// let authReducer;

import { combineReducers } from "redux";
import authReducer from "../features/auth/slice/auth-slice";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;

/////////////////////////////////////////////////////////////////////////////////////////

// const rootReducer = async () => {
//   if (!authReducer) {
//     // Import authReducer จะเรียกไฟล์ authReducer หลังจากโค้ดเริ่มต้นทำงาน
//     const module = await import("../features/auth/slice/auth-slice");
//     authReducer = module.default;
//   }

//   /* Add other reducers here */
//   const reducers = {
//     auth: authReducer,
//     //   data: dataReducer,
//   };

//   return combineReducers(reducers);
// };

// export default rootReducer;
