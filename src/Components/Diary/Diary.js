// import React from "react";
// import { Link } from "react-router-dom";
// import { useDiary } from "../../Contexts/Diary/DiaryContext";
// import "./diary.css";
// export default function Diary({diary}){
//   const {heading,diaries } = diary;
//   const {
//     diaryState,
//     setDiary,
//     diaryDispatch
//   }=useDiary();
//   const {colour} = diary;
//     return (<>
//     <div className= "diary">
//       <div className= "diary-container"
//        style={{ backgroundColor: `${colour}` }}>
//         <h3>{heading}</h3>
//         <p className=""  
//         dangerouslySetInnerHTML={{
//             __html:diaries,}}
//         >

//         </p>
//       </div> 
//       <div className= "diary-footer">
//         <Link to="/">
//           <span>📌</span>
//         </Link>
//         <Link to="/">
//           <span>🛒</span>
//         </Link>
//         <Link to="/">
//           <span>❌</span>
//         </Link>
//         <Link to="/">
//           <span>edit🔐</span>
//         </Link>
//       </div>
//     </div>
  
//     </>);
// }