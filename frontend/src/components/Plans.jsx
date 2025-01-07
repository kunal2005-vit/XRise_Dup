import React, { useState,useEffect } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  Box,
  Grid,
  Heading,
  Text,
  Stack,
  Button,
  Badge,
  VStack,
} from "@chakra-ui/react";
import "../styles/Plans.css"; // Custom CSS file

// Individual Plan Card Component
const PlanCard = ({ plan, onAddToCart, onMoreDetails }) => {
  return (
    <Box
      className="plan-card"
      maxW="350px"
      w="full"
      bg="white"
      boxShadow="md"
      rounded="lg"
      overflow="hidden"
      border="1px solid"
      borderColor="gray.200"
    >
      <Box p={6}>
        <Stack align="center" spacing={2}>
          <Badge px={2} py={1} colorScheme={plan.badgeColor} rounded="full">
            {plan.type}
          </Badge>
          <Heading fontSize="2xl">{plan.name}</Heading>
          <Text fontSize="sm" color="gray.600" textAlign="center">
            {plan.description}
          </Text>
          <Text fontWeight="bold" fontSize="3xl">
            ${plan.price}/month
          </Text>
        </Stack>
        <Stack mt={6} spacing={3}>
        <Button
  className="more-details"
  onClick={() => onMoreDetails(plan)}
  aria-label={`More details about ${plan.type}`}
>
  More Details
</Button>
<Button
  className="add-to-cart"
  onClick={() => onAddToCart(plan)}
  aria-label={`Add ${plan.type} plan to cart`}
>
  Add to Cart
</Button>

        </Stack>
      </Box>
    </Box>
  );
};

// Main Component to Display Subscription Plans
const Plans = () => {
const location = useLocation();
      const [showNavbar, setShowNavbar] = useState(true);
        const [lastScrollY, setLastScrollY] = useState(0);
      useEffect(() => {
          const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowNavbar(currentScrollY < lastScrollY || currentScrollY <= 50);
            setLastScrollY(currentScrollY);
          };
      
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, [lastScrollY]); // Use location hook
  const [cart, setCart] = useState([]);
  
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();
  
  const handleAddToCart = (plan) => {
    setCart((prevCart) => [...prevCart, plan]);
  };

  const handleRemoveFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const handleMoreDetails = (plan) => {
    setSelectedPlan(plan);
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    const unblock = (e) => {
      if (cart.length > 0) {
        e.preventDefault();
        setShowWarning(true);
      }
    };

    window.addEventListener("beforeunload", unblock);

    return () => {
      window.removeEventListener("beforeunload", unblock);
    };
  }, [cart]);

  // Handle Navigation via Links
  const handleNavigation = (path) => {
    if (cart.length > 0) {
      setShowWarning(true);
    } else {
      navigate(path);
    }
  };

  const handleClearCart = () => {
    setCart([]);
  };
  const confirmNavigation = () => {
    setCart([]);
    setShowWarning(false);
    navigate(location.pathname); // Navigate to the intended location
  };

  const handleClearCartAndNavigate = () => {
    setCart([]); // Clear cart
    setShowWarning(false);
  };

  const handlePayNow = () => {
    alert("Redirecting to UPI payment...");
    // Add payment logic here
  };

  const plans = [
    {
      type: "Starter",
      name: "Starter Plan",
      description: "Ideal for parents who want to introduce their children to gamified learning with XRise.",
      "price": 10,
      "badgeColor": "green",
      "features": [
        "Access to 5 foundational VR/AR games",
        "Weekly progress insights for parents",
        "Guided relaxation exercises",
        "Access to community forums for support"
      ],
      "additionalInfo": "A perfect entry point for new users to explore the benefits of immersive learning."
    },
    
    {
      "type": "Growth",
      "name": "Growth Plan",
      "description": "Designed to aid children’s cognitive and emotional development through interactive VR/AR games.",
      "price": 25,
      "badgeColor": "blue",
      "features": [
        "Access to 15 advanced VR/AR games",
        "Personalized learning plans",
        "Progress tracking dashboard for parents",
        "Exclusive parent webinars and workshops",
        "Priority email support"
      ],
      "additionalInfo": "A balanced plan focusing on engagement and growth for children and their families."
    }
    ,
    {
      "type": "Therapist",
      "name": "Therapist Plan",
      "description": "Empower therapists with tools to enhance therapy sessions for children with ADHD and autism.",
      "price": 50,
      "badgeColor": "purple",
      "features": [
        "Access to 25+ therapy-focused VR/AR games",
        "Customizable therapy sessions",
        "Detailed analytics and behavior insights",
        "Child-specific progress reports",
        "Dedicated professional support"
      ],
      "additionalInfo": "Optimized for therapists and educators to achieve better outcomes in therapy sessions."
    },
    {
      "type": "Comprehensive",
      "name": "Comprehensive Plan",
      "description": "A complete solution for families or clinics looking to transform learning and therapy experiences.",
      "price": 75,
      "badgeColor": "gold",
      "features": [
        "Unlimited access to all XRise VR/AR games",
        "Multi-user accounts (up to 8 users)",
        "Real-time progress updates for parents and therapists",
        "Advanced analytics with tailored insights",
        "Priority 24/7 support and consultation"
      ],
      "additionalInfo": "Best suited for clinics, educational institutions, or families with multiple children."
    },
    {
      "type": "Customized",
      "name": "Customized Care Plan",
      "description": "A flexible plan to address unique developmental needs of children with ADHD and autism.",
      "price": "Contact Us",
      "badgeColor": "red",
      "features": [
        "Custom game development and scenarios",
        "Dedicated support team",
        "Behavioral and therapy-specific goals",
        "Access to all parent and therapist features"
      ],
      "additionalInfo": "Reach out to us to create a plan tailored to your child’s specific needs."
    }        
  ];

  return (
    <div>
       <nav
        className={`navbar navbar-expand-lg navbar-dark bg-primary shadow-lg ${showNavbar ? 'sticky-top' : 'navbar-hidden'}`}
        style={{
          transition: 'transform 0.3s ease-in-out',
          transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
          height: '70px',
        }}
      >
              <div className="container">
                <Link to="/" className="navbar-brand fs-4">
                  <i className="bi bi-stars me-2"></i>XRise
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" style={{ backgroundColor: '#0d6efd'  }}>
                  <ul className="navbar-nav ms-auto">
                    {[
                      { path: '/', label: 'Home', icon: 'bi-house' },
                      { path: '/profile', label: 'Profile', icon: 'bi-person-circle' },
                      { path: '/parentdashboard', label: 'Parentdashboard', icon: 'bi-people' },
                      { path: '/contact', label: 'Contact Us', icon: 'bi bi-person-rolodex' },
                    ].map((navItem) => (
                      <li className="nav-item" key={navItem.path}>
                        <Link
                          to={navItem.path}
                          className={`nav-link ${
                            location.pathname === navItem.path ? 'active bg-light text-primary rounded px-3' : ''
                          }`}
                        >
                          <i className={`bi ${navItem.icon} me-2`}></i>
                          {navItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>
      
      <Box py={10} px={5}>
        <Heading textAlign="center" mb={6} marginTop={5}>
          Choose Your Plan
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={6}
          justifyItems="center"
        >
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              plan={plan}
              onAddToCart={handleAddToCart}
              onMoreDetails={handleMoreDetails}
            />
          ))}
        </Grid>
  
        <Box mt={10}>
          <Heading size="md">Your Cart</Heading>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderWidth="1px"
                rounded="md"
                p={4}
                mb={2}
              >
                <Text>{item.name}</Text>
                <Text>${item.price}</Text>
                <Button
                  size="sm"
                  colorScheme="red"
                  onClick={() => handleRemoveFromCart(index)}
                >
                  Remove
                </Button>
              </Box>
            ))
          ) : (
            <Text>No items in cart</Text>
          )}
          {cart.length > 0 && (
            <Box mt={4}>
              <Text fontWeight="bold">Total: ${calculateTotal()}</Text>
              <Button colorScheme="teal" mt={2}>
                Pay via UPI
              </Button>
              <Button
                colorScheme="red"
                mt={2}
                ml={4}
                onClick={handleClearCart}
              >
                Remove All
              </Button>
            </Box>
          )}
        </Box>
      </Box>
      {showWarning && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundColor="rgba(0, 0, 0, 0.5)"
          display="flex"
          justifyContent="center"
          alignItems="center"
          zIndex="1000"
        >
          <Box
            bg="white"
            p={6}
            rounded="md"
            boxShadow="lg"
            textAlign="center"
            maxWidth="400px"
          >
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Warning: Unsaved Changes
            </Text>
            <Text mb={6}>
              You have items in your cart. Please clear your cart before
              navigating away.
            </Text>
            <Button
              colorScheme="red"
              onClick={() => setShowWarning(false)}
              mr={2}
            >
              Stay
            </Button>
            <Button
              colorScheme="teal"
              onClick={confirmNavigation}
            >
              Clear Cart & Leave
            </Button>
          </Box>
        </Box>
      )}
    

      {/* Modal */}
      {selectedPlan && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>
              &times;
            </button>
            <h2>{selectedPlan.name}</h2>
            <p>{selectedPlan.additionalInfo}</p>
            <ul>
              {selectedPlan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>

  );
};

export default Plans;
