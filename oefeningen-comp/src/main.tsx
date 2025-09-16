import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Exercise from "./Components/intro/Exercise.tsx";
import titles from "./Data/Titles.tsx"
import './assets/main.css';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        
        <Exercise titles={titles}>

        </Exercise>


    </StrictMode>
)
