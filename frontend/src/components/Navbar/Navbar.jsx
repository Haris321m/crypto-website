import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io';
import gsap from 'gsap';

const navigation = [
    {
        name: 'Products',
        href: '#',
        current: true,
        subItems: [
            { name: 'Nansen 2', href: '/nansen', description: 'The most powerful tool for onchain investor.' },
            { name: 'Alpha', href: '/alpha', description: 'A highly vetted community of crypto investor, founders and investment experts.' },
            { name: 'Portfolio', href: '/portfolio', description: 'Track all your holding accross 10+ chains.' },
            { name: 'Research', href: '#', description: 'Professional data-driven crypto research.' },
            { name: 'Query', href: '/query', description: 'Empowering crypto learn with advanced blockchain data.' }
        ]
    },
    {
        name: 'Solution',
        href: '#',
        current: true,
        subItems: [
            { name: 'Crypto Investors', href: '/Solutions' },
            { name: 'Venture Capital', href: 'VENTURECAPITAL' },
            { name: 'Blockchain and L2', href: 'Blockchain and L2s' },
            { name: 'Exchanges and Marketplace', href: 'RYPTO EXCHANGES MARKETPLACES' },
            { name: 'Crypto and Defi Protocol', href: 'CRYPTO & DEFI PROTOCOLS' },
            { name: 'Infrastructure and Services Provider', href: 'INFRASTRUCTURE & SERVICE PROVIDERS' }
        ]
    },
    {
        name: 'Learn',
        href: '#',
        current: true,
        subItems: [
            { name: 'Insights', href: '/Learning', description: 'The most powerful tool for onchain investor.' },
            { name: 'Blogs', href: '/Blog', description: 'A highly vetted community of crypto investor, founders and investment experts.' },
            { name: 'Guide', href: '#', description: 'Track all your holding accross 10+ chains.' },
            { name: 'Newsletter', href: '#', description: 'Professional data-driven crypto research.' },
            { name: 'Help center', href: '#', description: 'Empowering crypto learn with advanced blockchain data.' }
        ]
    },
    {
        name: 'Pricing',
        href: '#',
        current: true,
    },
];

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navbarRef = useRef(null);

    useEffect(() => {
        gsap.from(navbarRef.current, {
            opacity: 0,
            y: -20,
            duration: 2,
            stagger: 0.1,
        });
        gsap.to(navbarRef.current, {
            opacity: 1,
            y: 0,
            duration: 2,
            stagger: 0.1,
        });
    }, []);

    const handleDropdownEnter = (index) => {
        setActiveDropdown(index);
    };

    const handleDropdownLeave = () => {
        setActiveDropdown(null);
    };

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div ref={navbarRef} className=" text-white flex justify-between items-center px-6 py-4 z-20 relative">
            <div className="flex items-center">
                <Link to="/"><img src={logo} alt="Logo" className="h-10" /></Link>
            </div>
            <div className="hidden md:flex space-x-8">
                {navigation.map((navItem, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => handleDropdownEnter(index)}
                        onMouseLeave={handleDropdownLeave}
                        className="relative"
                    >
                        {navItem.subItems ? (
                            <>
                                <span className="cursor-pointer flex items-center hover:text-light-green">{navItem.name}<IoIosArrowDown /></span>
                                {activeDropdown === index && (
                                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 mt-2 bg-green-800 border-2 border-green-500 rounded-lg shadow-lg">
                                        <ul className="flex flex-col text-left w-64 top-0">
                                            {navItem.subItems.map((subItem, subIndex) => (
                                                <li key={subIndex} className="px-4 py-2 hover:bg-green-500 hover:text-black -top-1">
                                                    {navItem.name === 'Solution' && subIndex === 0 ? (
                                                        <Link to={subItem.href} className="block">
                                                            <div className="font-bold">{subItem.name}</div>
                                                            {subItem.description && <div className="text-sm">{subItem.description}</div>}
                                                        </Link>
                                                    ) : navItem.name === 'Solution' ? (
                                                        <ScrollLink
                                                            to={subItem.href}
                                                            smooth={true}
                                                            duration={500}
                                                            className="block cursor-pointer"
                                                        >
                                                            <div className="font-bold">{subItem.name}</div>
                                                            {subItem.description && <div className="text-sm">{subItem.description}</div>}
                                                        </ScrollLink>
                                                    ) : (
                                                        <Link to={subItem.href} className="block">
                                                            <div className="font-bold">{subItem.name}</div>
                                                            {subItem.description && <div className="text-sm">{subItem.description}</div>}
                                                        </Link>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link className="nav-link" to={navItem.href}>{navItem.name}</Link>
                        )}
                    </div>
                ))}
            </div>
            <div className="hidden md:flex items-center space-x-6">
                <span className="cursor-pointer hover:text-green-500">Contact Sales</span>
                <button className="border-3 border-green-500 text-green-500 px-6 py-2 rounded-full hover:bg-white hover:text-black">Launch App</button>
            </div>
            <div className="md:hidden flex items-center">
                <button onClick={handleMobileMenuToggle} className="text-2xl"><IoIosMenu /></button>
            </div>
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-gray-900 text-white p-4 shadow-lg z-20 md:hidden">
                    <ul className="flex flex-col space-y-4">
                        {navigation.map((navItem, index) => (
                            <li key={index} className="relative">
                                {navItem.subItems ? (
                                    <>
                                        <span
                                            className="cursor-pointer flex items-center justify-between"
                                            onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                                        >
                                            {navItem.name}
                                            <IoIosArrowDown />
                                        </span>
                                        {activeDropdown === index && (
                                            <div className="mt-2 bg-green-800 border-2 border-green-500 rounded-lg shadow-lg">
                                                <ul className="flex flex-col text-left w-64">
                                                    {navItem.subItems.map((subItem, subIndex) => (
                                                        <li key={subIndex} className="px-4 py-2 hover:bg-green-500 hover:text-black">
                                                            <Link to={subItem.href} className="block">
                                                                <div className="font-bold">{subItem.name}</div>
                                                                {subItem.description && <div className="text-sm">{subItem.description}</div>}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link to={navItem.href} className="block">{navItem.name}</Link>
                                )}
                            </li>
                        ))}
                        <li>
                            <span className="cursor-pointer hover:text-green-500">Contact Sales</span>
                        </li>
                        <li>
                        <button className="border-2 border-light-green text-green-500 px-6 py-2 rounded-full hover:bg-white hover:text-black">Launch App</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
