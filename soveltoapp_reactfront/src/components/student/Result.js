import React from 'react'
/* import { studentScore } from ''; */

const Score =() => {

    sessionStorage.removeItem('started')


        return (
            <div>
                <h2 className="detail_header">Hienosti vedetty!</h2>
                <table>
                <tbody>
                    <tr>
                    <th>Nimimerkki</th>
                    <th>Tulos</th>
                    </tr>
                    <tr>
                        <td>{sessionStorage.getItem('nick')}</td>
                        <td>{sessionStorage.getItem('result')}%</td>
                    </tr>
                    </tbody>
                </table>
                </div>
        )
}

export default Score;