---
id: endpoints
title: Mainnet API Endpoints
---

The Spacemesh protocol exposes itself through the mainnet API. The following endpoints can be used to interact with the protocol.

## Account Service

### `/spacemesh.v2alpha1.AccountService/List`

Retrieves a list of accounts, including each account's balance, nonce, and other state details.

#### Request
- **Method**: POST
- **Request Body**:
  - `filter` (optional): Filters account results based on specific criteria.
  - `min_layer` (optional): Minimum layer from which to retrieve account data.
  - `max_results` (optional): Maximum number of account entries to return.
  - `offset` (optional): Offset for pagination in case of large data sets.

#### Response
- **Content**:
  - `accounts`: Array of account objects, each containing:
    - `account_id`: Unique identifier for the account.
    - `balance`: Current balance of the account.
    - `nonce`: Nonce value of the account.
  - `next_offset`: Offset for the next page of results if pagination is used.

#### Example Request

```json
POST /spacemesh.v2alpha1.AccountService/List
{
  "min_layer": 1000,
  "max_results": 50
}
```

#### Example Response

```json
{
  "accounts": [
    {
      "account_id": "12345",
      "balance": "1000000",
      "nonce": 42
    },
    ...
  ],
  "next_offset": 51
}
```

## Activation Service

## Transaction Service

## Layer Service

## Malfeasance Service

## Network Service

## Node Service

## Reward Service