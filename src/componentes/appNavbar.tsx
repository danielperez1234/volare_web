import React from 'react';
import '../style/appNavbar.css'
export const _ItemNav = (text:string) => {
    return <div className='itemNav'>
        
            {text}
        
    </div>;
}
export const Navbar = () => {
    let links = [
        {
            "ref": "Home",
            "link": "https://icomoon.io/app/#/select/image"
        },
        {
            "ref": "US",
            "link": "source"
        },
        {
            "ref": "How it Works",
            "link": "source"
        },
        {
            "ref": "Contact",
            "link": "source"
        }
    ]

    return (
        <div className='fullnavbar'>
            <nav className="navbar">
                <ul className='ul '>
                    <li className='imageUl'>
                        <img className='logo' src='resources/VolareLogo.png' alt=''/>
                    </li>
                    {
                        links.map((links, indice) => {
                            return (<li className='li' key={indice}><a className='links' href={links.link}>{_ItemNav(links.ref)}</a></li>)
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}
