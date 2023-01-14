import { Wrapper , Title , Double , Date  } from "../meeting/meeting.styles";
import { FiArrowRight } from 'react-icons/fi';
import FilesItem from "../files-item/files-item.component";

const Files = () => {

    return (
        <>
            <Wrapper>
                <Title>Files</Title>
                <Double>
                        <Date>View All</Date>
                        <FiArrowRight />
                </Double>
            </Wrapper>
            <FilesItem />
            <FilesItem />
            <FilesItem />
        </>
    );
}

export default Files;