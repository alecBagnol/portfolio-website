#!/usr/bin/env python3

from PIL import Image
import os
import glob

def get_thumbnails(path)->list:
    """
    Get all the thumbnails in the thumbnails folder.
    """
    
    files = os.listdir(path)
    return [file for file in files if file.endswith(".png")]

def convert_thumbnails()->None:
    """
    Convert all the thumbnails to webp.
    """
    path = os.getcwd().replace('utilities','assets\\img\\thumbnails')
    destination = os.getcwd().replace('utilities','assets\\img\\thumbnails\\generated')
    for file in get_thumbnails(path):
        im = Image.open(os.path.join(path, file))
        im = im.convert('RGB')
        im.save(os.path.join(destination, file).replace('.png','.webp'), 'WEBP')

if __name__ == '__main__':
    convert_thumbnails()
    print('done')