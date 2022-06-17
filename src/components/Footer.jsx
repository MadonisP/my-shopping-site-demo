import styled from "styled-components"
import { Facebook, Instagram, Twitter, Pinterest,MailOutline,Phone,Room } from "@mui/icons-material";


const Container = styled.div`
display: flex;
`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1``;
const Description = styled.p`
margin: 20px 0px;
`;
const SocialContainer = styled.div`
display: flex;

`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
`;

const Title = styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right = styled.div`    
    flex:1;
    padding: 20px;
`;

const ContactItem=styled.div`
margin-bottom:20px;
display: flex;
align-items:center;
`;
const Payment=styled.img``;

const Footer = () => {
    return (
        <Container>
            <Left>

                <Logo>MSİ.</Logo>
                <Description>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever sinc
                    e the 1500s, when an unknown printer took a galley of type and scrambled i
                    t to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchang
                    ed. It was popularised in the 1960s w
                </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accesories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishtlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}} />
                    bursa yıldırım
                </ContactItem>
                <ContactItem>
                    <Phone  style={{marginRight:"10px"}}/>
                    +12546849
                </ContactItem>
                <ContactItem>
                    <MailOutline  style={{marginRight:"10px"}}/>
                    mertsuha111213@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer