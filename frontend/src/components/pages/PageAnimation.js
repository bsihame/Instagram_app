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
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ViewModuleOutlinedIcon from "@material-ui/icons/ViewModuleOutlined";
import LiveTvOutlinedIcon from "@material-ui/icons/LiveTvOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import DisplayPost from "../posts/DisplayPost";

// function TabPanel(props) {
// 	const { children, value, index, ...other } = props;

// 	return (
// 		<Typography
// 			component="div"
// 			role="tabpanel"
// 			hidden={value !== index}
// 			id={`action-tabpanel-${index}`}
// 			aria-labelledby={`action-tab-${index}`}
// 			{...other}
// 		>
// 			{/* {value === index && <Box p={4}>{children}</Box>} */}
// 		</Typography>
// 	);
// }

// TabPanel.propTypes = {
// 	children: PropTypes.node,
// 	index: PropTypes.any.isRequired,
// 	value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
// 	return {
// 		id: `action-tab-${index}`,
// 		"aria-controls": `action-tabpanel-${index}`,
// 	};
// }

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		backgroundColor: theme.palette.background.paper,
// 		width: 700,
// 		position: "center",
// 		background: "#FFFFFF",
// 		// minHeight: 100,
// 		alignItems: "center",
// 	},
// 	fab: {
// 		position: "absolute",
// 		bottom: theme.spacing(1),
// 		right: theme.spacing(1),
// 	},
// 	// fabGreen: {
// 	//   color: theme.palette.common.white,
// 	//   // backgroundColor: green[500],
// 	//   '&:hover': {
// 	//     backgroundColor: green[600],
// 	//   },
// 	// },
// }));

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
	const handleDisplayPost = () => {
		return <DisplayPost />;
	};

	
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
					onClick={handleDisplayPost}
				/>
				<Tab label="IGTV" icon={<LiveTvOutlinedIcon/>} />
				<Tab label="SAVED" icon={<BookmarkBorderOutlinedIcon/>} />
				<Tab label="TAGGED" icon={<AssignmentIndOutlinedIcon/>} />
			</Tabs>
		</div>
	);



	// const classes = useStyles();
	// const theme = useTheme();
	// const [value, setValue] = React.useState(0);

	// const handleChange = (event, newValue) => {
	// 	setValue(newValue);
	// };

	// const handleChangeIndex = (index) => {
	// 	setValue(index);
	// };

	// const transitionDuration = {
	// 	enter: theme.transitions.duration.enteringScreen,
	// 	exit: theme.transitions.duration.leavingScreen,
	// };

	// // const fabs = [
	// // 	{
	// // 		color: "primary",
	// // 		className: classes.fab,
	// // 		icon: <AddIcon />,
	// // 		label: "Add",
	// // 	},
	// // 	{
	// // 		color: "secondary",
	// // 		className: classes.fab,
	// // 		icon: <EditIcon />,
	// // 		label: "Edit",
	// // 	},
	// // 	{
	// // 		color: "inherit",
	// // 		className: clsx(classes.fab, classes.fabGreen),
	// // 		icon: <UpIcon />,
	// // 		label: "Expand",
	// // 	},
	// // ];

	// return (
	// 	<div className={classes.root}>
	// 		<AppBar position="static" color="default">
	// 			<Tabs
	// 				value={value}
	// 				onChange={handleChange}
	// 				indicatorColor="primary"
	// 				textColor="primary"
	// 				variant="fullWidth"
	// 				aria-label="action tabs example"
	// 			>
	// 				<Tab label="POSTS" />
	// 				<Tab label="IGTV" />
	// 				<Tab label="SAVED" />
	// 				<Tab label="TAGGED" />
	// 			</Tabs>
	// 		</AppBar>
	// 		{/* <SwipeableViews
  //       axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
  //       index={value}
  //       onChangeIndex={handleChangeIndex}
  //     >
  //       <TabPanel value={value} index={0} dir={theme.direction}>
  //         Item One
  //       </TabPanel>
  //       <TabPanel value={value} index={1} dir={theme.direction}>
  //         Item Two
  //       </TabPanel>
  //       <TabPanel value={value} index={2} dir={theme.direction}>
  //         Item Three
  //       </TabPanel>
  //     </SwipeableViews> */}
	// 		{/* {fabs.map((fab, index) => (
  //       <Zoom
  //         key={fab.color}
  //         in={value === index}
  //         timeout={transitionDuration}
  //         style={{
  //           transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
  //         }}
  //         unmountOnExit
  //       >
  //         <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
  //           {fab.icon}
  //         </Fab> */}
	// 		{/* </Zoom> */}
	// 		{/* ))} */}
	// 	</div>
	// );
}
