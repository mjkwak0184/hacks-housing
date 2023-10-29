import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Stack, Text, Tooltip, VStack } from "@chakra-ui/react"
import { getEventURL } from "/utils/state.js"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents())
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getEventURL().href}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <VStack alignItems={`flex-start`} sx={{"transition": "left 0.5s, width 0.5s", "position": "relative"}}>
  <Box sx={{"display": ["none", "none", "block"], "minWidth": "22em", "width": "100%", "top": "0px", "borderRight": "1px solid #E2E2E2"}}>
  <HStack>
  <HStack sx={{"width": "100%", "padding": "1em"}}>
  <Image src={`/calhouse.svg`} sx={{"height": "7em", "width": "10em"}}/>
  <Spacer/>
</HStack>
  <Spacer sx={{"size": "2em"}}/>
  <HStack alignItems={`flex-start`} sx={{"width": "100%", "overflowY": "auto", "padding": "1em"}}>
  <Tooltip label={`Home Page`}>
  <Link as={NextLink} href={isTrue((false && !state.is_logged_in)) ? `` : `/`} sx={{"width": "100%"}}>
  <HStack sx={{"bg": isTrue((false && !state.is_logged_in)) ? `lightgray` : isTrue((state.router.page.path === "/home") || ((state.router.page.path === "/") && true)) ? `#FDB515` : `transparent`, "color": isTrue((false && !state.is_logged_in)) ? `gray` : isTrue((state.router.page.path === "/home") || ((state.router.page.path === "/") && true)) ? `#003262` : `#333`, "borderRadius": "0.5rem", "boxShadow": "0px 4px 10px rgba(0, 0, 0, 0.1)", "width": "100%", "paddingX": "1em"}}>
  <Text sx={{"fontWeight": "bold", "height": "2.5em", "padding": "0.5em"}}>
  {`Home`}
</Text>
</HStack>
</Link>
</Tooltip>
  <Tooltip label={`Preference Form for AI housing recommendations, login required`}>
  <Link as={NextLink} href={isTrue((true && !state.is_logged_in)) ? `` : `/form`} sx={{"width": "100%"}}>
  <HStack sx={{"bg": isTrue((true && !state.is_logged_in)) ? `lightgray` : isTrue((state.router.page.path === "/form") || ((state.router.page.path === "/") && false)) ? `#FDB515` : `transparent`, "color": isTrue((true && !state.is_logged_in)) ? `gray` : isTrue((state.router.page.path === "/form") || ((state.router.page.path === "/") && false)) ? `#003262` : `#333`, "borderRadius": "0.5rem", "boxShadow": "0px 4px 10px rgba(0, 0, 0, 0.1)", "width": "100%", "paddingX": "1em"}}>
  <Text sx={{"fontWeight": "bold", "height": "2.5em", "padding": "0.5em"}}>
  {`Form`}
</Text>
</HStack>
</Link>
</Tooltip>
  <Tooltip label={`Display of housing lists/recommendations`}>
  <Link as={NextLink} href={isTrue((false && !state.is_logged_in)) ? `` : `/housing`} sx={{"width": "100%"}}>
  <HStack sx={{"bg": isTrue((false && !state.is_logged_in)) ? `lightgray` : isTrue((state.router.page.path === "/housing") || ((state.router.page.path === "/") && false)) ? `#FDB515` : `transparent`, "color": isTrue((false && !state.is_logged_in)) ? `gray` : isTrue((state.router.page.path === "/housing") || ((state.router.page.path === "/") && false)) ? `#003262` : `#333`, "borderRadius": "0.5rem", "boxShadow": "0px 4px 10px rgba(0, 0, 0, 0.1)", "width": "100%", "paddingX": "1em"}}>
  <Text sx={{"fontWeight": "bold", "height": "2.5em", "padding": "0.5em"}}>
  {`Housing`}
</Text>
</HStack>
</Link>
</Tooltip>
  <Tooltip label={`Login Page`}>
  <Link as={NextLink} href={isTrue((false && !state.is_logged_in)) ? `` : `/login`} sx={{"width": "100%"}}>
  <HStack sx={{"bg": isTrue((false && !state.is_logged_in)) ? `lightgray` : isTrue((state.router.page.path === "/login") || ((state.router.page.path === "/") && false)) ? `#FDB515` : `transparent`, "color": isTrue((false && !state.is_logged_in)) ? `gray` : isTrue((state.router.page.path === "/login") || ((state.router.page.path === "/") && false)) ? `#003262` : `#333`, "borderRadius": "0.5rem", "boxShadow": "0px 4px 10px rgba(0, 0, 0, 0.1)", "width": "100%", "paddingX": "1em"}}>
  <Text sx={{"fontWeight": "bold", "height": "2.5em", "padding": "0.5em"}}>
  {`Login`}
</Text>
</HStack>
</Link>
</Tooltip>
</HStack>
  <Spacer/>
</HStack>
</Box>
  <Box>
  <Box>
  <VStack>
  <HStack>
  <VStack>
  <Text sx={{"height": "100%", "fontSize": "2.5em", "fontWeight": "bold"}}>
  {`Make Campus Housing Easy.`}
</Text>
  <Text sx={{"color": "#333", "font-weight": "600", "font-size": "1em", "padding": "12px 12px", "border-radius": "8px", "width": "100%"}}>
  {`Navigating the housing market, especially around dynamic regions like Berkeley,                     can be daunting. But what if there was a smarter way to find your dream home, without the usual                     hassles?`}
</Text>
</VStack>
  <Spacer sx={{"size": "2em"}}/>
  <Image src={`https://www.brayerelectric.com/wp-content/uploads/2020/11/AnnaHead_Final.jpg`} sx={{"width": "50%", "height": "50%", "border": "1px solid #555", "boxShadow": "lg"}}/>
</HStack>
  <HStack>
  <Image align={`left`} src={`  https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudCUyMGhvdXNpbmd8ZW58MHx8MHx8fDA%3D`} sx={{"width": "50%", "height": "50%", "border": "1px solid #555", "boxShadow": "lg"}}/>
  <VStack>
  <Text sx={{"height": "100%", "fontSize": "2.5em", "fontWeight": "bold"}}>
  {`Personalized AI Solution`}
</Text>
  <Text sx={{"color": "#333", "font-weight": "600", "font-size": "1em", "padding": "12px 12px", "border-radius": "8px", "width": "100%"}}>
  {`Enter [Your Startup Name]. Our platform, powered by advanced AI, is not just about finding a home                    – it's about finding the right home for you. Share with us your budget and how close or far                    you'd like to be from Berkeley, and our system will carefully analyze these preferences,                     along with other specifics you provide.`}
</Text>
</VStack>
</HStack>
  <HStack>
  <Stack>
  <Text sx={{"height": "100%", "fontSize": "2.5em", "fontWeight": "bold"}}>
  {`Bringing You Joy`}
</Text>
  <Spacer sx={{"size": "4em"}}/>
  <Text sx={{"color": "#333", "font-weight": "600", "font-size": "1em", "padding": "12px 12px", "border-radius": "8px", "width": "100%"}}>
  {`No more compromise between price and distance.                     Whether you want a cozy spot just a stone's throw from Berkeley or a serene escape a little further out,                     our platform is designed to find the best matches, tailored just for you. Enjoy a streamlined, efficient, and personalized home hunting experience with [Your Startup Name].                     Because your ideal home, at the right price and distance, is waiting.`}
</Text>
</Stack>
  <Spacer sx={{"size": "2em"}}/>
  <Image align={`right`} src={`https://www.pace.edu/sites/default/files/styles/16_9_1600x900/public/2022-04/housing-interior-hero.jpg?h=993b43e0&itok=PEYH6fLR`} sx={{"width": "50%", "height": "50%", "border": "1px solid #555", "boxShadow": "lg"}}/>
</HStack>
</VStack>
</Box>
</Box>
  <Spacer/>
</VStack>
  <NextHead>
  <title>
  {`Home`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</Fragment>
  )
}
