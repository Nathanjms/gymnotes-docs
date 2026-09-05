# Backups & recovery

GymNotes stores your workout data on the device you are using. No GymNotes account is required, and your data is not automatically sent to a GymNotes server.

Backups protect your data if you clear your browser, lose or damage your device, or move to another device. GymNotes supports two types:

- **Google Drive backups** are convenient and can run automatically.
- **Backup files** are independent copies that you download or share yourself.

For the strongest protection, use Google Drive and occasionally download a separate backup file.

## Back up to Google Drive

Open **Settings**, find **Backups & recovery**, then select **Set up Google Drive backup**.

Google will ask you to choose an account and approve access. GymNotes requests permission only to manage the files it creates in Google Drive's private application-data area. It cannot see or change your normal Drive files.

After access is approved, GymNotes creates the first backup. Future manual backups use **Back up now**. If Google's permission expires, select **Reconnect & back up** when prompted.

### Automatic backups

After the first successful Google Drive backup:

1. Open **Backup settings**.
2. Turn on **Automatic Google Drive backup**.

GymNotes then backs up after workout changes, at most once every five minutes. An automatic backup may pause until you reconnect Google Drive.

Automatic backups add protection, but you should still check occasionally that a recent backup succeeded.

### Choose how many backups to keep

Under **Backup settings**, choose between 1 and 10 Google Drive backups. The default is 3.

After a successful backup, GymNotes removes older backups beyond your chosen limit. This only affects backup files created by GymNotes in its private application-data area.

## Create a backup file

A backup file does not require Google Drive. You can keep it wherever you choose.

1. Open **Settings** and find **Backups & recovery**.
2. Open **More recovery options**.
3. Select **Share backup file** or **Download backup file**.
4. Keep the file somewhere safe and identifiable.

GymNotes creates the file entirely in your browser. It is not uploaded to a GymNotes server.

## Restore a backup

Restoring replaces the workout data currently stored on your device. If the current data might be useful, create a backup file before continuing.

1. Open **Settings** and select **Restore a backup**.
2. Choose **Google Drive** or **Backup file**.
3. Select the backup you want to use.
4. Review the comparison between your current data and the selected backup.
5. If needed, select **Download current data first**.
6. Select **Replace my workout data**.

GymNotes reloads after a successful restore. Restoring a Google Drive backup does not delete or change the backup stored in Drive.

## Where are Google Drive backups?

GymNotes uses Google Drive's hidden application-data area. These files do not appear alongside your normal documents in the Google Drive website or app. This keeps the backups out of your normal file list and limits GymNotes to its own files.

You can disconnect GymNotes from **Backup settings**. You can also revoke access from your [Google Account connections](https://myaccount.google.com/connections). Revoking access stops future backups but does not remove workout data stored on your device.

The GymNotes developer cannot view or retrieve your Google Drive backups. Google's handling of data stored in Drive is covered by the [Google Privacy Policy](https://policies.google.com/privacy).

## Moving from the old GymNotes cloud backup

The former account-based GymNotes cloud-backup service has ended and does not accept new backups. Any remaining legacy accounts and backups will be permanently deleted no later than **31 December 2026**.

If you still have an old cloud backup, restore it using the migration option in GymNotes Settings before that date. Once restored, immediately create a new Google Drive backup or download a backup file. Legacy data cannot be recovered after deletion.

## Troubleshooting

### Google asks me to reconnect

Google Drive access tokens expire, so GymNotes may occasionally need your approval before it can back up or list restore points.

### No Google Drive backups are listed

Return to **Settings** and create a successful Google Drive backup first. Also check that you selected the same Google account used when the backup was created.

### A backup failed

Your existing workout data remains on your device. Check your connection, reconnect Google Drive if prompted, then try again. You can create a downloaded backup file while Drive is unavailable.

### I cannot find the backup in Google Drive

GymNotes backups are hidden in Drive's application-data area and are not visible in the normal file list. Use GymNotes' **Restore a backup** flow to view them.

For details about data handling, retention and Google permissions, see the [Privacy Policy](/privacy-policy).
