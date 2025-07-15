import {MantineProvider} from '@mantine/core'
import './App.css'
import {Desktop} from './components/Desktop'
import {MasterDataProvider} from "./contexts/MasterDataProvider.tsx";

function App() {
    return (
        <MantineProvider>
            <MasterDataProvider>
                <Desktop/>
            </MasterDataProvider>
        </MantineProvider>
    );
}

export default App
