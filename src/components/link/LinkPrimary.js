import { Link, Text, Box } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

const LinkPrimary = ({ title, link }) => {
    return (
        <Link as={NextLink} href={link || '/'} >
            <Text
                position='relative'
                _hover={{
                    color: "white",
                    _after: {
                        width: '100%',
                        opacity: 1,
                        left: 0,
                    },
                }}
                _after={{
                    content: "''",
                    height: '2px',
                    width: 0,
                    backgroundColor: '#10b981',
                    position: 'absolute',
                    bottom: '-2px',
                    right: 0,
                    opacity: 0,
                    transition: '.5s',
                }}
            >
                <Box color={'#10b981!important'}>
                    {title}
                </Box>

            </Text>
        </Link>
    )
}

export default LinkPrimary