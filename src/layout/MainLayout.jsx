import { Grid, GridItem } from '@chakra-ui/react'
import { Footer, Navbar } from '../components'

export const MainLayout = ({ children }) => {
  return (
    <Grid
     templateColumns='1fr'
     templateRows='auto 1fr auto'
     height='auto'
     minHeight='100vh'>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        { children }
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  )
}