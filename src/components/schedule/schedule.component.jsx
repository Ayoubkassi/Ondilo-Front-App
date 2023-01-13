import { Bar , Link , ClickedLink , Column} from "./schedule.styles";
import ScheduleItem from "../schedule-item/schedule-item.component";

const Schedule = () => {
    return(
        <Column>
            <Bar>
                <ClickedLink>Recent Added</ClickedLink>
                <Link>In Progress</Link>
                <Link>In Review</Link>
                <Link>Completed</Link>
            </Bar>
            <ScheduleItem />
            <ScheduleItem />
            <ScheduleItem />
        </Column>
    );
}

export default Schedule;