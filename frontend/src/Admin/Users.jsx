import React, { useEffect, useState } from 'react'

import styles from "./Styles/AdminDashboard.module.css"

import mehelLogo from "../Assets/mehelLogo.webp"
import  Skeliton from './UsersSkeliton'

import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../Redux/admin/action'

import { Modal, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, useStatStyles } from '@chakra-ui/react'

import { AiOutlineEdit } from 'react-icons/ai'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { GrView } from 'react-icons/gr'



export default function Users() {

    const adminManager = useSelector((store) => store.adminManager)
    const dispatch = useDispatch()

    const [user, setUser] = useState({})
    const [form, setForm] = useState(false)

    const { isOpen, onOpen, onClose } = useDisclosure()


    useEffect(() => {
        getUser(dispatch)
    }, [])

    return (
        <div className={styles.UsersContainer} >
            <div>
                <p></p>
            </div>
            <img src={mehelLogo} alt="" />
            {
                adminManager.usersListLoading ? <Skeliton /> :
                    <div className={styles.UserResultContainer}  >
                        {
                            adminManager.usersList.map((ele) =>
                                <div>
                                    <div>
                                        <div>
                                            <img src={ele.avatar} alt="" />
                                        </div>
                                        <div>
                                            <h3>Role: {ele.role}</h3>
                                            <h3>{ele.firstname}</h3>
                                        </div>
                                    </div>
                                    <h3>{ele.email}</h3>
                                    <h2><RiDeleteBin5Line /><AiOutlineEdit onClick={() => {
                                        setForm(true)
                                        setUser(ele)
                                        onOpen()
                                    }} />
                                        <GrView onClick={() => {
                                            setForm(false)
                                            setUser(ele)
                                            onOpen()
                                        }} /> </h2>

                                </div>
                            )
                        }
                    </div>

            }
            <Modal isOpen={isOpen} onClose={onClose}>
                {
                    form ?

                        <ModalContent>
                            <ModalHeader>Edit here</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                            </ModalBody>
                            <p>{user.firstname}</p>
                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                                <Button variant='ghost'>Secondary Action</Button>
                            </ModalFooter>
                        </ModalContent>
                        :
                        <ModalContent >
                            <ModalHeader>{user.role == 'user' ? 'More about the user' : 'More about the admin'}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody className={styles.viewMoreUserModal} >
                                <img src={user.avatar} alt="" />
                                <p><span>Name :</span> {user.firstname + ' ' + user.lastname}</p>
                                <p><span>Email :</span> {user.email}</p>
                                <p> <p><span>Gender :</span> {user.gender}</p> <p><span>Role :</span> {user.role}</p> </p>
                                <p><span>Registerdate :</span> {user.registerdate}</p>
                                <p><span>Id :</span> {user._id}</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                }
            </Modal>
        </div>
    )
}
