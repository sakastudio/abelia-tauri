import {createContext} from "react";

interface MasterData {
    customers: Customer[];
    emails: Email[];
}

export interface Email {
    id: string;
    from: string;
    fromAddress: string;
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



export const MasterDataContext = createContext<MasterData | undefined>(undefined);

