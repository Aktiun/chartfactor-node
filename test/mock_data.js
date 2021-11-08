module.exports.elasticDataSources = [
    {
        "id": "npmdepgraph-nodes",
        "name": "npmdepgraph-nodes",
        "type": "DATASET",
        "objectFields": [
            {
                "name": "color",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "color",
                "originalType": "keyword",
                "label": "Color",
                "keyword": true
            },
            {
                "name": "id",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "id",
                "originalType": "keyword",
                "label": "Id",
                "keyword": true
            },
            {
                "name": "label",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "label",
                "originalType": "keyword",
                "label": "Label",
                "keyword": true
            },
            {
                "name": "size",
                "type": "NUMBER",
                "esType": "transactions",
                "originName": "size",
                "originalType": "double",
                "label": "Size",
                "func": "SUM"
            },
            {
                "name": "x",
                "type": "NUMBER",
                "esType": "transactions",
                "originName": "x",
                "originalType": "double",
                "label": "X",
                "func": "SUM"
            },
            {
                "name": "y",
                "type": "NUMBER",
                "esType": "transactions",
                "originName": "y",
                "originalType": "double",
                "label": "Y",
                "func": "SUM"
            }
        ]
    },
    {
        "id": "logstash-2015.05.19",
        "name": "logstash-2015.05.19",
        "type": "DATASET",
        "objectFields": [
            {
                "name": "@message.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "@message",
                "label": "@message"
            },
            {
                "name": "@tags.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "@tags",
                "label": "@tags"
            },
            {
                "name": "@timestamp",
                "type": "TIME",
                "esType": "log",
                "originName": "@timestamp",
                "originalType": "date",
                "label": "@timestamp",
                "timestampGranularity": "YEAR"
            },
            {
                "name": "@version.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "@version",
                "label": "@version"
            },
            {
                "name": "agent.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "agent",
                "label": "Agent"
            },
            {
                "name": "bytes",
                "type": "INTEGER",
                "esType": "log",
                "originName": "bytes",
                "originalType": "long",
                "label": "Bytes",
                "func": "SUM"
            },
            {
                "name": "clientip.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "clientip",
                "label": "Clientip"
            },
            {
                "name": "extension.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "extension",
                "label": "Extension"
            },
            {
                "name": "headings.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "headings",
                "label": "Headings"
            },
            {
                "name": "host.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "host",
                "label": "Host"
            },
            {
                "name": "hour.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "hour",
                "label": "Hour"
            },
            {
                "name": "ip.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "ip",
                "label": "Ip"
            },
            {
                "name": "links.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "links",
                "label": "Links"
            },
            {
                "name": "memory",
                "type": "INTEGER",
                "esType": "log",
                "originName": "memory",
                "originalType": "long",
                "label": "Memory",
                "func": "SUM"
            },
            {
                "name": "phpmemory",
                "type": "INTEGER",
                "esType": "log",
                "originName": "phpmemory",
                "originalType": "long",
                "label": "Phpmemory",
                "func": "SUM"
            },
            {
                "name": "referer.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "referer",
                "label": "Referer"
            },
            {
                "name": "request.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "request",
                "label": "Request"
            },
            {
                "name": "response.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "response",
                "label": "Response"
            },
            {
                "name": "spaces.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "spaces",
                "label": "Spaces"
            },
            {
                "name": "url.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "url",
                "label": "Url"
            },
            {
                "name": "utc_time",
                "type": "TIME",
                "esType": "log",
                "originName": "utc_time",
                "originalType": "date",
                "label": "Utc_time",
                "timestampGranularity": "YEAR"
            },
            {
                "name": "xss.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "xss",
                "label": "Xss"
            }
        ]
    },
    {
        "id": "family",
        "name": "family",
        "type": "DATASET",
        "objectFields": [
            {
                "name": "node",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "node",
                "originalType": "keyword",
                "label": "Node",
                "keyword": true
            },
            {
                "name": "parent",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "parent",
                "originalType": "keyword",
                "label": "Parent",
                "keyword": true
            },
            {
                "name": "value",
                "type": "INTEGER",
                "esType": "transactions",
                "originName": "value",
                "originalType": "integer",
                "label": "Value",
                "func": "SUM"
            }
        ]
    },
    {
        "id": "life_expectancy_region",
        "name": "life_expectancy_region",
        "type": "DATASET",
        "objectFields": [
            {
                "name": "country",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "country",
                "originalType": "keyword",
                "label": "Country",
                "keyword": true
            },
            {
                "name": "life_expectancy",
                "type": "NUMBER",
                "esType": "transactions",
                "originName": "life_expectancy",
                "originalType": "double",
                "label": "Life_expectancy",
                "func": "SUM"
            },
            {
                "name": "region",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "region",
                "originalType": "keyword",
                "label": "Region",
                "keyword": true
            },
            {
                "name": "year",
                "type": "TIME",
                "esType": "transactions",
                "originName": "year",
                "originalType": "date",
                "label": "Year",
                "format": "MM/dd/yyyy HH:mm:ss",
                "timestampGranularity": "YEAR"
            }
        ]
    },
    {
        "id": "london_fire_brigade",
        "name": "london_fire_brigade",
        "type": "DATASET",
        "objectFields": [
            {
                "name": "address_qualifier",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "address_qualifier",
                "originalType": "keyword",
                "label": "Address_qualifier",
                "keyword": true
            },
            {
                "name": "borough_code",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "borough_code",
                "originalType": "keyword",
                "label": "Borough_code",
                "keyword": true
            },
            {
                "name": "borough_name",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "borough_name",
                "originalType": "keyword",
                "label": "Borough_name",
                "keyword": true
            },
            {
                "name": "cal_year",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "cal_year",
                "originalType": "keyword",
                "label": "Cal_year",
                "keyword": true
            },
            {
                "name": "date_of_call",
                "type": "TIME",
                "esType": "transactions",
                "originName": "date_of_call",
                "originalType": "date",
                "label": "Date_of_call",
                "format": "MM/dd/yyyy",
                "timestampGranularity": "YEAR"
            },
            {
                "name": "easting_m",
                "type": "INTEGER",
                "esType": "transactions",
                "originName": "easting_m",
                "originalType": "integer",
                "label": "Easting_m",
                "func": "SUM"
            },
            {
                "name": "easting_rounded",
                "type": "INTEGER",
                "esType": "transactions",
                "originName": "easting_rounded",
                "originalType": "integer",
                "label": "Easting_rounded",
                "func": "SUM"
            },
            {
                "name": "first_pump_arriving_attendance_time",
                "type": "INTEGER",
                "esType": "transactions",
                "originName": "first_pump_arriving_attendance_time",
                "originalType": "integer",
                "label": "First_pump_arriving_attendance_time",
                "func": "SUM"
            },
            {
                "name": "first_pump_arriving_deployed_from_station",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "first_pump_arriving_deployed_from_station",
                "originalType": "keyword",
                "label": "First_pump_arriving_deployed_from_station",
                "keyword": true
            },
            {
                "name": "frs",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "frs",
                "originalType": "keyword",
                "label": "Frs",
                "keyword": true
            },
            {
                "name": "hour_of_call",
                "type": "INTEGER",
                "esType": "transactions",
                "originName": "hour_of_call",
                "originalType": "integer",
                "label": "Hour_of_call",
                "func": "SUM"
            },
            {
                "name": "incident_group",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "incident_group",
                "originalType": "keyword",
                "label": "Incident_group",
                "keyword": true
            },
            {
                "name": "incident_number",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "incident_number",
                "originalType": "keyword",
                "label": "Incident_number",
                "keyword": true
            },
            {
                "name": "incident_station_ground",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "incident_station_ground",
                "originalType": "keyword",
                "label": "Incident_station_ground",
                "keyword": true
            },
            {
                "name": "northing_m",
                "type": "INTEGER",
                "esType": "transactions",
                "originName": "northing_m",
                "originalType": "integer",
                "label": "Northing_m",
                "func": "SUM"
            },
            {
                "name": "northing_rounded",
                "type": "INTEGER",
                "esType": "transactions",
                "originName": "northing_rounded",
                "originalType": "integer",
                "label": "Northing_rounded",
                "func": "SUM"
            },
            {
                "name": "num_pumps_attending",
                "type": "INTEGER",
                "esType": "transactions",
                "originName": "num_pumps_attending",
                "originalType": "integer",
                "label": "Num_pumps_attending",
                "func": "SUM"
            },
            {
                "name": "num_stations_with_pumps_attending",
                "type": "INTEGER",
                "esType": "transactions",
                "originName": "num_stations_with_pumps_attending",
                "originalType": "integer",
                "label": "Num_stations_with_pumps_attending",
                "func": "SUM"
            },
            {
                "name": "postcode_district",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "postcode_district",
                "originalType": "keyword",
                "label": "Postcode_district",
                "keyword": true
            },
            {
                "name": "postcode_full",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "postcode_full",
                "originalType": "keyword",
                "label": "Postcode_full",
                "keyword": true
            },
            {
                "name": "proper_case",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "proper_case",
                "originalType": "keyword",
                "label": "Proper_case",
                "keyword": true
            },
            {
                "name": "property_category",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "property_category",
                "originalType": "keyword",
                "label": "Property_category",
                "keyword": true
            },
            {
                "name": "property_type",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "property_type",
                "originalType": "keyword",
                "label": "Property_type",
                "keyword": true
            },
            {
                "name": "second_pump_arriving_attendance_time",
                "type": "INTEGER",
                "esType": "transactions",
                "originName": "second_pump_arriving_attendance_time",
                "originalType": "integer",
                "label": "Second_pump_arriving_attendance_time",
                "func": "SUM"
            },
            {
                "name": "second_pump_arriving_deployed_from_station",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "second_pump_arriving_deployed_from_station",
                "originalType": "keyword",
                "label": "Second_pump_arriving_deployed_from_station",
                "keyword": true
            },
            {
                "name": "special_service_type",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "special_service_type",
                "originalType": "keyword",
                "label": "Special_service_type",
                "keyword": true
            },
            {
                "name": "stop_code_description",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "stop_code_description",
                "originalType": "keyword",
                "label": "Stop_code_description",
                "keyword": true
            },
            {
                "name": "time_of_call",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "time_of_call",
                "originalType": "keyword",
                "label": "Time_of_call",
                "keyword": true
            },
            {
                "name": "timestamp_of_call",
                "type": "TIME",
                "esType": "transactions",
                "originName": "timestamp_of_call",
                "originalType": "date",
                "label": "Timestamp_of_call",
                "format": "MM/dd/yyyy HH:mm:ss",
                "timestampGranularity": "YEAR"
            },
            {
                "name": "ward_code",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "ward_code",
                "originalType": "keyword",
                "label": "Ward_code",
                "keyword": true
            },
            {
                "name": "ward_name",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "ward_name",
                "originalType": "keyword",
                "label": "Ward_name",
                "keyword": true
            },
            {
                "name": "ward_name_new",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "ward_name_new",
                "originalType": "keyword",
                "label": "Ward_name_new",
                "keyword": true
            }
        ]
    },
    {
        "id": "global_stats",
        "name": "global_stats",
        "type": "DATASET",
        "objectFields": [
            {
                "name": "country",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "country",
                "originalType": "keyword",
                "label": "Country",
                "keyword": true
            },
            {
                "name": "gdp",
                "type": "NUMBER",
                "esType": "transactions",
                "originName": "gdp",
                "originalType": "double",
                "label": "Gdp",
                "func": "SUM"
            },
            {
                "name": "life_expectancy",
                "type": "NUMBER",
                "esType": "transactions",
                "originName": "life_expectancy",
                "originalType": "double",
                "label": "Life_expectancy",
                "func": "SUM"
            },
            {
                "name": "population",
                "type": "INTEGER",
                "esType": "transactions",
                "originName": "population",
                "originalType": "integer",
                "label": "Population",
                "func": "SUM"
            },
            {
                "name": "region",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "region",
                "originalType": "keyword",
                "label": "Region",
                "keyword": true
            },
            {
                "name": "year",
                "type": "TIME",
                "esType": "transactions",
                "originName": "year",
                "originalType": "date",
                "label": "Year",
                "format": "MM/dd/yyyy HH:mm:ss",
                "timestampGranularity": "YEAR"
            }
        ]
    },
    {
        "id": "ticket_sales",
        "name": "ticket_sales",
        "type": "DATASET",
        "objectFields": [
            {
                "name": "cat_id",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "cat_id",
                "originalType": "keyword",
                "label": "Cat_id",
                "keyword": true
            },
            {
                "name": "catdesc.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "catdesc",
                "label": "Catdesc"
            },
            {
                "name": "catgroup.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "catgroup",
                "label": "Catgroup"
            },
            {
                "name": "catname.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "catname",
                "label": "Catname"
            },
            {
                "name": "city.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "city",
                "label": "City"
            },
            {
                "name": "commission",
                "type": "NUMBER",
                "esType": "transactions",
                "originName": "commission",
                "originalType": "double",
                "label": "Commission",
                "func": "SUM"
            },
            {
                "name": "email.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "email",
                "label": "Email"
            },
            {
                "name": "eventname.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "eventname",
                "label": "Eventname"
            },
            {
                "name": "firstname.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "firstname",
                "label": "Firstname"
            },
            {
                "name": "lastname.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "lastname",
                "label": "Lastname"
            },
            {
                "name": "likebroadway",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "likebroadway",
                "originalType": "keyword",
                "label": "Likebroadway",
                "keyword": true
            },
            {
                "name": "likeclassical",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "likeclassical",
                "originalType": "keyword",
                "label": "Likeclassical",
                "keyword": true
            },
            {
                "name": "likeconcerts",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "likeconcerts",
                "originalType": "keyword",
                "label": "Likeconcerts",
                "keyword": true
            },
            {
                "name": "likejazz",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "likejazz",
                "originalType": "keyword",
                "label": "Likejazz",
                "keyword": true
            },
            {
                "name": "likemusicals",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "likemusicals",
                "originalType": "keyword",
                "label": "Likemusicals",
                "keyword": true
            },
            {
                "name": "likeopera",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "likeopera",
                "originalType": "keyword",
                "label": "Likeopera",
                "keyword": true
            },
            {
                "name": "likerock",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "likerock",
                "originalType": "keyword",
                "label": "Likerock",
                "keyword": true
            },
            {
                "name": "likesports",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "likesports",
                "originalType": "keyword",
                "label": "Likesports",
                "keyword": true
            },
            {
                "name": "liketheatre",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "liketheatre",
                "originalType": "keyword",
                "label": "Liketheatre",
                "keyword": true
            },
            {
                "name": "likevegas",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "likevegas",
                "originalType": "keyword",
                "label": "Likevegas",
                "keyword": true
            },
            {
                "name": "phone.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "phone",
                "label": "Phone"
            },
            {
                "name": "pricepaid",
                "type": "NUMBER",
                "esType": "transactions",
                "originName": "pricepaid",
                "originalType": "double",
                "label": "Pricepaid",
                "func": "SUM"
            },
            {
                "name": "qtysold",
                "type": "INTEGER",
                "esType": "transactions",
                "originName": "qtysold",
                "originalType": "integer",
                "label": "Qtysold",
                "func": "SUM"
            },
            {
                "name": "saletime",
                "type": "TIME",
                "esType": "transactions",
                "originName": "saletime",
                "originalType": "date",
                "label": "Saletime",
                "format": "yyyy-MM-dd HH:mm:ss",
                "timestampGranularity": "YEAR"
            },
            {
                "name": "saletime_min_7",
                "type": "TIME",
                "esType": "transactions",
                "originName": "saletime_min_7",
                "originalType": "date",
                "label": "Saletime_min_7",
                "format": "yyyy-MM-dd HH:mm:ssZ",
                "timestampGranularity": "YEAR"
            },
            {
                "name": "saletime_plus_8",
                "type": "TIME",
                "esType": "transactions",
                "originName": "saletime_plus_8",
                "originalType": "date",
                "label": "Saletime_plus_8",
                "format": "yyyy-MM-dd HH:mm:ssZ",
                "timestampGranularity": "YEAR"
            },
            {
                "name": "saletime_utc",
                "type": "TIME",
                "esType": "transactions",
                "originName": "saletime_utc",
                "originalType": "date",
                "label": "Saletime_utc",
                "format": "yyyy-MM-dd HH:mm:ssz",
                "timestampGranularity": "YEAR"
            },
            {
                "name": "starttime",
                "type": "TIME",
                "esType": "transactions",
                "originName": "starttime",
                "originalType": "date",
                "label": "Starttime",
                "format": "yyyy-MM-dd HH:mm:ss",
                "timestampGranularity": "YEAR"
            },
            {
                "name": "state",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "state",
                "originalType": "keyword",
                "label": "State",
                "keyword": true
            },
            {
                "name": "user_id",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "user_id",
                "originalType": "keyword",
                "label": "User_id",
                "keyword": true
            },
            {
                "name": "username.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "username",
                "label": "Username"
            },
            {
                "name": "venuecity.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "venuecity",
                "label": "Venuecity"
            },
            {
                "name": "venuename.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "venuename",
                "label": "Venuename"
            },
            {
                "name": "venueseats",
                "type": "INTEGER",
                "esType": "transactions",
                "originName": "venueseats",
                "originalType": "integer",
                "label": "Venueseats",
                "func": "SUM"
            },
            {
                "name": "venuestate",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "venuestate",
                "originalType": "keyword",
                "label": "Venuestate",
                "keyword": true
            }
        ]
    },
    {
        "id": "logstash-2015.05.20",
        "name": "logstash-2015.05.20",
        "type": "DATASET",
        "objectFields": [
            {
                "name": "@message.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "@message",
                "label": "@message"
            },
            {
                "name": "@tags.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "@tags",
                "label": "@tags"
            },
            {
                "name": "@timestamp",
                "type": "TIME",
                "esType": "log",
                "originName": "@timestamp",
                "originalType": "date",
                "label": "@timestamp",
                "timestampGranularity": "YEAR"
            },
            {
                "name": "@version.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "@version",
                "label": "@version"
            },
            {
                "name": "agent.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "agent",
                "label": "Agent"
            },
            {
                "name": "bytes",
                "type": "INTEGER",
                "esType": "log",
                "originName": "bytes",
                "originalType": "long",
                "label": "Bytes",
                "func": "SUM"
            },
            {
                "name": "clientip.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "clientip",
                "label": "Clientip"
            },
            {
                "name": "extension.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "extension",
                "label": "Extension"
            },
            {
                "name": "headings.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "headings",
                "label": "Headings"
            },
            {
                "name": "host.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "host",
                "label": "Host"
            },
            {
                "name": "hour.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "hour",
                "label": "Hour"
            },
            {
                "name": "ip.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "ip",
                "label": "Ip"
            },
            {
                "name": "links.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "links",
                "label": "Links"
            },
            {
                "name": "memory",
                "type": "INTEGER",
                "esType": "log",
                "originName": "memory",
                "originalType": "long",
                "label": "Memory",
                "func": "SUM"
            },
            {
                "name": "phpmemory",
                "type": "INTEGER",
                "esType": "log",
                "originName": "phpmemory",
                "originalType": "long",
                "label": "Phpmemory",
                "func": "SUM"
            },
            {
                "name": "referer.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "referer",
                "label": "Referer"
            },
            {
                "name": "request.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "request",
                "label": "Request"
            },
            {
                "name": "response.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "response",
                "label": "Response"
            },
            {
                "name": "spaces.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "spaces",
                "label": "Spaces"
            },
            {
                "name": "url.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "url",
                "label": "Url"
            },
            {
                "name": "utc_time",
                "type": "TIME",
                "esType": "log",
                "originName": "utc_time",
                "originalType": "date",
                "label": "Utc_time",
                "timestampGranularity": "YEAR"
            },
            {
                "name": "xss.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "xss",
                "label": "Xss"
            }
        ]
    },
    {
        "id": "coffee_lexicon",
        "name": "coffee_lexicon",
        "type": "DATASET",
        "objectFields": [
            {
                "name": "g1",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "g1",
                "originalType": "keyword",
                "label": "G1",
                "keyword": true
            },
            {
                "name": "g2",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "g2",
                "originalType": "keyword",
                "label": "G2",
                "keyword": true
            },
            {
                "name": "g3",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "g3",
                "originalType": "keyword",
                "label": "G3",
                "keyword": true
            },
            {
                "name": "value",
                "type": "INTEGER",
                "esType": "transactions",
                "originName": "value",
                "originalType": "integer",
                "label": "Value",
                "func": "SUM"
            }
        ]
    },
    {
        "id": "logstash-2015.05.18",
        "name": "logstash-2015.05.18",
        "type": "DATASET",
        "objectFields": [
            {
                "name": "@message.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "@message",
                "label": "@message"
            },
            {
                "name": "@tags.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "@tags",
                "label": "@tags"
            },
            {
                "name": "@timestamp",
                "type": "TIME",
                "esType": "log",
                "originName": "@timestamp",
                "originalType": "date",
                "label": "@timestamp",
                "timestampGranularity": "YEAR"
            },
            {
                "name": "@version.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "@version",
                "label": "@version"
            },
            {
                "name": "agent.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "agent",
                "label": "Agent"
            },
            {
                "name": "bytes",
                "type": "INTEGER",
                "esType": "log",
                "originName": "bytes",
                "originalType": "long",
                "label": "Bytes",
                "func": "SUM"
            },
            {
                "name": "clientip.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "clientip",
                "label": "Clientip"
            },
            {
                "name": "extension.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "extension",
                "label": "Extension"
            },
            {
                "name": "headings.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "headings",
                "label": "Headings"
            },
            {
                "name": "host.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "host",
                "label": "Host"
            },
            {
                "name": "hour.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "hour",
                "label": "Hour"
            },
            {
                "name": "ip.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "ip",
                "label": "Ip"
            },
            {
                "name": "links.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "links",
                "label": "Links"
            },
            {
                "name": "memory",
                "type": "INTEGER",
                "esType": "log",
                "originName": "memory",
                "originalType": "long",
                "label": "Memory",
                "func": "SUM"
            },
            {
                "name": "phpmemory",
                "type": "INTEGER",
                "esType": "log",
                "originName": "phpmemory",
                "originalType": "long",
                "label": "Phpmemory",
                "func": "SUM"
            },
            {
                "name": "referer.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "referer",
                "label": "Referer"
            },
            {
                "name": "request.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "request",
                "label": "Request"
            },
            {
                "name": "response.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "response",
                "label": "Response"
            },
            {
                "name": "spaces.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "spaces",
                "label": "Spaces"
            },
            {
                "name": "url.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "url",
                "label": "Url"
            },
            {
                "name": "utc_time",
                "type": "TIME",
                "esType": "log",
                "originName": "utc_time",
                "originalType": "date",
                "label": "Utc_time",
                "timestampGranularity": "YEAR"
            },
            {
                "name": "xss.keyword",
                "keyword": true,
                "type": "ATTRIBUTE",
                "esType": "log",
                "originName": "xss",
                "label": "Xss"
            }
        ]
    },
    {
        "id": "npmdepgraph-links",
        "name": "npmdepgraph-links",
        "type": "DATASET",
        "objectFields": [
            {
                "name": "size",
                "type": "INTEGER",
                "esType": "transactions",
                "originName": "size",
                "originalType": "integer",
                "label": "Size",
                "func": "SUM"
            },
            {
                "name": "source",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "source",
                "originalType": "keyword",
                "label": "Source",
                "keyword": true
            },
            {
                "name": "target",
                "type": "ATTRIBUTE",
                "esType": "transactions",
                "originName": "target",
                "originalType": "keyword",
                "label": "Target",
                "keyword": true
            }
        ]
    }
];