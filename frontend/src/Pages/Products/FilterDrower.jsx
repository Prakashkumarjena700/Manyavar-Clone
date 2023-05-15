import React from 'react'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input
} from '@chakra-ui/react'

import styles from './Products.module.css'

export default function FilterDrower() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <>
            <p ref={btnRef} colorScheme='teal' onClick={onOpen}>
                FILTER
            </p>
            <Drawer
                isOpen={isOpen}
                placement='bottom'
                onClose={onClose}
                size='full'
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bg='#FFFBF2' >
                    <DrawerCloseButton />
                    <DrawerHeader>Filter</DrawerHeader>

                    <DrawerBody className={styles.filterdrawerBody}  >

                        <button>
                            CLOSE
                        </button>
                        <button>
                            APPLY
                        </button>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}
