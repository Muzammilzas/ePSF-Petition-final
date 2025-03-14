import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navigation: React.FC = () => {
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 3 }}>
        {/* Left section - Logo */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flex: 1
          }}
        >
          <img 
            src="/your-logo.png" 
            alt="ePSF Logo" 
            style={{ 
              height: '40px',
              width: 'auto',
            }} 
          />
        </Box>

        {/* Right section - Admin buttons */}
        {isAdmin && (
          <Box 
            sx={{ 
              display: 'flex', 
              gap: 1,
              alignItems: 'center',
              justifyContent: 'flex-end',
              flex: 1
            }}
          >
            <Button
              component={RouterLink}
              to="/admin/dashboard"
              variant="text"
              size="large"
              sx={{
                color: '#01BD9B',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: 'rgba(1, 189, 155, 0.04)',
                },
              }}
            >
              Dashboard
            </Button>
            <Button
              component={RouterLink}
              to="/admin/create"
              variant="text"
              size="large"
              sx={{
                color: '#01BD9B',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: 'rgba(1, 189, 155, 0.04)',
                },
              }}
            >
              Create Petition
            </Button>
            <Button
              onClick={handleSignOut}
              variant="text"
              size="large"
              sx={{
                color: '#E0AC3F',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: 'rgba(224, 172, 63, 0.04)',
                },
              }}
            >
              Sign Out
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation; 