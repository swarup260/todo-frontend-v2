import { Container } from "@mui/material";
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput'

export default function Home() {
    return (
        <Container fixed className="m-5">
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="input-with-icon-adornment">
                        With a start adornment
                    </InputLabel>
                    <OutlinedInput
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-basic" label="password" variant="outlined" />
            </Box>
        </Container>
    )
}