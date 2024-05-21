import './App.css'
import { Container } from '@mui/material'
import { Tabs as BaseTabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import { styled } from '@mui/system';
import Gif from './pages/Gif'
import Sticker from './pages/Sticker'
import { MdGifBox } from "react-icons/md";
import { PiStickerFill } from 'react-icons/pi';

function App() {
  return (
    <>
      <Container maxWidth="sm">
        <Tabs defaultValue={0} orientation="vertical">
          <TabsList>
            <Tab><PiStickerFill size='2rem' /></Tab>
            <Tab><MdGifBox size='2rem' /></Tab>
          </TabsList>
          <TabPanel value={0}><Sticker /></TabPanel>
          <TabPanel value={1}><Gif /></TabPanel>
        </Tabs>
      </Container>
    </>
  )
}
const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#E49BFF',
  300: '#66B2FF',
  400: '#C738BD',
  500: '#850F8D',
  600: '#c017cc',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  border: 1px solid red;
  padding: 12px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  transition: all .3s ease-in-out;

  &:hover {
    background-color: ${blue[400]};
    transition: all .3s ease-in-out;
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
    transition: all .3s ease-in-out;
  }

  &.${buttonClasses.focusVisible} {
    background-color: #fff;
    color: ${blue[600]};
    transition: all .3s ease-in-out;
  }

  &.${tabClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    transition: all .3s ease-in-out;
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
    transition: all .3s ease-in-out;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  height: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  transition: all .3s ease-in-out;
`;

const Tabs = styled(BaseTabs)`
  display: flex;
  gap: 16px;
  width: 200px;
  transition: all .3s ease-in-out;
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 80px;
  background-color: ${blue[500]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  padding: 6px;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  align-content: space-between;
  transition: all .3s ease-in-out;
  box-shadow: 0px 4px 8px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);

export default App
// {
//   gif.url ? <img src={gif.url} alt="" /> : ''
// }
