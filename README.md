# capstone2
Build a website that helps a user find things to do to enjoy the great outdoors

1. Homepage
    - Highlight simple organization
    - Contain links to:
        - National Parks search page
        - Mountains information page

2. National Parks Search Page
    - Allows user to searcg for park
    - Use data from [nationalParks.js]
        - Two ways to search for national park
            - Location 
                - Allows users to select:
                    - State/territory
                        - Dropdown
                        - Data [locationData.js]
                        -park matches location by comparing to the park's "State" property.
            - Park Type
                - Select Park Type 
                    - Dropdown box
                - Values provided in [parkTypeData.js]
                    - Park matches the description 
                        - checking parks's "LocationName" property contains the description
    - Stretch Goals:
        - Provide a "View All National Parks" option
        - "Visit" Property contains URL to a page.
            - Display the hyperlink along with park details
            - Open on different tab
    - [locationData.js]
    - [parkTypeDate.js]
    - [nationalParkData.js]
    - *.toLowerCase() and .toUpperCase()*

3. Mountains Information Page
    - Allows user to explore the details of 48 different mountatins
    - Use data from [mountains.js]
    - Provide Dropdown list of 48 mountains
        - Defined as array in [mountainData.js]
    - Display:
        - Mountain name
        - Description
        - Elevation
        - Other
    - NOTE -
        - This page will not allow users to search mountains using any type of filter
    - Stretch Goals:
        - Display image of mountain along with mountain information
            - Mountain object contains name of image file
        - Display the sunrise and sunset time "today" for any mountain
            - "fetch" using Javascript Fetch API
                - Refer to Capstone 2 documentation workbook
                