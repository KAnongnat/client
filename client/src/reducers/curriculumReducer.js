import { FETCH_CURRICULUMS, CHANGE_CURRICULUMS } from '../actions';

const initalState = {
  name: 'Anongnat',
  surname: 'Faikhao',
  curriculumsList: []
};

export default (state=initalState,action) => {
  switch (action.type){
    case CHANGE_CURRICULUMS:
      return state,action.payload;
    case FETCH_CURRICULUMS:
      return {...state,curriculumsList:action.payload.data};
    default:
      return state;
  }
}
