import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, SimpleGrid, Spacer, Text, Tooltip, VStack } from "@chakra-ui/react"
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
  <SimpleGrid>
  {state.post_state.listings.map((jdeacxse, i) => (
  <VStack key={i}/>
))}
</SimpleGrid>
</Box>
</Box>
  <Spacer/>
</VStack>
  <NextHead>
  <title>
  {`Housing`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</Fragment>
  )
}
