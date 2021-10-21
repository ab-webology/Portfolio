import React from 'react'
import './Contacts.css'

import { TextField ,makeStyles} from '@material-ui/core'
import { Container, Grid, Typography } from '@material-ui/core'

const handleSubmit = ()=>{
    console.log()

}
const useStyles=makeStyles({
    light_blue:{
        color:"#00b4d8"
    },
    tiktak_red:{
        color:"#EE1D52"
    }
})
function Contacts() {
const classes=useStyles();
    return (
        <div className="container">
            <div className="about_info">
                <div className="left_info">
                    <Typography variant="h5" className="items">Name:</Typography>
                    <Typography variant="h5" className="items">Phone:</Typography>
                    <Typography variant="h5" className="items">Email:</Typography>
                </div>
                <div className="right_info">
                    <Typography variant="h5" className="items">
                        ABDURAHMAN JEMAL
                    </Typography>
                    <Typography variant="h5" className="items">
                        +251920861401
                    </Typography>
                    <Typography variant="h5" className="items">
                        jabdurahman5695@gmail.com
                    </Typography>
                </div>
            </div>
            <div className="send_message2">
                <div className="send_message">     
                <h3 className="send_title">Send Message</h3>
                <form noValidate>
                    <div className="all_form">
                        <div className="names">
                            <div className="first_name">
                                <label htmlFor="" className="lable">First Name</label><br/>
                                <input type="text" className="text"/>
                            </div>
                            <div className="last_name">
                                <label htmlFor="" className="lable">Last Name</label><br/>
                                <input type="text" className="text"/>
                            </div>
                        </div>
                        <div className="infos">
                            <div className="email">
                                <label htmlFor="" className="lable">Email</label><br/>
                                <input type="text" className="text"/>
                            </div>
                            <div className="phone_input">
                                <label htmlFor="" className="lable">Phone</label><br/>
                                <input type="text"className="text"/>
                            </div>
                        </div>
                        <div className="message_text">
                            <label htmlFor="" className="lable">Message</label> <br />
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="submit_btn">
                            <button type="submit" className="submit" onClick={handleSubmit}>Send</button>
                        </div>
                    </div>
                    {/* <TextField label="First Name" variant="outlined" className={classes.light_blue}/> */}
                </form>
            
                </div></div>

        </div>
    )
}

export default Contacts
