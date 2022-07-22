import axios from "axios";
import {
    createContext,
    useContext,
    useState,useEffect,useReducer
}from "react";
import {ToastComponent} from "../../Components";
import { diaryReducer } from "./DiaryReducer";

const diaryContext = createContext();
const useDiary = () => useContext(diaryContext);

const DiaryProvider = ({children}) => {
    const initialData = {
        heading:"",
        diary:"",
        color:"white",
        isEdited:false,
        isPinned:false,
        label:"TO-DO",
        timestamp: new Date().toLocaleDateString(),


    };
    const [diary,setDiary] = useState(initialData);
    const [diaryState, diaryDispatch] = useReducer(diaryReducer,{
        diary:[],
        archivedDiary:[],
        trashedDiary:[],
        pinnedDiary:[],
    });
    const getDiary = async(diaryDispatch) => {
        try{
            const response = await axios.get("/api/notes",{
                headers :{ authorization:localStorage.getItem("Token")},
            });
            const {status,data} = response;
            if(status === 200){
                diaryDispatch({type:"GET_DIARY",payload:data.notes});
            }
        }catch(error){
            console.log(
                " Could not do it.", error
            );
        }
    };
    const getArchivedDiary = async (diaryDispatch) => {
        try{
            const response = await axios.get("/api/archives",{
                headers:{authorization : localStorage.getItem("Token")},

            }) ;
            const {status, data} = response;
            if(status===200){
                diaryDispatch({type:"GET_ARCHIVED_DIARY",payload: data.archives});

            }
        }catch(error){
            console.log("ERREEE",error);
        }
    };
    useEffect(()=>{
       {
            getDiary;
            getArchivedDiary;
        }
    });
    const addDiary = async (diary,diaryDispatch) =>{
        try{
            const response = await axios.post(
                "/api/notes",
                {diary},
                {headers:{authorization:localStorage.getItem("Token")}}
            );
            const {status, data} = response;
            console.log("CALLED");
            if(status===201){
                ToastComponent({textMessage: "NOTE ADDED!", type:"success"});
                diaryDispatch({type:"ADD_DIARY",payload:data.diary});

            }

        }catch(error){
            ToastComponent({textMessage:"COULD NOT ADD",type:"error"});

        }
    };
    const deleteDiary = async (diary,diaryDispatch)=>{
        try{
            const response = await axios.delete(`/api/notes/${diary._id}`,{
                headers:{authorization:localStorage.getItem("Token")},

            });
            const {status, data} = response;
            if(status===200){
                ToastComponent({textMessage:"Note Deleted", type:"success"});
                diaryDispatch({type:"DELETE_DIARY",payload: data.diary});
                diaryDispatch({type:"ADD_TO_DELETE", payload:data.notes});

            }
        }catch(error){
            ToastComponent({textMessage:"CAANOT", type:"error"});
        }
    };
    return(<diaryContext.Provider 
    value={{diary,setDiary,diaryState,diaryDispatch,addDiary,deleteDiary}}
    >
        {children}
    </diaryContext.Provider>);
};
export{useDiary, DiaryProvider};