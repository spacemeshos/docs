---
id: advanced-wallet
title: Advanced Wallet Features
---
## Backing up

There are 3 options to get to Wallet Backup Screen:

_OPTION 1:_

At Main Screen - until first time backup there will be the red banner under “BALANCE” section saying “BACKUP YOUR WALLET”

![](./../../../static/img/v1.0/backup_prompt.png)


_OPTION 2:_

On the top right corner of the main screen there is button **SETTINGS** at top right corner

Click on the left menu on “WALLETS” option, then scroll down until you see “Wallet Backup” section

![](./../../../static/img/v1.0/backup_settings.png)

Now you are at Wallet Backup Options Screen

![](./../../../static/img/v1.0/backup_main_screen.png)

### Option ‘FILE BACKUP’

Click on **FILE BACKUP** button and you’ll get to this screen

![](./../../../static/img/v1.0/wallet_file_backup.png)

Clicking on **show file location** button will open file browser window with the wallet backup file selected. The file is saved in “Documents” folder and can be moved to any other folder or ledger.

![](./../../../static/img/v1.0/backup_file.png)

### Option ’12 WORDS BACKUP’

Click on **12 WORDS BACKUP** button and you’ll get to this screen

![](./../../../static/img/v1.0/wallet_12_words_backup.png)

These words can be used to restore your wallet anywhere using Spacemesh software. They are also called as _seed_ or _seed words_.

For _cold storage_ option - keeping 12 words offline on the paper in some safe place, press **PRINT WORDS** button. This will open standard print dialog and you can print the words on your printer.

The other button is **COPY WORDS** - if you want to save the words in some kind of encrypted file or vault. After clicking **COPY WORDS** button you will see message in green color confirming that words are copied to your clipboard.

![](./../../../static/img/v1.0/wallet_12_words_copied.png)

After clicking NEXT button you’ll get to this screen:

![](./../../../static/img/v1.0/wallet_12_words_confirm.png)

You can practice restoring the words in the right order by dragging and dropping the randomly selected 4 words in right places. If you’ve placed all the words and it is not the correct order than you’ll get this message under the **TRY AGAIN** button

![](./../../../static/img/v1.0/wallet_12_words_confirm_2.png)

If you’ve placed the words in the right order than you’ll see this message

![](./../../../static/img/v1.0/wallet_12_words_done.png)

**IMPORTANT**: _you don’t have to place the words in correct order - your wallet is already backed-up, this is just to test you if you want to._

Now you can return to main screen by click **DONE** or arrow back (**) button.

## Rename wallet

Go to Settings Screen

Click on **WALLETS** on in left menu and you’ll see **Display Name** section

![](./../../../static/img/v1.0/rename_wallet.png)

After clicking on **RENAME** button, the wallet name will switch to input where you can type in the new name for the wallet

![](./../../../static/img/v1.0/rename_wallet_type.png)

After typing in new name click on **SAVE** button if you want to finish renaming, or **CANCEL** if you wish to leave the existing name

If you clicked **SAVE** button you will see the renamed name like this

![](./../../../static/img/v1.0/renamed_wallet_complete.png)


## Change wallet password

Go to Setting Screen

Click on **WALLETS** option in left menu and scroll down until you see **Wallet Password** section

![](./../../../static/img/v1.0/wallet_password.png)


Click on **CHANGE** button and password line will switch to 2 inputs for typing in new password and confirming it again

![](./../../../static/img/v1.0/wallet_password_confirm.png)

If you wish to proceed with changing password - click **SAVE**, if not - click **CANCEL**

The screen will look as before clicking **CHANGE**

If you clicked **SAVE** than wallet password will be updated!

## Restoring a wallet

There are 3 options to restore wallet:

_OPTION 1:_

After clean install of Spacemesh wallet on the intro screen you’ll see a button

**RESTORE EXISTING WALLET** left to **SETUP** button!

![](./../../../static/img/v1.0/welcome_to_spacemesh.png)

_OPTION 2:_

If there are existing wallets - on app start at the Unlock Wallet Screen there is a button **RESTORE** below password input field

![](./../../../static/img/v1.0/password.png)

_OPTION 3:_

If you have an unlocked wallet, go to Settings Screen

Click on **WALLETS** option in left menu and scroll down until you see **Restore Wallet** section and click on **RESTORE** button

![](./../../../static/img/v1.0/wallet_restore_settings.png)

After following one of the options you’ll reach this screen

![](./../../../static/img/v1.0/wallet_restore_options.png)

Now there are _2_ options to restore the wallet.

_Option A: File Restore_

After clicking on **RESTORE FROM FILE** you’ll get to this screen

You can drag and drop your file on the designated area or click on **locate file on your computer**

After selecting file the screen will look like this:

![](./../../../static/img/v1.0/wallet_file_restore.png)

Click on **RESTORE** button at the bottom right and you’ll get to Protect Wallet Screen where you need to type in and retype the password you want for the wallet

After clicking NEXT button you will see loader

And then you’ll continue the regular setup wallet flow!


_Option B: 12 Words Restore_

After clicking on **12 WORDS RESTORE** button you’’ll get to this screen

![](./../../../static/img/v1.0/wallet_12_words_restore.png)



If you’ve typed correct words in correct order than you’ll get to Protect Wallet screen and can proceed as first time wallet setup!

![](./../../../static/img/v1.0/protect_wallet.png)

## Adding an account

Go to Settings Screen

Click on **ACCOUNTS** option in left menu

![](./../../../static/img/v1.0/account_settings.png)

You’ll see **ADD ACCOUNT** button. Click it and you’ll see popup asking to enter wallet’s password

![](./../../../static/img/v1.0/account_confirm.png))

After entering correct password the popup will disappear and you will see new account below existing accounts. Default name for created account is “Account **number**”

## Renaming an account

Go to Settings Screen

Click on **ACCOUNTS** option in left menu

Scroll to until you see account which you want to rename. Below account name you will see **RENAME** button.

![](./../../../static/img/v1.0/rename_wallet.png)

After clicking on **RENAME** button the name of the account will switch to an input where you can type new account name

![](./../../../static/img/v1.0/rename_wallet_type.png)

After typing the new name, if you want to save it click **SAVE** or to discard changes - click **CANCEL**

If you clicked on **SAVE** you will see a popup asking you to enter wallet password!

![](./../../../static/img/v1.0/rename_wallet_confirm.png)

After entering correct password and clicking **UNLOCK** button in the popup, it will disappear and you will see the renamed account!

![](./../../../static/img/v1.0/renamed_wallet_complete.png)

## Signing text

`SIGN TEXT` allows you to sign a text message such as your full name or email address.
Signing is done with your account's secret key and requires access to it.
Signing your name with your account proves that the name is the name of the owner of the account.
As owner is defined as someone who has access to the account's secret key.

In order to use the `SIGN TEXT` feature, go to `SETTINGS`. Once there, notice the box on the left of the screen and click on `ACCOUNT SETTINGS`.

![](./../../../static/img/v1.0/account_commands.png)

1. Under each account, you'll notice three commands: `RENAME`, `SIGN TEXT`, and `REWARDS ACCOUNT`. Click on the `SIGN TEXT` command.

![](./../../../static/img/v1.0/sign_text_1.png)

2. Enter the text you want to sign such as your full name into the text box.

![](./../../../static/img/v1.0/sign_text_2.png)

3. Click the 'SIGN' button.

![](./../../../static/img/v1.0/sign_text_3.png)

The signature text is copied to the clipboard and can be sent to anyone.

4. Create an email or type a text message to the person you want to share the signature with and paste the signature copied to the clipboard in step 3.

## Creating contacts

There are _2_ options to create contact.

_Option 1:_

In order to create new contact go to CONTACTS tab!

![](./../../../static/img/v1.0/contacts_screen.PNG)

Click on **CREATE NEW CONTACT** button!

The screen will change to this state where you have 2 inputs - one for nickname and second for address!

![](./../../../static/img/v1.0/create_contact.PNG)

After filling the details and pressing **CREATE** button you will see the popup asking to enter wallet password

![](./../../../static/img/v1.0/create_contact_confirm.png)

After entering correct password and clicking **UNLOCK** button you will see newly created contact in contacts list

![](./../../../static/img/v1.0/contact_created.png)

_Option 2:_

In wallet main screen click on **ALL TRANSACTIONS** button

![](./../../../static/img/v1.0/tx_log.png)

Click on transaction you want to add to contacts

![](./../../../static/img/v1.0/create_contact_from_tx.png)

Click on small person icon to activate **Create New Contact** section. The screen will look like this:

![](./../../../static/img/v1.0/create_contact_from_tx_1.png)

Fill the details and click on **CREATE** button. Then you’ll see the password popup

![](./../../../static/img/v1.0/create_contact_from_tx_2.png)


After entering the correct password and clicking **UNLOCK** button, the popup will disappear and you will see the transaction with the nickname you’ve create the contact with

![](./../../../static/img/v1.0/create_contact_from_tx_3.png)

## Using existing contacts

Go to **CONTACTS** tab.

Move your mouse over the contact’s nickname you want to send coins to

![](./../../../static/img/v1.0/contact_created.png)

Click on it and you’ll navigate to Send Coins Screen with the field TO** already filled with the contact’s address you’ve clicked

![](./../../../static/img/v1.0/tx_from_contact.png)

Now proceed with sending coins as usual
