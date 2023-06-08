import { Button, Icon } from "@chakra-ui/react";
import { FaArrowUp } from 'react-icons/fa';
import { animateScroll } from 'react-scroll';

export function ScrollTopButton() {
  return (
    <Button
      onClick={() => animateScroll.scrollToTop({ duration: 1000 })}
      bgColor="#7695EC"
      border={0}
      cursor="pointer"
      color="white"
      paddingBottom={12}
      paddingTop={12}
      paddingLeft={10}
      paddingRight={10}
      borderTopRadius={10}

      position="fixed"
      bottom="10"
      right="60"

      boxShadow="lg"
      borderRadius="lg"

      zIndex="100"
      transition="0.4s"

      // _hover={{
      //   bgColor: 'white',
      //   color: 'black'
      // }}
    >
      <Icon as={FaArrowUp} />
    </Button>
  );
}