import { AiOutlineUser } from 'react-icons/ai';
import { Text , Double } from './navbar-item.styles';

const NavbarItem = ({ icon , name }) => {
    const Icon = icon;
    return (
        
        <Double>
            <Icon color="#a8a4a3"/>
            <Text>{name}</Text>
        </Double>
    );
}

export default NavbarItem;