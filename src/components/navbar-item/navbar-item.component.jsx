import { AiOutlineUser } from 'react-icons/ai';
import { Text , Double } from './navbar-item.styles';

const NavbarItem = ({ icon , name }) => {
    const Icon = icon;
    if( name === "Schedule" ){
        return (
            <Double>
                <Icon color="white"/>
                <Text color="white">{name}</Text>
            </Double>
        )
    }
    return (
        
        <Double>
            <Icon color="#4d4d4d"/>
            <Text>{name}</Text>
        </Double>
    );
}

export default NavbarItem;