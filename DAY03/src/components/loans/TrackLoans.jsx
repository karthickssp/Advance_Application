import { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';

const TrackLoans = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [trackingStatus, setTrackingStatus] = useState(null);

  const handleOrderNumberChange = (e) => {
    setOrderNumber(e.target.value);
  };

  const handleTrackOrder = (e) => {
    e.preventDefault();
    const trackingStatusFromAPI = getTrackingStatusFromAPI(orderNumber);
    setTrackingStatus(trackingStatusFromAPI);
  };

  const getTrackingStatusFromAPI = (orderNumber) => {
    const trackingStatuses = [
      { orderNumber: '123456', status: 'Inprogress', day: 'Today' },
      { orderNumber: '789012', status: 'Rejected', day: 'Yesterday' },
      { orderNumber: '345678', status: 'Approved', day: 'Today' },
      { orderNumber: '901234', status: 'Documents Needed', day: 'Yesterday' },
    ];

    return trackingStatuses.find((status) => status.orderNumber === orderNumber) || null;
  };

  return (
    <div>
      <Box width="60%" margin="auto" marginTop="20px">
        <Card>
          <CardContent>
            <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '20px' }}>
              Loan Tracking
            </Typography>
            <form onSubmit={handleTrackOrder}>
              <TextField
                label="Loan Number(ID)"
                variant="outlined"
                fullWidth
                value={orderNumber}
                onChange={handleOrderNumberChange}
                required
                sx={{ marginBottom: '20px' }}
              />
              <Button type="submit" variant="contained" color="primary">
                Track Loan Status
              </Button>
            </form>
          </CardContent>
        </Card>

        {trackingStatus && (
          <Card sx={{ marginTop: '20px' }}>
            <CardContent>
              <Typography variant="h6">Tracking Status:</Typography>
              <Typography>
                {trackingStatus.day} - {trackingStatus.status}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>
    </div>
  );
};

export default TrackLoans;
