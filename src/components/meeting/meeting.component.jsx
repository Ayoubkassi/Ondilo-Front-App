import { GrCaretDown } from 'react-icons/gr';
import { Title , Date , Double  , Wrapper , Container , MeetingContainer} from "./meeting.styles";
import MeetingItem from '../meeting-item/meeting-item.component';
import { useState } from 'react';


const Meeting = () => {

    const [color ,setColor] = useState("black");


    return (
        <Container>
            <Wrapper>
                <Title>Meeting</Title>
                <Double>
                        <Date>Aug 3, 2021 - Aug 7, 2021 </Date>
                        <GrCaretDown />
                </Double>
            </Wrapper>
            <MeetingContainer>
                <MeetingItem />
                <MeetingItem />
                <MeetingItem />
                <MeetingItem backColor = {color} />
                <MeetingItem />
            </MeetingContainer>
        </Container>
    );
}

export default Meeting;