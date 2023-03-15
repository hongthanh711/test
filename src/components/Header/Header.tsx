import React, { useState } from 'react'

type Props = {}

const Header = (props: Props) => {
    const [isCroll, setIsCroll] = useState<boolean>(false)
    const handleHeader = () => {
        if (window.scrollY >= 100) {
            setIsCroll(true)
        } else {
            setIsCroll(false)
        }
    }
    window.addEventListener('scroll', handleHeader)

    return (
        <div
            className={`bg-slate-50 fixed left-0 right-0 duration-300 z-20 ${
                isCroll ? 'p-4' : 'p-6'
            }`}
        >
            <div className="w-full flex justify-between items-center container mx-auto">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10">
                            <img
                                className="w-full h-full object-cover rounded-full"
                                src="./src/assets/images/logo.png"
                                alt=""
                            />
                        </div>
                        <p className="font-bold text-lg">UniCinema</p>
                    </div>
                    <div>
                        <ul className="flex items-center gap-5 font-medium">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button className="px-6 rounded-lg font-medium">Login</button>
                    <button className="border border-black px-6 rounded-lg font-medium">
                        Register
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
