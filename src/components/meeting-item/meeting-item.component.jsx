
import { Container , ImageContainer , Time } from "./meeting-item.styles";


const MeetingItem = ({ item }) => {
    return(
        <Container color={item.current}>
            <ImageContainer color={item.current}>
                <h4>{item.day}</h4>
                <h3>{item.numDay}</h3>
            </ImageContainer >
            {
                item.hours.map((hour) => (
                    <Time color={item.current}>{hour}</Time>
                ))
            }
           
        </Container>
    );
}

export default MeetingItem;