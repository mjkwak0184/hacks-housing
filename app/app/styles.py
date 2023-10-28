import reflex as rx

# Basic Style Variables
border_radius = "0.5rem"
box_shadow = "0px 4px 10px rgba(0, 0, 0, 0.1)"
border = "1px solid #E0E0E0"
text_color = "#333"
accent_text_color = "#0055AA"
accent_color = "#EAF2FF"
hover_accent_color = {"_hover": {"color": accent_text_color}}
hover_accent_bg = {"_hover": {"bg": accent_color}}
content_width_vw = "85vw"
sidebar_width = "22em"

# Page & Content Styles
template_page_style = {
    "padding_top": "2em",
    "padding_x": ["auto", "3em"]
}

template_content_style = {
    "width": "100%",
    "align_items": "flex-start",
    "box_shadow": box_shadow,
    "border_radius": border_radius,
    "padding": "1.5em",
    "margin_bottom": "2em",
    "background": "#FFFFFF"
}

# Link Styles
link_style = {
    "color": accent_text_color,
    "text_decoration": "none",
    **hover_accent_color,
}

# Button Styles
overlapping_button_style = {
    "background_color": "#FFFFFF",
    "border": border,
    "border_radius": border_radius,
    "transition": "all 0.3s ease",
    "_hover": {
        "background_color": accent_color,
        "box_shadow": "0px 4px 15px rgba(0, 0, 0, 0.1)"
    }
}

# Base Styles
base_style = {
    rx.MenuButton: {
        "width": "3.5em",
        "height": "3.5em",
        **overlapping_button_style,
    },
    rx.MenuItem: hover_accent_bg,
}

# Markdown Styles
markdown_style = {
    "code": lambda text: rx.code(text, color="#333", bg="#F5F5F5"),
    "a": lambda text, **props: rx.link(
        text,
        **props,
        font_weight="bold",
        color=accent_text_color,
        text_decoration="underline",
        text_decoration_color=accent_color,
        _hover={
            "color": "#FFFFFF",
            "background_color": accent_text_color,
            "text_decoration": "none",
            "padding": "0.2em 0.4em",
            "border_radius": "0.3rem"
        },
    ),
}
