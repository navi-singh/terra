import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  bar: {
		width: '80%',
		margin: 'auto',
  },
};

class NavBar extends React.Component {
	state = {
		value: 0,
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};
	render() {
		const { classes} = this.props;
		const { value } = this.state;

		return(
			<div style={styles.bar}>
				<AppBar position="static" 
					color="default"
					>
					<Tabs fullWidth 
						value={ value } 
						onChange={ this.handleChange }
						textColor="primary"
					>
						<Tab label="Home" />
						<Tab label="Contact Us" />
						<Tab label="About Us" />
						<Tab label="Services" />
					</Tabs>
				</AppBar>
			</div>
		)
	}
}
export default NavBar;