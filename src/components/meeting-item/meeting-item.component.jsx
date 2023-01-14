
import { Container , ImageContainer , Time } from "./meeting-item.styles";


const MeetingItem = ({ backColor }) => {
    return(
        <Container color={backColor}>
            <ImageContainer color={backColor}>
                <h4>Mon</h4>
                <h3>3</h3>
            </ImageContainer >
            <Time color={backColor}>9:00 AM</Time>
            <Time color={backColor}>2:00 AM</Time>
            <Time color={backColor}>4:00 AM</Time>
        </Container>
    );
}

export default MeetingItem;