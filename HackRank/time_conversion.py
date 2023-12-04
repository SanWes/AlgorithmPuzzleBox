"""
Given a time in 12-hour AM/PM format, convert it to 24-hour format

- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
"""

def timeConversion(s):
    # Last two char --> AM or PM 
    meridian = s[-2:]
    # if end is PM and beginning not 12 then we add 12 to first 2 chars, concatinate the remaining chars
    if s[:2]!='12' and meridian =='PM':
        s = str( 12 + int(s[:2]) ) + s[2:]
    # if it is 12 am change to 00
    if meridian == 'AM' and s[:2]=='12':
        s = '00' + s[2:]
    # return concatinated string without the last two chars AM/PM
    return s[:-2]
    