import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import { Avatar } from '@material-ui/core';
import FlagIcon from '@material-ui/icons/Flag';
import  StoreFrontOutlinedIcon  from '@material-ui/icons/StorefrontOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircle';
import  { useStateValue } from './StateProvider'

function Header() {
    const [{user},dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/120px-Facebook_f_logo_%282019%29.svg.png" 
                alt="" />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>

            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <StoreFrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleOutlinedIcon fontSize="large"/>
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
            </div>
        </div>
    )
}

export default Header
