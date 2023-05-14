import { Box } from "@mui/system";
import Header from "./Header";
import Body from "./Body";


function Home() {
   
    
    return (
        <Box>
            <Header title='Corporate Information' link='/register'/>
            <Box>
                {
                <Body  width1='20%' width2='80%' />
                        
               
                }
            </Box>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ width: "50%", marginRight: "30px" }}>
                    <Header title='Allowances' open="true" />
                    <Body  width1='20%' width2='80%' />
                </Box>
                <Box sx={{ width: "50%" }}>
                    <Box>
                        <Header title='Others' />
                        <Body text='Retention Rate Of New Graduate Hires' value='Over 50%' />
                        <Body text='Work Style ( Overseas Bases )' value='Yes' />
                        <Body text='Working Environment' value='Not Working' />
                    </Box>
                    <Box>
                        <Header title='Holidays' />
                        <Body text='Summer Holidays' value='Yes' />
                        <Body text='Golden Weeks' value='Yes' />
                        <Body text='Other Holidays' value='Yes' />
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default Home;