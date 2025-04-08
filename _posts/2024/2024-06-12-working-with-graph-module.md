---
layout: post
title:  "Exporting M365 User Data with PowerShell on macOS"
byline: "A Guide to Using Microsoft Graph"
date:   2024-06-12 08:00:00
author: Divya Akula
categories: MicrosoftGraph
tags:	MSGraph PowerShell MSGraphOnMAC SudoMSGraph M365MSGraph
cover:  "/assets/posts/2024-06-12-working-with-graph-module/fotor-ai.jpg"
thumbnail: "/assets/images/thumbnails/fotor-ai.jpg"
github: "https://github.com/4dcu-be/ShapeOfStories-SentimentAnalysis"
---
User data is an important aspect to deal with in any organization using Microsoft 365 (M365). In this blog, I will explain step by step to IT experts and administrators from macOS how to export complete M365 user data, that includes both active and inactive accounts, in a streamlined manner – all consolidated in a CSV file. The approach utilizes the Microsoft Graph module in PowerShell!!

## Installation

When I was trying to install the Graph module on PowerShell, I was greeted with the following notification: A Graph Module already exists. Therefore, I tried connecting to it with the command

```powershell
Connect-MGGraph
```

![Model]({{'/assets/posts/2024-06-12-working-with-graph-module/GraphAccessDenied.png' | prepend: site.baseurl}})
After a number of these unsuccessful attempts

![Model]({{'/assets/posts/2024-06-12-working-with-graph-module/GraphPwshAccessDenied.png' | prepend: site.baseurl}})

I tried to reinstall the MSGraph module that too with admin

```powershell
Sudo pwsh Install-Module Microsoft.Graph -scope Allusers -Force
```

Once the download and installation is succesful , the MGGraph successfully connected

![Model ]({{'/assets/posts/2024-06-12-working-with-graph-module/GraphSuccessfullyConnected.png' | prepend: site.baseurl}})

## Getting user information with Graph


```powershell
Connect-MGGraph -scopes "User.Read.All"
```
![Model ]({{'/assets/posts/2024-06-12-working-with-graph-module/image.png' | prepend: site.baseurl}})
This requests the scope User.Read.All to the application  with id 14d82eec-204b-4c2f-b78-296a70dab67e , if the permission has already granted you should skip the next step

### App Registration

Navigate to the app registrations via Identity portal using [https://entra.microsoft.com/](https://entra.microsoft.com/)

1. Navigate to Enterprise applications
2. All Applications
3. Remove all the filters 
4. Search for the appId from the above list

   ![Model ]({{'/assets/posts/2024-06-12-working-with-graph-module/MGCLT.png' | prepend: site.baseurl}})
5. Grant Admin approval if its not already given

### Script Execution

``` powershell

$dataTable = Get-MGUser | Select-Object @{Name="Display Name"; Expression={$_.displayName}}, mail, userPrincipalName,Id,BusinessPhones
$dataTable | Export-Csv -Path "Documents/users.csv" -NoTypeInformation

```

The output would look as below


| Display Name        | Mail                           | UserPrincipalName                     | Id                                    | Business Phones                               |
|--------------------|---------------------------------|--------------------------------------------|------------------------------------------|-------------------------------------------------|
| Adele Vance         | AdeleV@5ksww1.onmicrosoft.com    | AdeleV@5ksww1.onmicrosoft.com         | a7bac51e-93a9-4492-9074-492379207395  | System.String[]                             |
| Alex Wilber         | AlexW@5ksww1.onmicrosoft.com   | AlexW@5ksww1.onmicrosoft.com          | a5aaf665-0090-4457-a92e-8670a610fd1a  | System.String[]                             |
| Diego Siciliani     | DiegoS@5ksww1.onmicrosoft.com    | DiegoS@5ksww1.onmicrosoft.com         | cea26297-a7d6-4800-a4b6-25842463b2od  | System.String[]                             |

