export const initialState = {
    avatar: '',
    favorites: [],
    appointments: []
};

export const UserReducer = (state, action) => {
    if(action.type == 'setAvatar'){
        return { ...state, avatar: action.payload.avatar };
    } else {
        return state;
    }
}