import { Container , Section , Images , ImageContainer , Column , Date , Title , HeaderImg} from "./schedule-item.styles";
import { FaPaintBrush } from 'react-icons/fa';
import { useState } from 'react';
import pers1 from '../../assets/pers4.jpg';
import pers2 from '../../assets/pers5.jpg';
import pers3 from '../../assets/pers6.jpg';



const ScheduleItem = ({ item }) => {

    


    return(
        <Container color={item.current}>
            <Section>
                <ImageContainer color={item.current}>
                    <FaPaintBrush color="black"/>
                </ImageContainer>
                <Column>
                    <Title>{item.name}</Title>
                    <Date>{item.date}</Date>
                </Column>
            </Section>

            <Images>
                <HeaderImg src={pers1} />
                <HeaderImg src={pers2} />
                <HeaderImg src={pers3} />
            </Images>
        </Container>
    );
}

export default ScheduleItem;