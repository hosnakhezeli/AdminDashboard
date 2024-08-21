// import ChartBars from "./ChartBars"
import { Box } from "@mui/material";
import ReporterBox from "./ReporterBox";
import LayoutContainer from "../../components/container/LayoutContainer";
import AdvBox from "./AdvBox";
import BasicBars from "../dashboard/ChartBars"
import PieArcLabel from "./PieArcLabel"

function Dashboard () {
  return(
    <>
    <LayoutContainer>
     {/* <ChartBars /> */}
      <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 4,
      }}
      >
        <Box sx={{ marginBottom: '6px',display: 'flex', alignItems: 'stretch', }}><ReporterBox /></Box>
        <Box sx={{ flex: 'auto', display: 'flex', alignItems: 'stretch',marginBottom: '6px', marginLeft: '10px'}}><AdvBox /></Box>

      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'stretch',
        paddingTop: 1,
      }}
      >
        <Box sx={{ flex: 2, display: 'flex', alignItems: 'stretch', marginBottom: '6px' }}><BasicBars /></Box>
        <Box sx={{ flex: 1, marginLeft: '10px', display: 'flex', alignItems: 'stretch', marginBottom: '6px' }}><PieArcLabel /></Box>
      </Box>
    </LayoutContainer>
    </>
  );
  };
  
export default Dashboard;
  