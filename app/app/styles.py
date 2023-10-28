"""Styles for the app."""

import reflex as rx

border_radius = "0.5rem"
box_shadow = "0px 4px 10px rgba(0, 0, 0, 0.1)"
border = "1px solid #E2E2E2"

berkeley_blue = "#003262"  # Berkeley Blue
california_gold = "#FDB515"  # California Gold

text_color = "#333"
accent_text_color = berkeley_blue
accent_color = california_gold
hover_text_color = "#FFFFFF"
hover_accent_color = {"_hover": {"color": hover_text_color}}
hover_accent_bg = {"_hover": {"bg": accent_color}}
content_width_vw = "85vw"
sidebar_width = "22em"


template_page_style = {"padding_top": "1em", "padding_x": ["auto", "2em"]}

template_content_style = {
    "width": "100%",
    "align_items": "flex-start",
    "box_shadow": box_shadow,
    "border_radius": border_radius,
    "padding": "1em",
    "margin_bottom": "1em",
}

link_style = {
    "color": accent_text_color,
    "text_decoration": "none",
    "font_weight": "bold",
    **hover_accent_color,
}

overlapping_button_style = {
    "background_color": berkeley_blue,
    "color": california_gold,
    "border": border,
    "border_radius": border_radius,
    "transition": "all 0.3s ease",
    "_hover": {
        "background_color": california_gold,
        "color": berkeley_blue,  # Reverse the colors on hover
        "box_shadow": "0px 4px 15px rgba(0, 0, 0, 0.12)"
    }
}


base_style = {
    rx.MenuButton: {
        "width": "3em",
        "height": "3em",
        **overlapping_button_style,
    },
    rx.MenuItem: hover_accent_bg,
}

markdown_style = {
    "code": lambda text: rx.code(text, color="#333", bg="#F6F6F6"),
    "a": lambda text, **props: rx.link(
        text,
        **props,
        font_weight="bold",
        color=berkeley_blue,
        _hover={
            "color": california_gold,
            "background_color": berkeley_blue,
            "text_decoration": "none",
            "padding": "0.2em 0.4em",
            "border_radius": "0.3rem"
        },
    ),
}