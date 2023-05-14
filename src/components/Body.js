import { Divider } from "@mui/material"
import { Stack } from "@mui/system"

function Body(props) {
    function color(){
        if(props.value==='Yes')
        return { padding: "10px 50px",color:"green"}
        else if(props.value==='No')
        return { padding: "10px 50px",color:"red"}
        else return { padding: "10px 50px"}
    }
    return (
        <>
            <Stack direction='row' sx={{ fontSize: "14px" }}>
                <Stack width={props.width1?props.width1:'80%'}sx={{ backgroundColor: "#f7f7f7", padding: "10px 30px", fontWeight: "500" }}>
                    {props.text}
                </Stack>
                <Stack width={props.width2?props.width2:'20%'} sx={color()}>
                    {props.value}
                </Stack>
            </Stack>
            <Divider />
        </>
    )
}

export default Body;