import masterData from "../data/master.json";
import { MasterDataContext } from "./MasterDataContext";

export function MasterDataProvider({ children }: { children: React.ReactNode }) {
    return (
        <MasterDataContext.Provider value={masterData}>
            {children}
        </MasterDataContext.Provider>
    )
}
