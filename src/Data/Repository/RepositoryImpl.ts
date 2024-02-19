import { Profile } from "../../Domain/Model/DataModel";
import { APIRepository } from "../../Domain/Repository/APIRepo";
import { DataSource } from "../DataSource/DataSource";

export class APIRepositoryImpl implements APIRepository{
    dataSource: DataSource;

    constructor(dataSource: DataSource){
        this.dataSource=dataSource;
    }

    async getSomeProfile(): Promise<Profile> {
        const data:Profile = await this.dataSource.getToSomeProfile();
        return data;
    }

    
}