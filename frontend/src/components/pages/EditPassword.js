import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function editMenue(index) {
  return {
    id: `vertical-tab-{index}`,
    "arial-controls": `vertical-tabpanel-{index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function EditPassword() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   EditPassword()
  // }, [])
  return (
		<div className={classes.root}>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				air-label="Vertical tabs example"
				className={classes.tabs}
			>
				<Tab label="Edit Profile" {...editMenue(0)} />
				<Tab label="Change Password" {...editMenue(1)} />
				<Tab label="Apps and Websites" {...editMenue(2)} />
				<Tab label="Email and SMS" {...editMenue(3)} />
				<Tab label="Push Notifications" {...editMenue(4)} />
				<Tab label="Manage contacts" {...editMenue(5)} />
				<Tab label="Privacy and Security" {...editMenue(6)} />
				<Tab label="Login Activity" {...editMenue(7)} />
				<Tab label="Email from Instagram" {...editMenue(8)} />
			</Tabs>

			<TabPanel value={value} index={0}>
				Edit Profile
			</TabPanel>
			<TabPanel value={value} index={1}>
				Change Password
			</TabPanel>
			<TabPanel value={value} index={2}>
				Apps and Websites
			</TabPanel>
			<TabPanel value={value} index={3}>
				Email and SMS
			</TabPanel>
			<TabPanel value={value} index={4}>
				Push Notifications
			</TabPanel>
			<TabPanel value={value} index={5}>
				Manage contacts
			</TabPanel>
			<TabPanel value={value} index={6}>
				Privacy and Security
			</TabPanel>
			<TabPanel value={value} index={7}>
				Login Activity
			</TabPanel>
			<TabPanel value={value} index={7}>
				Email from Instagram
			</TabPanel>
		</div>
	);

}
