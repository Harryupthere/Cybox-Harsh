import React, { useState, useEffect } from 'react';
import dataRoadmap from "../assets/fake-data/data-roadmap";
import PageTitle from "../components/pagetitle";
import RoadMap from "../features/roadmap/home-v3";
import Web3 from 'web3';

import { useWeb3Modal } from '@web3modal/react'
import { useAccount } from 'wagmi';


function RoadMapTwo(props) {

  
  const { address, connector, isConnected } = useAccount()

  const { open, close } = useWeb3Modal()

  let tokenContract = "0xbEACD5D4b997A24209A424A28d13B33055b1864F";
    let tokenABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"FreeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
    let contract = "0x16678882Bcd0298fF1E8B66c691c0D792A56C1d7";
    let abi = [{"inputs":[{"internalType":"address","name":"_router","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"data","type":"string"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"message","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"referer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"regist10","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"JoiningFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TokenContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"UserData","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"string","name":"username","type":"string"},{"internalType":"address","name":"referer","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_joinningPlan","type":"uint256"},{"internalType":"string","name":"_username","type":"string"},{"internalType":"address","name":"_referer","type":"address"}],"name":"freeJoin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_joinningPlan","type":"uint256"},{"internalType":"address","name":"_address","type":"address"}],"name":"getDirectRefer","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_joinningPlan","type":"uint256"},{"internalType":"address","name":"_address","type":"address"}],"name":"getDirects","outputs":[{"components":[{"internalType":"address","name":"user","type":"address"},{"internalType":"string","name":"username","type":"string"},{"internalType":"address","name":"referer","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"}],"internalType":"struct Compensation.reg[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_joinningPlan","type":"uint256"},{"internalType":"address","name":"_address","type":"address"}],"name":"getParentRefer","outputs":[{"internalType":"address[5]","name":"","type":"address[5]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_number","type":"uint256"}],"name":"getRandomNumberFrom","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"isReferralLink","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"isUsernameTaken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_joinningPlan","type":"uint256"},{"internalType":"string","name":"_username","type":"string"},{"internalType":"address","name":"_referer","type":"address"}],"name":"join","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rescueETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"rescueTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_a","type":"uint256"},{"internalType":"uint256","name":"_b","type":"uint256"},{"internalType":"uint256","name":"_c","type":"uint256"},{"internalType":"uint256","name":"_d","type":"uint256"}],"name":"setJoiningFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapRouter","outputs":[{"internalType":"contract IUniswapV2Router","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

    let web3 = new Web3(window.ethereum);
    let contractCall = new web3.eth.Contract(abi, contract);
    let tokenContractCall = new web3.eth.Contract(tokenABI, tokenContract);

    const [data, setData] = useState([]);
    const [id, setId] = useState(0);
    const [item, setItem] = useState(0);

    let dataRoadmap1 = []
    let newuser = {
      id: 0,
      time: 0,
      list: [
          {
              text: `No user Found`
          },

      ],
      positon: 'left',
      style: 'normal'
  }
    useEffect(() => {
        //setInterval(() => {

            getDirectReferral()
        //}, 1000)
    }, []);


    const getId = async(ids) => {
      try{
      setId(ids)
      let parentreferal

    if (!isConnected && (item == 0)) {
alert("please connect wallet")

        setData([newuser])
        return
    }
    if(item != 0){

            parentreferal = await contractCall.methods.getDirectRefer(ids, item).call()
    }
    if (isConnected) {
        if (item == 0) {

            parentreferal = await contractCall.methods.getDirectRefer(ids, address).call()
        } else {
            parentreferal = await contractCall.methods.getDirectRefer(ids, item).call()
        }

    }
    setDisplayDetail(parentreferal)
  }catch(error){
    console.log(error)
  }

    }
    const getSearch = async(itemsk) => {
       
        try{
          setItem(itemsk)
          let items=itemsk;
          if(itemsk == 0 ){
    if(isConnected){
      items=address
    }else{
      setData([newuser])
      alert("please connect wallet")
      return
    }}
    
            let parentreferal = await contractCall.methods
                     .getDirectRefer(id, items)
                     .call();
               await setDisplayDetail(parentreferal);
                   
             }catch(error){
               dataRoadmap1[0] = newuser;
               setData(dataRoadmap1);
             }
        
    }


    const getDirectReferral = async () => {
        try {
            let parentreferal


            if (!isConnected && (item == 0)) {
                setData([newuser])
                return
            }
            if (isConnected) {
                if (item == 0) {
                    parentreferal = await contractCall.methods.getDirectRefer(id, address).call()
                } else {

                    parentreferal = await contractCall.methods.getDirectRefer(id, item).call()
                }

            }
            setDisplayDetail(parentreferal)

        } catch (error) {
           
            setData([newuser])
        }
    }



    const setDisplayDetail = async (datas) => {
    //   if (datas.length <= 0) {
    //     let arr =
    //     {
    //         id: 0,
    //         time: 0,
    //         list: [
    //             {
    //                 text: `there is no data`
    //             },

    //         ],
    //         positon: 'left',
    //         style: 'normal'
    //     }

       
    //     setData([arr])
    //     return
    // }
    let dataRoadmap3=[]
    for (let i = 0; i < datas.length; i++) {
        
        let userData = await contractCall.methods
        .UserData(id, datas[i])
        .call();
        let tt =  parseInt(userData.time)
        tt= new Date (tt)
        tt = tt.toString().substring(8,32)
        let referralData = await contractCall.methods
        .UserData(id, userData.referer)
        .call();
        let arr = {
          id:  i + 1,
          time: `Upline ${i + 1}`,
          list: [
            {
              text: `${datas[i].toString().substring(0, 8)}...${datas[i]
                .toString()
                .substring(datas[i].length - 8, datas[i].length)}`,
            },{
              text: `${userData.username} (Self)`,
            },
            ,{
              text: `${referralData.username} (referer)`,
            },
            {
              text: `${tt} `,
            },
        
          ],
            positon: i % 2 == 0 ? 'left' : 'right',
            style: 'normal'
        }
        dataRoadmap3[i] = arr
    }

    setData(dataRoadmap3)
    }


  return (
    <div className="page-roadmap-v2">
      <PageTitle title="Direct Referral" />
     
      <RoadMap data={data.length <= 0 ? [newuser] : data}  SubmitId={getId} SubmitSearch={getSearch} />
      
      {/* <RoadMap data={dataRoadmap}  SubmitId={getId} SubmitSearch={getSearch} /> */}

    </div>
  );
}

export default RoadMapTwo;
