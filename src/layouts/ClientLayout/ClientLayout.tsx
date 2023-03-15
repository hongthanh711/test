import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'

type Props = {}

const ClientLayout = (props: Props) => {
    return (
        <div>
            <Header />
            <div className="pt-24">
                <Outlet />
            </div>
        </div>
    )
}

export default ClientLayout
