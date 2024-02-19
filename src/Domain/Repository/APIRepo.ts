import type { Profile } from "../Model/DataModel";

// DTOs?

export type SObj = {
    pa:String;
    pb:Number;
};

export type APIData = {
    data1: String;
    data2: Number;
    data3: SObj;
    data4: Number[];
};

export type PostResponse = {
    message:String;
    data:{
        extra:String;
    }
}

export interface APIRepository{ // DAO?
    //getAPIData(): Promise<APIData>;
    //sendDataToAPI(): Promise<PostResponse>;
    getSomeProfile(): Promise<Profile>; // 임시적으로 DataModel을 DTO로 사용, Testing
}