## Transaction API

This apu for our react transaction app which is at `... link to react app repo ..`

..... What this app is .......

## How to use

1. Clone this prohect by Running `git clone https://github.com/Prashmingrg/API-transcation.git`
2. Run ` cd API-tansaction`
3. Run `npm i`
4. Run ` npm run dev`. You must have `nodemon` install in your system, otherwise run `npm i nodemon -g` to install globally.

Now the project will be server at `https://Localhost:8000`

## API

This apu server wull be have 2 apu endpoints

1. User API
2. Transaction API

All he endpoint will follow the following path `{rooturl}/api/v1`

### User API

User API will use the following path `{rooturl}/api/v1/user`. This api will aloow client to do create user, login and more.
| # | PATH | METHOD | IS PRIVATE | DESCRIPTION |
| --| ---- | ------ | ---------- | ----------- |
| 1.| `/` | POST | false |

## Transaction API

User API will use the following path `{rooturl}/api/v1/transaction`. This api will aloow client to do create CRUD operation on transcation table.

| #   | PATH | METHOD | IS PRIVATE | DESCRIPTION                                                                                                        |
| --- | ---- | ------ | ---------- | ------------------------------------------------------------------------------------------------------------------ |
| 1.  | `/`  | GET    | true       | allow user to fetch their own transaction only                                                                     |
| 2.  | `/`  | Post   | true       | allow user to post their new transaction, data should be send as `{}`                                              |
| 3.  | `/`  | Patch  | true       | allow user to their own transaction only                                                                           |
| 4.  | `/`  | DELETE | true       | allow user to delete single or multiple of their own transcation only. clined should send the data as `{id1, id2}` |
