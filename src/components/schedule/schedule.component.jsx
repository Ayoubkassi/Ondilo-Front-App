import { Bar , Link , ClickedLink , Column} from "./schedule.styles";
import ScheduleItem from "../schedule-item/schedule-item.component";
import { useState } from 'react';
import data from '../../data.json';



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
            {
                data.tasks.map((task , index) => (
                    <ScheduleItem item={task} key={index} />
                ))
            }
            
        </Column>
    );
}

export default Schedule;