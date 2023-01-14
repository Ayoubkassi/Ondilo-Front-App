import { Bar , Link , ClickedLink , Column} from "./schedule.styles";
import ScheduleItem from "../schedule-item/schedule-item.component";
import { useState } from 'react';


const Schedule = () => {

    const [color ,setColor] = useState("black");

    return(
        <Column>
            <Bar>
                <ClickedLink>Recent Added</ClickedLink>
                <Link>In Progress</Link>
                <Link>In Review</Link>
                <Link>Completed</Link>
            </Bar>
            <ScheduleItem backColor={color} />
            <ScheduleItem />
            <ScheduleItem />
        </Column>
    );
}

export default Schedule;