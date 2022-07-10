import { configureStore } from "@reduxjs/toolkit";
import reducer from "../Reducers/main"; // reduce hi rehna chaiye (important)

const store = configureStore({ reducer });

export default store;
