import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth195628Reducer from '../features/EmailAuth195628/redux/reducers';
import CalendarView195626Reducer from '../features/CalendarView195626/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth195628: EmailAuth195628Reducer,
CalendarView195626: CalendarView195626Reducer,

});