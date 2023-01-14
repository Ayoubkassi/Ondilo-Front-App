import { Container , Section , ImageContainer , Column , Date , Title , Desc , Weight } from "./files-item.styles";
import FigmaIcon from '../../assets/figma.png'
import { HiFolderDownload } from 'react-icons/hi'


const FilesItem = () => {
    return (
        <Container>
            <Section>
                <ImageContainer>
                    <img src={FigmaIcon} width={26} height={26} />
                </ImageContainer>
                <Column>
                    <Title>User flow.fig</Title>
                    <Date>Aug 5, 2021 at 9:50 AM</Date>
                </Column>
            </Section>

            <Desc>
                <Weight>0,6 KB</Weight>
                <HiFolderDownload size={25} />
            </Desc>

        </Container>
    );
}

export default FilesItem;