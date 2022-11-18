import { Fragment, useContext, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FormControlLabel, FormGroup, ListItem, Switch, Typography } from '@mui/material'

import { Filtros } from '../../components/DashboardComponents'
import logo from '../../assets/logo.png'

import { AuthContext } from '../../contexts/auth'


const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'BET 365', href: '#', current: true },
    { name: 'Betano', href: '#', current: false },
    { name: 'BetFair', href: '#', current: false },

]




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Dashboard() {
    const [isChecked, setIschecked] = useState(true)
    const [isCheckedCopa, setIscheckedCopa] = useState(false)
    const [isCheckedPremier, setIscheckedPremier] = useState(false)
    const [isCheckedSuper, setIscheckedSuper] = useState(false)
    const { logout } = useContext(AuthContext)

    const handleLogout = () => {
        alert("saiu")
    }

    const userNavigation = [
        { name: 'Your Profile', href: '' },
        { name: 'Settings', href: '#' },
        { name: 'Sign out', href: { handleLogout } },
    ]

    const handleChangeEuro = () => {
        setIschecked(true)
        setIscheckedCopa(false)
        setIscheckedPremier(false)
        setIscheckedSuper(false)

    }

    const handleChangeCopa = () => {
        setIschecked(false)
        setIscheckedPremier(false)
        setIscheckedSuper(false)
        setIscheckedCopa(true)

    }

    const handleChangePremier = () => {
        setIschecked(false)
        setIscheckedCopa(false)
        setIscheckedSuper(false)
        setIscheckedPremier(true)

    }

    const handleChangeSuper = () => {
        setIschecked(false)
        setIscheckedCopa(false)
        setIscheckedPremier(false)
        setIscheckedSuper(true)


    }

    return (
        <>

            <div className="min-h-full ">
                <Disclosure as="nav" className="bg-slate-900">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-20 w-30"
                                                src={logo}
                                                alt="Your Company"
                                            />
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (





                                                    <ListItem
                                                        key={item.name}
                                                        onClick={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-gray-900 text-white'
                                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'px-3 py-2 rounded-md text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </ListItem>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            <button
                                                type="button"
                                                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            >
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>

                                            {/* Profile dropdown */}
                                            <Menu as="div" className="relative ml-3">
                                                <div>
                                                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                        <span className="sr-only">Open user menu</span>
                                                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        {userNavigation.map((item) => (
                                                            <Menu.Item key={item.name}>
                                                                {({ active }) => (
                                                                    <a
                                                                        href={item.href}
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100' : '',
                                                                            'block px-4 py-2 text-sm text-gray-700'
                                                                        )}
                                                                    >
                                                                        {item.name}
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block px-3 py-2 rounded-md text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="border-t border-gray-700 pt-4 pb-3">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                            <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                        </div>
                                        <button
                                            type="button"
                                            className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="mt-3 space-y-1 px-2">
                                        {userNavigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>


                <main>
                    <div className='container mx-auto max-w-full p-2 flex-col md:flex-row text-white'>

                        <div className="flex justify-center " >

                            <div className="w-1/2 h-24 bg-slate-700 rounded-md p-1 mx-2 shadow-lg text-center">
                                <FormGroup>
                                    <Typography>Euro Cup</Typography>

                                    <FormControlLabel className="p-2" control={
                                        <Switch size='big'
                                            checked={isChecked}
                                            onChange={handleChangeEuro} />
                                    } />

                                </FormGroup>

                            </div>

                            <div className="w-1/2 bg-slate-700 rounded-md p-1 mx-2 shadow-lg text-center">
                                <FormGroup>
                                    <Typography>Copa Do Mundo</Typography>
                                    <FormControlLabel className="p-2" control={
                                        <Switch
                                            checked={isCheckedCopa}
                                            onChange={handleChangeCopa}
                                            size='big' />} />
                                </FormGroup>
                            </div>

                            <div className="w-1/2 bg-slate-700 rounded-md p-1 mx-2 shadow-lg text-center">
                                <FormGroup>
                                    <Typography>Premier</Typography>
                                    <FormControlLabel className="p-2" control={
                                        <Switch
                                            checked={isCheckedPremier}
                                            onChange={handleChangePremier}
                                            size='big' />} />
                                </FormGroup>
                            </div>

                            <div className="w-1/2  bg-slate-700 rounded-md p-1 mx-2 shadow-lg text-center">
                                <FormGroup>
                                    <Typography>Super Liga</Typography>
                                    <FormControlLabel className="p-2" control={
                                        <Switch
                                            checked={isCheckedSuper}
                                            onChange={handleChangeSuper}
                                            size='big' />} />
                                </FormGroup>
                            </div>

                        </div>


                        {isChecked === true &&
                            <Filtros liga="euro" />
                        }
                        {isCheckedCopa === true &&
                            <Filtros liga="copa" />
                        }
                        {isCheckedPremier === true &&
                            <Filtros liga="premier" />
                        }
                        {isCheckedSuper === true &&
                            <Filtros liga="super" />
                        }


                        <div>

                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}
