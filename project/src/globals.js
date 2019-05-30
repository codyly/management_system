const PORT = 2333;
<<<<<<< HEAD
export const LOGIN_URL = "http://47.106.34.252:"+PORT+"/user.json";
export const T_URL = "http://47.106.34.252:8000/a.json";
export const LOGIN_URL_TEST = "http://localhost:"+PORT+"/TransactionManager_war_exploded/manager/login";
=======

export const LOGIN_URL = "http://47.106.34.252:8000/user.json";
export const T_URL = "http://47.106.34.252:8000/a.json";
export const LOGIN_URL_TEST = "http://localhost:"+PORT+"/TransactionManager_war_exploded/manager/login";
export const ADD_NEW_MNG = "http://localhost:"+PORT+"/TransactionManager_war_exploded/manager/Create";
export const GET_ALL_USR = "http://localhost:"+PORT+"/TransactionManager_war_exploded/manager/all";
export const SEARCH_MNG_BY_NAME = "http://localhost:"+PORT+"/TransactionManager_war_exploded/manager/some";
export const MOD_MNG_AHU = "http://localhost:"+PORT+"/TransactionManager_war_exploded/manager/ChangeAuthority";
export const RST_PASSWORD_URL = "http://localhost:"+PORT+"/TransactionManager_war_exploded/manager/ResetPassword";
>>>>>>> e989168a6caea4f86ad76248c2def2159b7ccea3
export const MOD_PASSWORD_URL = "http://localhost:"+PORT+"/TransactionManager_war_exploded/manager/ChangePassword";
export const MOD_LIMIT_URL = "http://localhost:"+PORT+"/TransactionManager_war_exploded/stock/limit";
export const MOD_STATE_URL = "http://localhost:"+PORT+"/TransactionManager_war_exploded/stock/ChangeState";
export const GET_ALL_URL = "http://localhost:"+PORT+"/TransactionManager_war_exploded/stock/all";
export const SEARCH_BY_NAME = "http://localhost:"+PORT+"/TransactionManager_war_exploded/stock/GetByName"; // stock_name=? authority=
export const SEARCH_BY_ID = "http://localhost:"+PORT+"/TransactionManager_war_exploded/stock/GetByID"; // stock_id=? authority=
export const GET_STOCK_DETAIL_URL = "http://localhost:"+PORT+"/TransactionManager_war_exploded/stock";
export const STATE_LOGIN_OUT = 0;
export const STATE_LOGIN = 1;
