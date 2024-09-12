---
layout: post
title: "Seamless Transition to New App Registration in PnP Management Shell"
byline: "A Shift in Authentication"
date: 2024-09-11 08:00:00
author: Divya Akula
categories: PnPPowerShell
tags: PnP PowerShell PnPOnMac
cover: "/assets/posts/2024-09-11-connecting-pnp-powershell-interactive/PnPHeader.jpeg"
thumbnail: "/assets/images/thumbnails/PnPHeader.jpeg"
github: "https://github.com/4dcu-be/ShapeOfStories-SentimentAnalysis"
---
## Introduction

As part of evolving changes and security challenges , PnP team has decided to change the login mechanism , for Pnp PowerShell. This blog post will guide you through the new interactive authentication process.

Encountering an error that the PnP app is not registered with the tenant. This is common with outdated versions of PnP PowerShell.
To ensure compatibility, update your PnP PowerShell module. Open the terminal on macOS or command prompt as administrator on Windows, and execute:

``` powershell
Connect-PnPOnline -Url https://trycatchexp.sharepoint.com/sites/HRPortal/ -Interactive 
```
 
 ## Update Pnp PowerShell module

Open the terminal (in mac) or cmd prompt as administrator

```powershell
Update-Module -Name PnP.PowerShell
```


## Setting Up App Registration

To recieve any of the above errors, we should do it through the App Id , this forces us to create an app registration.  Give the appropriate name as I work for MS Syntex aka SPPremium I used the same

```powershell
Register-PnPEntraIDAppForInteractiveLogin -ApplicationName "SyntexPnP" -Tenant trycatchexp.onmicrosoft.com -Interactive -SharePointApplicationPermissions  Sites.FullControl.All -SharePointDelegatePermissions AllSites.FullControl
```

Note: The scopes parameter is deprecated. Specify the necessary permissions directly. Other available options include -GraphApplicationPermission, -GraphDelegatePermissions, -O365ManagementApplicationPermissions, and -O365ManagementDelegatePermissions.

prompts you for the authorization as well.

![PowerShellInteractive]({{'/assets/posts/2024-09-11-connecting-pnp-powershell-interactive/Approval.png' | prepend: site.baseurl}})

### Completing App Registration

Navigate to the app registrations via the Entra portal using [https://entra.microsoft.com/](https://entra.microsoft.com/).

1. **Navigate to App Registrations:** Access the App Registrations section directly.
2. **View All Applications:** Ensure you select the option to view all applications.
3. **Remove Filters:** It's important to clear any active filters to display all applications.
4. **Search for the App ID:** Utilize the provided App ID to find your specific application.

   ![Entra Portal Interactive]({{'/assets/posts/2024-09-11-connecting-pnp-powershell-interactive/EntraPortal.png' | prepend: site.baseurl}})

5. **Admin Approval:** If the application hasn't been approved yet, make sure to grant Admin approval.
6. **Access Requests:** In case of lacking access, it's advisable to request your administrator to grant the necessary permissions.

![Admin Grant]({{'/assets/posts/2024-09-11-connecting-pnp-powershell-interactive/AdminGrant.png' | prepend: site.baseurl}})

## Connecting to PowerShell

Now still using the interactive command connect to your SharePoint site

``` PowerShell
Connect-PnPOnline https://trycatchexp.sharepoint.com/sites/HRPortal/ -ClientId  73195866-cf8b-4d3a-bb0d-a12c5d2459b3 -Interactive
```

This command will prompt you to log in, adding an additional layer of authentication to ensure security
