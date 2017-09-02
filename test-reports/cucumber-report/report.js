$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("hotel_management_platform.feature");
formatter.feature({
  "line": 1,
  "name": "User should be able to manage hotel entries",
  "description": "\r\nAs a user\r\nI would be able to access hotel management platform application\r\nSo that I can add multiple entries and delete entries",
  "id": "user-should-be-able-to-manage-hotel-entries",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "User should be able to create entry",
  "description": "",
  "id": "user-should-be-able-to-manage-hotel-entries;user-should-be-able-to-create-entry",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@SingleEntry"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user enters \"\u003chotel name\u003e\", \"\u003caddress\u003e\", \"\u003cowner\u003e\", \"\u003cphone number\u003e\" and \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "clicks create button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should see \"\u003chotel details\u003e\" entry created on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "user-should-be-able-to-manage-hotel-entries;user-should-be-able-to-create-entry;",
  "rows": [
    {
      "cells": [
        "hotel name",
        "address",
        "owner",
        "phone number",
        "email",
        "hotel details"
      ],
      "line": 17,
      "id": "user-should-be-able-to-manage-hotel-entries;user-should-be-able-to-create-entry;;1"
    },
    {
      "cells": [
        "Holiday Inn Express",
        "Kirkstall Road, Leeds LS3 1LY",
        "John Lee",
        "0871 902 1616",
        "holiday@Innexpress.com",
        "Holiday Inn Express"
      ],
      "line": 18,
      "id": "user-should-be-able-to-manage-hotel-entries;user-should-be-able-to-create-entry;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User login into home page with \"admin\" and \"password\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    },
    {
      "val": "password",
      "offset": 44
    }
  ],
  "location": "HotelEntries.user_login_into_home_page_with_and(String,String)"
});
formatter.result({
  "duration": 11047961799,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should be able to create entry",
  "description": "",
  "id": "user-should-be-able-to-manage-hotel-entries;user-should-be-able-to-create-entry;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@SingleEntry"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user enters \"Holiday Inn Express\", \"Kirkstall Road, Leeds LS3 1LY\", \"John Lee\", \"0871 902 1616\" and \"holiday@Innexpress.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "clicks create button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should see \"Holiday Inn Express\" entry created on home page",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Holiday Inn Express",
      "offset": 13
    },
    {
      "val": "Kirkstall Road, Leeds LS3 1LY",
      "offset": 36
    },
    {
      "val": "John Lee",
      "offset": 69
    },
    {
      "val": "0871 902 1616",
      "offset": 81
    },
    {
      "val": "holiday@Innexpress.com",
      "offset": 101
    }
  ],
  "location": "HotelEntries.user_enters_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 879301775,
  "status": "passed"
});
formatter.match({
  "location": "HotelEntries.clicks_create_button()"
});
formatter.result({
  "duration": 317715886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Holiday Inn Express",
      "offset": 17
    }
  ],
  "location": "HotelEntries.user_should_see_entry_created_on_home_page(String)"
});
formatter.result({
  "duration": 34328668,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User login into home page with \"admin\" and \"password\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    },
    {
      "val": "password",
      "offset": 44
    }
  ],
  "location": "HotelEntries.user_login_into_home_page_with_and(String,String)"
});
formatter.result({
  "duration": 10296550662,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should be able to delete entry",
  "description": "",
  "id": "user-should-be-able-to-manage-hotel-entries;user-should-be-able-to-delete-entry",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@DeleteEntry"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "user deletes hotel \"Holiday Inn Express\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "\"Holiday Inn Express\" hotel entry should remove from home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Holiday Inn Express",
      "offset": 20
    }
  ],
  "location": "HotelEntries.user_deletes_hotel(String)"
});
formatter.result({
  "duration": 525683941,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Holiday Inn Express",
      "offset": 1
    }
  ],
  "location": "HotelEntries.hotel_entry_should_remove_from_home_page(String)"
});
formatter.result({
  "duration": 99173772,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "User should be able to create entry",
  "description": "",
  "id": "user-should-be-able-to-manage-hotel-entries;user-should-be-able-to-create-entry",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@MultipleEntry"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user enters \"\u003chotel name\u003e\", \"\u003caddress\u003e\", \"\u003cowner\u003e\", \"\u003cphone number\u003e\" and \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "clicks create button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user should see \"\u003chotel details\u003e\" entry created on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "user-should-be-able-to-manage-hotel-entries;user-should-be-able-to-create-entry;",
  "rows": [
    {
      "cells": [
        "hotel name",
        "address",
        "owner",
        "phone number",
        "email",
        "hotel details"
      ],
      "line": 33,
      "id": "user-should-be-able-to-manage-hotel-entries;user-should-be-able-to-create-entry;;1"
    },
    {
      "cells": [
        "Holiday Inn Express",
        "Kirkstall Road, Leeds LS3 1LY",
        "John Lee",
        "0256 902 1789",
        "holiday@Innexpress.com",
        "Holiday Inn Express"
      ],
      "line": 34,
      "id": "user-should-be-able-to-manage-hotel-entries;user-should-be-able-to-create-entry;;2"
    },
    {
      "cells": [
        "Premier Inn",
        "Hunslet Road, Leeds LS23 1ER",
        "Peter",
        "0871 142 1616",
        "premier@Inn.com",
        "Premier Inn"
      ],
      "line": 35,
      "id": "user-should-be-able-to-manage-hotel-entries;user-should-be-able-to-create-entry;;3"
    },
    {
      "cells": [
        "Queens Hotel",
        "Manor Road, Leeds LS10 1SY",
        "Philip",
        "0235 902 4586",
        "queens@Hotel.com",
        "Queens Hotel"
      ],
      "line": 36,
      "id": "user-should-be-able-to-manage-hotel-entries;user-should-be-able-to-create-entry;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User login into home page with \"admin\" and \"password\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    },
    {
      "val": "password",
      "offset": 44
    }
  ],
  "location": "HotelEntries.user_login_into_home_page_with_and(String,String)"
});
formatter.result({
  "duration": 9906473709,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User should be able to create entry",
  "description": "",
  "id": "user-should-be-able-to-manage-hotel-entries;user-should-be-able-to-create-entry;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@MultipleEntry"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user enters \"Holiday Inn Express\", \"Kirkstall Road, Leeds LS3 1LY\", \"John Lee\", \"0256 902 1789\" and \"holiday@Innexpress.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "clicks create button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user should see \"Holiday Inn Express\" entry created on home page",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Holiday Inn Express",
      "offset": 13
    },
    {
      "val": "Kirkstall Road, Leeds LS3 1LY",
      "offset": 36
    },
    {
      "val": "John Lee",
      "offset": 69
    },
    {
      "val": "0256 902 1789",
      "offset": 81
    },
    {
      "val": "holiday@Innexpress.com",
      "offset": 101
    }
  ],
  "location": "HotelEntries.user_enters_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 665205799,
  "status": "passed"
});
formatter.match({
  "location": "HotelEntries.clicks_create_button()"
});
formatter.result({
  "duration": 326788023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Holiday Inn Express",
      "offset": 17
    }
  ],
  "location": "HotelEntries.user_should_see_entry_created_on_home_page(String)"
});
formatter.result({
  "duration": 15332507,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User login into home page with \"admin\" and \"password\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    },
    {
      "val": "password",
      "offset": 44
    }
  ],
  "location": "HotelEntries.user_login_into_home_page_with_and(String,String)"
});
formatter.result({
  "duration": 9904604249,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "User should be able to create entry",
  "description": "",
  "id": "user-should-be-able-to-manage-hotel-entries;user-should-be-able-to-create-entry;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@MultipleEntry"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user enters \"Premier Inn\", \"Hunslet Road, Leeds LS23 1ER\", \"Peter\", \"0871 142 1616\" and \"premier@Inn.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "clicks create button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user should see \"Premier Inn\" entry created on home page",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Premier Inn",
      "offset": 13
    },
    {
      "val": "Hunslet Road, Leeds LS23 1ER",
      "offset": 28
    },
    {
      "val": "Peter",
      "offset": 60
    },
    {
      "val": "0871 142 1616",
      "offset": 69
    },
    {
      "val": "premier@Inn.com",
      "offset": 89
    }
  ],
  "location": "HotelEntries.user_enters_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 620228294,
  "status": "passed"
});
formatter.match({
  "location": "HotelEntries.clicks_create_button()"
});
formatter.result({
  "duration": 289945236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Premier Inn",
      "offset": 17
    }
  ],
  "location": "HotelEntries.user_should_see_entry_created_on_home_page(String)"
});
formatter.result({
  "duration": 22796175,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User login into home page with \"admin\" and \"password\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    },
    {
      "val": "password",
      "offset": 44
    }
  ],
  "location": "HotelEntries.user_login_into_home_page_with_and(String,String)"
});
formatter.result({
  "duration": 10231287679,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "User should be able to create entry",
  "description": "",
  "id": "user-should-be-able-to-manage-hotel-entries;user-should-be-able-to-create-entry;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@MultipleEntry"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user enters \"Queens Hotel\", \"Manor Road, Leeds LS10 1SY\", \"Philip\", \"0235 902 4586\" and \"queens@Hotel.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "clicks create button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user should see \"Queens Hotel\" entry created on home page",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Queens Hotel",
      "offset": 13
    },
    {
      "val": "Manor Road, Leeds LS10 1SY",
      "offset": 29
    },
    {
      "val": "Philip",
      "offset": 59
    },
    {
      "val": "0235 902 4586",
      "offset": 69
    },
    {
      "val": "queens@Hotel.com",
      "offset": 89
    }
  ],
  "location": "HotelEntries.user_enters_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 572768438,
  "status": "passed"
});
formatter.match({
  "location": "HotelEntries.clicks_create_button()"
});
formatter.result({
  "duration": 379419808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Queens Hotel",
      "offset": 17
    }
  ],
  "location": "HotelEntries.user_should_see_entry_created_on_home_page(String)"
});
formatter.result({
  "duration": 15042191,
  "status": "passed"
});
});