import os

import argparse
import itertools

from facebook_scraper import get_posts
from facebook_scraper import *

class FacebookPost(object):
    def __init__(self, post_text: str, image_url: str, post_id: str):
      self.post_text = post_text
      self.image_url = image_url
      self.post_id = post_id

# argument parser setup
parser = argparse.ArgumentParser(description='Scrape Facebook for posts.')
parser.add_argument('--scrape', action='store_true')
args = parser.parse_args()

set_user_agent(
    "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)")

flags = vars(args)

pages = 10

# run "export fb_username=" on terminal to store variables to os
credentials =  (os.getenv('fb_username'), os.getenv('fb_password'))

allGroups = itertools.chain(
  get_posts(group='128476910881473', pages=pages, credentials=credentials)
)

# start scraping
if flags['scrape']:
  for post in allGroups:
    currentFacebookPost = FacebookPost(post.get('text'),  post.get('image'), post.get('post_id'))
    print(currentFacebookPost.post_id)
    print(currentFacebookPost.post_text)
    print(currentFacebookPost.image_url)
    
