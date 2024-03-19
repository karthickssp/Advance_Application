
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import { blueGrey, pink, green } from '@mui/material/colors';
import Fade from '@mui/material/Fade';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

const AdminDashboard = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const carouselImages = [
    

    'images/slide1.jpg', 
    'images/slide2.jpg', 
    'images/slide3.jpg', 
  ];


  const additionalBoxItems = [
    {
      title: '  121473   ',
      value: 'Regd. Beneficiary',
    },
    {
      title: '99824 ',
      value: 'No. of Applications',
    },
    {
      title: '₹ 51,543 Cr ',
      value: 'Loan Amt. of Received Appls.',
    },
    {
      title: '207192',
      value: 'User',
    },
    {
      title: '34',
      value: 'State/UTs',
    },
    {
      title: '+',
      value: 'More',
    },
   
    // Add more data as needed
  ];
  const MainBoxItems = [
    {
      title: 'Main Features',
      details: [
        'Convergence with all schemes of central or state government.',
  'Online single window facility in collaboration with participating lending institutions.',
  'Project Management Unit to provide handholding support for projects including project preparation.',
  'Size of the financing facility – ₹ 1 lakh Crore.',
  'Credit Guarantee for loans up to ₹ 2 Crore.',
  'Interest subvention of 3% p.a., limited to ₹ 2 crore per project in one location, though loan amount can be higher.',
  'Cap on lending rate, so that benefit of interest subsidy reaches the beneficiary and services to farmers remain affordable.',
  'Multiple lending institutions including Commercial Banks, Cooperative Banks, RRBs, Small Finance Banks, NCDC, NBFCs etc.',
  'One eligible entity puts up projects in different locations then all such projects will be eligible under the scheme for loan upto ₹ 2 crore.',
  'For a private sector entity, such as farmer, agri entrepreneur, start-up there will be a limit of maximum of 25 such projects.',
  'Limitation of 25 projects will not be applicable to state agencies, national and state federations of cooperatives, federations of FPOs and federation of SHGs.',
  'Cap on lending rate, so that benefit of interest subsidy reaches the beneficiary and services to farmers remain affordable.',
  'Multiple lending institutions including Commercial Banks, Cooperative Banks, RRBs, Small Finance Banks, NCDC, NBFCs etc.',
  
  
        // Add more details as needed
      ]
    },
    {
       title: 'Agriculture Infra Financing Facility',
      details: [
        

            
      
        
      ]
    },
    // {
    //   title: 'Beneficiary Corner',
    //   details: [
        
      
       
    //   ]
    // },
    // Add more data as needed
  ];
  const MainBoxItems1 = [
    
  
    {
      title: 'Beneficiary Corner',
      details: [
        
      
       
      ]
    },
    // Add more data as needed
  ];
 
  return (
    
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw', backgroundColor: green[100] }}>
       <div style={{ backgroundColor: '#006400', height: '18px', width: '100vw' }}></div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '20px', backgroundColor: 'white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBGW1nk4sIiFYko6ZtifcYj7KkN4dn0d4JrKaTa3HyKohnkC4hGZjxUsXBHxlN7IE2LkejLSdX0AihyphenhyphendQFKJ1LhjsVLotmvNVHCaOtitxsvx-sn2KLdPXahxWaMveu6oUI8ONL0lSDi-m2QlCkeT8FPH_HeFHTNnI5sZBmpqirtDL3EFpljFPv7-7PgFw/s320/gova%20logo.jpg" alt="Government Logo" style={{ width: '15%', height: 'auto', marginRight: '20px' }} />
        <div style={{ display: 'flex', justifyContent: 'center' }}></div>
        <div style={{ display: 'flex', marginLeft: '7%' }}>
          <h1 style={{ color: 'black', fontSize: '25px' }}>
            Agriculture Infra Financing Facility<br /><div style={{ height: '5px' }}></div>
            விவசாய உள்கட்டமைப்பு நிதி வசதி <br /><div style={{ height: '5px' }}></div>
            Department of Agriculture & Farmers Welfare
          </h1>
        </div>
        <div style={{ width: '32%' }}></div>
        <img src="https://agriinfra.dac.gov.in/Content/images/AIFRound.gif" alt="Agriculture Infra Financing GIF" style={{ width: '7%', height: 'auto', marginBottom: '20px' }} />
      </div>
      

      <AppBar position="static" sx={{ backgroundColor: '#006400', mt: -4 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AgroFunds
          </Typography>
          <Button component={Link} to="/Home" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/apply" color="inherit">
            Apply Now
          </Button>
          <Button component={Link} to="/aboutScheme" color="inherit">
            About schemes
          </Button>
          <Button component={Link} to="/eligibleproject" color="inherit">
            Eligible projects
          </Button>
          <Button component={Link} to="/fund" color="inherit">
            Fund allocation
          </Button>
          <Button component={Link} to="/resource" color="inherit">
            Resources
          </Button>
          
          {

              isLoggedIn ? (<Avatar
                sx={{ bgcolor: deepOrange[500] }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              />) : (<Button component={Link} to="/login" color="inherit">
              Login
              </Button>)
              }
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        sx={{
          '& .MuiDrawer-paper': {
            width: '200px',
            backgroundColor: '#006400',
            color: 'white',
          },
        }}
      >
        <Toolbar>
          <IconButton backgroundColor='green' aria-label="close" edge="start" onClick={handleDrawerClose} sx={{ marginRight: 2 }}>
            <CancelIcon />
          </IconButton>
        </Toolbar>
        <List>
          <ListItem button component={Link} to="/DrawDash">
            DASHBOARD
          </ListItem>
          <ListItem button component={Link} to="/LoanStatus">
            LOAN STATUS
          </ListItem>
          <ListItem button component={Link} to="/AdminLogin">
            ADMIN
          </ListItem>
          <ListItem button component={Link} to="/login">
            LOGOUT
          </ListItem>
      
        </List>
      </Drawer>

      <Carousel showArrows={true} showThumbs={false} dynamicHeight={false} infiniteLoop={true} autoPlay={true}>
        {carouselImages.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Carousel Image ${index + 1}`}
              style={{ width: '100%', height: '600px' }}
            />
          </div>
        ))}
      </Carousel>

      <p style={{color:'black',marginTop:'10px',fontWeight:'600'}}><marquee>For Capital subsidy on food processing projects please visit <a href="www.agrofundss.in">www.agrofunds.in</a></marquee></p>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '-20px' }}>
       
        {additionalBoxItems.map((item, index) => (
          <AdditionalBoxItem key={index} title={item.title} value={item.value} />
        ))}

     
        
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '20px' }}>
       
       {MainBoxItems.map((item, index) => (
         <MainBoxItem key={index} title={item.title} details={item.details}  />
       ))}

       {MainBoxItems1.map((item, index) => (
         <MainBoxItem key={index} title={item.title} details={item.details}  />
       ))}
      


    
       
     </div>
{/* Footer */}
<div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#006400', color: 'white', padding: '1px', textAlign: 'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: '14px' }}>Ver 7.12.2</span>
        </div>
        <div>
          <span style={{ fontSize: '14px' }}>Website Content Managed by AgroCloud Finance: Revolutionizing Agricultural</span>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {/* Using Material Icons for social media icons */}
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
            <FacebookIcon style={{ fontSize: '20px', '&:hover': { color: '#2196F3' } }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
            <TwitterIcon style={{ fontSize: '20px', '&:hover': { color: '#2196F3' } }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
            <LinkedInIcon style={{ fontSize: '20px', '&:hover': { color: '#2196F3' } }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
            <InstagramIcon style={{ fontSize: '20px', '&:hover': { color: '#2196F3' } }} />
          </a>
        </div>
      </div>
    </div>
    
    
  );
};

const AdditionalBoxItem = ({ title, value, images }) => (
  <div style={{ backgroundColor: 'rgb(40, 167, 69)', padding: '15px', textAlign: 'center', width: '14.9%' }}>
    <Typography variant="h6" sx={{ color: [700] }}>
      {title}
    </Typography>
    <Typography variant="body2" sx={{ color: 'white', marginBottom: '20px' }}>
      {value}
    </Typography>
   
  </div>
);





const MainBoxItem = ({ title, details }) => {
  const [showAllDetails, setShowAllDetails] = useState(false);
  const displayedDetails = showAllDetails ? details : details.slice(0, 5);
  

  return (
    <div style={{ width: '31.5%' }}>
      <div style={{ width: '31.5%', backgroundColor: '#006400', padding: '15px', marginBottom: '10px', width: '97%', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}>
        <Typography variant="h5" sx={{ color: [700] }}>
          {title}
        </Typography>
      </div>
      <div style={{ backgroundColor: 'white', padding: '15px', border: '1px solid #d3d3d3', marginTop: '-10px', width: '97%' }}>
        <Card>
          <CardContent>
            {displayedDetails.map((detail, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <CheckCircleOutlineIcon sx={{ marginRight: '10px', color: '#006400' }} />
                <Typography variant="body2" sx={{ marginBottom: '5px' }}>
                  {detail}
                </Typography>
              </div>
            ))}
            {details.length >0 && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Button
                  variant="text"
                  color="primary"
                  onClick={() => setShowAllDetails(!showAllDetails)}
                  sx={{ '&:hover': { textDecoration: 'underline' } }}
                >
                  {showAllDetails ? 'Less...' : 'More...'}
                </Button>
              </div>
            )}
            {/* Additional content for titles containing 'National Agriculture Infrastructure' */}
            {title === 'Agriculture Infra Financing Facility' && (
              <div>
                <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                The role of infrastructure is crucial for agriculture development and for taking the production dynamics to the next level. It is only through the development of infrastructure,
                 especially at the post harvest stage 
                that the produce can be optimally utilized with opportunity for value addition and fair deal for the farmers. Development of such infrastructure shall also address 
                the vagaries of nature, the regional disparities, development of human resource and realization of full potential of our limited land resource. 
                </Typography>
                {/* Add more paragraphs and details here */}
                <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                In view of above, the Hon’ble Finance Minister announced on 15.05.2020, 1 lakh crore Agri Infrastructure Fund for farm-gate infrastructure for farmers.
                 Financing facility of Rs. 1,00,000 crore will be provided for funding Agriculture Infrastructure Projects at 
                 farm-gate & aggregation points (Primary Agricultural Cooperative Societies, Farmers Producer Organizations, Agriculture entrepreneurs, Start-ups, etc.).
                  Impetus for development of farm gate & aggregation point,
                  affordable and financially viable Post Harvest Management infrastructure
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                Accordingly, DA&FW has formulated the Central Sector Scheme to mobilize a medium - long term debt financing facility for investment in viable projects relating to postharvest management
                 Infrastructure and community farming assets through incentives and financial support.
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                Subsequently, in the budget announcement made on 01.02.2021, it was decided to extend the benefit of the scheme to APMCs. Accordingly, modifications in the scheme were 
                carried out with the approval of Cabinet to make it more inclusive. 
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                Credit guarantee coverage will be available for eligible borrowers from this financing facility under Credit Guarantee Fund Trust for Micro and Small
                 Enterprises (CGTMSE)
                 scheme for loans up to ₹ 2 crore. The fee for this coverage will be paid by the Government. 
                           
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                The Scheme will be operational from 2020-21 to 2032-33. Loan disbursement under the scheme will complete in six years. 
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '10px' }}>
 <li style={{marginLeft:'40px'}}> Loan Application Process Video (English):{' '}
  <a href="https://www.example.com/english-video" target="_blank" rel="noopener noreferrer">
    Watch Video
  </a></li>
</Typography>
<Typography variant="body2" sx={{ marginBottom: '10px' }}>
<li style={{marginLeft:'40px'}}> Loan Application Process Video (English):{' '}
  <a href="https://www.example.com/english-video" target="_blank" rel="noopener noreferrer">
    Watch Video
  </a></li>
</Typography>


              
                {/* Add more paragraphs as needed */}
              </div>
            )}
{title === 'Beneficiary Corner' && (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '20px' }}>
    <div style={{ textAlign: 'center' }}>
      <img src='/images/goverment.png' alt="Government Logo 1" style={{ width: '50%', height: 'auto' }} />
      <p style={{ margin: '5px 0', fontSize: '14px', fontWeight: 'bold' }}>Benefit Under other Schemes</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <img src='/images/short-note.png' alt="Government Logo 2" style={{ width: '50%', height: 'auto' }} />
      <p style={{ margin: '5px 0', fontSize: '14px', fontWeight: 'bold' }}>Scheme Guidelines</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <img src='/images/flats.png' alt="Government Logo 3" style={{ width: '50%', height: 'auto' }} />
      <p style={{ margin: '5px 0', fontSize: '14px', fontWeight: 'bold' }}>DCCBS</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <img src='/images/interest-rate.png' alt="Government Logo 4" style={{ width: '50%', height: 'auto' }} />
      <p style={{ margin: '5px 0', fontSize: '14px', fontWeight: 'bold' }}>Inverestment</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <img src='/images/clipboard.png' alt="Government Logo 5" style={{ width: '50%', height: 'auto' }} />
      <p style={{ margin: '5px 0', fontSize: '14px', fontWeight: 'bold' }}>Circulars</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <img src='/images/traffic-light.png' alt="Government Logo 6" style={{ width: '50%', height: 'auto' }} />
      <p style={{ margin: '5px 0', fontSize: '14px', fontWeight: 'bold' }}>MoU with Banks</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <img src='/images/profile.png' alt="Government Logo 7" style={{ width: '50%', height: 'auto' }} />
      <p style={{ margin: '5px 0', fontSize: '14px', fontWeight: 'bold' }}>Profile</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <img src='/images/key.png' alt="Government Logo 8" style={{ width: '50%', height: 'auto' }} />
      <p style={{ margin: '5px 0', fontSize: '14px', fontWeight: 'bold' }}>Login</p>
    </div>
    {/* Add more images as needed */}
  </div>
)}


           
          </CardContent>
        </Card>
      </div>
    </div>
  );
};








export default AdminDashboard;

