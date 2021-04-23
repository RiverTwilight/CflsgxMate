// import App from "next/app";
import Header from "../components/Header";
import Login from "../components/Login";
import GlobalContext from "../components/GlobalContext";
import { useState, useEffect } from "react";
import {
	createMuiTheme,
	makeStyles,
	createStyles,
	Theme as AugmentedTheme,
	ThemeProvider,
} from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import theme from "../components/theme";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "center",
		background: "#f6f6f6",
	},
	content: {
		flexGrow: 1,
		minHeight: "100vh",
		position: "relative",
		maxWidth: "1000px",
	},
	toolbar: theme.mixins.toolbar,
}));

function MyApp({ Component, pageProps }) {
	const {
		currentPage = {
			title: "404",
		},
		siteConfig,
	} = pageProps;
	console.log(currentPage);
	const classes = useStyles();
	const [userData, setUserData] = useState({});
	const [open, setOpen] = useState(false);
	useEffect(() => {
		fetch(`/api/getUserInfo`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.user) {
					setUserData(data.user);
				} else {
					setOpen(true);
				}
			});
	}, [Component]);
	const handleLoginClose = () => {
		setOpen(false);
	};
	const handleLogin = () => {
		setOpen(true);
	};
	return (
		<>
			<GlobalContext.Provider value={{ userData }}>
				<ThemeProvider theme={theme}>
					<div className={classes.root}>
						<Header
							userData={userData}
							handleLogin={handleLogin}
							title={currentPage.title}
						/>
						<Login
							cbUrl={`${currentPage.path}`}
							onClose={handleLoginClose}
							open={open}
						/>
						<main className={classes.content}>
							<div className={classes.toolbar} />
							<div className={classes.content}>
								<Component userData={userData} {...pageProps} />
							</div>
						</main>
					</div>
				</ThemeProvider>
			</GlobalContext.Provider>
		</>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//     // calls page's `getInitialProps` and fills `appProps.pageProps`
//     const appProps = await App.getInitialProps(appContext);

//     console.log(appProps);

//     return { ...appProps };
// };

export default MyApp;