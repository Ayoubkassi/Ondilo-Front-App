import { Container , Section , ImageContainer , Column , Date , Title , Desc , Weight } from "./files-item.styles";
import FigmaIcon from '../../assets/figma.png'
import JsonIcon from '../../assets/json.png'
import { HiFolderDownload } from 'react-icons/hi'
import { useState , useEffect } from "react";


const FilesItem = ({ item }) => {

    const [image , setImage ] = useState(FigmaIcon);


    useEffect(() => {
        if( item.image === "json" )
            setImage(JsonIcon)
      }, []);
    

    return (
        <Container>
            <Section>
                <ImageContainer>
                    <img src={image} width={26} height={26} />
                </ImageContainer>
                <Column>
                    <Title>{item.name}</Title>
                    <Date>{item.date}</Date>
                </Column>
            </Section>

            <Desc>
                <Weight>{item.size}</Weight>
                <HiFolderDownload size={25} />
            </Desc>

        </Container>
    );
}

export default FilesItem;