import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {ThemeProvider} from "@mui/material";
import './index.css'
import App from './App.tsx'
import {theme} from "./styles";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>,
)
