import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import PodcastsIcon from '@mui/icons-material/Podcasts';

function SocialMedia() {

    const style = {
        color: '#9ca3af',
        width: '27px',
        height: '27px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: '8px',
        cursor: 'pointer',
    }
    const styleIcon = {
        width: '20px',
        height: '20px',
        margin: 'auto'
    }

    return (
        <ul className='flex mt-3 justify-between max-[990px]:justify-center max-[990px]:gap-3'>
            <li style={style}><TelegramIcon style={styleIcon}/></li>
            <li style={style}><InstagramIcon style={styleIcon}/></li>
            <li style={style}><XIcon style={styleIcon}/></li>
            <li style={style}><YouTubeIcon style={styleIcon}/></li>
            <li style={style}><LinkedInIcon style={styleIcon}/></li>
            <li style={style}><FacebookIcon style={styleIcon}/></li>
            <li style={style}><PodcastsIcon style={styleIcon}/></li>
        </ul>
    )
}

export default SocialMedia
