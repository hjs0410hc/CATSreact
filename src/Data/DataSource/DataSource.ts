import { Profile } from "../../Domain/Model/DataModel";

export interface DataSource{
    getToSomeProfile():Promise<Profile>;
}