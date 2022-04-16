import { Button, Stack } from '@mui/material';
import React from 'react';

const Dashboard = () => {
	return (
		<Stack spacing={2} justifyContent="flex-start" direction="row">
			<Button variant="contained">Go to calculator</Button>
		</Stack>
	)
}

export default Dashboard;
