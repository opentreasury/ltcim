---
description: Functinal Processing.
---
# Template to follow the functional design when writing a doc.

## Some new functional service

Comments about what to include in each section are in italic grey text. Please remove these comments once you have supplied the requested information. This document should be concise with a total length of 2 to 4 pages.

## Functional Description

Define the functional description in 500 words or less.
Eg: Make the user submit this and this action will happen in the backend and does some x thing.

## Database Changes
We should alter minimally on the data table side, since most of the functionality from the repository could be built easily.

## User Interface Changes

Adding Conditional Charges

We need to display the charges conditional value for primary charge if selected for primary charge and then sub charges from the list of the existing charges which are not defined as primary.

### Files affected 
ChargeController.js
CreateChargeController.js
EditChargeController.js


## Code Changes
- SQL Migration where adding those three new INT fields as part of the flyway migrations in charges and savings data structure 
- Charge Distribution code change adding 
- Domain changes in the charges.domain 
- Handler Update in charge.handler
- Validation update 
- Reader and Writer CQRS code change
- Implementing methods relevant to sub-atomic changes in the transactions.
- Code business logic layer.
- Transaction grouping code addition
- Domain Addition of new fields in savings_account_charge and transactions
- Transaction grouping relevant methods when transactions occur in fineract.
- Pre and post cleanup methods.
- Reader and Writer CQRS 
- Handler Update
- Generalise transactions create and update and make changes to the existing .
- Fees to Income Mapping Chart of Accounts (Might need code changes)


## Configuration Changes
There will be no configuration changes in this code level unless requested. 

Configuration changes please consult 

## Testing
Integration test with sequence flow of the case including 

REST API , test end to end for feature change.
Process Sequence Testing using Integration Flow.
Integration test as prescribed in fineract flow.
