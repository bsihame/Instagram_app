import React from "react";
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

	function switchButton(index) {
		return {
			id: `simple-tab-${index}`,
			"aria-controls": `simple-tabpanel-${index}`,
		};
	}

	return (
		<>
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
					// {...switchButton(0)}
				/>
				<Tab label="IGTV" icon={<LiveTvOutlinedIcon />} {...switchButton(1)} />
				<Tab
					label="SAVED"
					icon={<BookmarkBorderOutlinedIcon {...switchButton(2)} />}
					// onClick={(event) => handleMenuItemClick(event)}
				/>
				<Tab
					label="TAGGED"
					icon={<AssignmentIndOutlinedIcon {...switchButton(3)} />}
				/>
			</Tabs>
			</div>
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
		{/* </div> */}
		</>
	);

}
