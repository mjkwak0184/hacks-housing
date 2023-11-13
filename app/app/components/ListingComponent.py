import reflex as rx
from app.styles import accent_color, accent_text_color
from app.data.Listing import Listing
from app.components.ListingCategory import ListingCategory
imgs = ["https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/393640815_2546204882203493_2764637398827397985_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4wVgP9zNbzMAX_P7alj&_nc_ht=scontent-atl3-1.xx&oh=00_AfA9mZZSmH-CIp-Z6HHxG2zU1gqfjF6W9oIL2Nnvo4reVQ&oe=65443266", "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/397399591_2126546514218993_4738919453268130653_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yGZPy3-_L40AX9iW7YP&_nc_ht=scontent-atl3-1.xx&oh=00_AfBgznTevlbddttNAyQWJPylTGnpU5eqV8UFje9mFMsKFw&oe=6543D61A", "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/396710150_297174383196444_6796893575791022824_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TzYpNVfqbTAAX-ERpWM&_nc_ht=scontent-atl3-1.xx&oh=00_AfCet5HRtbn7TItG74KHANvtOH1WzPQwTfuDXsiXORTWKA&oe=6543D48B", "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/395450827_872660757696220_6598379516900682110_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N9LwnaeYP1QAX9shxvi&_nc_ht=scontent-atl3-1.xx&oh=00_AfDN4-yqkOx2f506uQ4NtfSvIf6GcDn3ztMXJ3nSa39f7w&oe=65436899", "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/395758919_308470398602173_3207521252533706889_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7UgEoqpNGWwAX9Lfiwd&_nc_ht=scontent-atl3-2.xx&oh=00_AfCO1dG6VA9UHXk9rWtnm9GEqdyH_u5UOjuB2mwaE1iz1w&oe=6543C301", "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/397240135_24762300103368601_483910716347031452_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ui8rNnd19lIAX9C_Whh&_nc_ht=scontent-atl3-1.xx&oh=00_AfA4bXskRNS-xiffeevYlLdXldU3-Aa3fVo97LGakZiwdw&oe=65442299", "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/395388887_1706392373172543_4797809958436331633_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DysKUkaTldEAX-oyFRB&_nc_ht=scontent-atl3-2.xx&oh=00_AfCmgEs5eLKs2ciaTSnBEvXIoStgZ3Vw6UHOv0ROzo60qQ&oe=654290D6", "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/396735328_10168178130585022_6322194620757932184_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JUTS-Jq5M3cAX_Kq6cz&_nc_ht=scontent-atl3-1.xx&oh=00_AfAYjE2eaWn-tRNwTZPE6CF7oJXc5DMQERTRw2cINc23QQ&oe=65437BFB"]
import random


def ListingComponent(listing: Listing) -> rx.Component:
    style = {
    "color": accent_text_color,
    "background_color": accent_color,
    "text_transform": "uppercase",
    "font-weight": "bold",
    "font-size": "10pt",
    "padding": "6px 10px 6px 10px",
    "border-radius": "100px"
    }
    print(listing.images.split('?')[0]+listing.images.split("?")[1])
    # print(State.filled)
    return rx.vstack(
         rx.image(
                src= random.choice(imgs), 
                # src=f"{bytes([ord(c) for c in listing.images]).decode('utf-8')}",
                width="300px", 
                height="300px",
                border_radius="15px 15px",
                border="5px",
                box_shadow="lg"
            ),
            rx.hstack(
                rx.text("Price: " + str(listing.data["price"]), font_weight = "bold", style = style),
                rx.checkbox()
            ),
            #*[ListingCategory(key,listing.data[key]) for key in listing.data]
            rx.popover(
            rx.popover_trigger(rx.button("Details")),
            rx.popover_content(
            rx.popover_header("Post Content", font_weight = "bold"),
            rx.popover_body(listing.body),
            rx.popover_header("Potential Room Mates", font_weight = "bold"),
            # rx.popover_footer(rx.text(listing.data["housemate"])),
            rx.popover_header("Original Post", font_weight = "bold"),
            rx.link("Housing Page ",href=listing.url, color="rgb(107,99,246)", align = "center"),
            rx.popover_close_button(),
            width = "700px",
            prevent_overflow = True,
            placement = "auto-start"
            ),
    ),
    )
