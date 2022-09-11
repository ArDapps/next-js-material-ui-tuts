
import { Button } from '@mui/material'
import * as React from 'react';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
export default function Home() {
  const [value, setValue] = React.useState(2);

  return (
 

        <div style={{margin:"20px"}}>
            <Button variant="text">Text</Button>
              <Button variant="contained" color ="error" className='bg-black'>Contained</Button>
              <Button variant="outlined">Outlined</Button>
              <h1 class=" bg-green-300 text-3xl  text-red-800 font-bold underline">
                        My Clone             
                    </h1>

                    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
        </div>

  )
}
