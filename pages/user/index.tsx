import React, { useState } from "react";
import Layout from "../../components/Layout";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import PlayArrowTwoToneIcon from "@material-ui/icons/PlayArrowTwoTone";
import ThumbUpAltTwoToneIcon from "@material-ui/icons/ThumbUpAltTwoTone";

export async function getStaticProps(context) {
	const config = await import(`../../data/config.json`);

	return {
		props: {
			siteConfig: config.default,
		},
	};
}

/**
 * 用户中心
 */

const User = ({ id, siteConfig, locale, title }) => {
	return (
		<Layout
			currentPage={{
				text: "用户中心",
				path: "/user",
			}}
			locale={locale}
			config={siteConfig}
		></Layout>
	);
};

export default User;
