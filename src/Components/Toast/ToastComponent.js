import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ({ textMessage, type }) {
  return toast(textMessage, {
    position: toast.POSITION.TOP_LEFT,
    autoClose: 2000,
    type: type,
    transition: Slide,
    closeOnClick: true,
    pauseOnHover: false,

  });
}