import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    direction : "rtl",
    palette : {
         background: {
            default: "#F0F0F5",  
            paper: "#FFFFFF",    
        },
          primary: {
            main: "#4C9F70",    
            contrastText: "#FFFFFF",  
          },
          secondary: {
            main: "#FFB100",    
            contrastText: "#FFFFFF",  
          },
          
          info: {
            main: "#333A56",  
            contrastText: "#FFFFFF",  
          },
          text: {
            primary: "#333333",  
            secondary: "#666666",  
          },
    },
    typography : {}
})


export default theme;