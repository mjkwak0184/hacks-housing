import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Button, Checkbox, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Spacer, Text, Tooltip, VStack } from "@chakra-ui/react"
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
  <Image src={`https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/393640815_2546204882203493_2764637398827397985_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4wVgP9zNbzMAX_P7alj&_nc_ht=scontent-atl3-1.xx&oh=00_AfA9mZZSmH-CIp-Z6HHxG2zU1gqfjF6W9oIL2Nnvo4reVQ&oe=65443266`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 1050`}
</Text>
  <Checkbox/>
</HStack>
  <Popover>
  <PopoverTrigger>
  <Button>
  {`Details`}
</Button>
</PopoverTrigger>
  <PopoverContent sx={{"width": "700px", "preventOverflow": true, "placement": "auto-start"}}>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Post Content`}
</PopoverHeader>
  <PopoverBody>
  {`I am a graduate student at Cal and I have a private furnished bedroom on MLK and Delaware to sublet for the months of June and July. rent will be 1300 + utilities. Here is the craigslist posting dm me`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverFooter>
  <Text>
  {`@Xun_ww, @T_Chang`}
</Text>
</PopoverFooter>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://www.facebook.com/photo/?fbid=2546203545536960&set=pcb.1858490074546806`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/397399591_2126546514218993_4738919453268130653_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yGZPy3-_L40AX9iW7YP&_nc_ht=scontent-atl3-1.xx&oh=00_AfBgznTevlbddttNAyQWJPylTGnpU5eqV8UFje9mFMsKFw&oe=6543D61A`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 1050`}
</Text>
  <Checkbox/>
</HStack>
  <Popover>
  <PopoverTrigger>
  <Button>
  {`Details`}
</Button>
</PopoverTrigger>
  <PopoverContent sx={{"width": "700px", "preventOverflow": true, "placement": "auto-start"}}>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Post Content`}
</PopoverHeader>
  <PopoverBody>
  {`Spring 2024 Jan- June Sublease Hi everyone! I am subleasing my spot in a double at The Varsity for Spring 2024 (beginning of Jan-beginning of June- 5 month lease) because I will be studying abroad. My roommate is very friendly and chill and one of my closest friends as well! It is a spacious double in a 3 bed/2 bath apartment with in unit washer/dryer, valet trash, and two balconies. The location is prime and a little over a block away from campus, close to Trader Joe’s, a walk away from the BART station too! The living room has a view of the golden gate too! If you are interested, want more details, or have questions please reach out!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverFooter>
  <Text>
  {`@Xun_ww, @T_Chang, @TK_K`}
</Text>
</PopoverFooter>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://www.facebook.com/photo/?fbid=2126546117552366&set=pcb.1864490643946749`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/396710150_297174383196444_6796893575791022824_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TzYpNVfqbTAAX-ERpWM&_nc_ht=scontent-atl3-1.xx&oh=00_AfCet5HRtbn7TItG74KHANvtOH1WzPQwTfuDXsiXORTWKA&oe=6543D48B`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 1050`}
</Text>
  <Checkbox/>
</HStack>
  <Popover>
  <PopoverTrigger>
  <Button>
  {`Details`}
</Button>
</PopoverTrigger>
  <PopoverContent sx={{"width": "700px", "preventOverflow": true, "placement": "auto-start"}}>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Post Content`}
</PopoverHeader>
  <PopoverBody>
  {`Spring 2024 Jan- June Sublease Hi everyone! I am subleasing my spot in a double at The Varsity for Spring 2024 (beginning of Jan-beginning of June- 5 month lease) because I will be studying abroad. My roommate is very friendly and chill and one of my closest friends as well! It is a spacious double in a 3 bed/2 bath apartment with in unit washer/dryer, valet trash, and two balconies. The location is prime and a little over a block away from campus, close to Trader Joe’s, a walk away from the BART station too! The living room has a view of the golden gate too! If you are interested, want more details, or have questions please reach out!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverFooter>
  <Text>
  {`@MJ_xx, @Cal_hh`}
</Text>
</PopoverFooter>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://www.facebook.com/photo/?fbid=2044289395939487&set=gm.1864468030615677&idorvanity=128476910881473`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/395450827_872660757696220_6598379516900682110_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N9LwnaeYP1QAX9shxvi&_nc_ht=scontent-atl3-1.xx&oh=00_AfDN4-yqkOx2f506uQ4NtfSvIf6GcDn3ztMXJ3nSa39f7w&oe=65436899`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 1050`}
</Text>
  <Checkbox/>
</HStack>
  <Popover>
  <PopoverTrigger>
  <Button>
  {`Details`}
</Button>
</PopoverTrigger>
  <PopoverContent sx={{"width": "700px", "preventOverflow": true, "placement": "auto-start"}}>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Post Content`}
</PopoverHeader>
  <PopoverBody>
  {`Spring 2024 Jan- June Sublease Hi everyone! I am subleasing my spot in a double at The Varsity for Spring 2024 (beginning of Jan-beginning of June- 5 month lease) because I will be studying abroad. My roommate is very friendly and chill and one of my closest friends as well! It is a spacious double in a 3 bed/2 bath apartment with in unit washer/dryer, valet trash, and two balconies. The location is prime and a little over a block away from campus, close to Trader Joe’s, a walk away from the BART station too! The living room has a view of the golden gate too! If you are interested, want more details, or have questions please reach out!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverFooter>
  <Text>
  {`@Xun_ZZ`}
</Text>
</PopoverFooter>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://www.facebook.com/photo/?fbid=297174403196442&set=pcb.1864431217286025`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
</HStack>
  <HStack>
  <VStack>
  <Image src={`https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/395758919_308470398602173_3207521252533706889_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7UgEoqpNGWwAX9Lfiwd&_nc_ht=scontent-atl3-2.xx&oh=00_AfCO1dG6VA9UHXk9rWtnm9GEqdyH_u5UOjuB2mwaE1iz1w&oe=6543C301`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 1050`}
</Text>
  <Checkbox/>
</HStack>
  <Popover>
  <PopoverTrigger>
  <Button>
  {`Details`}
</Button>
</PopoverTrigger>
  <PopoverContent sx={{"width": "700px", "preventOverflow": true, "placement": "auto-start"}}>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Post Content`}
</PopoverHeader>
  <PopoverBody>
  {`Spring 2024 Jan- June Sublease Hi everyone! I am subleasing my spot in a double at The Varsity for Spring 2024 (beginning of Jan-beginning of June- 5 month lease) because I will be studying abroad. My roommate is very friendly and chill and one of my closest friends as well! It is a spacious double in a 3 bed/2 bath apartment with in unit washer/dryer, valet trash, and two balconies. The location is prime and a little over a block away from campus, close to Trader Joe’s, a walk away from the BART station too! The living room has a view of the golden gate too! If you are interested, want more details, or have questions please reach out!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverFooter>
  <Text>
  {`@Xun_ww, @T_Chang, @TK_K`}
</Text>
</PopoverFooter>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://www.facebook.com/photo/?fbid=872660797696216&set=pcb.1864396477289499`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/397240135_24762300103368601_483910716347031452_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ui8rNnd19lIAX9C_Whh&_nc_ht=scontent-atl3-1.xx&oh=00_AfA4bXskRNS-xiffeevYlLdXldU3-Aa3fVo97LGakZiwdw&oe=65442299`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 1050`}
</Text>
  <Checkbox/>
</HStack>
  <Popover>
  <PopoverTrigger>
  <Button>
  {`Details`}
</Button>
</PopoverTrigger>
  <PopoverContent sx={{"width": "700px", "preventOverflow": true, "placement": "auto-start"}}>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Post Content`}
</PopoverHeader>
  <PopoverBody>
  {`Spring 2024 Jan- June Sublease Hi everyone! I am subleasing my spot in a double at The Varsity for Spring 2024 (beginning of Jan-beginning of June- 5 month lease) because I will be studying abroad. My roommate is very friendly and chill and one of my closest friends as well! It is a spacious double in a 3 bed/2 bath apartment with in unit washer/dryer, valet trash, and two balconies. The location is prime and a little over a block away from campus, close to Trader Joe’s, a walk away from the BART station too! The living room has a view of the golden gate too! If you are interested, want more details, or have questions please reach out!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverFooter>
  <Text>
  {`@Xun_ww, @T_Chang`}
</Text>
</PopoverFooter>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://www.facebook.com/photo/?fbid=308467761935770&set=pcb.1861920180870462`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/395388887_1706392373172543_4797809958436331633_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DysKUkaTldEAX-oyFRB&_nc_ht=scontent-atl3-2.xx&oh=00_AfCmgEs5eLKs2ciaTSnBEvXIoStgZ3Vw6UHOv0ROzo60qQ&oe=654290D6`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 1050`}
</Text>
  <Checkbox/>
</HStack>
  <Popover>
  <PopoverTrigger>
  <Button>
  {`Details`}
</Button>
</PopoverTrigger>
  <PopoverContent sx={{"width": "700px", "preventOverflow": true, "placement": "auto-start"}}>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Post Content`}
</PopoverHeader>
  <PopoverBody>
  {`Spring 2024 Jan- June Sublease Hi everyone! I am subleasing my spot in a double at The Varsity for Spring 2024 (beginning of Jan-beginning of June- 5 month lease) because I will be studying abroad. My roommate is very friendly and chill and one of my closest friends as well! It is a spacious double in a 3 bed/2 bath apartment with in unit washer/dryer, valet trash, and two balconies. The location is prime and a little over a block away from campus, close to Trader Joe’s, a walk away from the BART station too! The living room has a view of the golden gate too! If you are interested, want more details, or have questions please reach out!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverFooter>
  <Text>
  {`@Xun_ww, @T_Chang, @TK_K`}
</Text>
</PopoverFooter>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://www.facebook.com/photo/?fbid=24762300080035270&set=pcb.1864329413962872`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/396735328_10168178130585022_6322194620757932184_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JUTS-Jq5M3cAX_Kq6cz&_nc_ht=scontent-atl3-1.xx&oh=00_AfAYjE2eaWn-tRNwTZPE6CF7oJXc5DMQERTRw2cINc23QQ&oe=65437BFB`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 1050`}
</Text>
  <Checkbox/>
</HStack>
  <Popover>
  <PopoverTrigger>
  <Button>
  {`Details`}
</Button>
</PopoverTrigger>
  <PopoverContent sx={{"width": "700px", "preventOverflow": true, "placement": "auto-start"}}>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Post Content`}
</PopoverHeader>
  <PopoverBody>
  {`Spring 2024 Jan- June Sublease Hi everyone! I am subleasing my spot in a double at The Varsity for Spring 2024 (beginning of Jan-beginning of June- 5 month lease) because I will be studying abroad. My roommate is very friendly and chill and one of my closest friends as well! It is a spacious double in a 3 bed/2 bath apartment with in unit washer/dryer, valet trash, and two balconies. The location is prime and a little over a block away from campus, close to Trader Joe’s, a walk away from the BART station too! The living room has a view of the golden gate too! If you are interested, want more details, or have questions please reach out!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverFooter>
  <Text>
  {`@Xun_ZZ`}
</Text>
</PopoverFooter>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://www.facebook.com/pfbid0WbUx5kZKeeMGgDdjEWZ4LBuvHiikGvP6x5n6HhMXsRVzWQshyT5zSbT6szp962nql/videos/pcb.1863309114064902/351837304188629`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
</HStack>
</VStack>
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
