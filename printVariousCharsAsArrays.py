#python lists are formatted the same as js arrays.
#so using python to just get a bunch of formatted arrays.

#import string library
import string
#get lowers as string, cast to list.
lowers = string.ascii_lowercase
lowersArr = list(lowers)
#print list.
print(lowersArr)

#get uppers as string, cast to list.
uppers = string.ascii_uppercase
uppersArr = list(uppers)
#print list
print(uppersArr)

#copied from https://owasp.org/www-community/password-special-characters
#except for ' and " which have to be manually added.
#cast to list, add ', "
specials = " !#$%&()*+,-./:;<=>?@[\]^_`{|}~"
specialsList = list(specials)
specialsList.append('"')
specialsList.append("'")
#print list
print(specialsList)

#numbers as string, cast to list.
numbers = "1234567890"
numbers = list(numbers)
#print number list
print(numbers)
