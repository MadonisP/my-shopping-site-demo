import styled from 'styled-components';
import Annauncement from '../components/Annauncement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import {Remove,Add } from "@mui/icons-material";
import { mobile } from "../responsive";


const Container = styled.div``;
const Wrapper = styled.div`
    padding:50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection:"column" })}

`;

const ImageContainer = styled.div`
    flex:1;
`;
const Image = styled.img`
width:100%;
height:90vh;
object-fit:cover;
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}

`;

const Title = styled.h1`
    font-weight:200;
`;

const Description = styled.p`
    margin:20px 0px;
`;

const Price = styled.span`
    font-size:40px;
    font-weight:100
`;

const FilterContainer = styled.div`
width:50%;
margin:30px 0px;    
display: flex;
justify-content: space-between;
${mobile({ width: "100%" })}

`;

const Filter = styled.div`
display: flex;
align-items:center;

`;

const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
`;

const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color};
    margin:0px 5px;
    cursor:pointer;
`;

const FilterSize = styled.select`
padding:5px;
margin-left:10px;
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
width:50%;
display: flex;
align-items:center;
justify-content:space-between;
${mobile({ width: "100%" })}

`;
const AmountContainer = styled.div`
display: flex;
align-items:center;
font-weight:700;
`;
const Amount = styled.span`
width:30px;
height:30px;
border-radius: 10px;
border:1px solid teal;
display: flex;
align-items:center; 
justify-content: center;
margin:0ox 5px;
`;

const Button = styled.button`
    padding:15px;
    border:2px solid teal;
    background-color:white;
    cursor:pointer;
    font-weight:500;

    &:hover{
        background-color:#f8f4f4;
    }
`;

const Product = () => {
    return (
        <Container>
            <Annauncement />
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Description>
                        readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, conten
                        t here', making it look like readable English. Many desktop
                        publishing packages and web page editors now use Lorem Ipsum
                        as their default model text, and a search for 'lorem ipsum'
                        will uncover many web
                    </Description>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product