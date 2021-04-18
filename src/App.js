import logo from './logo.svg';
import './App.css';

import { ThemeProvider } from "styled-components";

import { defaultTheme } from '../src/styles/defaultTheme'
import PageLayout from './components/PageLayout/index';

function App() {
    return (<>
        <ThemeProvider theme={defaultTheme}>
            <PageLayout />
        </ThemeProvider>
    </>
    );
}

export default App;