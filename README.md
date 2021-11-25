# UFOs

## Overview of the Analysis:
Dana is a Data Journalist, and she has accepted an assignment to write an article about her hometown of McMinnville, OR. The town is known for UFO sightings. So this is the topic that she has chosen as the focus of her article. She is starting the project with just a JavaScript file containing information relating to UFO sightings though out the world. For this assignment she wants to create a “really cool, interactive dashboard”. The site will consist of the article, a table containing the UFO data and filters to allow the users to filter the data table to their area of interest. 

## Results: 
A site was created that contains the following elements: 
-	Site title
-	Article title
-	Article
-	Table of UFO data 
-	Five options to filter the data (Date, City, State, Country, Shape)

![image](https://user-images.githubusercontent.com/88912539/143364874-64089756-251d-49c9-8f6e-a7fba8683d25.png)

During the initial load of the site, all the data from the UFO sightings data table is displayed. The filters may be applied with multiple criteria or one at a time. 
The below example is filtering only on the day. Notice that the date is added to the filter. When the user presses the ‘Enter’ key on the keyboard the data is filtered based on the date selected. 

![image](https://user-images.githubusercontent.com/88912539/143364994-bdd4ae9e-93fe-4381-be61-c41af9d1e543.png)

In addition to the date, a selection for a specific date can also be entered. Notice that there is a placeholder in the field that indicates that the filter will accept a two-character state abbreviation. If ‘nj’ is added to the field, the data table will be filtered by the date entered as well as for the state of ‘nj’ 

![image](https://user-images.githubusercontent.com/88912539/143365104-7e82c015-9678-47db-9f42-09afbcd67220.png)

While the site is attractive and provides the ability to filter through a significant Following an initial search, the filters may be ‘cleared’ in two different ways. 	
1.	Remove the criteria from the filter field. As each criteria is removed, the data table will repopulate with the data that was previously filtered
2.	Use the ‘refresh’ icon at the top of the page to refresh all the data. This will remove the filters and load all the available data from the data table. 

## Summary:
While the site is attractive and provides the ability to filter through a significant amount of data and only return the data of interest to the user, there is no ability to search by a date range or multiple options. The filters will only provide exactly what was entered. For example: if the user wanted to search base on a 5 day range they would have to conduct 5 different searches and the data would not be present within the same table. This is a significant drawback in the design of the site. 

For future development, there are two main areas for development. First, provide the ability to enter multiple criteria into the filter fields. This would allow to filter based on a  range of dates instead of a single date and also make multiple selections for the other filters such as multiple states or shapes. Second, provide drop-down lists based on the unique values within the data table. Allow the user to pick the filter values based on a list instead of typing into a text field. This will be useful to eliminate typographical errors as well as provide guidance for the user relating to which options are available. For example, if the user does not know the options available for ‘shape’ the drop down list would provide ‘circle’, ‘formation’, ‘fireball’, ‘disc’ etc. 
