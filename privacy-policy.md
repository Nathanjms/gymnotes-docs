# Privacy Policy

_Last updated: 4 September 2026_

## In plain English

- Your workouts stay on your device by default.
- If you enable Google Drive backup, your backup travels directly between your browser and a private GymNotes area in your Google Drive. Current workout data does not pass through or remain on a GymNotes-owned server.
- The GymNotes app has no advertising or analytics. The separate documentation website uses limited, aggregate Cloudflare Web Analytics.
- The old account-based backup service has ended. Any remaining legacy server data will be permanently deleted no later than **31 December 2026**.

The rest of this policy explains these points in more detail.

## Who is responsible for your data

GymNotes is developed and operated by Nathan James. For questions, requests or complaints about this policy or your personal data, email [nathan@nathanjms.co.uk](mailto:nathan@nathanjms.co.uk).

## Information stored on your device

GymNotes stores the information needed to provide its features locally in your browser. This may include:

- workout logs, exercises and muscle groups;
- workout dates, times and other workout metadata;
- application settings and preferences; and
- backup status and preferences.

GymNotes also provides an optional notes feature. Notes remain only on your device and are excluded from both downloaded backups and Google Drive backups.

Local data remains on your device until you delete it, reset GymNotes, clear the site's browser data or uninstall the application. Clearing browser or application data may permanently delete this information. Because GymNotes does not hold a server-side copy of current local data, the developer cannot view or recover it.

## Downloaded device backups

You may download a backup file containing eligible GymNotes data directly to your device. This file is created in your browser and is not uploaded to a GymNotes server. You are responsible for keeping downloaded backup files secure and deleting them when they are no longer needed.

## Optional Google Drive backups

Connecting Google Drive is optional. GymNotes can be used without a Google account.

If you connect Google Drive, GymNotes requests only the following OAuth permission:

`https://www.googleapis.com/auth/drive.appdata`

This limited permission allows GymNotes to create, list, download and delete its own backup files in Google Drive's private application-data folder. It does not allow GymNotes to:

- access your normal Google Drive files or folders;
- view files created by other applications;
- access your email address, name, profile picture or contacts; or
- access Gmail, Google Photos, Google Calendar or other Google services.

The application-data folder is separate from your normal Drive content and is not visible in the standard Google Drive interface. More information is available in [Google's application-data documentation](https://developers.google.com/workspace/drive/api/guides/appdata).

### How Google user data is used

Google Drive access is used only to:

- create backups of eligible GymNotes workout data and settings;
- list the GymNotes backups available to restore;
- restore a backup you select; and
- delete older GymNotes backups.

GymNotes keeps the three most recent Google Drive backups by default. You can choose to retain between one and ten backups in the application's settings. After a new backup is created, GymNotes attempts to delete older GymNotes backups beyond your selected limit. Google user data is not used for advertising, analytics, profiling or marketing.

GymNotes' use of information received from Google APIs complies with the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including its Limited Use requirements.

### Transfer, storage and access tokens

Backup data is transferred directly between your browser and Google Drive over HTTPS. It does not pass through, or remain on, a GymNotes-owned server. The GymNotes developer cannot view or retrieve these backups.

Google stores and processes the backup files as part of Google Drive. Google's handling of that information is governed by the [Google Privacy Policy](https://policies.google.com/privacy).

Google access tokens are held temporarily in your browser's memory. GymNotes does not store them permanently on your device or send them to a GymNotes server. When a token expires, GymNotes may ask you to reconnect Google Drive.

### Revoking access and deleting Google Drive backups

You can revoke GymNotes' Google Drive access at any time from your [Google Account's third-party connections](https://myaccount.google.com/connections). Revoking access prevents future access to GymNotes' Google Drive application data, but does not delete data stored locally on your device.

You can delete GymNotes' hidden application data through Google Drive's application-management controls. Google may also delete this application data when access is removed. Deleting Google Drive application data is permanent, and the GymNotes developer cannot recover it.

## Sharing of information

GymNotes does not sell, rent or share your workout data with advertisers, analytics providers or data brokers.

When you choose Google Drive backup, eligible backup data is transferred only to Google to provide the storage service you requested. Standard technical information may also be processed by website-hosting and infrastructure providers as described below. These providers process information only to deliver, secure and maintain their services.

## Website hosting information

The services used to deliver GymNotes and this website may automatically process limited technical information, such as your IP address, browser type, requested page, date and time, and security or error logs. This information is used only for security, reliability, troubleshooting and delivery of the service. GymNotes does not use it for advertising, behavioural profiling or analytics.

Technical logs are retained only for as long as reasonably necessary for these purposes or to meet legal obligations, and may also be subject to the hosting provider's retention periods.

## Documentation website analytics

The documentation website at [gymnotes.co.uk](https://gymnotes.co.uk) uses Cloudflare Web Analytics to understand aggregate page views and website performance and to gauge whether GymNotes and its documentation are being used. This analytics service is not included in the GymNotes application at [app.gymnotes.co.uk](https://app.gymnotes.co.uk).

Cloudflare Web Analytics may process aggregate information such as page views, page paths, referring websites, approximate country, device type, browser, operating system and page-performance measurements. According to [Cloudflare's Web Analytics documentation](https://developers.cloudflare.com/web-analytics/about/), it does not collect or use visitors' personal data. It does not use cookies or local storage to collect these metrics and does not track individual visitors across websites.

GymNotes uses this information only to understand general usage and improve the documentation website. It is not used for advertising, individual profiling or tracking activity within the GymNotes application.

## Discontinued account and cloud-backup service

GymNotes previously offered an optional account-based cloud-backup service operated through a GymNotes backend server. This service has been discontinued in favour of optional, direct Google Drive backups.

Users of the former service provided an email address for authentication and account identification. Where Google Sign-In was used, GymNotes may also have received the user's basic Google profile information, such as their name, email address, profile picture and Google account identifier. Workout data submitted for cloud backup was stored against the user's GymNotes account. Authentication records and related operational logs may also have been stored.

This legacy information was used only to authenticate users and provide backup and restore functionality. It was not used for advertising, analytics, marketing or profiling.

Legacy accounts and backups are being retained temporarily only to give existing users time to recover their data and migrate to Google Drive or a downloaded device backup. All legacy server-side accounts, email addresses, Google profile information, authentication records and stored workout backups will be permanently deleted no later than **31 December 2026**. The legacy backend will then be decommissioned.

You may request earlier deletion by emailing [nathan@nathanjms.co.uk](mailto:nathan@nathanjms.co.uk). Before requesting deletion, restore or download any legacy backup you wish to keep. Deleted legacy data cannot be recovered.

Deleting legacy server data does not delete information stored locally on your device or backups stored in your own Google Drive.

## Security

GymNotes uses HTTPS for data transferred between your browser and Google Drive and requests the least-privileged Google Drive permission required for backup and restore. Current Google access tokens are kept only in browser memory, and current backups are not stored on a GymNotes server.

No method of electronic storage or transmission is completely secure. You should protect access to your device, Google account and any downloaded backup files.

## Your choices and rights

You control whether to connect Google Drive, create backups, restore data or revoke Google access. You can delete local GymNotes data using the application's reset controls or your browser's site-data controls. You can also ask for early deletion of legacy server data using the contact details above.

Depending on where you live, you may have rights over personal data held by GymNotes, including rights to access, correct, delete, restrict or object to its processing, and receive a portable copy. You may also withdraw consent where processing relies on consent. These rights may be limited where GymNotes does not possess or control the data, such as information held only on your device or in your Google Drive.

To exercise a right, email [nathan@nathanjms.co.uk](mailto:nathan@nathanjms.co.uk). You may be asked for enough information to locate legacy records and verify your identity. UK users can also complain to the [Information Commissioner's Office](https://ico.org.uk/make-a-complaint/).

## Changes to this policy

This policy may be updated if GymNotes' features or data-handling practices change. The latest version and its effective date will be published on this page.
