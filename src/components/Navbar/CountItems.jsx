import { Text } from '@chakra-ui/react'

export const CountItems = ({ count }) => {
  const styles = {
    borderRadius: "10px",
    fontSize: "1rem",
    textDecoration: "none",
  }

  return (
    <Text style={styles}>
      {count}
    </Text>
  )
}
