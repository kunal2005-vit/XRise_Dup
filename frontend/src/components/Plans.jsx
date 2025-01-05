import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const [cart, setCart] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [metrics, setMetrics] = useState([]);

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

  const plans = [
    {
      type: "Basic",
      name: "Starter Plan",
      description: "Perfect for individuals just getting started.",
      price: 10,
      badgeColor: "blue",
      features: ["1 User", "5GB Storage", "Community Support"],
      additionalInfo: "Includes basic support and standard features.",
    },
    {
      type: "Pro",
      name: "Pro Plan",
      description: "Ideal for small teams and professionals.",
      price: 30,
      badgeColor: "green",
      features: ["5 Users", "50GB Storage", "Priority Support"],
      additionalInfo: "Here's an updated version of your code with improved button and componeHere's an updated version of your code with improved button and component styling, incorporating vibrant and attractive colors to make the design visually engaging. I've added gradients, hover effects, and subtle shadows for a modern look.Here's an updated version of your code with improved button and component styling, incorporating vibrant and attractive colors to make the design visually engaging. I've added gradients, hover effects, and subtle shadows for a modern look.Here's an updated version of your code with improved button and component styling, incorporating vibrant and attractive colors to make the design visually engaging. I've added gradients, hover effects, and subtle shadows for a modern look.Here's an updated version of your code with improved button and component styling, incorporating vibrant and attractive colors to make the design visually engaging. I've added gradients, hover effects, and subtle shadows for a modern look.Here's an updated version of your code with improved button and component styling, incorporating vibrant and attractive colors to make the design visually engaging. I've added gradients, hover effects, and subtle shadows for a modern look.Here's an updated version of your code with improved button and component styling, incorporating vibrant and attractive colors to make the design visually engaging. I've added gradients, hover effects, and subtle shadows for a modern look.Here's an updated version of your code with improved button and component styling, incorporating vibrant and attractive colors to make the design visually engaging. I've added gradients, hover effects, and subtle shadows for a modern look.nt styling, incorporating vibrant and attractive colors to make the design visually engaging. I've added gradients, hover effects, and subtle shadows for a modern look.Here's an updated version of your code with improved button and component styling, incorporating vibrant and attractive colors to make the design visually engaging. I've added gradients, hover effects, and subtle shadows for a modern look.Here's an updated version of your code with improved button and component styling, incorporating vibrant and attractive colors to make the design visually engaging. I've added gradients, hover effects, and subtle shadows for a modern look.Here's an updated version of your code with improved button and component styling, incorporating vibrant and attractive colors to make the design visually engaging. I've added gradients, hover effects, and subtle shadows for a modern look.",
    },
    {
      type: "Enterprise",
      name: "Enterprise Plan",
      description: "Best for large teams and organizations.",
      price: 99,
      badgeColor: "red",
      features: ["Unlimited Users", "1TB Storage", "24/7 Support"],
      additionalInfo: "Full support and all premium features included.",
    },
  ];

  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
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
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    {[
                      { path: '/', label: 'Home', icon: 'bi-house' },
                      { path: '/profile', label: 'Profile', icon: 'bi-person-circle' },
                      { path: '/parentdashboard', label: 'Parentdashboard', icon: 'bi-people' },
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
            </Box>
          )}
        </Box>
      </Box>

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
