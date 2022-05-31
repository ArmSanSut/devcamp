import AuthContext from "./authContext";
import { useNavigate } from "react-router-dom";

const context = useContext(AuthContext);
const navigate = useNavigate();

if(!context) {
    navigate('/dashboard');
} else {
    navigate('/');
}