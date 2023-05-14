import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Stack } from '@mui/system';

import allowancesData from './allowanceData';
import { BsAsterisk } from "react-icons/bs";
import { FormHelperText, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export default function FormDialog({open}) {

  
  const handleClose = () => {

  };

  function onSubmit(data) {
    if(data)
    handleClose();
    localStorage.setItem('allowances', JSON.stringify(data))

  }

  return (
    <Stack >
      <Dialog open={open} onClose={handleClose} maxWidth >
        <Stack direction='row' sx={{ justifyContent: "space-between",alignItems:"center", padding: "0 10px" }}>
          <DialogTitle sx={{fontWeight:"600"}}>Allowances</DialogTitle>
          <CloseIcon onClick={handleClose} sx={{cursor:"pointer",color:"#878787"}}/>
        </Stack>
        <DialogContent sx={{ padding: "10px 45px" }}>
          <form onSubmit={onSubmit}>

            {
              allowancesData.map((item) => {
                return (
                  <Grid container columnSpacing={6} sx={{alignItems:"center",width:"850px"}}>
                    <Grid item md={1}>
                    {item.validation.required.value ? <BsAsterisk color="red" fontSize="10px" /> : null}
                    </Grid>
                    <Grid item md={7}>
                    {item.label}
                    </Grid>
                    <Grid item md={4}>
                    <FormControl >
                       <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel value="Yes"  sx={{marginRight:"30px"}}  control={<Radio />} label="Yes" />
                        <FormControlLabel value="No"  control={<Radio />} label="No" />
                      </RadioGroup>
                      <FormHelperText></FormHelperText>
                    </FormControl>
                    </Grid>
                  </Grid>

                )
              })
            }

            <Stack sx={{ display: "flex", alignItems: "center" ,margin:"20px 0"}}>
              <Button sx={{ padding: "10px 80px", backgroundColor: "hsl(249deg 68% 29%)" }} type="submit" variant="contained" >Save</Button>
            </Stack>

          </form>
        </DialogContent>


      </Dialog>
    </Stack>
  );
}