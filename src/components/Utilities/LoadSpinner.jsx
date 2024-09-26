import { Flex, Spinner } from '@chakra-ui/react'

export const LoadSpinner = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} height={'80vh'}>
      <Spinner size='xl' />
    </Flex>
  );
};


