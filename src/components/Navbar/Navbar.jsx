import { ChatBubbleOutline, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNone, SearchOutlined } from '@mui/icons-material'
import React from 'react'
import "./navbar.scss"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlined className='icon' />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlined className='icon' />
                    </div>
                    <div className="item">
                        <FullscreenExitOutlined className='icon' />
                    </div>
                    <div className="item">
                        <NotificationsNone className='icon' />
                    </div>
                    <div className="item">
                        <ChatBubbleOutline className='icon' />
                    </div>
                    <div className="item">
                        <ListOutlined className='icon' />
                    </div>
                    <div className="item">
                        <img className='avatar' src="https://images.pexels.com/photos/12285563/pexels-photo-12285563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar