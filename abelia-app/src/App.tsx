import {MantineProvider} from '@mantine/core'
import './App.css'
import {Desktop} from './components/Desktop'

function App() {
    return (
        <MantineProvider>
            <Desktop/>
        </MantineProvider>
    );
}

export default App
