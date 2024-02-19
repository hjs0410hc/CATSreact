import { ReactEventHandler, TouchEvent, useEffect, useState } from "react";
import { APIRepository } from "../../Domain/Repository/APIRepo";
import { Profile } from "../../Domain/Model/DataModel";
import { clickGetButton } from "../../Domain/UseCases/clickGetButton";

export function useTestPageController(repository: APIRepository){
    const [currentData, setCurrentData] = useState<Profile | null>(null);

    useEffect(()=>{
        async function init(){
            //const initialProfile = await repository.getSomeProfile();
            setCurrentData({
                pa:"INIT1",
                pb:"INIT2",
                pc:"INIT3"
            });
        }
        init();
    },[])

    const handleClickGetButton = async ()=>{
        const data:Profile = await clickGetButton(repository);
        setCurrentData(data);
    }


    return {currentData,handleClickGetButton}
}