import authReducer from '../reducers/authReducer'
import appReducer from '../reducers/appReducer'
import signupReducer from '../reducers/signupReducer'
import meReducer from '../reducers/meReducer'
import {combineReducers} from 'redux'
import jobReducer from '../reducers/jobReducer';


const rootReducer= combineReducers({
    auth:authReducer,
    app:appReducer,
    sign:signupReducer,
    me:meReducer,
    job:jobReducer
});


export default rootReducer;