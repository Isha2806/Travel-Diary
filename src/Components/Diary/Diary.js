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
//           <span>π</span>
//         </Link>
//         <Link to="/">
//           <span>π</span>
//         </Link>
//         <Link to="/">
//           <span>β</span>
//         </Link>
//         <Link to="/">
//           <span>editπ</span>
//         </Link>
//       </div>
//     </div>
  
//     </>);
// }