import { Stack } from "@mui/system";
import { TbMinusVertical } from "react-icons/tb";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";



function Header(props) {

    const style = {
        justifyContent: "space-between",
        color: "#27187e", alignItems: "center",
        backgroundColor: "#d7d0ff", borderRadius: "4px",
        marginTop: "20px", height:"30px"
    }
    const handleClickOpen = () => {
            
    };
    
    function button() {
        if (props.link)
            return (
                <Link to={props.link} textDecor>
                    <BiEditAlt className="edit" style={{ textDecoration: "none" }} />
                </Link>
            )
        else if (props.open)
            return (
                <BiEditAlt className="edit" onClick={handleClickOpen} />
            )
        else return <BiEditAlt className="edit" />
    }

    return (
        <Stack direction='row' sx={style}>
            <Stack direction='row' sx={{ alignItems: "center" }}>
                <TbMinusVertical className="vline" />
                {props.title}
            </Stack>
            {
                button()
            }
        </Stack>

    )
}
export default Header;