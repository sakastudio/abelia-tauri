import {createContext} from "react";
import masterData from "../data/master.json";

interface MasterData {
    customers: Customer[];
    emails: Email[];
}

export interface Email {
    id: string;
    from: string;
    subject: string;
    body: string;
    date: string;
    time: string;
    isRead: boolean;
}

interface Customer {
    code: string;
    type: string;
    furiganaSei: string;
    furiganaMei: string;
    nameSei: string;
    nameMei: string
}

const MasterDataContext = createContext<MasterData | undefined>(undefined);

export function MasterDataProvider({ children }: { children: React.ReactNode }) {
    return (
        <MasterDataContext.Provider value={masterData}>
            {children}
        </MasterDataContext.Provider>
    )
}
