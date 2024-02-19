import axios, { AxiosInstance } from "axios";
import { Profile } from "../../Domain/Model/DataModel";
import { DataSource } from "./DataSource";

export class NetworkDataSourceImpl implements DataSource{
    customAxios: AxiosInstance = axios.create({
        baseURL: 'https://tapi.thxx.xyz:8443',
        headers: {
            "Authorization": "genjinseop"
        }
    });



    async getToSomeProfile(): Promise<Profile> {
        const {data} = await this.customAxios.get("/admin/someProfile");
        return data;
    }
}