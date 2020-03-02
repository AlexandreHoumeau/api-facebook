# Facebook-Api
---
## User api
Crud API for all users
#### [POST] Create user 
Allows the creation of a single user.
|User|Api|
|---|---|
|Require autenthification |No|
|Who can use it |Everybody|
|Response formats |Application/JSON|

- HTTP request : POST → user/create
#### Parameters
```javascript
{
    'first_name': 'Alexandre', // optionnal
    'last_name': 'Houmeau', // optionnal
    'email': 'Alexandre@gmail.com', // required
    'password': '123456789', // required
    'age': 23, // optionnal
    'gender': 'm', // optionnal,
    'height': 1.75, // optionnal
    'weight': 80, // optionnal
    'city': 'Paris', // optionnal
    'city_code': '75009', // optionnal
    'street_number': 13, // optionnal
    'street_type': 'rue', // optionnal
    'street_name': 'de cambrai', // optionnal
    'phone': '0651448017', // optionnal
    'image_profil': 'https://www.mediacritik.com/wp-content/uploads/2019/04/rs_1024x759-170407142939-1024.Peter-Dinklage-Game-of-Thrones.kg_.040717.jpg' // optionnal
}
```

#### Response
``` javascript
{
  'id': '12483hdhd2838',
  'first_name': 'Alexandre',
  'last_name': 'Houmeau',
  'email': 'Alexandre@gmail.com',
  'password': '123456789',
  'token': 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'
  'age': 23,
  'gender': 'm',
  'height': 1.75,
  'weight': 80,
  'city': 'Paris',
  'cityCode': '75000',
  'street_number': 13,
  'street_type': 'rue',
  'street_name': 'de cambrai',
  'phone': '0651448017',
  'image_profil': 'https://www.mediacritik.com/wp-content/uploads/2019/04/rs_1024x759-170407142939-1024.Peter-Dinklage-Game-of-Thrones.kg_.040717.jpg'
}
```
---
#### [GET] Show user 
Show a single user by ID.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : GET -> user/show/:id
- Header request: token: Valid user token
 
#### Parameters
    user/show/12483hdhd2838
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'

#### Response
``` javascript
{
  'id': '12483hdhd2838',
  'first_name': 'Alexandre',
  'last_name': 'Houmeau',
  'email': 'Alexandre@gmail.com',
  'password': '123456789',
  'token': 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'
  'age': 23,
  'gender': 'm',
  'height': 1.75,
  'weight': 80,
  'city': 'Paris',
  'cityCode': '75000',
  'street_number': 13,
  'street_type': 'rue',
  'street_name': 'de cambrai',
  'phone': '0651448017',
  'image_profil': 'https://www.mediacritik.com/wp-content/uploads/2019/04/rs_1024x759-170407142939-1024.Peter-Dinklage-Game-of-Thrones.kg_.040717.jpg'
}
```

---
#### [Update] update user 
Update a single user by ID.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : PUT -> user/update/:id
- Header request: token: Valid user token
 
#### Parameters
user/update/12483hdhd2838
token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'
```javascript
{
    'first_name': 'Bertrand',
    'last_name': 'Guy'
}
```
#### Response
``` javascript
{
  'id': '12483hdhd2838',
  'first_name': 'Bertrand',
  'last_name': 'Guy',
  'email': 'Alexandre@gmail.com',
  'password': '123456789',
  'token': 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'
  'age': 23,
  'gender': 'm',
  'height': 1.75,
  'weight': 80,
  'city': 'Paris',
  'cityCode': '75000',
  'street_number': 13,
  'street_type': 'rue',
  'street_name': 'de cambrai',
  'phone': '0651448017',
  'image_profil': 'https://www.mediacritik.com/wp-content/uploads/2019/04/rs_1024x759-170407142939-1024.Peter-Dinklage-Game-of-Thrones.kg_.040717.jpg'
}
```

---
#### [Delete] Delete user 
Delete a single user by ID.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : DELETE -> user/delete/:id
- Header request: token: Valid user token
 
#### Parameters
    user/show/12483hdhd2838
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'

#### Response
``` javascript
{
  'id': '12483hdhd2838',
  'first_name': 'Alexandre',
  'last_name': 'Houmeau',
  'email': 'Alexandre@gmail.com',
  'password': '123456789',
  'token': 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'
  'age': 23,
  'gender': 'm',
  'height': 1.75,
  'weight': 80,
  'city': 'Paris',
  'cityCode': '75000',
  'street_number': 13,
  'street_type': 'rue',
  'street_name': 'de cambrai',
  'phone': '0651448017',
  'image_profil': 'https://www.mediacritik.com/wp-content/uploads/2019/04/rs_1024x759-170407142939-1024.Peter-Dinklage-Game-of-Thrones.kg_.040717.jpg'
}
```
