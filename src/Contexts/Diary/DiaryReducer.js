export const diaryReducer = (state,{type,payload})=>{
    const initial = {
        diary:[],
        archivedDiary:[],
        deletedDiary:[],
        pinnedDiary:[],
    };
    switch(type){
        case "GET_DIARY":
        case "ADD_DIARY":
        case "UPDATE_DIARY":
            return{...state,diary:payload};
        case "GET_ARCHIVED_DIARY":
        case "DELETE_ARCHIVED_DIARY":
            return {...state,archivedDiary:payload};
        case "DELETE_DIARY":
            return{
                ...state,
                diary:payload,
                pinnedDiary:[
                    ...state.pinnedDiary.filter((item)=>item._id !== payload._id),

                ],
            };
        case "RESTORE_ARCHIVED_DIARY":
            return{
                ...state,
                diary : payload.diary,
                archivedDiary:payload.archives,
            };
        case "ADD_TO_DELETE":
            return{ 
            ...state,
            deletedDiary :[...state.deletedDiary,payload],
            pinnedDiary:[
                ...state.pinnedDiary.filter((Item)=>Item._id !== payload._id),

            ],
        };
        case "PIN_DIARY":
            return{
                ...state,
                pinnedDiary:[...state.pinnedDiary,payload],
                diary:[...state.diary.filter((item)=> item._id!= payload._id),],
            };
        case "UNPIN_DIARY":
            return{
                ...state,
                diary:[...state.diary,payload],
                pinnedDiary:[...state.pinnedDiary.filter((item)=>item._id != payload._id),],
            };
        default:
            return {...state};
    }
};