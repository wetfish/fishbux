# Project Setup

## General Templates
- [x] Header nav
- [ ] Home page
 - [ ] Some information about fishbux
 - [ ] Bank statistics
 - [ ] Recent transactions
- [ ] About page
- [ ] Donate page
- [ ] Task list page
- [ ] Stats page


## User Templates
- [ ] Permissions screen
- [ ] User dashboard
 - [ ] Basic account information
 - [ ] List of recent transactions
 - [ ] List of recent requests
- [ ] User profile
- [ ] User ledger
- [ ] Transfer funds
- [ ] Withdraw funds
- [ ] Request funds


## Admin templates
- [ ] Adding jobs
- [ ] List of requests
- [ ] Request approval


## Models

- Users
 - [ ] ID
 - [ ] Fish ID
 - [ ] Fish Name
 - [ ] Real Name
 - [ ] Display Name
 - [ ] Email
 - [ ] Role (User, Admin)

- Accounts
 - [ ] ID
 - [ ] User ID
 - [ ] Name
 - [ ] Bux

- Tasks
 - [ ] ID
 - [ ] Title
 - [ ] Description
 - [ ] Bux

- Requests
 - [ ] ID
 - [ ] Type (Reward, Withdrawl)
 - [ ] Status (Pending, Approved, Denied)
 - [ ] User ID
 - [ ] Task ID
 - [ ] Description

- Transactions
 - [ ] ID
 - [ ] Type (Reward, Withdrawl, Transfer, Donation)
 - [ ] User From
 - [ ] User To
 - [ ] Account From
 - [ ] Account To
 - [ ] Bux


## Misc

- [ ] Convert wiki page into actual account data
- [ ] Link converted data to actual user accounts
- [ ] Individual user donations (unique bitcoin wallets per donor)
