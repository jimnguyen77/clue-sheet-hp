import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Button } from '@mui/material';
import { GitHubLink } from './data.constants';
import { buttonContainerStyle } from './styles.constants';

type ButtonsProps = {
  resetState: () => void;
};

const Buttons = ({ resetState }: ButtonsProps) => {
  return (
    <Box sx={buttonContainerStyle}>
      <Button
        onClick={resetState}
        size='small'
        variant='contained'
        style={{ backgroundColor: '#605a37' }}
      >
        Reset
      </Button>

      <Button
        href={GitHubLink}
        rel='noopener noreferrer'
        size='small'
        target='_blank'
        variant='outlined'
        style={{ backgroundColor: 'white', color: '#605a37' }}
      >
        <GitHubIcon sx={{ mr: 1 }} /> Github
      </Button>
    </Box>
  );
};

export default Buttons;
