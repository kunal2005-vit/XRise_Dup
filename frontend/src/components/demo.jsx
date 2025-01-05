import { Button } from "@/components/ui/button"
import React, { useState, useEffect } from 'react';
import { Grid, GridItem, Image } from "@chakra-ui/react";
const Demo = () => {
  return (
    
    <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          {/* First grid item: spans two rows */}
          <GridItem rowSpan={2} colSpan={1}>
            <Image
              src="https://images.pexels.com/photos/29890824/pexels-photo-29890824/free-photo-of-lush-green-forest-pathway-in-serene-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Image 1"
              objectFit="cover"
              borderRadius="md"
            />
          </GridItem>
    
          {/* Second grid item: spans two columns */}
          <GridItem colSpan={2}>
            <Image
              src="https://images.pexels.com/photos/29827505/pexels-photo-29827505/free-photo-of-aerial-landscape-view-in-the-philippines.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Image 2"
              objectFit="cover"
              borderRadius="md"
            />
          </GridItem>
    
          {/* Third grid item: spans two columns */}
          <GridItem colSpan={2}>
            <Image
              src="https://images.pexels.com/photos/29827505/pexels-photo-29827505/free-photo-of-aerial-landscape-view-in-the-philippines.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Image 3"
              objectFit="cover"
              borderRadius="md"
            />
          </GridItem>
    
          {/* Fourth grid item: spans four columns */}
          <GridItem colSpan={4}>
            <Image
              src="https://images.pexels.com/photos/29827505/pexels-photo-29827505/free-photo-of-aerial-landscape-view-in-the-philippines.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Image 4"
              objectFit="cover"
              borderRadius="md"
            />
          </GridItem>
        </Grid>
  )
}
