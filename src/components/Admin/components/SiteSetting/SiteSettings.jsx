import React, { useEffect, useState } from 'react'
import { Switch,Divider } from 'antd'
import "./setting.css"
import axios from 'axios'
import { GET_ALL_TOGGLE, UPDATE_SHOW_CASE } from '../../../../apiServices'



const SiteSettings = () => {

    const [getAllStatus, setAllStatus] = useState([]);
    useEffect(() => {
        const getStatus = async () => {
            await axios.get(GET_ALL_TOGGLE).then((res) => {
                if (res.data.success) {
                    console.log(res.data.data)
                    setAllStatus(res.data.data)
                }
            }).catch((err) => {
                console.log(err)
            })
        }
        getStatus()
    }
        , [])

   
    let showCaseData ={
        showcase_id: "",
        showcase_value: ""
    }
    const changeStatus = async (id, status) => {
        let accessToken = localStorage.getItem('Token')
        console.log(status, id)
        showCaseData.showcase_id=id
        if (status == 1) {
            showCaseData.showcase_value=false;
        }
        else{
            showCaseData.showcase_value=true;
        }
        await axios.patch(`${UPDATE_SHOW_CASE}`,showCaseData,{
            headers:{
                Authorization:`Bearer ${accessToken}`,
            }
        }).then((res)=>{
            console.log("updated !")
        }).catch((error)=>{
            console.log("failed to update")
        })
       

    }
    return (
        <div className='admin-products'>
            <div className='wrapper-container'>
                <div className='settings-cont'>
                    <h2> Site Settings</h2>
                    <Divider style={{borderColor:"rgb(207, 207, 207)",borderWidth:"3px",borderRadius:"3px"}}/>

                    <div className='setting-operations'>

                        {
                            getAllStatus.map(itm => {
                                return (
                                    <div className='setting_container'>
                                        <label>{itm.showcase_name}</label>
                                        <Switch
                                            onClick={() => { changeStatus(itm.showcase_id, itm.showcase_value) }}
                                            defaultChecked={itm.showcase_value ? true : false}
                                            checkedChildren="ON" unCheckedChildren="OFF" />
                                    </div>

                                )
                            })
                        }

                    </div>

                </div>

            </div>

        </div>
    )
}

export default SiteSettings