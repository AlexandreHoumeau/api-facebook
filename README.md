# Facebook-Api ⚡
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
    user/delete/12483hdhd2838
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


## Event api
Crud API for all Events
#### [POST] Create event 
Allows the creation of a single event.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : POST -> event/create
#### Parameters
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'
```javascript
{
    'title': 'Event_name_2020', // require
    'description': 'Super event for 2020', // optionnal
    'location': 'The Event place', // required
    'cover_photo': 'http://event-photo.jpeg', // required
    'public': false, // optionnal
    'participants': '12483hdhd2838', // optionnal
    'created_at': Date.now // automatic
}
```

#### Response
``` javascript
{
    'id': 'kdjs65qkjd76shdg9'
    'title': 'Event_name_2020',
    'description': 'Super event for 2020',
    'location': 'The Event place',
    'cover_photo': 'http://event-photo.jpeg',
    'public': false, 
    'admin': '12483hdhd2838' // automatic when creating -> take the user token to find user in db
    'participants': '12483hdhd2838', 
    'created_at': Date.now 
}
```
---
#### [GET] Show event 
Show a single event by ID.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : GET -> event/show/:id
- Header request: token: Valid user token
 
#### Parameters
    event/show/kdjs65qkjd76shdg9
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'

#### Response
``` javascript
{
    'id': 'kdjs65qkjd76shdg9'
    'title': 'Event_name_2020',
    'description': 'Super event for 2020', 
    'location': 'The Event place', // required
    'cover_photo': 'http://event-photo.jpeg',
    'public': false, 
    'admin': '12483hdhd2838' 
    'participants': '12483hdhd2838', 
    'created_at': Date.now 
}
```

---
#### [Update] update event 
Update a single event by ID.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : PUT -> event/update/:id
- Header request: token: Valid user token
 
#### Parameters
    event/update/kdjs65qkjd76shdg9
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'
```javascript
{
    'admin': '['sf4546sdf54654', 'sdf53s4d3546s4df3', 'dsf5s43df54sdf']'
}
```
#### Response
``` javascript
{
    'id': 'kdjs65qkjd76shdg9'
    'title': 'Event_name_2020', 
    'description': 'Super event for 2020', 
    'location': 'The Event place',
    'cover_photo': 'http://event-photo.jpeg',
    'public': false,
    'admin': ['12483hdhd2838', 'sf4546sdf54654', 'sdf53s4d3546s4df3', 'dsf5s43df54sdf'] 
    'participants': '12483hdhd2838',
    'created_at': Date.now 
}
```

---
#### [Delete] Delete event 
Delete a single event by ID.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : DELETE -> event/delete/:id
- Header request: token: Valid user token
 
#### Parameters
    event/delete/kdjs65qkjd76shdg9
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'

#### Response
``` javascript
{
    'id': 'kdjs65qkjd76shdg9'
    'title': 'Event_name_2020', 
    'description': 'Super event for 2020', 
    'location': 'The Event place',
    'cover_photo': 'http://event-photo.jpeg',
    'public': false,
    'admin': ['12483hdhd2838', 'sf4546sdf54654', 'sdf53s4d3546s4df3', 'dsf5s43df54sdf'] 
    'participants': '12483hdhd2838',
    'created_at': Date.now 
}
```
## Group api
Crud API for all Groups
#### [POST] Create group 
Allows the creation of a single group.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : POST -> group/create
#### Parameters
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'
```javascript
{
    'name': 'Group_name_2020', // require
    'description': 'Super Group', // optionnal
    'cover_photo': 'http://group-photo.jpeg', // optional
    'public': false, // optionnal
    'member': '12483hdhd2838', // optionnal
    'created_at': Date.now // automatic
}
```

#### Response
``` javascript
{
    'id': 'dkjfhkud254d54fsdfsdf'
    'name': 'Group_name_2020',
    'description': 'Super Group',
    'cover_photo': 'http://group-photo.jpeg',
    'public': false, 
    'admin': '12483hdhd2838' // automatic when creating -> take the user token to find user in db
    'member': '12483hdhd2838', 
    'created_at': Date.now 
}
```
---
#### [GET] Show group 
Show a single group by ID.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : GET -> group/show/:id
- Header request: token: Valid user token
 
#### Parameters
    group/show/dkjfhkud254d54fsdfsdf
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'

#### Response
``` javascript
{
    'id': 'dkjfhkud254d54fsdfsdf'
    'name': 'Group_name_2020',
    'description': 'Super Group',
    'cover_photo': 'http://group-photo.jpeg',
    'public': false, 
    'admin': '12483hdhd2838' // automatic when creating -> take the user token to find user in db
    'member': '12483hdhd2838', 
    'created_at': Date.now 
}
```

---
#### [Update] update group 
Update a single group by ID.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : PUT -> group/update/:id
- Header request: token: Valid user token
 
#### Parameters
    group/update/kdjs65qkjd76shdg9
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'
```javascript
{
    'admin': '['sf4546sdf54654', 'sdf53s4d3546s4df3', 'dsf5s43df54sdf']'
}
```
#### Response
``` javascript
{
    'id': 'dkjfhkud254d54fsdfsdf'
    'name': 'Group_name_2020',
    'description': 'Super Group',
    'cover_photo': 'http://group-photo.jpeg',
    'public': false, 
    'admin': '['sf4546sdf54654', 'sdf53s4d3546s4df3', 'dsf5s43df54sdf']',
    'member': '12483hdhd2838', 
    'created_at': Date.now 
}
```

---
#### [Delete] Delete group 
Delete a single group by ID.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : DELETE -> group/delete/:id
- Header request: token: Valid user token
 
#### Parameters
    group/delete/dkjfhkud254d54fsdfsdf
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'

#### Response
``` javascript
{
    'id': 'dkjfhkud254d54fsdfsdf'
    'name': 'Group_name_2020',
    'description': 'Super Group',
    'cover_photo': 'http://group-photo.jpeg',
    'public': false, 
    'admin': '['sf4546sdf54654', 'sdf53s4d3546s4df3', 'dsf5s43df54sdf']',
    'member': '12483hdhd2838', 
    'created_at': Date.now 
}
```

## Discussion groups api
Crud API for all Discussion Groups 
#### [POST] Create Discussion groups 
Allows the creation of a single Discussion group.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : POST -> discussion/create
#### Parameters
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'
```javascript
{
    'name': 'Discussion_Group_2020', // require
    'messages': [
        user: '12483hdhd2838', // ObjectId
        message: 'Hello World !'
    ], // optionnal
    'group': 'skdjlkj5425424sdsqd', // optional // ObjectId
    'public': false, // optionnal
    'users': [12483hdhd2838], // optionnal
    'created_at': Date.now // automatic
}
```

#### Response
``` javascript
{
    id: 'qskq554qsd6q5s4d6fd7gd'
    name: 'Discussion_Group_2020',
    messages: [{
        user: '12483hdhd2838',
        content: 'Hello World !',
        created_at: Date.now
    }],
    admin:['12483hdhd2838'], // automatic when creating -> take the user token to find user in db
    group: 'skdjlkj5425424sdsqd',
    public: false,
    users: [12483hdhd2838],
    created_at: Date.now
}
```
---
#### [GET] Show Discussion group 
Show a single Discussion group by ID.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : GET -> discussion/show/:id
- Header request: token: Valid user token
 
#### Parameters
    discussion/show/qskq554qsd6q5s4d6fd7gd
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'

#### Response
``` javascript
{
    id: 'qskq554qsd6q5s4d6fd7gd'
    name: 'Discussion_Group_2020',
    messages: [{
        user: '12483hdhd2838',
        content: 'Hello World !',
        created_at: Date.now
    }],
    admin:['12483hdhd2838'],
    group: 'skdjlkj5425424sdsqd',
    public: false,
    users: ['12483hdhd2838'],
    created_at: Date.now
}
```

---
#### [Update] update Discussion Group 
Update a single event by ID.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : PUT -> discussion/update/:id
- Header request: token: Valid user token
 
#### Parameters
    discussion/update/qskq554qsd6q5s4d6fd7gd
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'
```javascript
{
    admin: '['sf4546sdf54654', 'sdf53s4d3546s4df3', 'dsf5s43df54sdf']'
    message: [{
        user: '12483hdhd2838',
        content: 'Hello World twice!',
        created_at: Date.now
    },{
        user: 'sdf53s4d3546s4df3',
        content: 'Ok Stop !!'
        created_at: Date.now
    }]
}
```
#### Response
``` javascript
{
    id: 'qskq554qsd6q5s4d6fd7gd'
    name: 'Discussion_Group_2020',
    messages: [{
        user: '12483hdhd2838',
        content: 'Hello World !',
        created_at: Date.now
    },{
        user: '12483hdhd2838',
        content: 'Hello World twice!',
        created_at: Date.now
    },{
        user: 'sdf53s4d3546s4df3',
        content: 'Ok Stop !!'
        created_at: Date.now
    }],
    admin:'['sf4546sdf54654', 'sdf53s4d3546s4df3', 'dsf5s43df54sdf']'
    group: 'skdjlkj5425424sdsqd',
    public: false,
    users: ['12483hdhd2838'],
    created_at: Date.now
}
```

---
#### [Delete] Delete discussion group 
Delete a single discussion group by ID.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : DELETE -> discussion/delete/:id
- Header request: token: Valid user token
 
#### Parameters
    discussion/delete/qskq554qsd6q5s4d6fd7gd
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'

#### Response
``` javascript
{
    id: 'qskq554qsd6q5s4d6fd7gd'
    name: 'Discussion_Group_2020',
    messages: [{
        user: '12483hdhd2838',
        content: 'Hello World !',
        created_at: Date.now
    },{
        user: '12483hdhd2838',
        content: 'Hello World twice!',
        created_at: Date.now
    },{
        user: 'sdf53s4d3546s4df3',
        content: 'Ok Stop !!'
        created_at: Date.now
    }],
    admin:'['sf4546sdf54654', 'sdf53s4d3546s4df3', 'dsf5s43df54sdf']'
    group: 'skdjlkj5425424sdsqd',
    public: false,
    users: ['12483hdhd2838'],
    created_at: Date.now
}
```


