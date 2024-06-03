"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Table = () => {

    // const conis = [
    //     {
    //         sr: 1,
    //         name: "Bitcoin",
    //         price: 70000,
    //         high: 80000
    //     },
    //     {
    //         sr: 2,
    //         name: "ETH",
    //         price: 4000,
    //         high: 5000
    //     },
    //     {
    //         sr: 3,
    //         name: "BNB",
    //         price: 500,
    //         high: 600
    //     },
    // ]

    const [coins, setCoins] = useState([]);


    const apiCall = async () => {
        console.log("I am calling API");

        const urlLink = "https://api.coingecko.com/api/v3/coins/markets"

        const headers = {
            params: {
                vs_currency: 'usd',
                per_page: 100
            },
            headers: {
                'accept': 'application/json',
                'x-cg-demo-api-key': 'CG-cyRAoGTLgoBzQLruBCsn4xED',
                'Cookie': '_cf_bm=RSStrPLe1215Wcu19Os9SNbevHjKJj.pFnqXyF121gg-1717440856-1.0.1.1-USDlLGCsxNQt4cRxVaPoJYgh6M7O1w7iY9kag_2EzNKbijhDcAti4VhRzJAIzSeImy_Zm.XEUTS98g0Fh4uDw'
            }
        }
        const apiResponse = await axios.get(urlLink, headers)

        console.log("apiResponse===========>", apiResponse.data);
        setCoins(apiResponse.data);

    }
    useEffect(() => {
        apiCall();
    }, [])


    return (
        <div className="lyt-section">
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">All Time High</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            coins.map((coin: any, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{coin.name}</td>
                                    <td>{coin.current_price}</td>
                                    <td>{coin.ath}</td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table