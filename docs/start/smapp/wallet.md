---
id: wallet
title: Using Your Wallet
---

The Spacemesh App includes a Wallet for managing your Smesh.

Follow the instructions on this page to learn how to use your wallet.

# Accessing your Wallet

A new Wallet is created when you open the Spacemesh App for the first time.

You are prompted to secure your Wallet with a password, and we recommend that you store it in a password manager app, such as [1Password](https://1password.com).

> Your Wallet data is saved in a _wallet file_ (in JSON format) on your hard drive. The _wallet file_ includes sensitive private data that is encrypted in the file with your password.

When you open the Spacemesh App again you should see this screen:

![](./../../../static/img/v1.0/password.png)

Enter your Wallet password to unlock access to your wallet.

The Wallet data is loaded from the wallet file to the App and is decrypted using the password you provide.

> **IMPORTANT: you will lose access to your wallet if you forget your password.** For this reason, we recommend that you create a `12-word backup` as soon as possible. See how to back up your wallet in the [advanced wallet guide](advanced_wallet.md).


# Checking your Smesh Balance

After unlocking your Wallet, you should see the following screen:

![](./../../../static/img/v1.0/wallet_screen.png)

The left side of the screen displays the Wallet info:

Your Wallet is configured with one main account called `Main Account`.

Think of this account as your crypto bank account. You use this account to hold SMH and to send and receive SMH coins.

Your account is identified by a unique _public address._ It is displayed under the account name in a short form that looks like this: `0xebee....ee0443`. Your full account address is a long hexidecimal number, such as `0xebee4e63a6b0f829f3ad06fb6c4aa80a6860774bc25e9c1b1b2c69b8b4ee0443`.

Your account balance is displayed at the bottom left side of the screen. SMH is the symbol for Smesh coin.

You can copy your account's public address to your computer's clipboard by clicking on the copy icon on the right side of the displayed  account number. This is useful if you want to receive SMH from another account holder. In this case, you just need to send the copied full account address to that person via any digital means, such as a text message or email.

# Viewing Transactions and Rewards

Click the `ALL TRANSACTIONS` button to access your wallet transactions log screen.

![](./../../../static/img/v1.0/wallet_screen.png)

In this screen you should see a list of all incoming and outgoing transactions from the account which was selected in the Wallet screen.

On the righthand side you'll see a summary view of your account activity.

![](./../../../static/img/v1.0/tx_log.png)

In the transactions log you should see each transaction you have sent from your account and each transaction that was sent to your account, as well as incoming Smeshing rewards.

Click on a transaction to view its details.

![](./../../../static/img/v1.0/tx_log_details.png)

# Sending Smidge

1. Navigate to the Wallet screen by clicking `WALLET` in the top-left side of the screen.

![](./../../../static/img/v1.0/wallet_screen.png)

2. Click on the `SEND` button.

You should see the Send SMH screen:

![](./../../../static/img/v1.0/send_smc_tx.png)

2. Paste the recipient's account address that he or she shared with you into the `Send to` field.

3. Enter the Smidge (1 trillionth of a smesh) amount you would like to send to the recipient in the `Amount` field.

> The amount must be less than your account's SMH balance, as you cannot spend coins that you do not have.

![](./../../../static/img/v1.0/send_smc_tx_1.png)

4. Click `NEXT`.

Review the transaction information in the summary screen:

![](./../../../static/img/v1.0/send_smc_tx_review.png)

5. Click `SEND` to execute the transaction.

You should now see this screen:

![](./../../../static/img/v1.0/send_smc_tx_sent.png)

6. Click on 'DONE'.

Congratulations! You have just sent your first SMH!

# Tracking your Transaction

Your recent transactions are displayed in the `Transactions` area of your Wallet Screen:

![](./../../../static/img/v1.0/wallet_tx_view.png)

1. Click on `ALL TRANSACTIONS` to view the full transactions log.

2. Click on a transaction to view its details:

![](./../../../static/img/v1.0/tx_log_details.png)

Notice the transaction status. A new transaction you just executed will be in the `PENDING` state and should move to `CONFIRMED` state once it has been added to the Spacemesh ledger.


# Getting Smesh from another account

### About Accounts and Addresses
By default, your Spacemesh Wallet has one main account. That account has one public address you can share with anyone in order to receive Smesh.

1. Click on the `REQUEST <-` button on your wallet screen:

![](./../../../static/img/v1.0/wallet_screen.png)

You should see this screen:

![](./../../../static/img/v1.0/request_coins.png)

2. Click on the copy icon next to your account public address to copy it to the clipboard.

3. Send the copied address to a friend to request that they send you SMH. You can paste the address directly into an app such as Whatsapp, Signal, or Telegram.

4. Ask that person to send SMH to this address using his or her Spacemesh wallet.


# Locking Access to your Wallet

> When you are done using your wallet in the App, you should log out from it to prevent other people with direct access to your computer from viewing your SMH balance, from performing transactions and from viewing your transaction history.

To log out from your wallet, just click on the Lock icon in the top right side of the wallet screen. It looks like this:

![](./../../../static/img/v1.0/lock_button.png)

To access your wallet again, open the app and re-enter your Wallet password.
