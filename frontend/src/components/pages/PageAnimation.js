import React from "react";
// import PropTypes from "prop-types";
// // import clsx from "clsx";
// // import SwipeableViews from 'react-swipeable-views';
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
// import Zoom from "@material-ui/core/Zoom";
// import Fab from "@material-ui/core/Fab";
// import AddIcon from "@material-ui/icons/Add";
// import EditIcon from "@material-ui/icons/Edit";
// import UpIcon from "@material-ui/icons/KeyboardArrowUp";
// import { green } from '@material-ui/core/colors';
// import Box from '@material-ui/core/Box';
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ViewModuleOutlinedIcon from "@material-ui/icons/ViewModuleOutlined";
import LiveTvOutlinedIcon from "@material-ui/icons/LiveTvOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import PostsGallery from "../posts/PostsGallery";
// import TabPanel from "@material-ui/lab/TabPanel";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import UnderConstruction from "./UnderConstruction";

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
});

export default function PageAnimation() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const TabPanel = (props) => {
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

	function a11yProps(index) {
		return {
			id: `simple-tab-${index}`,
			"aria-controls": `simple-tabpanel-${index}`,
		};
	}
	// const handleMenuItemClick = (event, index) => {
	// 	alert(`${[index]} feature under construction! `);
	// };

	return (
		<div className={classes.root}>
			<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				centered
			>
				<Tab
					label="POSTS"
					icon={<ViewModuleOutlinedIcon />}
					// onClick={handlePostsGallery}
					{...a11yProps(0)}
				/>
				<Tab label="IGTV" icon={<LiveTvOutlinedIcon />} {...a11yProps(1)} />
				<Tab
					label="SAVED"
					icon={<BookmarkBorderOutlinedIcon {...a11yProps(2)} />}
					// onClick={(event) => handleMenuItemClick(event)}
				/>
				<Tab
					label="TAGGED"
					icon={<AssignmentIndOutlinedIcon {...a11yProps(3)} />}
				/>
			</Tabs>
			<div>
				<TabPanel value={value} index={0}>
					<PostsGallery />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<UnderConstruction />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<UnderConstruction />
				</TabPanel>
				<TabPanel value={value} index={3}>
					<UnderConstruction />
				</TabPanel>
			</div>
		</div>
	);

}
