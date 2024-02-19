import React from 'react';
import { useTestPageController } from './TestPageController';
import { APIRepository } from '../../Domain/Repository/APIRepo';

type TestPageProps = {
    repository: APIRepository;
}

export default function TestPage({repository}:TestPageProps){
    const {currentData, handleClickGetButton} = useTestPageController(repository);

    return (
        <>
            <div>
                <button onClick={handleClickGetButton}>
                    Click da button
                </button>
                <table>
                <tbody>
                <tr>
                    <td>
                        pa
                    </td>
                    <td>
                        {currentData?.pa}
                    </td>
                </tr>
                <tr>
                    <td>
                        pb
                    </td>
                    <td>
                        {currentData?.pb}
                    </td>
                </tr>
                <tr>
                    <td>
                        pc
                    </td>
                    <td>
                        {currentData?.pc}
                    </td>
                </tr>
                </tbody>
                </table>
                
                

            </div>
        
        
        </>

    );
}