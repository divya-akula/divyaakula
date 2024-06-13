---
layout: post
title:  "Enable with Graph Module PowerShell on MAC."
byline: "Transition seamlessly"
date:   2024-06-12 08:00:00
author: Divya Akula
categories: MicrosoftGraph
tags:	MSGraph PowerShell MSGraphOnMAC SudoMSGraph
cover:  "/assets/posts/2024-06-12-working-with-graph-module/fotor-ai.jpg"
thumbnail: "/assets/images/thumbnails/fotor-ai.jpg"
github: "https://github.com/4dcu-be/ShapeOfStories-SentimentAnalysis"
---
In a Microsoft 365 (M365) environment, managing user data effectively is crucial. This blog post guides IT professionals and administrators on macOS through a streamlined approach to exporting comprehensive M365 user data, encompassing both active and inactive accounts, as a CSV file. The method leverages the Microsoft Graph module within PowerShell!!

## Installation

when I tried to install th graph module using PowerShell , it said that it a graph Module already exists , so I tried to connect it using

```powershell
Connect-MGGraph
```

![Model ]({{'/assets/posts/2024-06-12-Working-With-Graph-Module/GraphAccessDenied.png' | prepend: site.baseurl}})
After various such unsuccessful attempts

![Model ]({{'/assets/posts/2024-06-12-Working-With-Graph-Module/GraphPwshAccessDenied.png' | prepend: site.baseurl}})

I tried to reinstall the MSGraph module that too with admin

```powershell
Sudo pwsh Install-Module Microsoft.Graph -scope Allusers -Force
```

Once the download and installation is succesful , the MGGraph successfully connected

![Model ]({{'/assets/posts/2024-06-12-Working-With-Graph-Module/GraphSuccessfullyConnected.png' | prepend: site.baseurl}})

## Getting user information with Graph


```powershell
Connect-MGGraph -scopes "User.Read.All"
```
![Model ]({{'/assets/posts/2024-06-12-Working-With-Graph-Module/image.png' | prepend: site.baseurl}})
This requests the scope User.Read.All to the application  with id 14d82eec-204b-4c2f-b78-296a70dab67e , if the permission has already granted you should skip the next step

### App Registration

Navigate to the app registrations via Identity portal using [https://entra.microsoft.com/](https://entra.microsoft.com/)

1. Navigate to Enterprise applications
2. All Applications
3. Remove all the filters 
4. Search for the appId from the above list

   ![Model ]({{'/assets/posts/2024-06-12-Working-With-Graph-Module/MGCLT.png' | prepend: site.baseurl}})
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

