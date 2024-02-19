import { APIRepository } from "../Repository/APIRepo"


export async function clickGetButton(Repository: APIRepository){
    const {pa,pb,pc} = await Repository.getSomeProfile();

    // some business logics here.

    return {pa:pa,pb:pb,pc:pc,extra:"BUSINESSLOGICTESTING"};
}