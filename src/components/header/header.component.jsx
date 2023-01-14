import { HeaderContainer , Left , Right , Title , Date , Double , HeaderImage } from "./header.styles";
import { GrCaretDown } from 'react-icons/gr';
import { useState } from 'react';
import {
    FormControl,
    InputAdornment,
    TextField,
    createStyles,
    makeStyles
  } from "@material-ui/core";
  import SearchIcon from "@material-ui/icons/Search";
  import ClearIcon from "@material-ui/icons/Clear";
  
  const useStyles = makeStyles(() => {
    return createStyles({
      search: {
        margin: "0",
        backgroundColor : " #f7f7f7",
        width : "70%"
      }
    });
  });




const Header = () => {

    const { search } = useStyles();
    const [showClearIcon, setShowClearIcon] = useState("none");

    const handleChange = (e) => {
        setShowClearIcon(e.target.value === "" ? "none" : "flex");
      };
    


    return (
        <HeaderContainer>
            <Left>
                <Title>Schedule</Title>
                <Double>
                    <Date>Aug 5, 2021 </Date>
                    <GrCaretDown />
                </Double>
            </Left>
            <Right>
                <FormControl className={search}>
                    <TextField
                    size="small"
                    variant="outlined"
                    placeholder="Search"
                    onChange={handleChange}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                        ),
                        endAdornment: (
                        <InputAdornment
                            position="end"
                            style={{ display: showClearIcon }}
                        >
                            <ClearIcon />
                        </InputAdornment>
                        )
                    }}
                    />
                </FormControl>
                <HeaderImage />
            </Right>
        </HeaderContainer>
    )
}

export default Header;