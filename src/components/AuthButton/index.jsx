import React from 'react'
import { BsPerson } from "react-icons/bs";
import { NavLink, useNavigate } from 'react-router-dom'
import '../AuthButton/style.scss'
import { Avatar } from 'antd';
import { Button, Dropdown } from 'antd';

const Auth = () => {

    const navigate = useNavigate()

    const signOut = () => {
        navigate('/')
        localStorage.removeItem('newUser')
        window.location.reload()
    }

    const logOut = () => {
        navigate('/')
        localStorage.removeItem('admin')
        window.location.reload()
    }

    const items = [
        {
            key: '1',
            label: (
                <NavLink to='/admin' rel="noopener noreferrer" >
                    Admin
                </NavLink>
            ),
        },
        {
            key: '2',
            label: (
                <button className="dropdown-item" onClick={logOut}>
                    Log out
                </button>
            ),
        },
    ];

    // const items2 = [
    //     {
    //         key: '3',
    //         label: (
    //             <button className="dropdown-item" onClick={signOut}>
    //                 Log out
    //             </button>
    //         ),
    //     },
    // ];
    const checkUser = () => {
        let user = JSON.parse(localStorage.getItem('newUser'))
        let admin = JSON.parse(localStorage.getItem('admin'))
        if (user !== null) {
            return (<>
                <div>
                    <button className="btn btn-secondary dropdown-toggle" style={{ backgroundColor: '#f8eee4' }} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {user.name.slice(0, 1)}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" onClick={signOut}>Log out</button>
                    </div>
                </div>

                {/* <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottom"
                    arrow
                >
                    <Button style={{ backgroundColor: '#f8eee4' }}>

                        {user.name.slice(0, 1)}

                    </Button>
                </Dropdown> */}
            </>)
        }
        else if (admin !== null) {
            return (<>
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottom"
                    arrow
                >
                    <Button className='btn-antd'>

                        {admin.name.slice(0, 1)}

                    </Button>
                </Dropdown>
            </>)
        }
        else {
            return (<>
                <NavLink className="nav-link" to='/login'>
                    <BsPerson />
                </NavLink>
            </>);

        }
    }

    return (
        <>
            {checkUser()}
        </>
    )
}

export default Auth
