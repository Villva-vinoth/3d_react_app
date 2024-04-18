import React, { useState ,useEffect} from 'react'
import DataTable from 'react-data-table-component'
import { GET_HOME_FORM } from '../../../../apiServices'
import axios from 'axios'



const ContactForm1 = () => {

    
  const getDate = (date) => {
    const utcTimeDate = new Date(date);
    const istTime = utcTimeDate.toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata'
    });
    return istTime;

  }
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true

        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true
        },
        {
            
                name: 'Comments',
                selector: row => row.comments,
              
     },
     {
        name: 'Date',
        selector: row => getDate(row.create_At),
        sortable: true

    }
        
    ]

    const [data, setData] = useState([])
    useEffect(() => {
        
        const getFormData = async () => {
            const token = localStorage.getItem('Token');
            await axios.get(GET_HOME_FORM, {
                headers: { 'Authorization': `Bearer ${token}` },
            }).then((response) => {
                if (response.data.success) {
                    console.log(response.data.data)
                    setData(response.data.data)
                }
            }).catch((error) => {
                console.error(error)
            })

        }
        getFormData()
    }, [])
    
const customStyle ={
    headCells:{
        style:{
            fontSize:"16px",
            fontWeight:"600"
        } },
        cells:{
            style:{
                fontSize:"15px",
            }
        }    
}
   

    return (
        <DataTable
           customStyles={customStyle}
            columns={columns}
            data={data}
            // selectableRows
            fixedHeader
            pagination
            highlightOnHover>
            
        </DataTable>
    )
}

export default ContactForm1