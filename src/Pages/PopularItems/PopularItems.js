import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const PopularItems = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%', height: '500px', backgroundColor: '#2e1534' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab style={{ color: 'white' }} label="Taro Gp-1 V3"  {...a11yProps(0)} > </Tab>
                    <Tab style={{ color: 'white' }} label="Taro Gp-1 Naked" {...a11yProps(1)} />
                    <Tab style={{ color: 'white' }} label="Lifan Kpt-150" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <img width='50%' height='400vh' src='https://ic1.maxabout.us/autos/tw_india//T/2020/6/taro-gp1-250r-rear-3-quarter-view.jpg'></img>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <img width='50%' height='400vh' src='https://deshibiker.com/wp-content/uploads/2019/01/Taro-GP-1-Naked-Sport.jpg'></img>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <img width='50%' height='400vh' src='https://1.bp.blogspot.com/-mOs3gzEt0bI/YNyYr25qVQI/AAAAAAAAAyk/Ztbjqwa7ChIyrHyomzJ64yce77AOf7lxQCLcBGAsYHQ/s922/preview%2B%25285%2529.jpg'></img>
            </TabPanel>
        </Box >
    );
};

export default PopularItems;