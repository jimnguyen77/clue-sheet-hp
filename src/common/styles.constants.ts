import { Theme } from '@mui/material/styles';

export const buttonContainerStyle = {
  my: 2,
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
};

export const gridBorderStyle = (theme: Theme) => ({
  backgroundColor: theme.palette.common.white,
  border: '1px solid #605a37',
});

export const gridCheckboxStyle = (theme: Theme) => ({
  ...gridBorderStyle(theme),
  cursor: 'pointer',
  fontWeight: 'bold',
  paddingLeft: '9px !important',
  paddingTop: '2px !important',
});

export const gridSectionTitleStyle = (theme: Theme) => ({
  ...gridBorderStyle(theme),
  paddingTop: '2px !important',
  whiteSpace: 'nowrap',
});

export const gridTitleStyle = (theme: Theme) => ({
  color: theme.palette.common.white,
  fontWeight: 'bold',
});

export const mainStyle = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'serif',
  justifyContent: 'center',
  lineHeight: '1.25',
  userSelect: 'none',
};

export const mainSubStyle = () => ({
  alignItems: 'center',
  backgroundColor: '#605a37',
  border: '5px solid #605a37',
  borderRadius: '6px',
  display: 'flex',
  flexWrap: 'nowrap',
  mt: 2,
  paddingLeft: 1,
  paddingTop: 1,
  width: '100%',
});

export const TextFieldStyle = {
  '& .MuiInput-underline:after': {
    borderBottom: 'none !important',
  },
  '& .MuiInput-underline:before': {
    borderBottom: 'none !important',
  },
  '&:hover .MuiInput-underline:before': {
    borderBottom: 'none !important',
  },
  '& .MuiInput-underline.Mui-focused:after': {
    borderBottom: 'none !important',
  },
  '& .MuiInput-underline.Mui-focused:before': {
    borderBottom: 'none !important',
  },
  '& .MuiInputBase-input': {
    borderBottom: 'none !important',
  },
};
