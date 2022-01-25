APIPORT=8443

curl -k https://localhost:$APIPORT/api/list | jq

curl -k -X DELETE https://localhost:$APIPORT/api/deregister/1003

curl -k https://localhost:$APIPORT/api/list | jq

curl -k -X 'POST' \
https://localhost:$APIPORT/api/register \
-H 'accept: application/json' \
-H 'Content-Type: application/json' \
-d '{
  "ccd": {
    "credit_card_number": "1211-1221-1234-2201",
    "credit_card_expiry_date": "2025-01-23",
    "credit_card_type": "visa"
  }
}'

curl -k https://localhost:$APIPORT/api/list | jq

curl -k -X 'PUT' \
https://localhost:$APIPORT/api/update/1005 \
-H 'accept: application/json' \
-H 'Content-Type: application/json' \
-d '{
  "ccd": {
    "credit_card_number": "1211-1221-1234-2201",
    "credit_card_expiry_date": "2025-06-15",
    "credit_card_type": "visa"
  }
}'

curl -k https://localhost:$APIPORT/api/list | jq
