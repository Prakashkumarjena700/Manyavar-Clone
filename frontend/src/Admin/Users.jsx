import React, { useEffect, useState } from 'react'

import styles from "./Styles/AdminDashboard.module.css"

import mehelLogo from "../Assets/mehelLogo.webp"
import Skeliton from './UsersSkeliton'

import { useDispatch, useSelector } from 'react-redux'
import { getUser, updateUser, deleteUser } from '../Redux/admin/action'

import { Modal, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, Input, Select, useToast, Spinner } from '@chakra-ui/react'

import { AiOutlineEdit } from 'react-icons/ai'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { GrView } from 'react-icons/gr'



export default function Users() {

    const adminManager = useSelector((store) => store.adminManager)
    const dispatch = useDispatch()

    const [user, setUser] = useState({})
    const [form, setForm] = useState(false)

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [gender, setGender] = useState('')

    const { isOpen, onOpen, onClose } = useDisclosure()

    const toast = useToast()

    useEffect(() => {
        getUser(dispatch)
    }, [])

    const UpdateUser = () => {
        const obj = {
            firstname: firstname || user.firstname,
            lastname: lastname || user.lastname,
            email: email || user.email,
            role: role || user.role,
            gender: gender || user.gender
        }
        updateUser(dispatch, user._id, obj)

        setTimeout(() => {
            getUser(dispatch)
            toast({
                title: 'Product has been updated.',
                description: "Update has been reflected on the product page",
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top',
            })
            onClose()
        }, 2000);
    }

    const DeleteFunction = (ele) => {
        deleteUser(dispatch, ele._id)
        setTimeout(() => {
            getUser(dispatch)
            toast({
                title: 'User has been deleted.',
                description: "User is get remove from the database",
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top',
            })
        }, 2000);
    }

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
                                <div key={ele._id} >
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
                                    <h2>
                                        <button onClick={() => {
                                            setUser(ele)
                                            DeleteFunction(ele)
                                        }} >{ele._id === user._id ? <Spinner size='sm' /> : <RiDeleteBin5Line />}</button>
                                        <AiOutlineEdit onClick={() => {
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
                                <Input placeholder='First Name :' mb='2' onChange={(e) => setFirstName(e.target.value)} />
                                <Input placeholder='Last Name :' mb='2' onChange={(e) => setLastName(e.target.value)} />
                                <Input placeholder='Email :' mb='2' onChange={(e) => setEmail(e.target.value)} />
                                <Select color='#7C899E' mb='2' onChange={(e) => setRole(e.target.value)}  >
                                    <option value="">Role</option>
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </Select>
                                <Select color='#7C899E' onChange={(e) => setGender(e.target.value)} >
                                    <option value="">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Select>
                            </ModalBody>
                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={UpdateUser}>
                                    {
                                        adminManager.updateusersLoading ? <Spinner /> : 'Update'
                                    }
                                </Button>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                        :
                        <ModalContent >
                            <ModalHeader>More about the user</ModalHeader>
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
