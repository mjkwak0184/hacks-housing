import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Button, Checkbox, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, SimpleGrid, Spacer, Text, Tooltip, VStack } from "@chakra-ui/react"
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
  <SimpleGrid columns={[1, 2, 3, 4]} spacing={`4`}>
  <VStack>
  <Image src={`https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/395388887_1706392373172543_4797809958436331633_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DysKUkaTldEAX-oyFRB&_nc_ht=scontent-atl3-2.xx&oh=00_AfCmgEs5eLKs2ciaTSnBEvXIoStgZ3Vw6UHOv0ROzo60qQ&oe=654290D6`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: None`}
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
  {`Spring 2024 Jan- June Sublease

Hi everyone! I am subleasing my spot in a double at The Varsity for Spring 2024 (beginning of Jan-beginning of June- 5 month lease) because I will be studying abroad. My roommate is very friendly and chill and one of my closest friends as well! It is a spacious double in a 3 bed/2 bath apartment with in unit washer/dryer, valet trash, and two balconies. The location is prime and a little over a block away from campus, close to Trader Joe’s, a walk away from the BART station too! The living room has a view of the golden gate too!

If you are interested, want more details, or have questions please reach out!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1782975638764917/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 900`}
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
  {`Subleasing a SINGLE room in a house downtown for the SPRING 2024 semester (Jan-May) !! Rent is $900 a month and the room will come furnished. 10-15 minute walk to campus, located right by Trader Joe's, the UC… More Theater, BART, bus stops, and a lot of restaurants/bars. Housemates are super nice and shared spaces (kitchen, dining/living room, laundry) are included :) Please reach out to me if interested or to see the place in person!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1829825187413295/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1065`}
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
  {`*URGENTLY SEEKING TO FILL A SHARED ROOM FOR 2023-24 SCHOOL YEAR
I’m seeking female-identifying students to fill spots in my ex-roommates bedroom! It has its own large bathroom inside the room with two sinks and a nice shower. The room is super spacious in person and can fit a lot of furniture. The rent would be $1065 per person. The move in date would be August 15th (It could be 2-3 days earlier, but we’re trying to get everything from the room moved out, cleaned, and sanitized). The place is located in North Berkeley and it’s about a 5-10 minute walk from campus.
I prefer things to be organized & clean, and I’m hoping for roommates who are the same! When it comes to chores and such, it’s preferred that each person washes their dishes after eating to avoid pile up. Other things such as sweeping/mopping/taking out trash, we could do on a weekly rotation as I’ve done with past roommates! You’d have to be okay with living with a cat as well, because there is one in the apartment! If you’re interested, please reach out and we can text and Facetime to see if we’re a good fit: 702-788-5959!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1837820563280424/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: None`}
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
  {`Annika Lee‎UC Berkeley Off-Campus Housing
October 9 at 2:41 PM ·
More options`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1852731945122619/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1600`}
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
  {`2283 Hearst Ave Studio ($1600/month) near the UC Berkeley`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1853952708333876/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 895`}
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
  {`Hello! My housemates and I are looking for a female-identifying housemate for the spring 2024 semester. Rent is $895/month with parking and you'd be in a spacious double!
location: closest intersection: dana and… More dwight on southside, 0.1 mi (3 min walk) to the nearest bus stop, 0.5 mi (8 min bus ride/10 min walk) to campus
dates: dec 1st to may 31st (flexible can extend to summer/fall)
features: 2-bed/1-bath, room is furnished but you are welcome to swap things out, there is a pool and a dishwasher, washer/dryers located on-site, gated parking, utilities are ~$40 for wifi and pg&e
people: housemates are 4th year and grad students at Cal (super awesome people!)
For an in-depth tour of the apt, here's a video I made 4 years ago when moving in :")
https://www.facebook.com/100002858627423/videos/2686509378120990/
Pm me/comment below if you're interested !!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1857802231282257/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1140`}
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
  {`Hello Cal Students! PLEASE READ ENTIRE POST! (AVAILABLE IMMEDIATELY)
Description:
I am a 4th year Cal student looking for people (LGTBQ+/Queer/BIPOC friendly!) to share my apartment for the upcoming semester with no definitive end date. It is a 2bd/1bth located in Downtown Berkeley and you will be getting your own private room . We are a 15 min walk from campus and are close to all student amenities (Trader Joe's, Park, BART, etc.). There is a laundry room in the building and street parking is usually available. Rent for the single room will be 1140$ + utilities. The preferred move in date is November 1st but if you are coming in for the Spring Semester we can discuss that.
Housemate Qualities:
As someone who has been living with other students/professional adults for the last several years of my life, I have come across the best and the worst of housemate qualities and/or practices. These are some of the qualities I am looking for in a potential housemate (but are by no means a hard requirement):
Clean, Respectful, Compromising, Kind, Self and Situationally Aware
Queer, BIPOC, or LGBTQ+ (or someone that is amiable towards different gender, sex, race, or creed)
420/Nicotine/Alc friendly (this is a pretty big one for me)
Neurodivergent (I am extremely friendly towards people with intellectual disabilities whatever that may mean)
Night-Person Friendly (I usually stay up late so this is important if that is something that will bother you)
Blunt and Honest Communicator (this is perhaps the most important one on the list)
About Me:
My name is George (he/him)! I am going to be beginning my 4th year at Cal in the Spring Semester. My hobbies include PC gaming (mainly LoL), skateboarding, intellectual discussion, and cooking! I am a pretty quiet person and am usually extremely reserved. I have great communication skills and am usually extremely honest/blunt. I usually become friends with people who are able to be both cynical and hopeful, have good listening and communication skills, and are able to look past themselves and compromise for the sake of others (a value that I will most certainly give back to you!).
I am more than happy to communicate with people about their needs and their plans so if this seems like a good fit for you please feel free to shoot me a DM and I am sending out the best of luck in your housing search adventure!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1858990867830060/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1390`}
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
  {`$1,390/month SINGLE OCCUPANCY, ALL UTILITIES INCLUDED and FULLY FURNISHED room inside Victorian House in "Elmwood Neighborhood" available! 5 min walking distance to campus. Share with UC Berkeley students, 2 FULL BATHROOMS and EQUIPPED KITCHEN. Hosting showings now! Let me know if you want a tour. (510) 745 4680 😊`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1859045797824567/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1198`}
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
  {`hello! I'm a student at berkeley, looking for female student to sublet my place this upcoming spring. move in date is sometime between january and february. it's kind of flexible. the location is about 3 blocks away from campus; a 5 min walk. there's a patio, study room, communal kitchen and living space. oh, and the washers and dryers are free to use. please message me for more information! I could do a short tour/ send more pictures and videos.
rent: $1198
additional details: https://tbgpm.com/communities/2434-piedmont/`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1859070344488779/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/395758919_308470398602173_3207521252533706889_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7UgEoqpNGWwAX9Lfiwd&_nc_ht=scontent-atl3-2.xx&oh=00_AfCO1dG6VA9UHXk9rWtnm9GEqdyH_u5UOjuB2mwaE1iz1w&oe=6543C301`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: None`}
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
  {`"Your academic success starts here! Let's tackle assignments together. 📝🔍 #SuccessInStudies #AssignmentSolutions #StudySmart"

Contact us:
onlineassignmentdesk.com
onlineassignmentdesk@gmail.com
WhatsApp: wa.me/+61480048180`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1859409287788218/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/393640815_2546204882203493_2764637398827397985_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4wVgP9zNbzMAX_P7alj&_nc_ht=scontent-atl3-1.xx&oh=00_AfA9mZZSmH-CIp-Z6HHxG2zU1gqfjF6W9oIL2Nnvo4reVQ&oe=65443266`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 1880`}
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
  {`Available for the spring semester with opportunity to extend.

I have a studio on Southside It’s right next to unit 2 and so it’s super close to campus !

The rent would be $1880/month. Laundry and parking is also in the building as well a a secure mail room, as well as an on-site assistant who is also a student .

Please DM me if you have any questions`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1859462231116257/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: None`}
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
  {`Hello Members

"Stylish Studio Apartment for Rent!"
The apartment's is fully furnished and has many amenities, such as open floor plan, high ceilings, and large windows ,washer and dryer(laundry unit), a fully equipped kitchen, a modern bathroom, and a waterproofing unit, parking unit,sound proof,it has a balcony and a great view and many more.
Rent/deposit(the rent amount cover the utilities fee)
Lease term:-short or long contract(flexible)
Location:-Walkable distance
Pets free
Kindly message me if you’re interested in the unit available.

Thanks and have a great time.`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1859515921110888/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1300`}
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
  {`Hi! My name is Kaiulani and I am a third-year undergraduate student at Cal looking for a Spring 2024 Subletter!
I have a quick and easy option for anyone looking for a single that is 300 ft from campus!
Rent: $1300 All Utilities Included in rent (including high speed internet)
This is a fully furnished room with a private bathroom and a community kitchen downstairs. There is a mini fridge, freezer, and microwave in the room. There is a large T.V., ping pong table, and a nice furnished rooftop skydeck w/ BBQ and a view of the Golden Gate bridge! There are multiple washer and dryers on the bottom floor.
51B bus line stops in 2 places right next to the building.
Nearby the BART
Bike Storage Room secured behind key fob access doors.
Parking spaces available!
The set up of the room is that it is a double but there is a wall that gives you and the other person privacy.
I have a wonderful bed surrounded by windows for natural lights as well as blinds for shading. There is ample storage below my bed and in the closet!
It also uniquely shares an outdoor area with the restaurant next door called Free House!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1859606044435209/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1100`}
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
  {`2 BEDROOM and 2 BATHROOM Apartment/Close to UC BERKELEY

Available for sublease and long term lease rent
The rent is $500 monthly for One Room/ Private bathroom with all utilities included/ $1100 if you want to rent the whole 2 bedroom Apartment and it’s Well and Fully Furnished
Parking is Available for one Vehicle

Secured Neighborhood!

SEND ME A PRIVATE MESSAGE IF INTERESTED

Its fully furnished with a full living room set, dresser and wardrobe and walking distance to Shops.`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1860080041054476/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Looking for TWO female-identifying students to share a bedroom and bathroom in a Southside double available January 1 - May 31.

- Rent is $1050 per person (wifi and electricity are an additional ~$50)
- Apartment is 2 bed / 2 bath so you will share the apartment with two other welcoming friends
- In-unit washing machine/dryer, beautiful rooftop, large fridge/freezer
- 8 minute walk from campus (I timed it myself LOL) and across the street from multiple bus stops, CVS, and a boba place!

Please reach out to me if you’re interested or have any questions - my housemates and I would love to talk with you and are totally open to giving in person apartment tours :)`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1860094494386364/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1000`}
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
  {`Looking for a third housemate to fill a single room ($1000) in the Bushrod neighborhood this January! 15 minute bike ride from UC Berkeley campus. Six minute walk from Ashby bart (conveniently between SF and Berkeley). Backyard has lemon tree and space for a vegetable garden with room for small gatherings. Basement with washer and dryer. Rooms furnished! I’m 26 and my hobbies include biking, dancing, and welcoming new housemates ;) If you're interested let me know and we can set up a call to meet and see if it would be a good fit :)`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1860109147718232/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1140`}
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
  {`Hello Cal Students! PLEASE READ ENTIRE POST! (AVAILABLE IMMEDIATELY)
Description:
I am a 4th year Cal student looking for people (LGTBQ+/Queer/BIPOC friendly!) to share my apartment for the upcoming semester with no definitive end date. It is a 2bd/1bth located in Downtown Berkeley and you will be getting your own private room . We are a 15 min walk from campus and are close to all student amenities (Trader Joe's, Park, BART, etc.). There is a laundry room in the building and street parking is usually available. Rent for the single room will be 1140$ + utilities. The preferred move in date is November 1st but if you are coming in for the Spring Semester we can discuss that.
Housemate Qualities:
As someone who has been living with other students/professional adults for the last several years of my life, I have come across the best and the worst of housemate qualities and/or practices. These are some of the qualities I am looking for in a potential housemate (but are by no means a hard requirement):
- Clean, Respectful, Compromising, Kind, Self and Situationally Aware
- Queer, BIPOC, or LGBTQ+ (or someone that is amiable towards different gender, sex, race, or creed)
- 420/Nicotine/Alc friendly (this is a pretty big one for me)
- Neurodivergent (I am extremely friendly towards people with intellectual disabilities whatever that may mean)
- Night-Person Friendly (I usually stay up late so this is important if that is something that will bother you)
- Blunt and Honest Communicator (this is perhaps the most important one on the list)
About Me:
My name is George (he/him)! I am going to be beginning my 4th year at Cal in the Spring Semester. My hobbies include PC gaming (mainly LoL), skateboarding, intellectual discussion, and cooking! I am a pretty quiet person and am usually extremely reserved. I have great communication skills and am usually extremely honest/blunt. I usually become friends with people who are able to be both cynical and hopeful, have good listening and communication skills, and are able to look past themselves and compromise for the sake of others (a value that I will most certainly give back to you!).
I am more than happy to communicate with people about their needs and their plans so if this seems like a good fit for you please feel free to shoot me a DM and I am sending out the best of luck in your housing search adventure!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1860139747715172/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1400`}
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
  {`[URGENT] Spring '24 Lease TakeOver/Long Term Sublease!
I'm looking for someone to take over my spot in a Double during Spring ‘24 at The Durant (2631 Durant Avenue, Berkeley, CA 94704) ideally for the remainder of the school year and part of summer break (from January 2024 up until July 2024). My housemates are two male-identifying sophomores at UC Berkeley seeking a third male-identifying individual who is friendly and values cleanliness.
Rent + Utilities = $1400 a month TOTAL for a spacious double, not limited but including:
• Furnished with a dining table, chairs, coffee table and comfortable couches!
• Plasma screen TV to play video games as well as having built-in accessible streaming programs all with unlimited accounts/watch time embedded where you can access them with your own account or using The Durant’s, including:
- Netflix
- Prime Video
- FreeVee
- YouTube
- News
- Amazon Music
- Hulu
- Sling
- HBO MAX
- Free Internet!
• Accessible Rooftop for all Residents (can use to hang out with friends or host socials, or experience a nice cool relaxing breeze from life)
• Spacious kitchen with housemates that already have lots of provided cookware
• Twin XL mattress and 4 spacious drawers all provided for you
• Big closet dedicated to your living space
• Clean and quiet study rooms on the 3th and 5th floor to concentrate on work
• Fortified security with access only being permitted to residents with the use of a key fob, to ensure safety and protection for residents
• < 1 minute walk onto campus (one block out from Cafe Strada) on Bancroft
• < 2 minute walk to Memorial Stadium (perfect for people who love cheering on Cal’s football team on game days and love working out at Memorial Gym)
• < 6 minute walk to Sproul Plaza
• Active community and involvement on Durant Avenue and the Heart of Southside
• Across the street from Unit 1!
• Accessible and close bus stations that let you go towards Bancroft or College Avenue
• Lots of natural light
• Hardwood floors
• Large enough to fit two FULL beds and a BIG closet!!
• Shared bathroom and kitchen (lots of storage space, heating rack)
• Apartment laundry
• People can move in as early as December 15th! (in which I will cover that month’s rent as a freebie)
• Paying rent is SUPER easy, as The Durant comes with the option to either pay in person (cash/check) or online with their simple easy-to-use website with autopay and other important services embedded such as submitting requests, maintenance, and updates on community events.
• If you are taking summer classes over the summer or you are having an internship in the bay or you just want to stay in Berkeley for the summer, this place is PERFECT for you as you get to take classes being so close to campus and also with the accessible bus stations be able to Bart over to the Bay for any business related/internship needs
• The Durant also hosts many fun and engaging social events for all its residents to participate where you can get to know the people living in your apartment in a commonly loved place
Below I have attached a link to a virtual tour in which you will be provided a lovely viewing experience of what the apartment looks like from another point of view.
https://www.apartments.com/the-durant-new-berkeley-ca/00cs0t2/
For those who are interested, feel free to direct message me here or contact me ANY of the following:
Phone number: (209) 447-6892
Email: richardzheng24@berkeley.edu`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1860197297709417/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 800`}
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
  {`[Spring Semester Sublet] For a double in a 2BD/1BA apartment. (Jan/Feb 2024 and onwards)
Hi, we’re looking for a female roommate to take over a spot in our double for Spring 2024. You’ll be living with 2 other super friendly ladies (Cal MBA student & working professional). Looking for someone who is neat, quiet and organized.
Details:
•Location: Ellsworth St & Haste St (3 blocks from RSF)
•Rent: $800/month (trash and water included) + utilities (~$25-45/month)
•Room is fully furnished with a bed and desk. Spacious shared walk-in closet.
•Washer/Dryer is on the first floor of the apartment building
•Secured parking garage, backyard, balcony.
•Kitchen is fully furnished with a fridge, microwave, stove, and oven
More pics/tour provided upon request, thank you!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1860630417666105/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1537`}
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
  {`2024 fall sublease

Looking for 2 people to sublease my double, No gender requirement

Hey everyone, I'm trying to sublease my current apartment from late December/ early January to July 2024. The location is 2580 Bancroft Way, the Standard Berkeley. It is only 3 mins walk to campus, with access control, which is a very safe and luxury place! The apartment have rooftop bbq terrace, game room, study room, etc.

The current place I have is 1b1b in a 5b4b apartment, it is a spacious double, basically like 2 single rooms squished together. The rent is 1537/person/month, the gas and water would be approximately 30-50 per month. Other roommates are also students, clean and sociable, open to talk.

plz lmk if you are interested in!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1860723830990097/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 700`}
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
  {`Hi everyone!
I'm a Senior graduating in the Fall, looking for a Spring/Summer Subletter to fill my double room in our 2 bed/2 bath apartment!
Location: 2467 Warring Street (Southside and right by Clark Kerr… More campus)
When: Any period between January 1st, 2024-August 1st, 2024 (can be flexible if needed).
- Looking to fill 1 double
- Both room and the unit are fully furnished
- Double (in master bedroom)
Rent is $700/month (includes all utilities + wifi)
Shared master bed/bath with my roommate Andrew. He will be in his last semester at Berkeley and is studying chem/business. He is very nice, tidy, and respectful of the shared space.
- ~10 min walk to UC Berkeley campus
*Included floor plan of identical unit in pictures. Only thing different is our private backyard instead of balcony.
Feel free to message me if interested, or if you have any questions!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1860780104317803/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1190`}
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
  {`Hi everyone! I will be studying abroad in Spring 2024, and I am seeking a UC Berkeley female student to sublet my spot in a newly furnished 5-bedroom house (all single rooms) with 2 bathrooms. Reach out if you'… Morere interested!

Here are some more details:
Location: 15 min walk from campus
Rent: $1190/month
Amenities: gas, water, trash is ~$25/month
Fully furnished kitchen with stove, oven, microwave & fridge
In-Unit washer/dryer
Large closet and lots of storage space


Please let me know if you have any questions and are interested!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1860784560984024/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/393640815_2546204882203493_2764637398827397985_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4wVgP9zNbzMAX_P7alj&_nc_ht=scontent-atl3-1.xx&oh=00_AfA9mZZSmH-CIp-Z6HHxG2zU1gqfjF6W9oIL2Nnvo4reVQ&oe=65443266`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 900`}
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
  {`HELLO EVERYONE !!!📞📞
- Bedrooms Available: 1
- Rent: $900/month/bedroom
- Bathrooms: 1
- Location- Belfast
- Available NOW!!!
- Lease Term: both short and long term lease
- Internet Included: Yes
- Utilities Included: Yes
- Furnished: Yes
- Laundry On-Site: Yes`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1860920104303803/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/395758919_308470398602173_3207521252533706889_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7UgEoqpNGWwAX9Lfiwd&_nc_ht=scontent-atl3-2.xx&oh=00_AfCO1dG6VA9UHXk9rWtnm9GEqdyH_u5UOjuB2mwaE1iz1w&oe=6543C301`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 1000`}
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
  {`[Looking for female roommate in double | Spring 2024 (Jan-May)]
I am returning from study abroad and looking for a roommate to share a massive double with for the spring semester.
Shattuck and Bancroft… More intersection gated apt, 3Bed 2Bath
1 block from 51b, 79, 36, F, 6, P, buses
No bedframe, otherwise fully furnished (desk, drawer, kitchen, living room)
$1000/month + utilities each month
Send a DM if interested!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1860927620969718/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: None`}
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
  {`Hey ! I am running a small business Would anyone be interested in having their ducts & vents cleaned ?

No hidden charges and pay after the job is done . To build strong relations in 2023 , we have started offering 40% discount
Cleaning of the duct system is necessary for every house once in 6 months because it includes alot of germs and becterias in the vents as well as dust and debris and that is very dangerous for specially kids and pets, usually health issues can be caused if duct system is too dirty, if u havent cleaned duct system since a long time uwill see the condition at the time of service which will help u to understand how important is to clean it.
Were licensed and insured !`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861134630949017/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1200`}
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
  {`Hi Everyone!
I will be studying elsewhere next semester and need a sublet ASAP!
Very LGBT friendly and clean. Anyone is welcome as long as they’re a student.
Room type ($1200 per person per month):
1 single
I will subletting my room for at the entire semester starting in January (Spring 2024), but you can also extend until the end of summer.
Includes utilities (water, gas, electric, internet), room is fully furnished, washer/dryer in-unit, dishwasher, backyard with grill, TV in living room. It's right in front of RSF making it very easy to access campus.
This is undergraduate student housing only. Will be shared with 8 other students, but in separate rooms.
Please reach out if you’re interested!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861141464281667/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1600`}
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
  {`[SPRING SEMESTER SUBLET; VERY LARGE SINGLE]
Hello everyone! I am subletting my large single room in a 2 Bed, 1 Bath apartment for the Spring semester 2024 (January-May 2024); preferably looking for a male-identifying subletter! Rent is $1600/month + PG&E, but with the size of the room and the location only 10 minutes from campus (located off Dwight between College and Piedmont), it is completely worth it! The room has lots of natural light and is very spacious! I will be leaving the room furnished, so you do not need to worry about furnishings. Please message me if you’re interested!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861143507614796/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/393640815_2546204882203493_2764637398827397985_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4wVgP9zNbzMAX_P7alj&_nc_ht=scontent-atl3-1.xx&oh=00_AfA9mZZSmH-CIp-Z6HHxG2zU1gqfjF6W9oIL2Nnvo4reVQ&oe=65443266`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 1650`}
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
  {`Fully furnished SINGLE room for SPRING

Hi all,
I’m graduating in fall and looking for a Cal student to take over my lease for the upcoming Spring semester (Mid December - May 31st 2024)

Excellent location, one block from UCB campus
Across the street from Unit 2
Single corner room with lots of natural light
The room is fully furnished with brand new bed, mattress, dresser, desk, chair, & lights
Refrigerator & Microwave in the room
Newly remodeled fully equipped shared kitchen
Shared bath and kitchen professionally cleaned 3 times a week
Laundry in the building
Lots of storage space in room
Rent is 1,650 all utilities and WIFI included
Message me for any questions or for a tour! :)`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861185127610634/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1625`}
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
  {`** SPACIOUS, FURNISHED SINGLE ROOM AVAILABLE NOW **

Hi everyone, I’m looking to sublease my single room until May 2024. Move-in is ideally in November but I am open to December/January move-ins as well. You would also have the option to extend to the next academic year.

The house is a short walk from campus, right across Unit 2 on Dwight and College right by the 51B, 7 and Bear Transit bus stops. It’s a great location close to Crossroads, with easy access to Elmwood as well.

The room comes furnished with a brand-new bed, mattress, desk, chair, mini fridge, dresser, microwave, and a stand fan. It’s a very spacious room with a huge closet. It also has wall shelves and a built-in desk giving you ample storage space.

The house has in-unit laundry, bike parking, and a newly remodelled, fully equipped modern kitchen and living area. The shared areas, including the bathroom, are professionally cleaned, and restocked 3 times a week.

Rent is 1,625 monthly, inclusive of utilities and WiFi. Security deposit is one month's rent.

Message me with any queries or for a tour!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861203200942160/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/393640815_2546204882203493_2764637398827397985_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4wVgP9zNbzMAX_P7alj&_nc_ht=scontent-atl3-1.xx&oh=00_AfA9mZZSmH-CIp-Z6HHxG2zU1gqfjF6W9oIL2Nnvo4reVQ&oe=65443266`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 1000`}
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
  {`Spring 2024 Sublease
Hello!
My housemates are studying abroad in spring 2024 and are looking to sublet their double room (both spots in the double are open) in Berkeley from January 1st, 2024-May 31st, 2024 (move in date can be sooner if preferred). It can be left furnished or unfurnished depending on preference.
The house is located on Southside and is a 13 minute walk from campus. It has 6 bedrooms, a kitchen, dining and living room, two bathrooms, and a washer and dryer. Message me if you would like a tour or photos of the rest of the house!
7 people (all female identifying) currently live in the house. My bathroom is shared between me and 3 other people.
The rent is $1000 per month per person.
Please message with any questions!!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861227930939687/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 836`}
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
  {`Spring 2024 Housing on Southside Berkeley !!!

Hi! I’m looking for a clean, female-identifying person to take over my spot in a double. The apartment is in an amazing location (2 blocks from campus and 2 blocks from Greek Row). You would be living with 3 other female-identifying undergraduates (a sophomore who would share the room, and two seniors who have singles).

Rent is $836/month not including utilities which are around $30/month. The common spaces are furnished, and I will be selling my furniture (bed frame, mattress, wardrobe, desk, dresser) for cheap if needed. There is an on-site washer and dryer. Parking is available for $150/month and the security deposit is $500 which you will get back once you move out.

DM with any questions or to schedule a tour (virtual or in-person)!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861233397605807/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1200`}
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
  {`Looking for two interested applicants who can take a two bedrooms and baths, students or working professionals who are clean and responsible. Rent for each room is $1200

All utilities are included.
Separate bathrooms.
In unit laundry.
Designated parking spot
One-month deposit.
Quiet and safe neighborhood.
Pet friendly.
Sorry,
No smoking.

The rooms is in ready-to-move-in condition. The rooms is furnished.

Please feel free to contact me for more information. Thank you for your interest in my listing.`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861238977605249/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 836`}
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
  {`***** Spring 2024 Housing on Southside Berkeley *****

Hi! I’m looking for a clean, female-identifying student to take over my spot in a double starting Jan 1st. The move-in date is negotiable if you need to store your stuff over break. The apartment is in an amazing location (2 blocks from campus and 2 blocks from Greek Row) and in close proximity to restaurants and public transit stops. You would be living with 3 other female-identifying undergraduates (a sophomore who would share the room, and two seniors who have singles).

Rent is $836/month not including utilities which are around $30/month. The common spaces are furnished, and I will be selling my furniture (bed frame, mattress, wardrobe, desk, dresser) for cheap if needed. There is an on-site washer and dryer. Parking is available for $150/month and the security deposit is $500 which you will get back once you move out.

DM with any questions or to schedule a tour (virtual or in-person)!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861239477605199/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/395758919_308470398602173_3207521252533706889_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7UgEoqpNGWwAX9Lfiwd&_nc_ht=scontent-atl3-2.xx&oh=00_AfCO1dG6VA9UHXk9rWtnm9GEqdyH_u5UOjuB2mwaE1iz1w&oe=6543C301`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 1100`}
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
  {`Berkeley Metropolitan: Spring and/or Summer Sublease, single private bedroom (in a 4 bedroom/1 bathroom shared unit)
2301 Durant Ave, Berkeley, CA 94704
Available: 1/1/2024-8/10/2024 (lease term is negotiable)
1… More block from campus secured building entrance
fully furnished and all utilities included (water, internet, electricity, cable TV)
private bedroom (with lock) and shared living room, kitchenette, bathroom
furniture includes couch, TV, dining table/chairs, bed, desk/chair, dresser
shared refrigerator and dishwasher included
top floor bay views from private bedroom and living area
common area with pool table, foosball table, TV room, full kitchen and dining areas
in-building laundry and trash
roof deck w/ BBQ
$1100/month (rent is negotiable)
More info: https://www.berkeleymet.com/`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861259657603181/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: None`}
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
  {`2283 Hearst Ave Studio`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861288167600330/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1120`}
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
  {`2 SPOTS AVAILABLE FOR A DOUBLE [SPRING 2024]
Hello everyone! My roommate and I are looking for 2 people to sublease our double room for Spring 2024 as we will be studying abroad. You'll be living with one other female junior student and a friendly cat named Kitty! Our apartment is a 2 bedroom 1 bath and our apartment is always kept really clean!


✅Some Details:✅
﻿Location: Parker and Dana St. (10-15 min walk from campus)
﻿Rent: $1120 per person (utilities and wifi not included which is around $30 per person but water included)
Room is fully furnished with full sized beds and desks are in the living room space (can be moved inside room)
Really great natural lighting throughout the entire apartment with big windows
﻿Individual closet spaces for each person
Washer/dryer in outdoor apartment space
Kitchen is fully furnished with modern fridge, microwave, stove, air-fryer, and oven
Living room space has a communal TV (with Hulu, Disney+, Netflix), spacious dining room area, and shared miscellaneous closet space
More pics/tour can be provided! Please message me if interested and we can also set up a FaceTime if that works better for you`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861401254255688/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 800`}
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
  {`hello! i’m looking for a female-identifying student to sublease for spring 2024! some info about the space:

- furnished double for $800/month + utilities and wifi (~$20)
- southside on benvenue & about a 10 minute walk from campus
- 2 bed/1 bath (3 other housemates)
- spacious living room, kitchen, and balcony
- have a cat that’s super friendly and social :DD

message me for more info or if you’re interested! c:`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861438724251941/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1065`}
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
  {`Hii , reposting as i'm seeking 2 women/non binary identified people to fill a triple spot in a huge 2 bedroom apartment situated in North Berkeley, just by Cory Hall.It’s roughly a 5-10 minute walk to campus and right by the F/52 bus stop.
Rent:
$1065 per person (utilities and wifi included)
Deposit:
$750
Bathrooms:
Large bathroom with 2 sinks
There’s also underground parking available!!

The room is mostly unfurnished so feel free to bring whatever you need.
All the roomies would prefer things to be organized & clean! When it comes to chores and such, it’s preferred that each person washes their dishes after eating to avoid pile up. Other things such as sweeping/mopping/taking out trash, we could do on a weekly rotation as we’ve done with past roommates!
Side note:
You’d have to be okay with living with a cat as well, because there is one in the apartment!
If you’re interested, please reach out and we can schedule a video tour 🙂
*pics are from when the apt was unfurnished, willing to share recent pics(dm if interested)`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861458324249981/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1347.5`}
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
  {`Hi everyone! I will be subleasing my private room for the Spring 2024 semester. Rent will be $1347.50/ month + extra for water & electricity.

There will only be one other housemate who is male-identifying. We are non-smoking and pet-free & we are looking for someone who is male-identifying, clean, respectful, and values a safe, clean, quiet living environment.

Apt is in downtown Berkeley and is 10-15 min walk to UCB, BART, transit to Oakland/SF. Laundry is on-site.

Feel free to DM if you are interested or have any questions!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861487924247021/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: None`}
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
  {`🌟Two bedroom unit Available For both long term and short time lease.

🌟 ( With all Utilities Included).

🌟unit is fully furnished.

🌟The rent is very affordable and all utilities are included ( In-Suite Laundry, Parking Spot, Water Heater, Gas Stove, electricity and cable

🌟The unit is Pet Friendly. 🐶 🐈

🌟The neighborhood is Calm, Safe and Very Friendly.

🌟The unit is available for both long or short term.

🌟It close and walkable to the university

Send me a private message with the screenshot of this post for more information.

Thanks.`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861796360882844/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/395758919_308470398602173_3207521252533706889_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7UgEoqpNGWwAX9Lfiwd&_nc_ht=scontent-atl3-2.xx&oh=00_AfCO1dG6VA9UHXk9rWtnm9GEqdyH_u5UOjuB2mwaE1iz1w&oe=6543C301`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 1400`}
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
  {`SPRING 2024 SUBLEASE
Hello,
I’m looking for someone to take over my lease at 2350 Prospect "The Morgan House" – an all-female, student-only co-living community located just 1 block south of campus.
Lease Term:… More from January 1st (move in date can be sooner if preferred) until 31 July 2024
Monthly Rent: $1400 + $199 all-inclusive utility fee
Room Features:
A spot in a double room to share with a super nice and respectful girl
Twin-size bed, mattress, and mattress cover
Bedroom desk, lamp, and chair
Freestanding closet
In-room mini-fridge
Assigned bathroom shared among 3 bedrooms
I can sell you my duvet/ pillows/ storage
About The Morgan House:
Brand new construction
Fully-furnished common areas and outdoor space
Fully-equipped kitchen
Regular professional housekeeping
Regularly stocked household items and cleaning supplies
Free use of washer/dryer, printer, streaming service etc
Dedicated live-in community manager
Organized community events year-round
Send me a message if you are interested!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861813554214458/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1440`}
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
  {`[URGENT Spring 2024 Sublet (PRICE NEGOTIABLE)]

Hi! I am looking to sublet a double room for $1440 per person (negotiable) in Downtown Berkeley. Looking for 2 male-identifying students to sublet for the Spring 2024 semester with 4 established roommates.

The apartment has a modern kitchen with new appliances (including a microwave and dishwasher), a spacious living room with a TV, an in-house washer and dryer, and a gym on the same floor.

The room is fully furnished with full-sized beds and its own bathroom. Fir further information you can look at https://www.identityloganpark.com/amenities.

I am looking for subletters to move in January. Please reach out if you’re interested, I am happy to talk and can be flexible :)`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861958270866653/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1250`}
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
  {`Hi!! We have double and single in our brand new renovated building at 2430 Prospect. Now leasing for Spring 2024 and Fall 2024. 🐻🐻🐻 We have 2-3 bedroom apartments, double rooms and single rooms. All of the… More rooms are furnished,, with hardwood flooring, washer and dryer, fully equipped kitchen, spacious bathrooms, and living room area. Available for individual lease starting $1,250 per month + utilities.
Building is just moments away from UC Berkeley (2 blocks). Secured mail and package delivery and has elevator access. Super convenient location! Near grocery, fitness area and transportation lines. If you are around the area please call/text to schedule an on-site visit (510) 907-6365 or message me here on Facebook.`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861988820863598/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1200`}
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
  {`Single rooms available in a vintage penthouse apartment.
First month, Last month, Security deposit (50% one month rent) required.

Located on Channing Way, a Berkeley designated "Bike Boulevard" leading directly… More to downtown/UC Berkeley. 10 minute ride to campus.

Utilities and Internet included. Available rooms and prices are as follows:

Room 1 - 104 SQFT $1,200
Room 3 - 156 SQFT $1350 (semi private bathroom)
Room 5 - 230 SQFT $1450 PICTURED

Each room includes a large closet and is individually keyed with hotel quality deadbolts.

The common areas of the apartment includes a chef’s kitchen with dishwasher,14-foot ceilings, one shared bathroom, and one semi-private bathroom (shared between two rooms). Bathrooms have just been updated and remodeled.

All rooms will be term leases ending June 2024. I am open to leasing again after June 2024 based on our shared experience.`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1862314900830990/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/395758919_308470398602173_3207521252533706889_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7UgEoqpNGWwAX9Lfiwd&_nc_ht=scontent-atl3-2.xx&oh=00_AfCO1dG6VA9UHXk9rWtnm9GEqdyH_u5UOjuB2mwaE1iz1w&oe=6543C301`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 1150`}
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
  {`🏠 Room for Sublet: Spring Semester 🌸
🌼 Looking for a Female-Identifying Roommate. I'm studying abroad in the Spring semester and looking for a roommate to sublet my double room. You'll be sharing the room with… More another girl.
Rent: $1,150/month 🔌 Utilities: $20/month (negotiable)
Flexible Dates: January to May (Can move in mid December)
Newly renovated 2 bed / 2 bath apartment
Fully furnished: bed, desk, chair, closet, and more
Spacious living room and kitchen with plenty of natural light
Balcony with a view
Lots of common spaces in the apartment complex
Other 2 apartment-mates are guys
Location: Downtown and 5 minutes to campus. Near Victory Point Cafe
Feel free to DM me with any questions or to schedule a visit to check it out and meet potential roommates.`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1862485000813980/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1700`}
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
  {`Spacious double available for spring semester!

Available to lease afterwards, but lease begins January 2024. This is a very charming victorian bay house on Blake Street, about a ten minute walk from campus and Berkeley Bowl. Has tons of natural lighting and is overall a very light room. Also has a large closet with lots of storage. There are three other girls living here and we are looking for two CLEAN female identifying people to take over this space. This room does not come furnished. The cost is $1700 or $850 per person. Please message or DM me on instagram (@cassandr.a) if you are interested, would like to see more pictures, etc.`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1862531770809303/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/395758919_308470398602173_3207521252533706889_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7UgEoqpNGWwAX9Lfiwd&_nc_ht=scontent-atl3-2.xx&oh=00_AfCO1dG6VA9UHXk9rWtnm9GEqdyH_u5UOjuB2mwaE1iz1w&oe=6543C301`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 1250`}
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
  {`Hi everyone! We have rooms available for this Spring and Fall 2024. Just minutes walk from UC Berkeley. Clean, peaceful, secured, cozy, freshly renovated, and ready for you.
Location:
📍 2430 Prospect Berkeley
… MoreAvailable Rooms:
🛌 Double Room - $1250/month
🛌 Single Room - $1750/month
Features:
✨ Fully furnished
✨ Spacious living areas
✨ Kitchen with modern appliances
✨ Secured mail & package delivery
✨ In-unit laundry facilities
Why Choose Us?
🚶‍♂️ Walking Distance to UC Berkeley
🛒 Close to Shops, Restaurants, and Cafes
🏡 Safe and Secure Neighborhood
Lease Terms:
⏳ Flexible Leases Available
Application Process:
📝 Easy and Hassle-Free and NO FEE!
Don't miss out on this amazing opportunity. Please feel free to contact us today to schedule a viewing at (510) 930-1615.`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1862598380802642/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/395758919_308470398602173_3207521252533706889_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7UgEoqpNGWwAX9Lfiwd&_nc_ht=scontent-atl3-2.xx&oh=00_AfCO1dG6VA9UHXk9rWtnm9GEqdyH_u5UOjuB2mwaE1iz1w&oe=6543C301`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 1750`}
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
  {`SPRING/SUMMER 2024 SOUTHSIDE SUBLET (Jan - May/can extend to August)
Hey everyone! I'm studying abroad next semester and am looking for someone to sublet a single on Southside - 10 min walk from campus, perfect… More for Haas students. You'll be living with 2 other girl housemates, but will only be sharing a restroom with 1 of them. The details are:
$1750/month + utilities (negotiable)
Single room furnished and available from January - August 2024
Address: 2520 College Ave, Berkeley
In-unit laundry
Parking spot
Spacious living room, kitchen, fridge, and balcony
Courtyard and pool available in apartment
Please dm me if interested.`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1862642510798229/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1300`}
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
  {`Hi all, I am looking for a subletter for this upcoming spring semester (December - May) for a large single in a 3 bed 1 bath unit on Southside with an option to extend through the summer until August. Rent is $1300 / mo including utilities. Last month’s deposit is required. Details below:
- large spacious unfurnished single.
- built-in closet.
- sink attached to room separating another room.
- 2 housemates (1 male, 1 female).
- gas stove and oven with refrigerator.
- bathroom and shower shared with 2 others.
- washer/dryer behind the unit, shared with everyone.
- 15 minute walk to campus.
Please reach out to me ASAP if interested. Below are pictures of the room and other parts of the unit. The room will not come furnished when you move in. I will also be more than glad to give you an in person tour if wanted.`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1862644597464687/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: None`}
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
  {`2283 Hearst ave`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1862647990797681/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/395758919_308470398602173_3207521252533706889_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7UgEoqpNGWwAX9Lfiwd&_nc_ht=scontent-atl3-2.xx&oh=00_AfCO1dG6VA9UHXk9rWtnm9GEqdyH_u5UOjuB2mwaE1iz1w&oe=6543C301`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: None`}
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
  {`Hello

I have a fully furnished two bedroom unit available and move in ready.

- Bedrooms Available: (2)
- Bathrooms: (2)
- Available from: move in ready
- Lease Term: flexible
- Internet Included: [ yes ]
- Utilities Included: [ yes ]
- Furnished: [ yes ]
- Laundry On-Site: [ yes ]
- Co-Ed: [ co-ed ]
- Additional Information: [ heat and cooling system installed, parking space available ]

Send private message for more informations and make sure you get back to me with the screenshot of my published to attract a response.

Email: Hairuihou@gmail.com`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1862689550793525/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1072.5`}
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
  {`Hi! Looking for a subletter who's female identifying for next semester, spring 2024 from January to May (summer can be included too until June 20th).

The apt is 2 bedroom 1 bath. You'll be in a double room with 1 other female identifying roommate and 1 other female identifying housemate (who has the single). Completely furnished everywhere w/ bed, desk, chair and there's also a balcony. It is very close to campus and southside, convenient to college ave for groceries and bus stops.

🏠Address: 2732 Haste Street, Berkeley, CA 94704

💸Rent: $1072.5 per month + around $30 for utilities (electricity and wifi)

📆Lease term: Jan 1, 2024 - Jun 20, 2024 (dates are flexible)

Please message asap if interested!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1862770287452118/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1925`}
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
  {`📌 Spring 2024 and/or Summer 2024 Sublet 📌
Subletting a single in a 3 bed/1 bath apartment in the Metropolitan!
Amenities: laundry room (on our floor), study lounge (on our floor), roof deck (with a BBQ), games… More room, bike garage, package locker, large common kitchens.
Location: 2301 Durant Ave - 1 block from campus!
Rent: $1,925/month
More Info: Single bedroom comes furnished with a desk + chair, closet, drawers, and twin XL bed. 2 large windows with blinds in the room so there's great lighting! Shared living room has a TV, sofa and dining table as well as a fridge, microwave, and dishwasher. 2 other roommates are female students at Cal (senior and sophomore).
For more info, please DM me!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1863035014092312/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1250`}
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
  {`Looking for subletters for a single room in 2B/1B on Southside! You will be living with a female and a male housemate. The lease will run from December to May and for $1250 monthly. It is a 5 minute walk to the RSF and another 3 minutes to campus. DM me if interested!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1863116634084150/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1450`}
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
  {`Spring 2024 sublease available from December 11 🙂
2 mins from campus
$1450 as single, $850 as a double

Claire Moon‎UC Berkeley Off-Campus Housing
October 18 at 7:07 PM ·

Sublease available from December
$1450 very spacious and fully furnished single close to campus in a 2bed 1bath near Li Ka Shing Center available from mid December! The original lease ends in the end of May, available to extend if we wish to. It is right next to Berkeley Way West and across Sweetgreen. Close to campus and downtown. Looking for female identifying roommates. Utilities ~$60

The room is spacious enough to be used as a double for $850 each, but you would have to find a roommate who could accompany you. The room currently has a queen bed, but if you want to use it as a double, you would have to put another bed there yourself (or share the bed if you agreed to that). Last month’s deposit required. Washer and dryer in the building, and the location is really convenient!

About me:
I am from South Korea, and I am currently a junior at Berkeley. My pronouns are she/her.
You will be living with my pup as well, so I am looking for someone who is pet friendly! He is super well trained, does not bark, and does not shed.

Picture in the photo is an old photo, and taken at an angle halfway into the room, so it is bigger than it seems. Tours are welcome starting from November 💫`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1863138407415306/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/393640815_2546204882203493_2764637398827397985_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4wVgP9zNbzMAX_P7alj&_nc_ht=scontent-atl3-1.xx&oh=00_AfA9mZZSmH-CIp-Z6HHxG2zU1gqfjF6W9oIL2Nnvo4reVQ&oe=65443266`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 1550`}
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
  {`Hi! We're looking for a spring sublet for our apartment at 2729 Dwight Way, 4 blocks (7-min bike ride) to the UCB campus. This is a secure building with controlled & secure access and is located right off… More College Ave. within walking and biking distance from UC Berkeley, Downtown Berkeley, and the Elmwood neighborhood. Enjoy proximity to a myriad of restaurants, coffee shops, and stores. Call or text to schedule a tour at (510) 907-6365.
Apply for Free: https://bit.ly/40bfa9k
🛌 Single-private Room starting $1,550
🛌 Double-shared room starting $885
Location:
📍 2729 Dwight Ave, Berkeley, CA
Features:
✨ Fully Furnished
✨ Modern Kitchen Appliances
✨ Spacious Common Areas
✨ In-Unit Laundry Facilities
✨ Secured Mail & Package Delivery
✨ On-Site Community Manager`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1863200424075771/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1400`}
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
  {`Single room, close to campus (5 min walking)!!
Jan-July

hi!! I’m a third year undergrad student at Berkeley! I have a single room available until July (flexible move in date) in a 2 bedroom apartment, and I’m urgently looking for someone to take over my spot! The other room is shared by two girls, and the apartment is a 5 minute walk from campus :))

Rent: $1400
Deposit: Pay the last month’s rent in advance (July)
Utilities: $25-30

Let me know if you are interested!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1863218480740632/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1072.5`}
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
  {`Hi! Looking for a subletter who's female identifying for next semester, spring 2024 from January to May (summer can be included too until June 20th).

The apt is 2 bedroom 1 bath. You'll be in a double room with 1 other female identifying roommate and 1 other female identifying housemate (who has the single). Completely furnished everywhere w/ bed, desk, chair and there's also a balcony. It is very close to campus and southside, convenient to college ave for groceries and bus stops.

🏠Address: 2732 Haste Street, Berkeley, CA 94704

💸Rent: $1072.5 per month + around $30 for utilities (electricity and wifi)

📆Lease term: Jan 1, 2024 - Jun 20, 2024 (dates are flexible)

Please message asap if interested!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1863309114064902/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 950`}
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
  {`hello everyone!
i am currently looking for a female-identifying uc berkeley student to take over a lease!
single room with shared bathroom (three female-identifying student)
1.1 miles from uc berkeley
10 minute… More walk to trader joe’s
rent: $950 + utilities per month
availability starts ASAP to 5-31-2024 (with an option to renew for next academic year)
to make my move-out process even smoother, i'm prioritizing someone who's interested in taking the room furnished. i want to sell everything for $100 which includes a full-sized mattress with bed frame, glass study table, black monitor stand, wooden shelf, wooden table, mirror, and desk lamp, two baskets.
please message me if you or anyone you know may be interested!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1863646460697834/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1741`}
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
  {`OFFERED: Bright & Spacious Primary Suite in a 4 bed / 3.5 bath house by Telegraph & Alcatraz! $1741 / month for January 1 - May 31, 2024, with possibility of extending the lease. Start date can be slightly earlier if desired. Perfect for a young professional or grad student.
About the suite:
Large main bedroom space
Private ensuite bathroom (recently renovated)
Great natural light (3 large windows)
Large closet with built-in shelves
Premium hardwood floors
Most bedroom furniture offered at a large discount if desired
Reserved desk space in living room during work hours
About the house:
Cozy living room space with great natural light
Premium, well equipped kitchen with island, 2 full sized refrigerators and shared staples such as oil, spices, baking goods, rice, etc.
Beautiful back courtyard area with grill and hot tub, great for hosting, reading a book, or having a soak
Laundry room with washer/dryer
Basement with ample storage space, and bike shed in the backyard.
Driveway parking spot
10-20 minute walk to Ahsby Bart, Elmwood, Rockridge, Temescal commercial areas
Easy access to UC Berkeley and Oakland via bus 6 and 18 (~15 min trips)
1 minute walk to Bushrod Park
A cat named Puff, who likes to snuggle and hang out in the living room.
We are a group of young professionals (mid-20s) who like to spend time together, but also respect each other’s time. We aim to have a safe, cooperative, clean, and chill home environment, and are queer-friendly!
More about us:
A: (she/her) I am a research technician at a lab that works on photosynthesis in plants and algae! In my free time I enjoy running, dancing, hiking, backpacking, crocheting and always down to grab a beer!
G: (he/him) I am a researcher/data scientist working in renewable energy with a focus on offshore wind. I'm a big J. Kenji Lopez-Alt fan, like to play soccer, tennis and board games. I love hiking, backpacking and skiing (downhill and touring!). I’ve been really into cold fermenting dough and recently have been working on my pizza and kimchi focaccia recipes!
M: (she/they): I'm a trans woman finishing a PhD in condensed matter physics. As a side hustle I'm an artist and writer, trying to make it the main job. I play ultimate frisbee, go bouldering, and enjoy hitting the bars/clubs for nights out.
A (they/them): I work as a Case Manager at a Women's Center and a remote masters student at UCLA. I like going to shows, bouldering, and painting! [M] and I love to go out on the weekends to bars and other fun lil events.
Utilities are an additional $80-120 per month for electricity, gas, wifi, water and garbage depending on the season. Accessibility detail: staircase to house and bedroom.
If you’re interested, please like this post and fill out the form here: https://forms.gle/b3FfL8AY8vs2oVxGA.`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1863648974030916/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1600`}
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
  {`[SPRING SEMESTER SUBLET; VERY LARGE SINGLE]
Hello everyone! I am subletting my large single room in a 2 Bed, 1 Bath apartment for the Spring semester 2024 (January-May 2024); looking for a male-identifying subletter! Rent is $1600/month + PG&E, but with the size of the room and the location only 10 minutes from campus (located off Dwight between College and Piedmont), it is completely worth it! The room has lots of natural light and is very spacious! I will be leaving the room furnished, so you do not need to worry about furnishings. Please message me if you’re interested!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1863736664022147/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 1200`}
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
  {`Only two rooms left in my vintage penthouse apartment.
First month, Last month, Security deposit (50% one month rent) required.

Located on Channing Way, a Berkeley designated "Bike Boulevard" leading directly to… More downtown/UC Berkeley. 10 minute ride to campus.

Utilities and Internet included. Available rooms and prices are as follows:

Room 1 - 104 SQFT $1,200
Room 3 - 156 SQFT $1350 (semi private bathroom) PICTURED

Each room includes a large closet and is individually keyed with hotel quality deadbolts.

The common areas of the apartment includes a chef’s kitchen with dishwasher,14-foot ceilings, one shared bathroom, and one semi-private bathroom (shared between two rooms). Bathrooms have just been updated and remodeled.

All rooms will be term leases ending June 2024. I am open to leasing again after June 2024 based on our shared experience.`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1864201783975635/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 800`}
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
  {`[REPOSTED] A double spot in a 2BD/1BA apartment starting Jan/Feb 2024 and onwards.
Hi, we’re looking for a female roommate to take over a spot in our double for Spring 2024. You’ll be living with 2 other super friendly ladies (Cal MBA student & working professional). Looking for someone who is neat, quiet and organized.
Details:
•Location: Ellsworth St & Haste St (3 blocks from RSF)
•Rent: $800/month (trash and water included) + utilities (~$25-45/month)
•Room is fully furnished with a bed and desk. Spacious shared walk-in closet.
•Washer/Dryer is on the first floor of the apartment building
•Secured parking garage, backyard, balcony.
•Kitchen is fully furnished with a fridge, microwave, stove, and oven
More pics/tour provided upon request, thank you!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1864210410641439/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 692`}
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
  {`REPOST!

Rosemary Su is with Maria Lopez and Nicole Malvar.
October 18 at 5:31 PM ·

hi all! we are looking for 1 female-identifying roommate to move into a double on southside of berkeley by early-mid january and sign a lease until August-September/or a year!

- ﻿﻿rent for the double will be $692 month (not including utilities)

- ﻿﻿parking is also available for $50/month

- ﻿﻿it is cozy and spacious 2 bedroom, 1 bath apartment with great natural light

- ﻿﻿you will be sharing a room with Nicole and Maria will be in the other room! Nicole is a 4th year at Cal and Maria is a graduate student at the School of Education!

- our apartment is located on dwight way near telegraph and it is 6-8 minute walk from campus!

please feel free to direct message me if you have any questions or want to hear more about the space! ☺️`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1864242297304917/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/395758919_308470398602173_3207521252533706889_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7UgEoqpNGWwAX9Lfiwd&_nc_ht=scontent-atl3-2.xx&oh=00_AfCO1dG6VA9UHXk9rWtnm9GEqdyH_u5UOjuB2mwaE1iz1w&oe=6543C301`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 1350`}
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
  {`Hello!
I am looking into study abroad for the spring semester and I need someone to sublease my room. The lease would go from December/January 2023 (the start date is negotiable) to May 2024. It's a huge room with two closets, lots of natural light, and in a pink apartment complex on Channing. The apartment is literally 10 minutes from campus so it's super convenient, and my roommates are girls and very sweet!
The apartment has one bathroom and a kitchen with a bar for eating, and rent is 1350! If you're interested send me a message!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1864245217304625/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: None`}
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
  {`Hi Everyone, I am looking for a sub tenant to fill my roommates room that is a Cal Student. It is a 2Br 1 bath apartment by Berkeley High school, and is 15 min walk from campus. Lease would be starting Dec/Jan to end of May. Please message me if interested!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1860659194329894/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 2500`}
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
  {`SPACIOUS 1 BED/ 1 BATH APARTMENT NEAR UC BERKELEY

Address with zip code or general address : 1725 Oxford street, Berkeley, CA 94709

Size : 724 sq. ft

Distance to the Campus : 0.3 Mile

Bedroom : 1

Bathroom : 1

Renting to Male, Female or Either : Either

Availability : Now

Amount of the rent : $2500

Deposit : $2500

Utilities : all Utilities are included

Restrictions : Pets are ngotiable and smoking outside only.

Amenities : Dish washer, Washer/dryer in the unit, Hardwood flooring, fireplace, cable tv, WIFI.

Lease term : Negotiable

Brief description of space : Fabulous one bedroom Apartment for rent, located near UC Berkeley. The apartment is very close to all amenities. The apartment comprises of a large bedroom, fully fitted bathroom with a shower, w/c, large open plan living room with wooden flooring. Fully fitted and equipped kitchen.

The property comes with its own secured Assigned car parking spots.

Apartment Photos are attached.

Contact : (408) 990-3636/ cresrentalsguide@gmail.com.`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1860808894314924/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: None`}
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
  {`SPRING 2024 SUBLEASE

Hey everyone! I’m looking for a female identifying student to sublet my spot in a double at the laureate for spring 2024, from Jan-July!

🌟Unit Info🌟:

- The building is brand new and has really nice amenities such as a rooftop, study pods, and gym

- It’s in a very convenient location right on telegraph and is a quick 7 min walk to campus

- The unit is pre furnished with 3 double bedrooms, 3 bathrooms, an in unit washer and dryer, a very spacious kitchen, and large living room that comes with a TV

- My current bedroom is the larger bedroom and you would get a queen bed! The room also comes with under the bed storage and your own closet!

- Utilities + Wifi are included in the rent!

- We have very responsive management and the building itself is also super secure with passcode protected entry to the building, each apartment, and to the individual bedrooms

The other girls who currently live in the unit with me are all undergrad Cal students and are all super nice! We love to hangout in the living room and do homework together or having movie nights, and it’s overall a super fun and friendly environment to live in!😊

Feel free to message me about any questions you have or if you would like more information or pictures of the unit!! You can also text me or Dm me on Instagram if that’s easier! 510-516-0719
@anikamallu`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861920180870462/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/395758919_308470398602173_3207521252533706889_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7UgEoqpNGWwAX9Lfiwd&_nc_ht=scontent-atl3-2.xx&oh=00_AfCO1dG6VA9UHXk9rWtnm9GEqdyH_u5UOjuB2mwaE1iz1w&oe=6543C301`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: None`}
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
  {`Hello to all of you!
I have a completely furnished rental home that is available for both long- and short-term leases.
Also Available for short and long term lease!
This is an amazing community of people in similar situations. The place is well-kept. There is an in-house representative who takes care of things when needed.
And there are structured house rules to follow. The property offers a room Full-size bed, closet, Blackout curtains, dresser, Gorgeous renovations and high ceilings throughout the entire apartment.
Modern living space off of a newly renovated kitchen featuring a dishwasher, stainless steel appliances, and granite. The following amenities and services included:
- Central AC/Heater
- Closet
- Dishwasher
- Fully equipped kitchen
- Fully furnished
- High Ceilings
- High Speed WIFI
- Storage for clothes
- Video Intercom System with Camera
- Washer/Dryer
If you are interested kindly send a message
Thanks you`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1862149127514234/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
  <VStack>
  <Image src={`https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/395758919_308470398602173_3207521252533706889_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7UgEoqpNGWwAX9Lfiwd&_nc_ht=scontent-atl3-2.xx&oh=00_AfCO1dG6VA9UHXk9rWtnm9GEqdyH_u5UOjuB2mwaE1iz1w&oe=6543C301`} sx={{"width": "300px", "height": "300px", "borderRadius": "15px 15px", "border": "5px", "boxShadow": "lg"}}/>
  <HStack>
  <Text sx={{"color": "#003262", "backgroundColor": "#FDB515", "textTransform": "uppercase", "font-weight": "bold", "font-size": "10pt", "padding": "6px 10px 6px 10px", "border-radius": "100px", "fontWeight": "bold"}}>
  {`Price: 1400`}
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
  {`Hello everyone,

1bed/1bath studio available for lease for both long term and short term. The rent is $1400 monthly.
It’s a well conducive and well equipped apartments. The apartment is:
Fully furnished
Wi-Fi
Water 💦
Electricity ⚡️
Laundry 🧺
Air conditioning
Car park
Queen bed size
Pet friendly and many more amenities.

Kindly send a Dm if interested.`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1863655537363593/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
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
  {`Price: 909`}
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
  {`hi everyone!

I’m looking for someone to take over my spot in a double or take over the room for the spring semester! (Jan - May 2024) Move in possible anytime past Dec 16. /mid - December!

You would be part of the upstairs (3bed, 2bath) unit of a 2-unit house. The room comes furnished, a bed, clothes rack, lamp, and a nightstand.

Info:
- Rent is $909/month as a double, $1818/month as a single
- Utilities are separate (PG&E and WiFi),usually around $35month/person
￼ - 8 minute walk from campus
- Laundry / dryer are shared with the house’s downstairs unit, for a one-time semester fee of 25$
- 4 housemates; 3 boys, and someone sharing the double, currently undecided
- Night safety shuttle right in front of the door

Please dm me if you’re interested!`}
</PopoverBody>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Potential Room Mates`}
</PopoverHeader>
  <PopoverHeader sx={{"fontWeight": "bold"}}>
  {`Original Post`}
</PopoverHeader>
  <Link as={NextLink} href={`https://m.facebook.com/groups/ucberkeleyoffcampushousing/permalink/1861359800926500/`} sx={{"color": "rgb(107,99,246)", "align": "center"}}>
  {`Housing Page `}
</Link>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</VStack>
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
