// N.B. - YAML
// need logger package as well

/*
raktim@controller:~$ curl https://random-data-api.com/api/business_credit_card/random_card | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   178    0   178    0     0    177      0 --:--:--  0:00:01 --:--:--   177
{
  "id": 4132,
  "uid": "eb36066b-68d0-4597-96d2-76ed94e5bc0d",
  "credit_card_number": "1228-1221-1221-1431",
  "credit_card_expiry_date": "2024-01-24",
  "credit_card_type": "forbrugsforeningen"
}
*/

const CREDIT_STRUCT = {
  "id": 0,
  "uid": "abcd1234-ab12-cd34-ef56-abcdef123456",
  "credit_card_number": "0000-0000-0000-0000",
  "credit_card_expiry_date": "2000-01-01",
  "credit_card_type": "samplecard"
}

/*
CCD = Credit Card Details
place holder for the data
need to use database
*/
let CCARD_DET_CACHE = {
  1001 : {
    "id": 1001,
    "uid": "4f490966-2b7a-4a92-aad6-02cfa8bf77e4",
    "credit_card_number": "1234-2121-1221-1211",
    "credit_card_expiry_date": "2024-01-24",
    "credit_card_type": "switch"
  },
  1002 : {
    "id": 1002,
    "uid": "644f99ea-5497-4d3f-9123-9fa125538b3d",
    "credit_card_number": "1228-1221-1221-1431",
    "credit_card_expiry_date": "2025-01-23",
    "credit_card_type": "dankort"
  },
  1003 : {
    "id": 1003,
    "uid": "9714e336-4655-4731-a255-f5a34f723191",
    "credit_card_number": "1211-1221-1234-2201",
    "credit_card_expiry_date": "2025-01-23",
    "credit_card_type": "visa"
  },
  1004 : {
    "id": 1004,
    "uid": "c20271c9-d31b-4ca5-9efc-083e2e0c7444",
    "credit_card_number": "1211-1221-1234-2201",
    "credit_card_expiry_date": "2026-01-23",
    "credit_card_type": "discover"
  },
};

let CURRENTID = 1004 // need to be dynamic
const API_PORT = 5000;

module.exports ={
  CCARD_DET_CACHE,CURRENTID,API_PORT,CREDIT_STRUCT
}
