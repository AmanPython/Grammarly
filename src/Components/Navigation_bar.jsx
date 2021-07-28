import React from 'react'
import './navigation.css'
import mygrammarly from '../Components/image/myGrammarly.png'
import account from '../Components/image/account_off.png'
import apps from '../Components/image/apps_off.png'
import logout from '../Components/image/logout.png'
import support from '../Components/image/help_off.png'

const Navigation_bar = () => {
    return (
        <div>
            <div class="main_body">
            <div class="index_item">
            <div class="main_logo">
            </div>
            <p id="edu">EDU</p>
            <div class="list_item box">
                <div class="each_element">
                    <img id="image_list" src={mygrammarly} alt="" width="25px" height="25px"/>
                    <span id="list_items">My Grammerly</span>
                </div>
                <div class="each_element">
                    <img id="image_list" src={account} alt="" width="25px" height="25px"/>
                    <span id="list_items">Account</span>
                </div>
                <div class="each_element">
                    <img id="image_list" src={apps} alt="" width="25px" height="25px"/>
                    <span id="list_items">Apps</span>
                </div>
                <div class="each_element">
                    <img id="image_list" src={logout} alt="" width="25px" height="25px"/>
                    <span id="list_items">Log out</span>
                </div>
            </div>
            <div class="each_element">
                <img id="image_list" src={support} alt="" width="25px" height="25px"/>
                <span id="list_ite">Support</span>
            </div>
        </div>
    </div>
            
        </div>
    )
}

export default Navigation_bar
