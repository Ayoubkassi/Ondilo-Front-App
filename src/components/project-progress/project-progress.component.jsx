import { FaEllipsisH } from 'react-icons/fa'
import { Double , ProjectContainer , Flex , FlexEnd , Title , Marger , Center , Item , Text , Left , Right , Description} from './project-progress.styles'
import { HiFolderDownload } from 'react-icons/hi'
import { RiEditBoxFill } from 'react-icons/ri'
import { PieChart } from 'react-minimal-pie-chart';
import { BsCircleFill } from 'react-icons/bs';


const ProjectProgress = () => {

    
    return (
        <>
            <Double>
                <h2>Project Progress</h2>
                <FaEllipsisH size={20} />
            </Double>
            <ProjectContainer>
                <Flex>
                    <Title>Illustration Template</Title>
                    <FlexEnd>
                        <Marger>
                            <HiFolderDownload size={21} />
                        </Marger>
                        <RiEditBoxFill size={18} />
                    </FlexEnd>

                </Flex>
                <Center>
                        
                        <Left>
                            <PieChart
                                data={[
                                    { title: 'One', value: 35, color: '#ff5528' },
                                    { title: 'Two', value: 65, color: '#3b2231' },
                                ]}
                                radius = {34}
                                startAngle = {-120}
                                segmentsShift={1}
                                segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                                lineWidth={55}
                                labelPosition={110}
                                label={({ dataEntry }) => `${dataEntry.value}%`}
                                labelStyle={{
                                    color : '#3b2231',
                                    pointerEvents: 'none',
                                    fontSize : '6px',
                                }}
                                
                            />
                        </Left>
                        <Right>
                            <Item>
                                <BsCircleFill color="#ff5528" />
                                <Text>Cartoon Illustration</Text>
                                <Description>Modern storytelling</Description>
                            </Item>

                            <Item>
                                <BsCircleFill color="#3b2231" />
                                <Text>Abstract Pattern</Text>
                                <Description>Geometric Shapes</Description>
                            </Item>
                        </Right>

                </Center>

            </ProjectContainer>
        </>
    );
}

export default ProjectProgress;