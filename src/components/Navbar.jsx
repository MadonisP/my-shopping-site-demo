import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
    height:60px;
`
const Wrapper = styled.div`
    padding:10px 20px; 
    display: flex;   
    justify-content: space-between; 
    align-items:center;
    
`;

const Left = styled.div`
   flex:1;
   display:flex;
   align-items:center;
`;

const Language = styled.span`
    font-size:14px;
    cursor:pointer;
`;

const SearchContainer = styled.div`
    border:1px solid lightgray
    flex:1;
    align-items:center;
    margin-left:25px;
    padding:5px;
`

const Input = styled.input`
border:none;
`

const Center = styled.div`
    flex:2;
    text-align:center;
`

const Logo = styled.h2`
    font-weight:bold;
`
const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
`

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <input />
                        <Search style={{color:"gray",fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>MSİ.</Logo></Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign in</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar