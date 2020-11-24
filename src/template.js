import React from 'react';
import Card from '@material-ui/core/esm/Card';
import { Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap';
import CardActions from '@material-ui/core/esm/CardActions';
import CardMedia from '@material-ui/core/esm/CardMedia';
import CssBaseline from '@material-ui/core/esm/CssBaseline';
import Grid from '@material-ui/core/esm/Grid';
import Typography from '@material-ui/core/esm/Typography';
import { makeStyles } from '@material-ui/core/esm/styles';
import Container from '@material-ui/core/esm/Container';
import Link from '@material-ui/core/esm/Link';
import Button from '@material-ui/core/esm/Button';
import axios from 'axios';
import './template.css';
import template1 from './template1.png';
import template2 from './template2.png';
import template3 from './template3.png';
import template4 from './template4.png';
import template5 from './template5.png';
import template6 from './template6.png';
import template7 from './template7.png';
import template8 from './template8.png';
import template9 from './template9.png';

// credit to Material UI for providing Album template
// credit to Google and Microsoft for providing resume templates
function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://material-ui.com/'>
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
		paddingBottom: '69%',
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pics = [
	template1,
	template2,
	template3,
	template4,
	template5,
	template6,
	template7,
	template8,
	template9,
];
const templateIds = [
	'1AeMo9OIXlWWTmKmh2vp2Q_4JXUtMsF1rjFjpDuY6C9w',
	'1jE_IOvOtuzJn4IgNtXrXl_Dcd2OmS3cdADpap7SLWf8',
	'14UYzG62LYX4tbf967RL0le_XC3AHLCmEPeqEoq7_x7c',
	'17n4yjp-Xu-T4zoM1pSQ6zpZynV3erAJjO9GnXnYdKLk',
	'1q5__Wo3JoKr63zeTqxbbKkZzZunv3aEupTsKWf-1M0Q',
	'1ygindFpX8ldVOcIIxr1foV7B4qHsK_eLqWId0cAO6iI',
	'1Dm2W-NTwciOCu7d53GQgxty01drZ7B7zdOkQO3-nh28',
	'19t7w7-9HIxtsnpMvitOzqdb6EBUwq2WOB1bpGCFzgFk',
	'1nfkhP5HA0ARP06xR8Rt75rz0IGSboZ10SOJ5GR6yQmA',
];
const sampleIds = [
	'1mlS3pLobUeJKe1dFFLgE-ziJeMqUZ6apg_8jXQVV0Aw',
	'1vylFEgSuVARyVcd-SZd0DPqCPXZz9RAD07ewk2QmLYM',
	'1TlwKY-5PmBrimIS5SFn6wjRm3yobChRDyjg4-tDQzOs',
	'1fO9Kktrma25hnhRCJr7j28ce0VU7WalgOXt5STxLQwk',
	'16nK360tzyT4cOUlanXlCTNTDRHLI9FwA-1oE9MzS7Vs',
	'1YQmPStmTQlROKsfyPhxZl5Ry8ndn9Kz6bDtliC68yq8',
	'1k70zIwvaDi9k2c6MTcwhpnniFivqYFFxfqsFJGW59Hc',
	'1pzM9DzHYOl4HLxgqz-5WrGdVtFl9k_7DPt2qzG0IhZg',
	'1gjWpHN37MVIL0JBD9ugvPfmnfUsZ3NFhxO3XbHbqp00',
];

export default function Album() {
	const classes = useStyles();
	function handleClick(index) {
		let cookies = document.cookie.split(';');
		let email = '';
		for (var i = 0; i < cookies.length; i++) {
			console.log(cookies[i].replace(/\s/g, ''));
			if (cookies[i].indexOf('email=') != -1) {
				email = cookies[i].replace(/\s/g, '').substring(6);
			}
		}
		axios
			.put('https://comp426-resume-builder.herokuapp.com', {
				email: email,
				data: {
					templateId: templateIds[index],
					sampleId: sampleIds[index],
				},
			})
			.then((res) => {
				window.location = '/resume';
			});
	}

	return (
		<React.Fragment>
			<CssBaseline />
			<main>
				{/* Hero unit */}
				<div className={classes.heroContent}>
 					<Container maxWidth='sm'>
 						<Typography
 							component='h1'
 							variant='h2'
 							align='center'
 							color='textPrimary'
 							gutterBottom
 						>
 							Welcome to Resume Builder
 						</Typography>
 						<Typography
 							variant='h5'
 							align='center'
 							color='textSecondary'
 							paragraph
 						>
 							Choose a template, create an account, and create beautiful
 							resumes!
 						</Typography>
 						<div className={classes.heroButtons}>
 							<Grid container spacing={2} justify='center'>
 								<Grid item>
 									<Button variant='contained' color='inherit'>
 										<Link color='inherit' underline='none' href='signup'>
 											Signup
 										</Link>
 									</Button>
 								</Grid>
 								<Grid item>
 									<Button variant='outlined' color='primary'>
 										<Link color='inherit' underline='none' href='login'>
 											Login
 										</Link>
 									</Button>
 								</Grid>
 							</Grid>
 						</div>
 					</Container>
 				</div>
				<Container className={classes.cardGrid} maxWidth='md'>
					{/* End hero unit */}
					<Grid container spacing={4}>
						{cards.map((card) => (
							<Grid item key={card} xs={12} sm={10} md={4}>
								<Card className={classes.card}>
									<CardMedia
										style={{ height: 0, paddingTop: '125%' }}
										image={pics[card - 1]}
										title='lorem ipsum'
									/>
									<CardActions>
										<Button
											size='small'
											color='primary'
											onClick={() => {
												handleClick(card - 1);
											}}
										>
											Use
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
			{/* Footer */}
			<footer className={classes.footer}>
 				<Typography variant='h6' align='center' gutterBottom>
 					Footer
 				</Typography>
 				<Typography
 					variant='subtitle1'
 					align='center'
 					color='textSecondary'
 					component='p'
 				>
 					Something here to give the footer a purpose!
 				</Typography>
 				<Copyright />
 			</footer>
 			{/* End footer */}
		</React.Fragment>
	);
}
