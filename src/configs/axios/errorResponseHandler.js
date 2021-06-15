import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function errorResponseHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      message = error.response.data;

      toast.error(message, { position: toast.POSITION.BOTTOM_CENTER });

      return Promise.reject(error);
    }
  }
}

export default errorResponseHandler;
