import { Switch, FormControlLabel } from '@mui/material';
import { useThemeContext } from './ThemeProvider';

const ThemeToggle = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <FormControlLabel
      control={<Switch checked={mode === 'dark'} onChange={toggleTheme} />}
      label={mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
    />
  );
};

export default ThemeToggle;
