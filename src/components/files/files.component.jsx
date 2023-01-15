import { Wrapper , Title , Double , Date  } from "../meeting/meeting.styles";
import { FiArrowRight } from 'react-icons/fi';
import FilesItem from "../files-item/files-item.component";
import data from '../../data.json';

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
            {
                data.files.map((file , index) => (
                    <FilesItem item = {file} key={index} />
                ))
            }
            
        </>
    );
}

export default Files;