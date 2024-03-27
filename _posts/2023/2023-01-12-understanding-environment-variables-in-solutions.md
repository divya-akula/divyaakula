---
layout: post
title:  "Understanding Environment Variables in solutions"
byline: "Defending solutions with variables"
date:   2023-08-19 08:00:00
author: Divya Akula
categories: Power Platform
tags:	Solutions PowerPlatform flows
cover:  "/assets/posts/2023-01-12-understanding-environment-variables-in-solutions/MovingSolutions.png"
thumbnail: "/assets/images/thumbnails/MovingSolutions.png"
github: "https://github.com/4dcu-be/ShapeOfStories-SentimentAnalysis"
---
The environment variables help to unplug the configuration from the power automation & power apps and help us to port the solution across different tenants or environments with minimal/no changes to the solutions



## Creation of Environment variables

  Navigate to the solution where the environment variables are needed and the steps are as shown in the screenshot below.

  [Environmentvariable ]({{'/assets/posts/2023-01-12-understanding-environment-variables-in-solutions/EnvironmentVariables.webp' | prepend: site.baseurl}})

## Types of Environment variables

| Type | use |
|---|---|
| Decimal | Used for numeric configuration |
| Text | Used for text configuration , can be used for scenarios where you need to give customized errors |
| Yes/No | A boolean value , may be a switch to determine if production  |
| JSON | A complete settings can be implemented in json and can be further used |
| Data source | Currently it just supports SharePoint, the data source can be either SharePoint Site or library/list |

### Types of Environment variables:

#### JSON

 The JSON settings help to reduce if the solution is flooded with an environment variable, for eg: if you have a field that needs to be validated in the flow for mandatory fields, against API values and a value to which it needs to be validated, instead of it being in 3 different variables, it can go as a single JSON configuration.
  
``` json
{
    "Field":"SSN",
    "Settings":{
        "API":"https://dummyvalue.com/api",
        "Required":true,
        "Editable":false
    }
}
```

#### Data Source

Dats source can now be configured with only two connectors

* SharePoint

* SAP ERP - preview mode

The available sources are

|---|---|
| SharePoint Site | URL of the site ( not GUID of the site) |
| SharePoint List | GUID of the list and can only be configured if the data source is configured as a list |
| SAP ERP | Need to define the parameters that can be connected to the ERP system. |

Note: SharePoint List chosen would be a GUID, not the title or URL of the list.


| ![DatasourceSharePoint ]({{'/assets/posts/2023-01-12-understanding-environment-variables-in-solutions/DataSource.png' | prepend: site.baseurl}}) | ![DatasourceSharePoint ]({{'/assets/posts/2023-01-12-understanding-environment-variables-in-solutions/DataSourceSP.png' | prepend: site.baseurl}}) |
![DataSourcePassword ]({{'/assets/posts/2023-01-12-understanding-environment-variables-in-solutions/DataSourcePassword.png' | prepend: site.baseurl}})|

#### Secret

This helps to choose keys from the vault store, currently, only the azure key vault can be specified. The azure key vaults need a configuration that will be out of scope for this article and will update soon with a link for it.

