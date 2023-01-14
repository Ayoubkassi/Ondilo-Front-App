import { Container , Section , Images , ImageContainer , Column , Date , Title , HeaderImg} from "./schedule-item.styles";
import { FaPaintBrush } from 'react-icons/fa';
import { useState } from 'react';
import pers1 from '../../assets/pers1.jpg';
import pers2 from '../../assets/pers2.jpg';
import pers3 from '../../assets/pers3.jpg';



const ScheduleItem = ({ logo, title, date , images , backColor }) => {

    


    return(
        <Container color={backColor}>
            <Section>
                <ImageContainer color={backColor}>
                    <FaPaintBrush color = "black"/>
                </ImageContainer>
                <Column>
                    <Title>Illustration Templates</Title>
                    <Date>9:00 AM - 4:00 PM</Date>
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